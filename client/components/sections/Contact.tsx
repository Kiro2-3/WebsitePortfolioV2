import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            <span className="text-accent">03.</span> Get In Touch
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded transition-colors font-medium"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded transition-all duration-300 font-medium"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-12">
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
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Credit */}
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Designed & Built by{" "}
              <span className="text-accent font-medium">Brittany Chiang</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
