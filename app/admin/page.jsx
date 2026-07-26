"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const emptyProject = {
  num: "",
  category: "",
  title: "",
  description: "",
  stack: [{ name: "" }],
  image: "",
  imageMobile: "",
  live: "",
  github: "",
};

export default function AdminPage() {
  const [tab, setTab] = useState("projects");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyProject);
  const [uploading, setUploading] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: "", slug: "", excerpt: "", content: "", image: "", tags: "" });
  const [testForm, setTestForm] = useState({ name: "", role: "", company: "", content: "", rating: 5 });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  const fetchMessages = async () => {
    const res = await fetch("/api/contact");
    const data = await res.json();
    if (res.ok) setMessages(data.messages);
  };

  const fetchProjects = async () => {
    const res = await fetch("/api/projects");
    const data = await res.json();
    if (res.ok) setProjects(data.projects);
  };

  const fetchBlogPosts = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    if (res.ok) setBlogPosts(data.posts);
  };

  const fetchTestimonials = async () => {
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    if (res.ok) setTestimonials(data.testimonials);
  };

  useEffect(() => {
    if (authenticated) {
      fetchMessages();
      fetchProjects();
      fetchBlogPosts();
      fetchTestimonials();
    }
  }, [authenticated]);

  const handleUpload = async (file, field) => {
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (res.ok) {
      setForm((prev) => ({ ...prev, [field]: data.url }));
    }
    setUploading(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStackChange = (index, value) => {
    const newStack = [...form.stack];
    newStack[index] = { name: value };
    setForm((prev) => ({ ...prev, stack: newStack }));
  };

  const addStackItem = () => {
    setForm((prev) => ({ ...prev, stack: [...prev.stack, { name: "" }] }));
  };

  const removeStackItem = (index) => {
    const newStack = form.stack.filter((_, i) => i !== index);
    setForm((prev) => ({ ...prev, stack: newStack }));
  };

  const resetForm = () => {
    setForm(emptyProject);
    setEditing(null);
  };

  const editProject = (proj) => {
    setForm({ ...proj, stack: proj.stack.length ? proj.stack : [{ name: "" }] });
    setEditing(proj._id);
    setTab("projects");
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clean = {
      ...form,
      stack: form.stack.filter((s) => s.name.trim() !== ""),
    };

    const url = editing
      ? `/api/projects/${editing}`
      : "/api/projects";
    const method = editing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(clean),
    });

    if (res.ok) {
      resetForm();
      fetchProjects();
    }
  };

  const deleteProject = async (id) => {
    if (!confirm("Delete this project?")) return;
    await fetch(`/api/projects/${id}`, { method: "DELETE" });
    fetchProjects();
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...blogForm, tags: blogForm.tags.split(",").map((t) => t.trim()).filter(Boolean) };
    await fetch("/api/blog", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    setBlogForm({ title: "", slug: "", excerpt: "", content: "", image: "", tags: "" });
    fetchBlogPosts();
  };

  const deleteBlogPost = async (id) => {
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/blog/${id}`, { method: "DELETE" });
    fetchBlogPosts();
  };

  const handleTestSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/testimonials", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(testForm) });
    setTestForm({ name: "", role: "", company: "", content: "", rating: 5 });
    fetchTestimonials();
  };

  const deleteTestimonial = async (id) => {
    if (!confirm("Delete this testimonial?")) return;
    await fetch(`/api/testimonials/${id}`, { method: "DELETE" });
    fetchTestimonials();
  };

  if (!authenticated) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#1a1a1d] text-white">
        <form
          onSubmit={handleLogin}
          className="bg-[#27272c]/70 p-8 rounded-xl shadow-md w-[90%] max-w-md text-center"
        >
          <h1 className="text-2xl font-semibold mb-4 text-accent">Admin Login</h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-[#1f1f23] text-white outline-none border border-gray-700 focus:border-accent"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            className="mt-4 w-full bg-accent text-primary font-semibold p-3 rounded hover:opacity-90 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#1a1a1d] text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-accent">Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-700 pb-2">
          <button
            onClick={() => setTab("projects")}
            className={`pb-2 px-4 font-medium text-lg transition-all ${
              tab === "projects"
                ? "text-accent border-b-2 border-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            Manage Projects
          </button>
          <button
            onClick={() => { setTab("messages"); fetchMessages(); }}
            className={`pb-2 px-4 font-medium text-lg transition-all ${
              tab === "messages"
                ? "text-accent border-b-2 border-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            Messages ({messages.length})
          </button>
          <button
            onClick={() => { setTab("blog"); fetchBlogPosts(); }}
            className={`pb-2 px-4 font-medium text-lg transition-all ${
              tab === "blog"
                ? "text-accent border-b-2 border-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            Blog ({blogPosts.length})
          </button>
          <button
            onClick={() => { setTab("testimonials"); fetchTestimonials(); }}
            className={`pb-2 px-4 font-medium text-lg transition-all ${
              tab === "testimonials"
                ? "text-accent border-b-2 border-accent"
                : "text-white/60 hover:text-white"
            }`}
          >
            Testimonials ({testimonials.length})
          </button>
        </div>

        {/* Messages Tab */}
        {tab === "messages" && (
          <div className="bg-[#27272c]/40 p-4 rounded-lg overflow-x-auto">
            {messages.length === 0 ? (
              <p className="text-white/60">No messages found.</p>
            ) : (
              <table className="min-w-full border-collapse border border-gray-700">
                <thead>
                  <tr className="bg-[#27272c]/70 text-accent">
                    <th className="border border-gray-700 p-2">Name</th>
                    <th className="border border-gray-700 p-2">Email</th>
                    <th className="border border-gray-700 p-2">Phone</th>
                    <th className="border border-gray-700 p-2">Service</th>
                    <th className="border border-gray-700 p-2">Message</th>
                    <th className="border border-gray-700 p-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg) => (
                    <tr key={msg._id} className="hover:bg-[#2f2f35]">
                      <td className="border border-gray-700 p-2">{msg.firstname} {msg.lastname}</td>
                      <td className="border border-gray-700 p-2">{msg.email}</td>
                      <td className="border border-gray-700 p-2">{msg.phone}</td>
                      <td className="border border-gray-700 p-2">{msg.service}</td>
                      <td className="border border-gray-700 p-2 max-w-[250px] break-words">{msg.message}</td>
                      <td className="border border-gray-700 p-2 whitespace-nowrap">
                        {new Date(msg.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Blog Tab */}
        {tab === "blog" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form onSubmit={handleBlogSubmit} className="bg-[#27272c]/40 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Add Blog Post</h2>
              <div className="flex flex-col gap-3">
                <input placeholder="Title" value={blogForm.title} onChange={(e) => setBlogForm((p) => ({ ...p, title: e.target.value }))}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <input placeholder="Slug (e.g. my-first-post)" value={blogForm.slug} onChange={(e) => setBlogForm((p) => ({ ...p, slug: e.target.value }))}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <input placeholder="Excerpt (short description)" value={blogForm.excerpt} onChange={(e) => setBlogForm((p) => ({ ...p, excerpt: e.target.value }))}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <textarea placeholder="Content (full article)" value={blogForm.content} onChange={(e) => setBlogForm((p) => ({ ...p, content: e.target.value }))} rows={6}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <input placeholder="Tags (comma separated, e.g. react, nextjs)" value={blogForm.tags} onChange={(e) => setBlogForm((p) => ({ ...p, tags: e.target.value }))}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />
                <button type="submit" className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:opacity-90 self-start">Add Post</button>
              </div>
            </form>
            <div className="bg-[#27272c]/40 p-4 rounded-lg max-h-[500px] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">Posts ({blogPosts.length})</h2>
              {blogPosts.length === 0 ? <p className="text-white/60">No posts yet.</p> : blogPosts.map((post) => (
                <div key={post._id} className="flex items-center justify-between bg-[#1f1f23] p-3 rounded mb-2">
                  <div>
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-white/60">/{post.slug}</p>
                  </div>
                  <button onClick={() => deleteBlogPost(post._id)} className="text-red-500 hover:underline text-sm">Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {tab === "testimonials" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <form onSubmit={handleTestSubmit} className="bg-[#27272c]/40 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Add Testimonial</h2>
              <div className="flex flex-col gap-3">
                <input placeholder="Name" value={testForm.name} onChange={(e) => setTestForm((p) => ({ ...p, name: e.target.value }))}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <input placeholder="Role (e.g. CEO)" value={testForm.role} onChange={(e) => setTestForm((p) => ({ ...p, role: e.target.value }))}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />
                <input placeholder="Company" value={testForm.company} onChange={(e) => setTestForm((p) => ({ ...p, company: e.target.value }))}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />
                <textarea placeholder="Testimonial content" value={testForm.content} onChange={(e) => setTestForm((p) => ({ ...p, content: e.target.value }))} rows={3}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <div className="flex items-center gap-2">
                  <span className="text-white/60">Rating:</span>
                  <select value={testForm.rating} onChange={(e) => setTestForm((p) => ({ ...p, rating: Number(e.target.value) }))}
                    className="p-2 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent">
                    {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <button type="submit" className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:opacity-90 self-start">Add Testimonial</button>
              </div>
            </form>
            <div className="bg-[#27272c]/40 p-4 rounded-lg max-h-[500px] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">Testimonials ({testimonials.length})</h2>
              {testimonials.length === 0 ? <p className="text-white/60">No testimonials yet.</p> : testimonials.map((t) => (
                <div key={t._id} className="flex items-center justify-between bg-[#1f1f23] p-3 rounded mb-2">
                  <div>
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-white/60">&ldquo;{t.content.slice(0, 80)}&hellip;&rdquo;</p>
                  </div>
                  <button onClick={() => deleteTestimonial(t._id)} className="text-red-500 hover:underline text-sm">Delete</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {tab === "projects" && (
          <>
            {/* Project Form */}
            <div className="bg-[#27272c]/40 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">
                {editing ? "Edit Project" : "Add New Project"}
              </h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="num" placeholder="Number (01, 02...)" value={form.num} onChange={handleFormChange}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <input name="category" placeholder="Category (Full Stack, frontend...)" value={form.category} onChange={handleFormChange}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" required />
                <input name="title" placeholder="Title" value={form.title} onChange={handleFormChange}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent md:col-span-2" required />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleFormChange} rows={3}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent md:col-span-2" required />
                <input name="live" placeholder="Live URL" value={form.live} onChange={handleFormChange}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />
                <input name="github" placeholder="GitHub URL" value={form.github} onChange={handleFormChange}
                  className="p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />

                {/* Image Desktop */}
                <div>
                  <label className="text-sm text-white/60">Desktop Image</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Or paste URL" value={form.image} onChange={(e) => setForm((p) => ({ ...p, image: e.target.value }))}
                      className="flex-1 p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />
                    <label className="cursor-pointer bg-accent text-primary px-3 py-2 rounded font-semibold hover:opacity-90 self-start">
                      {uploading ? "..." : "Upload"}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(e.target.files[0], "image")} />
                    </label>
                  </div>
                  {form.image && (
                    <Image src={form.image} width={100} height={60} alt="" className="mt-2 rounded object-cover" unoptimized />
                  )}
                </div>

                {/* Image Mobile */}
                <div>
                  <label className="text-sm text-white/60">Mobile Image</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Or paste URL" value={form.imageMobile} onChange={(e) => setForm((p) => ({ ...p, imageMobile: e.target.value }))}
                      className="flex-1 p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />
                    <label className="cursor-pointer bg-accent text-primary px-3 py-2 rounded font-semibold hover:opacity-90 self-start">
                      {uploading ? "..." : "Upload"}
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(e.target.files[0], "imageMobile")} />
                    </label>
                  </div>
                  {form.imageMobile && (
                    <Image src={form.imageMobile} width={100} height={60} alt="" className="mt-2 rounded object-cover" unoptimized />
                  )}
                </div>

                {/* Stack */}
                <div className="md:col-span-2">
                  <label className="text-sm text-white/60 block mb-1">Tech Stack</label>
                  {form.stack.map((item, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <input value={item.name} onChange={(e) => handleStackChange(i, e.target.value)}
                        placeholder="e.g. Next.js"
                        className="flex-1 p-3 rounded bg-[#1f1f23] outline-none border border-gray-700 focus:border-accent" />
                      {form.stack.length > 1 && (
                        <button type="button" onClick={() => removeStackItem(i)} className="text-red-500 px-2">&times;</button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={addStackItem} className="text-accent text-sm">+ Add technology</button>
                </div>

                <div className="md:col-span-2 flex gap-4">
                  <button type="submit" className="bg-accent text-primary font-semibold px-6 py-3 rounded hover:opacity-90 transition-all">
                    {editing ? "Update Project" : "Add Project"}
                  </button>
                  {editing && (
                    <button type="button" onClick={resetForm} className="text-white/60 hover:text-white transition-all">
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Projects List */}
            <div className="bg-[#27272c]/40 p-4 rounded-lg overflow-x-auto">
              {projects.length === 0 ? (
                <p className="text-white/60">No projects yet. Add one above!</p>
              ) : (
                <table className="min-w-full border-collapse border border-gray-700">
                  <thead>
                    <tr className="bg-[#27272c]/70 text-accent">
                      <th className="border border-gray-700 p-2">#</th>
                      <th className="border border-gray-700 p-2">Title</th>
                      <th className="border border-gray-700 p-2">Category</th>
                      <th className="border border-gray-700 p-2">Stack</th>
                      <th className="border border-gray-700 p-2">Image</th>
                      <th className="border border-gray-700 p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((proj) => (
                      <tr key={proj._id} className="hover:bg-[#2f2f35]">
                        <td className="border border-gray-700 p-2 text-center">{proj.num}</td>
                        <td className="border border-gray-700 p-2 font-medium">{proj.title}</td>
                        <td className="border border-gray-700 p-2 capitalize">{proj.category}</td>
                        <td className="border border-gray-700 p-2">
                          <div className="flex flex-wrap gap-1">
                            {proj.stack.map((s, i) => (
                              <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">{s.name}</span>
                            ))}
                          </div>
                        </td>
                        <td className="border border-gray-700 p-2">
                          {proj.image && (
                            <Image src={proj.image} width={60} height={40} alt="" className="rounded object-cover" unoptimized />
                          )}
                        </td>
                        <td className="border border-gray-700 p-2">
                          <div className="flex gap-2">
                            <button onClick={() => editProject(proj)} className="text-accent hover:underline text-sm">Edit</button>
                            <button onClick={() => deleteProject(proj._id)} className="text-red-500 hover:underline text-sm">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
