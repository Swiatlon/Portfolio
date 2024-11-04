"use client";
import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const steps = [
  {
    title: "Farmaprom",
    description:
      "At Farmaprom, I developed pharmaceutical applications, focusing on performance, compatibility, and responsiveness. I collaborated closely with UX/UI teams to build intuitive interfaces, created dynamic React components, and maintained high-quality code. Through Agile practices, I participated in sprint planning and code reviews, contributing to a collaborative and efficient workflow. This role allowed me to enhance my skills and pursue innovative solutions that elevated the platform.",
    url: "/assets/icons/farmaprom.png",
    years: 1.5,
    active: true,
  },
  {
    title: "Step 2",
    description: "Billing Information",
    url: "",
    active: false,
  },
  {
    title: "Step 3",
    description: "Summary",
    url: "",
    active: false,
  },
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex gap-8 justify-center align pt-12">
      <ol className="grid grid-rows-3 gap-2 pt-2">
        {steps.map((step, index) => (
          <li
            key={index}
            className="grid grid-rows-1 w-min align-middle justify-items-center gap-2"
            style={{ gridTemplateRows: "max-content" }}
          >
            <button
              className={clsx(
                "rounded-full w-8 h-8 md:w-10 md:h-10 font-semibold font-generalsans flex items-center justify-center bg-gray-200 text-gray-300",
                index && "bg-gray-200 text-gray-500",
                !step.active && "opacity-50",
                index === activeStep && "shadow-lg shadow-blue-800"
              )}
              onClick={() => step.active && setActiveStep(index)}
              disabled={!step.active}
            >
              {index === activeStep ? (
                <Image
                  src={step.url}
                  alt={`${step.title} logo`}
                  className="w-5 h-5 md:w-6 md:h-6"
                  width={40}
                  height={40}
                />
              ) : (
                index + 1
              )}
            </button>
            {index !== steps.length - 1 ? (
              <div className="w-1 min-h-12 h-full md:min-h-24 bg-gray-300 justify-center rounded-sm"></div>
            ) : null}
          </li>
        ))}
      </ol>
      <div className="max-w-[500px]">
        <h2 className="text-2xl font-bold text-blue-400">
          {steps[activeStep].title}
        </h2>
        <p className="text-blue-400 font-bold">
          Experience: {steps[activeStep]?.years} years
        </p>
        <p className="text-white-700 text-md md:text-lg tracking-wider pt-6">
          {steps[activeStep].description}
        </p>
      </div>
    </div>
  );
};

export default Stepper;
