import Stepper from "../../shared/stepper/Stepper";

const Experience = () => {
  return (
    <section
      className="c-space space-bettwen-section grid place-items-center "
      id="experience"
    >
      <div className="w-11/12 xl:w-10/12">
        <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient text-center">
          Experience
        </p>
        <div className="w-full">
          <Stepper />
        </div>
      </div>
    </section>
  );
};

export default Experience;
