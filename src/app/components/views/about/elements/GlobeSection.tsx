"use client";
import React from "react";
import dynamic from "next/dynamic";
import Button from "@/app/components/shared/button/Button";
import { useMediaQuery } from "react-responsive";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const GlobeSection = () => {
  const isPhone = useMediaQuery({ maxWidth: 450 });

  return (
    <article className="text-center grid-container place-items-center">
      <div className="grid p-7 gap-12">
        <div className="rounded-3xl w-full sm:h-[256px] md:h-[267px] h-fit flex justify-center items-center">
          <Globe
            height={isPhone ? 150 : 300}
            width={isPhone ? 150 : 300}
            backgroundColor="rgba(0, 0, 0, 0)"
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            aria-label="3D globe representation of the Earth"
          />
        </div>
        <header className="text-balance text-center grid place-items-center mt-8 max-w-[400px]">
          <h3 className="grid-headtext">
            I’m flexible with time zone communications & locations
          </h3>
          <p className="grid-subtext">
            I’m based in Poland and open to remote work worldwide.
          </p>
          <Button
            name="Contact Me"
            isBeam
            containerClass="w-100 mt-5 mx-auto"
          />
        </header>
      </div>
    </article>
  );
};

export default GlobeSection;
