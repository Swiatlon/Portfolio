import Image from "next/image";
import { Project } from "../Projects";

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl">
      <div
        className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg ml-auto mr-auto md:ml-0"
        style={project.logoStyle}
      >
        <Image
          className="w-10 h-10 shadow-sm"
          src={project.logo}
          alt={`${project.title} logo`}
          width={40}
          height={40}
        />
      </div>

      <div className="flex flex-col gap-5 text-white-600 my-5">
        <h2 className="text-white text-2xl font-semibold animatedText">
          {project.title}
        </h2>
        <p className="animatedText">{project.desc}</p>
        <p className="animatedText">{project.subdesc}</p>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="flex items-center gap-3">
          {project.tags.map((tag, index) => (
            <div key={index} className="tech-logo" title={tag.name}>
              <Image
                src={tag.path}
                alt={tag.name}
                width={30}
                height={30}
                title={tag.name}
              />
            </div>
          ))}
        </div>

        <a
          className="flex items-center gap-2 cursor-pointer text-white-600"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          <p className="hover:text-white transition-colors">Check Live Site</p>
          <Image
            src="/assets/icons/arrow-up.svg"
            alt="arrow"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
