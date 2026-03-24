import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "A clone Iphone 15 Pro Website ",
    description: "A 3D clone of the iPhone 15 Pro website using GSAP.",
    image: "/projects/project1.png",
    tags: ["Javascript", "GSAP", "Three.js","Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Mojito Cocktail ",
    description: "Made a Website for a Mojito Cocktail using GSAP.",
    image: "/projects/project2.png",
    tags: ["Javascript", "GSAP", "Three.js","Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Voice Assistant AI",
    description: "Made using ElevenLabs Conversational AI SDK.",
    image: "/projects/project3.png",
    tags: ["Python", "ElevenLabs"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 4,
    title: "Tesla Model S",
    description: "A 3D clone Page for Tesla Model S.",
    image: "/projects/project4.png",
    tags: ["Javascript", "GSAP", "Three.js","Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
      {
    id: 5,
    title: "Krypto",
    description: "A cryptocurrency tracking app.",
    image: "/projects/project5.png",
    tags: ["API Integration", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
        {
    id: 6,
    title: "Fitness Landing Page",
    description: "A cryptocurrency tracking app.",
    image: "/projects/project6.png",
    tags: ["API Integration", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
        {
    id: 7,
    title: "A construction Company Website",
    description: "A modern website for a construction company.",
    image: "/projects/project7.png",
    tags: ["Javascript", "React", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-32 pb-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Work that reflects a balance of clean design, efficient code, and
          reliable performance. Projects crafted with professionalism,
          scalability, and user experience in mind.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/hana67277"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
