import { ExternalLink, Github } from "lucide-react";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A comprehensive platform for managing your digital assets. Built with React, TypeScript, and modern web technologies for optimal performance and user experience.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "An interactive dashboard for real-time data visualization and analytics. Features custom charts, responsive design, and seamless integration with backend APIs.",
      tags: ["React", "D3.js", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A mobile-first e-commerce application with advanced filtering, search, and checkout functionality. Optimized for conversion and user engagement.",
      tags: ["React Native", "Firebase", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="work" className="py-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
          <span className="text-accent">02.</span> Work
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className={index % 2 === 0 ? "" : "md:order-2"}>
                  <div className="relative rounded overflow-hidden border border-border hover:border-accent transition-colors duration-300">
                    <div className="absolute inset-0 bg-accent/10 z-10 group-hover:z-0 transition-all duration-300"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? "" : "md:order-1"}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-accent/10 text-accent rounded border border-accent/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        Live Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                      >
                        GitHub
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded transition-all duration-300 font-medium"
          >
            See More Projects
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
