import { useParams, useNavigate } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <p className="text-gray-400 text-sm mb-4">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="text-[#1076a1] text-sm font-medium hover:opacity-70 transition-opacity"
        >
          ← Back home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10 bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft size={15} />
          Back to projects
        </button>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs text-[#1076a1] font-medium tracking-widest uppercase mb-2">
            {project.subtitle} · {project.date}
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            {project.title}
          </h1>
          {project.status && (
            <span className="inline-block text-xs px-3 py-1 bg-[#1076a1]/10 text-[#1076a1] rounded-full mb-4">
              {project.status}
            </span>
          )}

          {/* Links */}
          <div className="flex gap-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                style={{ textDecoration: "none" }}
              >
                <Github size={16} /> View on GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                style={{ textDecoration: "none" }}
              >
                <ExternalLink size={16} /> Live site
              </a>
            )}
          </div>
        </div>

        {/* Screenshot */}
        {project.images.length > 0 && (
          <div className="mb-10 rounded-xl overflow-hidden border border-gray-200">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold text-red-500 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>—</span> about
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech stack */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold text-red-500 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>—</span> tech stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold text-red-500 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>—</span> challenges
          </h2>
          <p className="text-gray-600 leading-relaxed">{project.challenges}</p>
        </div>

        {/* What I learned */}
        <div className="mb-16">
          <h2 className="text-xs font-semibold text-red-500 tracking-widest uppercase mb-3 flex items-center gap-2">
            <span>—</span> what i learned
          </h2>
          <p className="text-gray-600 leading-relaxed">{project.learned}</p>
        </div>

        {/* Back button bottom */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors bg-transparent border-none cursor-pointer"
        >
          <ArrowLeft size={15} />
          Back to projects
        </button>
      </div>
    </div>
  );
}

export default ProjectPage;
