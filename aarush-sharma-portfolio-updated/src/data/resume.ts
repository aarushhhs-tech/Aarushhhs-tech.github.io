export interface Project {
  slug: string;
  title: string;
  role: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  link?: string;
}

export const resumeData = {
  name: "Aarush Sharma",
  title: "Engineering & Software Developer",
  contact: {
    email: "aarush@example.com",
    github: "https://github.com/aarushhhs-tech",
    linkedin: "https://linkedin.com/in/aarush-sharma"
  },
  // Current active projects on top
  projects: [
    {
      slug: "current-engineering-project",
      title: "General Engineering Chemistry Analysis Suite",
      role: "Lead Developer",
      date: "2026 - Present",
      shortDescription: "Interactive python & web suite for calculating stoichiometry, gas laws, and quantitative titration data.",
      longDescription: "Developed an engineering chemistry analysis tool designed to streamline quantitative lab analysis, calculate partial pressures, titration curves, and quantum configurations for chemical engineering workflows.",
      technologies: ["Python", "Astro", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/aarushhhs-tech/chem-analysis"
    },
    {
      slug: "python-image-pdf-converter",
      title: "Python Image & PDF Utility Tool",
      role: "Developer",
      date: "2026",
      shortDescription: "Automated document standardization tool built with Python PIL and img2pdf.",
      longDescription: "Built a CLI and web-supported utility script that standardizes arbitrary image uploads into high-fidelity PDF documents, supporting bulk processing, array manipulation, and custom resolution scaling.",
      technologies: ["Python", "PIL", "img2pdf"],
      link: "https://github.com/aarushhhs-tech/img2pdf-converter"
    }
  ],
  education: [
    {
      degree: "B.S. Engineering Chemistry / Computer Engineering",
      institution: "University",
      date: "Fall 2026 - Present"
    }
  ]
};
