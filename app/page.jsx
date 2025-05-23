"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const handleDownloadAndNavigate = () => {
    // Trigger resume download
    const resumeLink = "https://drive.google.com/uc?export=download&id=1yDgMT0Wj1e2lZvRwvWGlR53n52GPttez"; // Replace with your Google Drive file link
    window.open(resumeLink, "_blank", "noopener,noreferrer");
    // Navigate to CV page
    window.location.href = "/cv";
  };

  return (
    <section className="h-full pt-32">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Web Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Ahmmad Sumon</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Welcome! I'm a frontend web developer specializing in
              <span
                className="text-accent font-semibold pl-2 cursor-pointer"
                onClick={() =>
                  window.open("https://reactjs.org/", "_blank", "noopener,noreferrer")
                }
              >
                ReactJs
              </span>
              , and
              <span
                className="text-accent font-semibold pl-2 cursor-pointer"
                onClick={() =>
                  window.open("https://nextjs.org/", "_blank", "noopener,noreferrer")
                }
              >
                Next.js
              </span>
              . With creativity and technical prowess, I deliver stunning, responsive
              websites tailored to your needs. Let's collaborate to turn your digital
              vision into reality!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex uppercase items-center"
                onClick={handleDownloadAndNavigate}
              >
                <span>Download Resume</span> <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerstyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
