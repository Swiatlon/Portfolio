import Image from "next/image";

interface ProjectScreenProps {
  texture: string;
}

const ProjectScreen = ({ texture }: ProjectScreenProps) => {
  return (
    <Image
      src={texture}
      alt={"project image"}
      className="w-full h-full object-cover rounded-xl max-h-[650px] object-top"
      width={1600}
      height={1000}
    />
  );
};

export default ProjectScreen;
