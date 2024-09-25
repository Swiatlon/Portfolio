export const scrollToSection = (href: string) => {
  const section = document.querySelector(href);

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
