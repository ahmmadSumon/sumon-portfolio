import { dbConnect } from "@/lib/dbConnect";
import Project from "@/models/project";

const initialProjects = [
  {
    num: "01", category: "Full Stack", title: "Dream Team Online Earning",
    description: "Dream Team Online Earning is the best platform for online income, helping you turn your skills into a source of digital success. With hard work and patience, you can earn 15,000–20,000৳ or more every month. Join today and start building your own success story in the online world.",
    stack: [{ name: "Next.js" }, { name: "Mongodb" }, { name: "Next Auth" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/dream.png", imageMobile: "/image/dream-m.png",
    live: "https://www.dreamteamonlineearning.com/", github: "https://github.com/ahmmadSumon",
  },
  {
    num: "02", category: "Full Stack", title: "Cholo Dei Feedback",
    description: "An interactive anonymous feedback platform that allows anyone to share their honest thoughts, opinions, or messages freely and securely.",
    stack: [{ name: "Next.js" }, { name: "Mongodb" }, { name: "Next Auth" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/mystry.png", imageMobile: "/image/feed-m.png",
    live: "https://cholo-dei-feedback.vercel.app/", github: "https://github.com/ahmmadSumon/cholo-dei-feedback",
  },
  {
    num: "03", category: "frontend", title: "E-commerce Website",
    description: "A dynamic e-commerce website built with modern technologies, offering a seamless shopping experience with a responsive design and interactive features.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/11.png", imageMobile: "/image/ecom-m.png",
    live: "https://ecommercenextjs-weld.vercel.app/", github: "https://github.com/ahmmadSumon/ecommercenextjs",
  },
  {
    num: "04", category: "frontend", title: "Restaurant Website",
    description: "A visually appealing restaurant website designed to showcase menus, services, and ambiance.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/res.png", imageMobile: "/image/res-m.png",
    live: "https://restaurent-nextjs.vercel.app/", github: "https://github.com/ahmmadSumon/restaurent-nextjs",
  },
  {
    num: "05", category: "frontend", title: "Ghee Bazar",
    description: "A modern and responsive Ghee Bazar e-commerce website designed to showcase premium ghee products.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }, { name: "GSAP" }],
    image: "/image/gheebazar.png", imageMobile: "/image/ghee-m.png",
    live: "https://gheebazar.vercel.app/", github: "https://github.com/ahmmadSumon/gheebazar",
  },
  {
    num: "06", category: "frontend", title: "GYM Website",
    description: "A modern and responsive GYM website designed to promote fitness services, display class schedules, and highlight gym facilities.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }, { name: "GSAP" }],
    image: "/image/gym1.png", imageMobile: "/image/gym-m.png",
    live: "https://gym-full-stack-smn.vercel.app/", github: "https://github.com/ahmmadSumon/gym-full-stack",
  },
  {
    num: "07", category: "frontend", title: "Travel Website",
    description: "A modern travel website showcasing the best of Bangladesh, featuring destination guides, travel itineraries, and booking options.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }, { name: "GSAP" }, { name: "Lenis Smoot Scroll" }],
    image: "/image/travel.png", imageMobile: "/image/tra-m.png",
    live: "https://smntravelx-m3wm.vercel.app/", github: "https://github.com/ahmmadSumon/smntravelx",
  },
  {
    num: "08", category: "frontend", title: "Law Service",
    description: "A professional law service website designed to provide information about legal services, showcase case studies, and facilitate client interactions.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/irs.png", imageMobile: "/image/irs-m.png",
    live: "https://irs-strat-2huj.vercel.app/", github: "https://github.com/ahmmadSumon/irs-strat/tree/main",
  },
  {
    num: "09", category: "frontend", title: "Martyre Website",
    description: "A memorial website dedicated to the students who tragically lost their lives during the 2024 protests in Bangladesh.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/sohid.png", imageMobile: "/image/sohid.png",
    live: "https://shohid-nextjs.vercel.app/", github: "https://github.com/ahmmadSumon/shohidNextjs/tree/main",
  },
  {
    num: "10", category: "frontend", title: "Agency Website (On Going)",
    description: "Learn with Trends is an Online Marketing Agency providing quality Digital Marketing Services.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }, { name: "Framer motion" }, { name: "Acernity UI" }],
    image: "/image/learn.png", imageMobile: "/image/learn.png",
    live: "https://learnwithtrends.vercel.app/", github: "https://github.com/ahmmadSumon/learnwithtrends",
  },
  {
    num: "11", category: "frontend", title: "E-commerce Website",
    description: "A dynamic e-commerce website built with modern technologies, offering a seamless shopping experience.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/litchi.png", imageMobile: "/image/litchi-m.png",
    live: "https://litchibazar.vercel.app/", github: "https://github.com/ahmmadSumon/litchibazar",
  },
  {
    num: "12", category: "frontend", title: "Social Worker",
    description: "A dynamic social worker website built with modern technologies.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/12.png", imageMobile: "/image/12.png",
    live: "https://nur-web.vercel.app/", github: "https://github.com/ahmmadSumon/nur-web",
  },
  {
    num: "13", category: "frontend", title: "Restaurant Website",
    description: "A visually appealing restaurant website designed to showcase menus, services, and ambiance.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "JavaScript" }],
    image: "/image/coffee.png", imageMobile: "/image/coffee.png",
    live: "https://resturent-tau.vercel.app/", github: "https://github.com/ahmmadSumon/resturent/tree/main",
  },
];

export async function GET() {
  try {
    await dbConnect();
    const count = await Project.countDocuments();
    if (count > 0) {
      return Response.json({ message: `Database already has ${count} projects. Seed skipped.` });
    }
    await Project.insertMany(initialProjects);
    return Response.json({ message: `Seeded ${initialProjects.length} projects successfully!` });
  } catch (error) {
    return Response.json({ error: "Seed failed: " + error.message }, { status: 500 });
  }
}
