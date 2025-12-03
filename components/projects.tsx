"use client";

const projectsData = [
  {
    id: 1,
    title: "Bookwise | University Library",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    image: "/bookwise.png",
    link: "https://university-library-ten-sand.vercel.app/",
    codeLink: "https://github.com/MohamedElsaket/university-library",
  },
  {
    id: 2,
    title: "El-Saket | Store",
    tags: ["React", "Next.js", "PHP", "MySQL"],
    image: "/elsaket-store.png",
    link: "https://elsaket-store.vercel.app/",
    codeLink: "https://github.com/MohamedElsaket/elsaket-store",
  },
  {
    id: 3,
    title: "Forever | Clothes E-Commerce",
    tags: ["React.js", "React Router", "Tailwind"],
    image: "/forever.png",
    link: "https://mohamedelsaket.github.io/clothes-e-commerce/",
    codeLink: "https://github.com/MohamedElsaket/clothes-e-commerce",
  },
  {
    id: 4,
    title: "Fast React Pizza",
    tags: ["React", "Redux ToolKit", "Tailwind"],
    image: "/Fast React Pizza.png",
    link: "https://mohamedelsaket.github.io/Pizza/",
    codeLink: "https://github.com/MohamedElsaket/Pizza",
  },
  {
    id: 5,
    title: "Next E-Commerce",
    tags: ["React", "Next.js", "wix", "Tailwind", "TypeScript"],
    image: "/next-ecommerce.png",
    link: "https://next-ecommerce-ten-black.vercel.app/",
    codeLink: "https://github.com/MohamedElsaket/next-ecommerce",
  },
  {
    id: 6,
    title: "Fitness Exercises",
    tags: ["React.js", "MUI", "emotion"],
    image: "/fitness-exercises.png",
    link: "https://mohamedelsaket.github.io/fitness-exercises-app/",
    codeLink: "https://github.com/MohamedElsaket/fitness-exercises-app",
  },
  {
    id: 7,
    title: "Smart Villa",
    tags: ["React.js", "React ReDUX", "framer motion"],
    image: "/smart-villa.png",
    link: "https://mohamedelsaket.github.io/smart-villa/",
    codeLink: "https://github.com/MohamedElsaket/smart-villa",
  },
  {
    id: 8,
    title: "Brainwave",
    tags: ["React.js", "React Router"],
    image: "/Brainwave.png",
    link: "https://mohamedelsaket.github.io/Brainwave/",
    codeLink: "https://github.com/MohamedElsaket/Brainwave",
  },
  {
    id: 9,
    title: "MediTro",
    tags: ["React.js"],
    image: "/meditro.png",
    link: "https://mohamedelsaket.github.io/MediTro/",
    codeLink: "https://github.com/MohamedElsaket/MediTro",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Featured Projects</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            Showcasing my best work and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl border border-card bg-card/50 backdrop-blur-sm p-6 h-full flex flex-col gap-4">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg  from-accent/20 to-accent/5">
                  <a href={project.link} target="_blank">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0  from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300"
                >
                  {project.title}
                </a>
                {/* <p className="text-foreground/60 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p> */}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/30 group-hover:bg-accent/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-accent/10">
                  <button className="flex-1 py-2 text-accent hover:bg-accent/10 rounded-lg transition-colors duration-300 text-sm font-semibold">
                    <a href={project.link} target="_blank">
                      View Project
                    </a>
                  </button>
                  <button className="flex-1 py-2 bg-accent text-background rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-sm font-semibold">
                    <a href={project.codeLink}>Code</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
