"use client";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { myProjects } from "@/app/constants/constants";
import ProjectSpotlight from "./elements/ProjectSpotlight";
import ProjectDetails from "./elements/ProjectDetails";
import ProjectNavigation from "./elements/ProjectNavigation";
import ProjectScreen from "./elements/ProjectScreen";

export interface Tag {
  name: string;
  path: string;
}

export interface Project {
  title: string;
  desc: string;
  subdesc: string;
  logo: string;
  logoStyle: React.CSSProperties;
  tags: Tag[];
  href: string;
  spotlight: string;
  texture: string;
}

const projectCount: number = myProjects.length;

export const Projects: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);

  const handleNavigation = (direction: "previous" | "next") => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  }, [selectedProjectIndex]);

  const currentProject: Project = myProjects[selectedProjectIndex];

  return (
    <section className="c-space space-bettwen-section grid place-items-center">
      <div className="w-10/12 sm-11/12 xl:w-10/12">
        <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient text-center">
          My Selected Work
        </p>
        <div className="grid 2xl:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 md:px-5 shadow-2xl shadow-black-200 h-full text-center md:text-left">
            <ProjectSpotlight src={currentProject.spotlight} />
            <ProjectDetails project={currentProject} />
            <ProjectNavigation onNavigate={handleNavigation} />
          </div>
          <div className="relative shadow-2xl shadow-black-200 h-full">
            <ProjectScreen texture={currentProject.texture} />
          </div>
        </div>
      </div>
    </section>
  );
};
