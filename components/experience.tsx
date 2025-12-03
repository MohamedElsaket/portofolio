"use client";

const experienceData = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance",
    period: "2022 - Present",
    description: "",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Junior Frontend Developer",
    company: "Slash Hub",
    period: "2020 - 2022",
    description:
      "Developed and maintained web large e-commerce using Next.js and Typesript. I worked on handling the data fetching and optimizing performance and enhancing user experience to deliver high-quality products.",
    skills: ["Reactjs", "JavaScript", "Neaxtjs", "TypeScript", "Web APIs"],
  },
  {
    id: 3,
    role: "Frontend Developer | Internship",
    company: "Creativo",
    period: "2019 - 2021",
    description:
      "Started my career building interactive websites and learning modern web technologies. Collaborated with designers and product teams.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Experience</span>
          </h2>
          <p className="text-foreground/60 text-lg">
            My professional journey and career highlights
          </p>
        </div>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5  from-accent via-accent/50 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className="experience-item"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:bg-card/80 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-accent mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-foreground/70 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-foreground/50 font-mono">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
