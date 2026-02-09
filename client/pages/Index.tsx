import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Mail, Linkedin, Moon, Sun, Code2, Database, Cpu, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWindowFocused, setIsWindowFocused] = useState(true);
  const [sectionScales, setSectionScales] = useState({
    hero: 1,
    about: 1,
    work: 1,
    experience: 1,
    profile: 1,
    contact: 1,
    footer: 1,
  });
  const [sectionOpacities, setSectionOpacities] = useState({
    hero: 1,
    about: 1,
    work: 1,
    experience: 1,
    profile: 1,
    contact: 1,
    footer: 1,
  });
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then check system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

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

      // Calculate scale for each section based on viewport distance
      const viewportCenter = window.innerHeight / 2;
      const sections = [
        { ref: heroRef, key: "hero" },
        { ref: aboutRef, key: "about" },
        { ref: workRef, key: "work" },
        { ref: experienceRef, key: "experience" },
        { ref: profileRef, key: "profile" },
        { ref: contactRef, key: "contact" },
        { ref: footerRef, key: "footer" },
      ];

      const newScales: Record<string, number> = {};
      const newOpacities: Record<string, number> = {};

      sections.forEach(({ ref, key }) => {
        if (ref.current) {
          // Work section always stays at full scale and opacity
          if (key === "work") {
            newScales[key] = 1;
            newOpacities[key] = 1;
          } else {
            const rect = ref.current.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const distanceFromViewportCenter = Math.abs(sectionCenter - viewportCenter);

            // Scale: closer to center = bigger, further away = smaller
            // Max distance is viewport height, scale ranges from 1 to 0.85
            const maxDistance = window.innerHeight;
            const scale = Math.max(0.85, 1 - (distanceFromViewportCenter / maxDistance) * 0.15);
            newScales[key] = scale;

            // Opacity: closer to center = 1, further away = 0.2
            // Multiplying by 1.2 to make the fade effect more pronounced as it leaves the center
            const opacity = Math.max(0.2, 1 - (distanceFromViewportCenter / maxDistance) * 1.2);
            newOpacities[key] = opacity;
          }
        }
      });

      setSectionScales(newScales);
      setSectionOpacities(newOpacities);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
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

  // Scroll reveal hooks for different sections
  const heroGreetingRef = useScrollReveal(REVEAL_OPTIONS_HERO);
  const heroNameRef = useScrollReveal(REVEAL_OPTIONS_HERO);
  const heroSubtitleRef = useScrollReveal(REVEAL_OPTIONS_HERO);
  const heroDescRef = useScrollReveal(REVEAL_OPTIONS_HERO);
  const heroButtonsRef = useScrollReveal(REVEAL_OPTIONS_HERO);

  const aboutTitleRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);
  const aboutContentRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);
  const aboutImageRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);

  const profileTitleRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);
  const profileContentRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);

  const experienceTitleRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);
  const experienceContentRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);

  const workTitleRef = useScrollReveal(REVEAL_OPTIONS_WORK);
  const workItemsRef = useScrollReveal(REVEAL_OPTIONS_WORK);

  const contactTitleRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);
  const contactContentRef = useScrollReveal(REVEAL_OPTIONS_DEFAULT);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-background text-foreground">
      {/* Blur Overlay - Top */}
      <div
        className={`fixed top-0 left-0 right-0 h-96 pointer-events-none transition-all duration-1000 z-40 ${
          isScrolled ? "opacity-20" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.02), transparent)",
        }}
      />

      {/* Blur Overlay - Bottom */}
      <div
        className={`fixed bottom-0 left-0 right-0 h-96 pointer-events-none transition-all duration-1000 z-40 ${
          isScrolled ? "opacity-20" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.02), transparent)",
        }}
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            <p>RP</p>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Button
              onClick={() => scrollToSection("about")}
              variant="ghost"
              className="text-sm font-medium"
            >
              About
            </Button>
            <Button
              onClick={() => scrollToSection("work")}
              variant="ghost"
              className="text-sm font-medium"
            >
              Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="ghost"
              className="text-sm font-medium"
            >
              Contact
            </Button>
            <Button
              onClick={() => setIsDark(!isDark)}
              variant="ghost"
              size="icon"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

          </div>
          {/* Mobile dark mode toggle */}
          <Button
            onClick={() => setIsDark(!isDark)}
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        className="relative w-full pt-32 pb-20"
        style={{
          transform: `scale(${sectionScales.hero})`,
          opacity: sectionOpacities.hero,
          transformOrigin: "center top",
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mt-20">
            <div className="space-y-2">
              <p ref={heroGreetingRef.ref} className={`text-accent font-medium tracking-wide text-lg scroll-reveal ${heroGreetingRef.isVisible ? 'visible' : ''}`}>
                Hi, my name is
              </p>
              <h1 ref={heroNameRef.ref} className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight scroll-reveal ${heroNameRef.isVisible ? 'visible' : ''}`}>
                <p>Rocky L. Penamante</p>
              </h1>
            </div>
            <h2 ref={heroSubtitleRef.ref} className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight scroll-reveal ${heroSubtitleRef.isVisible ? 'visible' : ''}`}>
              I build exceptional digital experiences.
            </h2>
            <p ref={heroDescRef.ref} className={`max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed pt-4 scroll-reveal ${heroDescRef.isVisible ? 'visible' : ''}`}>
              I'm a full-stack developer passionate about creating beautiful and
              functional web and desktop applications. Currently focused on
              full-stack development with React, Node.js, and modern web
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                onClick={() => scrollToSection("work")}
                variant="outline"
                size="lg"
                className="w-fit"
              >
                See my work
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button
                asChild
                size="lg"
                className="w-fit"
              >
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rockypenamantejr23@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-4 h-4" />
                  Get in touch
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className="relative w-full py-20 border-t border-border"
        style={{
          transform: `scale(${sectionScales.about})`,
          opacity: sectionOpacities.about,
          transformOrigin: "center top",
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={aboutTitleRef.ref} className={`text-4xl font-bold mb-12 text-primary scroll-reveal ${aboutTitleRef.isVisible ? 'visible' : ''}`}>
            <span className="text-accent">01.</span> About
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div ref={aboutContentRef.ref} className={`md:col-span-2 space-y-4 scroll-reveal ${aboutContentRef.isVisible ? 'visible' : ''}`}>
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
              <Card className="overflow-hidden border-accent/50">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F458bc5ee9abe4ac0a100b512a7fa3aaa%2F55ea529b172a40d0a44be3c5bab8f31e"
                  alt="Profile"
                  className="w-48 h-48 object-cover media-zoom"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section
        ref={workRef}
        id="work"
        className="relative w-full py-20 border-t border-border"
        style={{
          backgroundColor: "var(--background)",
          transform: `scale(${sectionScales.work})`,
          opacity: sectionOpacities.work,
          transformOrigin: "center top",
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 ref={workTitleRef.ref} className={`text-4xl font-bold mb-16 text-primary scroll-reveal ${workTitleRef.isVisible ? 'visible' : ''}`}>
            <span className="text-accent">02.</span> Work & Experience's
          </h2>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-accent/30 bg-card/50">
                <CardContent className="p-0">
                  {/* Media Section - Image Slideshow or Video */}
                  {(project.video || project.images) && (
                    <div className="relative w-full bg-muted overflow-hidden">
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
                            <Button
                              onClick={() =>
                                setCurrentImageIndex(
                                  currentImageIndex === 0
                                    ? project.images.length - 1
                                    : currentImageIndex - 1,
                                )
                              }
                              size="sm"
                              variant="secondary"
                            >
                              <ChevronLeft className="w-4 h-4" />
                              Previous
                            </Button>
                            <div className="flex gap-2">
                              {project.images.map((_, imgIndex) => (
                                <button
                                  key={imgIndex}
                                  onClick={() => setCurrentImageIndex(imgIndex)}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    imgIndex === currentImageIndex
                                      ? "bg-accent w-6"
                                      : "bg-accent hover:bg-accent"
                                  }`}
                                />
                              ))}
                            </div>
                            <Button
                              onClick={() =>
                                setCurrentImageIndex(
                                  currentImageIndex === project.images.length - 1
                                    ? 0
                                    : currentImageIndex + 1,
                                )
                              }
                              size="sm"
                              variant="secondary"
                            >
                              Next
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>

                          {/* Image Counter */}
                          <div className="absolute top-4 right-4 bg-background text-foreground px-3 py-1 rounded text-sm font-medium">
                            {currentImageIndex + 1} / {project.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </CardContent>

                {/* Project Details */}
                <CardHeader className="space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-accent/10 text-accent hover:bg-accent/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {index === 0 && (
                      <>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-accent hover:text-accent/80 group"
                        >
                          <a
                            href="https://youtu.be/XdK7nYHkymE"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            System Demo
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-accent hover:text-accent/80 group"
                        >
                          <a
                            href="https://alphafitnesscenter.vercel.app/services"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Website Link
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </>
                    )}
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent/80 group"
                    >
                      <a
                        href={project.github || "https://github.com/Kiro2-3?tab=overview&from=2026-01-01&to=2026-01-29"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                        <Github className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className="relative w-full py-20 border-t border-border"
        style={{
          transform: `scale(${sectionScales.contact})`,
          opacity: sectionOpacities.contact,
          transformOrigin: "center top",
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 ref={contactTitleRef.ref} className={`text-4xl font-bold mb-8 text-primary scroll-reveal ${contactTitleRef.isVisible ? 'visible' : ''}`}>
            <span className="text-accent">05.</span> Get In Touch
          </h2>

          <div ref={contactContentRef.ref} className={`scroll-reveal ${contactContentRef.isVisible ? 'visible' : ''}`}>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed mb-12">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="max-w-2xl mx-auto mb-12 space-y-4">
              <div className="text-base text-muted-foreground">
                <p className="font-medium text-foreground mb-2">Contact Information:</p>
                <p>
                  <span className="text-accent">Email:</span> rockypenamantejr23@gmail.com
                </p>
                <p>
                  <span className="text-accent">Contact Number:</span> +63 938 992 6231
                </p>
              </div>
            </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
            >
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rockypenamantejr23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="w-5 h-5" />
                Send me an email
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-accent"
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-accent"
            >
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=rockypenamantejr23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>


      <footer
        ref={footerRef}
        className="relative w-full bg-muted border-t border-border py-12"
        style={{
          transform: `scale(${sectionScales.footer})`,
          opacity: sectionOpacities.footer,
          transformOrigin: "center top",
          transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
        }}
      >
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
