import Image from "next/image";

interface ProjectSpotlightProps {
  src: string;
}

const ProjectSpotlight: React.FC<ProjectSpotlightProps> = ({ src }) => {
  return (
    <div className="absolute top-0 right-0">
      <Image
        src={src}
        alt={"Project spotlight"}
        className="w-full h-96 object-cover rounded-xl"
        width={600}
        height={600}
        priority
      />
    </div>
  );
};

export default ProjectSpotlight;
