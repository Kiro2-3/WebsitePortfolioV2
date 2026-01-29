export default function About() {
  return (
    <section
      id="about"
      className="py-20 min-h-screen flex items-center bg-slate-100 border-4 border-red-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-yellow-100 p-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
          <span className="text-accent">01.</span> About
        </h2>

        <p className="text-lg text-muted-foreground mb-4">
          Hello! I'm a full-stack developer with a passion for creating
          beautiful and functional web applications.
        </p>
      </div>
    </section>
  );
}
