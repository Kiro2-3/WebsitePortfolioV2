import { useState, useEffect } from "react";
import { ExternalLink, Github, Mail, Linkedin, Moon, Sun, Code2, Database, Cpu, Leaf } from "lucide-react";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWindowFocused, setIsWindowFocused] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then check system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleFocus = () => setIsWindowFocused(true);
    const handleBlur = () => setIsWindowFocused(false);

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2Fafce2001bebe4747975a835f00717265",
    "https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2Faa2ec0a6e56746ee97f815dba59d6de4",
    "https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2F99ce4c1a6c924af286c5b19741a8373c",
    "https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2F99b7baa162b64f80be5f9a114dcb4a5e",
    "https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2Fa8d4567e53c7407186dbf626d488f496",
    "https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2Ff342379451e44f3b963ada5dc1732742",
    "https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2F01518243b9d44f6aac38cca90f213f40",
  ];

  const projects = [
    {
      title: "Alpha Fitness System",
      description:
        "A comprehensive gym management platform for managing members, schedules, finances, and operations. Built with React, TypeScript, Node.js, and PostgreSQL. Features include membership management, class scheduling, financial analytics, QR code scanner integration, and real-time reporting.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      images: projectImages,
    },
    {
      title: "Colegio De Montalban Payroll System",
      description:
        "A comprehensive payroll management system designed for educational institutions. Built with React, TypeScript, Node.js, and PostgreSQL. Features include employee payroll processing, salary management, tax calculations, attendance tracking, and financial reporting.",
      tags: ["VB.Net", "MySQL"],
      video: "https://cdn.builder.io/o/assets%2Fd0b7126990a54b5caf24622e30c00bac%2Ffd142cec29e14f2081a3ddf8a0d00316?alt=media&token=d072f471-6248-4e3d-ba94-7fe2207a70f6&apiKey=d0b7126990a54b5caf24622e30c00bac",
      github: "https://github.com/Kiro2-3/CDM-Payroll-System",
    },
    {
      title: "Magenta Gamex",
      description:
        "A static website with Html and Css only.",
      tags: ["HTML", "CSS"],
      video: "https://cdn.builder.io/o/assets%2Fd0b7126990a54b5caf24622e30c00bac%2F3bf29a3aeeed417d9b1cd6ece846b06b?alt=media&token=2808f43f-6655-4fc8-9615-034fc95c2840&apiKey=d0b7126990a54b5caf24622e30c00bac",
      github: "https://github.com/Kiro2-3/Magenta-Gamex",
    },
    {
      title: "C++ First Year Final Project",
      description:
        "This system is made with C++ only.",
      tags: ["C++"],
      video: "https://cdn.builder.io/o/assets%2Fd0b7126990a54b5caf24622e30c00bac%2Fcb6630cd4e2e4d4e9572fde1a3603984?alt=media&token=74192056-4437-4d04-8f94-2c8289effbf6&apiKey=d0b7126990a54b5caf24622e30c00bac",
      github: "https://github.com/Kiro2-3/Project-C-Solo-d/commit/a074c6170bbcc9f8dacd68bb4b219e6690bfc523",
    },
    {
      title: "Pizza Menu",
      description:
        "A pizza menu application built with Microsoft CLR C++ language. Demonstrates object-oriented programming and user interface design using C++.",
      tags: ["C++"],
      video: "https://cdn.builder.io/o/assets%2Fd0b7126990a54b5caf24622e30c00bac%2F20bd42884c444cbe89a1cd560bde207d?alt=media&token=016f177b-b74b-411d-bc79-ef634cb6bc61&apiKey=d0b7126990a54b5caf24622e30c00bac",
      github: "https://github.com/Kiro2-3/PizzaMenu.C",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "MySQL",
    "Node.js",
    "C++",
    "Tailwind CSS",
    "PostgreSQL",
    "Git",
  ];

  const skillIcons: { [key: string]: React.ReactNode } = {
    JavaScript: <Code2 className="w-4 h-4" />,
    TypeScript: <Code2 className="w-4 h-4" />,
    React: <Code2 className="w-4 h-4" />,
    "Node.js": <Database className="w-4 h-4" />,
    Express: <Database className="w-4 h-4" />,
    MySQL: <Database className="w-4 h-4" />,
    PostgreSQL: <Database className="w-4 h-4" />,
    "C++": <Cpu className="w-4 h-4" />,
    "Tailwind CSS": <Leaf className="w-4 h-4" />,
    Git: <Code2 className="w-4 h-4" />,
  };

  return (
    <div className="bg-background text-foreground">
      {/* Blur Overlay - Top */}
      <div
        className={`fixed top-0 left-0 right-0 h-32 pointer-events-none transition-all duration-500 z-40 backdrop-blur-md ${
          !isWindowFocused ? "opacity-60" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)",
        }}
      />

      {/* Blur Overlay - Bottom */}
      <div
        className={`fixed bottom-0 left-0 right-0 h-32 pointer-events-none transition-all duration-500 z-40 backdrop-blur-md ${
          !isWindowFocused ? "opacity-60" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)",
        }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            <p>RP</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-muted-foreground hover:text-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

          </div>
          {/* Mobile dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="md:hidden p-2 text-muted-foreground hover:text-accent transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative w-full pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mt-20">
            <div className="space-y-2">
              <p className="text-accent font-medium tracking-wide text-lg">
                Hi, my name is
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                <p>Rocky L. Penamante</p>
              </h1>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight">
              I build exceptional digital experiences.
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed pt-4">
              I'm a full-stack developer passionate about creating beautiful and
              functional web and desktop applications. Currently focused on
              full-stack development with React, Node.js, and modern web
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                onClick={() => scrollToSection("work")}
                className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded transition-colors font-medium inline-flex items-center gap-2 w-fit"
              >
                See my work
                <ExternalLink className="w-4 h-4" />
              </button>
              <a
                href="mailto:hello@example.com"
                className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-colors font-medium inline-flex items-center gap-2 w-fit"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative w-full py-20 border-t border-border"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-primary">
            <span className="text-accent">01.</span> About
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm a full-stack developer with a passion for creating
                beautiful and functional web applications. My interest in web
                development started in 2023, and since then I've had the
                privilege of working at Business Process Outsourcing and Tech
                Companies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My main focus these days is building accessible user interfaces
                and scalable backend services. I'm most comfortable working with
                JavaScript/TypeScript, React, and modern web development tools.
                I'm always interested in learning new technologies and best
                practices.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Here are a few technologies I've worked with recently:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <span className="text-accent">{skillIcons[skill]}</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-accent">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2F55ea529b172a40d0a44be3c5bab8f31e"
                  alt="Profile"
                  className="w-full h-full object-cover media-zoom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="relative w-full py-20 bg-muted/20 border-t border-border"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-primary">
            <span className="text-accent">02.</span> Work & Experience's
          </h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="space-y-8">
                {/* Media Section - Image Slideshow or Video */}
                {(project.video || project.images) && (
                  <div className="space-y-4">
                    <div className="relative w-full bg-muted rounded-lg overflow-hidden border border-accent/20">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="w-full h-auto object-cover media-zoom"
                          controls
                          muted
                        />
                      ) : (
                        <>
                          <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - Screenshot ${currentImageIndex + 1}`}
                            className="w-full h-auto object-cover media-zoom"
                          />

                          {/* Slideshow Controls */}
                          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                            <button
                              onClick={() =>
                                setCurrentImageIndex(
                                  currentImageIndex === 0
                                    ? project.images.length - 1
                                    : currentImageIndex - 1,
                                )
                              }
                              className="px-3 py-1 bg-accent/80 hover:bg-accent text-accent-foreground rounded text-sm font-medium transition-colors"
                            >
                              ← Previous
                            </button>
                            <div className="flex gap-2">
                              {project.images.map((_, imgIndex) => (
                                <button
                                  key={imgIndex}
                                  onClick={() => setCurrentImageIndex(imgIndex)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    imgIndex === currentImageIndex
                                      ? "bg-accent w-6"
                                      : "bg-accent/50 hover:bg-accent/70"
                                  }`}
                                />
                              ))}
                            </div>
                            <button
                              onClick={() =>
                                setCurrentImageIndex(
                                  currentImageIndex === project.images.length - 1
                                    ? 0
                                    : currentImageIndex + 1,
                                )
                              }
                              className="px-3 py-1 bg-accent/80 hover:bg-accent text-accent-foreground rounded text-sm font-medium transition-colors"
                            >
                              Next →
                            </button>
                          </div>

                          {/* Image Counter */}
                          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded text-sm font-medium">
                            {currentImageIndex + 1} / {project.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Project Details */}
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
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded border border-accent/30 hover:border-accent transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 pt-4">
                    {index === 0 && (
                      <>
                        <a
                          href="https://youtu.be/XdK7nYHkymE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium group"
                        >
                          System Demo
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                          href="https://alphafitnesscenter.vercel.app/services"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium group"
                        >
                          Website Link
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </>
                    )}
                    <a
                      href={project.github || "https://github.com/Kiro2-3?tab=overview&from=2026-01-01&to=2026-01-29"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium group"
                    >
                      GitHub
                      <Github className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative w-full py-20 border-t border-border"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-primary">
            <span className="text-accent">03.</span> Get In Touch
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed mb-12">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:rockypenamantejr23@gmail.com"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:rockypenamantejr23@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full border-t border-border py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground text-sm">
            Designed & Built by Penamante Rocky | Built with React, Vite &
            Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
