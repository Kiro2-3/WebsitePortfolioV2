import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-fade-in">
        <div className="space-y-2">
          <p className="text-accent font-medium tracking-wide">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
            Brittany Chiang
          </h1>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground">
          I'm a full-stack developer
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          I'm passionate about building exceptional digital experiences.
          Currently, I'm focused on full-stack development with modern web
          technologies and creating intuitive user interfaces.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={() => scrollToSection("work")}
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded transition-all duration-300 font-medium flex items-center gap-2 group"
          >
            See my work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-colors font-medium"
          >
            Get in touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-accent/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
