import { useNavigate } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${project.slug}`)}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer"
    >
      {/* Screenshot */}
      <div className="h-48 bg-gray-100 overflow-hidden">
        {project.images[0] ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            {project.title}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 text-sm">
            {project.title}
          </h3>
          <div
            className="flex gap-2 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Github size={15} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-[#1076a1] mb-2">
          {project.subtitle} · {project.date}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-0.5 bg-gray-100 text-gray-500 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const navigate = useNavigate();
  const featured = projects.slice(0, 4);
  const fullWidth = projects[4]; // MemoryMap

  return (
    <section className="bg-gray-50 px-16 py-20" id="projects">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-semibold text-red-500 tracking-widest uppercase mb-6 flex items-center gap-2">
          <span>—</span> projects &amp; fun
        </p>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {/* Full width — MemoryMap */}
        {fullWidth && (
          <div
            onClick={() => navigate(`/projects/${fullWidth.slug}`)}
            className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {fullWidth.title}
                  </h3>
                  {fullWidth.status && (
                    <span className="text-[10px] px-2 py-0.5 bg-[#1076a1]/10 text-[#1076a1] rounded-full">
                      {fullWidth.status}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#1076a1] mb-2">
                  {fullWidth.subtitle} · {fullWidth.date}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-2xl">
                  {fullWidth.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {fullWidth.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-0.5 bg-gray-100 text-gray-500 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
