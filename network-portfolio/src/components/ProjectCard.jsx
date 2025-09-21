// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, image, github, demo }) {
  return (
    <div className="bg-[#1a1c2c] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
