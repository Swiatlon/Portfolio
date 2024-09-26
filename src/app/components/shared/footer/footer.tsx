import Image from "next/image";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 mt-24 xl:mt-48">
      <nav aria-label="Legal links">
        <ul className="text-white-500 flex gap-2">
          <li>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-3">
        <a
          href="https://github.com/Swiatlon"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="GitHub"
        >
          <Image
            src="/assets/icons/github.svg"
            alt="Visit GitHub profile"
            width={26}
            height={26}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/swiatlon"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Linkedin"
        >
          <Image
            src="/assets/icons/linkedin.svg"
            alt="Visit linkedin profile"
            width={32}
            height={32}
          />
        </a>
      </div>

      <p className="text-white-500 text-sm">
        © 2024 Przemysław Światłoń. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
