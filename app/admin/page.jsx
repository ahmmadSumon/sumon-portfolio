"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

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
      fetchMessages();
    } else {
      setError("Incorrect password.");
    }
  };

  const fetchMessages = async () => {
    const res = await fetch("/api/contact");
    const data = await res.json();
    if (res.ok) setMessages(data.messages);
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
    <section className="p-8">
      <h1 className="text-3xl font-semibold mb-6 text-accent">
        Admin Dashboard - Contact Messages
      </h1>

      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="overflow-x-auto bg-[#27272c]/40 p-4 rounded-lg">
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
                  <td className="border border-gray-700 p-2">
                    {msg.firstname} {msg.lastname}
                  </td>
                  <td className="border border-gray-700 p-2">{msg.email}</td>
                  <td className="border border-gray-700 p-2">{msg.phone}</td>
                  <td className="border border-gray-700 p-2">{msg.service}</td>
                  <td className="border border-gray-700 p-2">{msg.message}</td>
                  <td className="border border-gray-700 p-2">
                    {new Date(msg.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
