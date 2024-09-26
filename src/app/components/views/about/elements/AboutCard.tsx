import React from "react";
import Image from "next/image";

interface AboutCardProps {
  imgSrc: string;
  imgAlt: string;
  header: string;
  text: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  imgSrc,
  imgAlt,
  header,
  text,
}) => {
  return (
    <article className="grid-container">
      <div className="grid place-items-center place-content-center p-7 gap-12">
        <Image
          src={imgSrc}
          alt={imgAlt}
          title={imgAlt}
          width={700}
          height={0}
          className="w-10/12 sm:w-3/4 sm:h-[256px] md:h-[300px] h-fit object-contain max-w-[300px]"
        />
        <header className="text-pretty text-center grid place-items-center">
          <h3 className="grid-headtext">{header}</h3>
          <p className="grid-subtext">{text}</p>
        </header>
      </div>
    </article>
  );
};

export default AboutCard;
