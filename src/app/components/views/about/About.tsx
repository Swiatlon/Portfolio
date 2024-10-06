import AboutCard from './elements/AboutCard';
import ContactInfo from './elements/ContactInfo';
import GlobeSection from './elements/GlobeSection';

const About = () => {
  return (
    <section className="c-space space-bettwen-section grid place-items-center" id="about">
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5 w-10/12 sm-11/12 xl:w-10/12">
        <AboutCard
          imgSrc="/assets/images/grid1.png"
          imgAlt="Introduction to Przemysław"
          header="Hi, I’m Przemysław"
          text="With 2 years of commercial experience, I have honed my skills in frontend and backend development, focusing on best patterns."
        />
        <AboutCard
          imgSrc="/assets/images/grid2.png"
          imgAlt="Tech Stack Overview"
          header="Tech Stack"
          text="I specialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems, while expanding my expertise in Node.js to build full-stack, scalable applications"
        />
        <GlobeSection />
        <AboutCard
          imgSrc="/assets/images/grid3.png"
          imgAlt="My Passion for Coding"
          header="My Passion for Coding"
          text="I love solving problems and building things through code. Programming isn’t just my profession—it’s my passion. I enjoy exploring new technologies and enhancing my skills."
        />
        <ContactInfo />
        <AboutCard
          imgSrc="/assets/images/grid5.png"
          imgAlt="Charts rising"
          header="Quality Matters"
          text="Quality is the cornerstone of my work. I prioritize precision and excellence in every app and website I create, ensuring that each project delivers exceptional performance and lasting value."
        />
      </div>
    </section>
  );
};

export default About;
