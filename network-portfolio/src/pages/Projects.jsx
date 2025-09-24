import ProjectCard from "../components/ProjectCard";
import projectsData from "../config/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        A collection of apps, tools, and labs I’ve built — showcasing both
        software development and networking skills.
      </p>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
