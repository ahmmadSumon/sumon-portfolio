export default function manifest() {
  return {
    name: "Arif Ahmmad Sumon - Full Stack Web Developer",
    short_name: "Sumon Portfolio",
    description: "Full Stack Web Developer portfolio showcasing projects, skills, and experience.",
    start_url: "/",
    display: "standalone",
    background_color: "#1c1c22",
    theme_color: "#06D001",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
