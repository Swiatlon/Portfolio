import Image from "next/image";

interface ProjectNavigationProps {
  onNavigate: (direction: "previous" | "next") => void;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  onNavigate,
}) => {
  return (
    <div className="flex justify-between items-center">
      <button
        type="button"
        className="arrow-btn"
        onClick={() => onNavigate("previous")}
      >
        <Image
          src="/assets/icons/left-arrow.svg"
          alt="Previous project"
          width={24}
          height={24}
        />
      </button>

      <button
        type="button"
        className="arrow-btn"
        onClick={() => onNavigate("next")}
      >
        <Image
          src="/assets/icons/right-arrow.svg"
          alt="Next project"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default ProjectNavigation;
