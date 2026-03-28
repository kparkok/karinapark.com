import { Mail, Linkedin, Github, FileText } from "lucide-react";

function Connect() {
  return (
    <section className="px-6 py-20" id="connect">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
          Let's work together
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
          Open to new grad roles — based in Hawaii,
          <br className="hidden md:block" />
          open to Seattle and beyond.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:karinaparkok@gmail.com"
          className="inline-flex items-center gap-2 px-7 py-3 bg-[#1076a1] text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity mb-8"
          style={{ textDecoration: "none" }}
        >
          <Mail size={16} />
          Send me an email
        </a>

        {/* Secondary links */}
        <div className="flex justify-center gap-3 flex-wrap">
          <a
            href="https://linkedin.com/in/kparkokuna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors bg-white"
            style={{ textDecoration: "none" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          <a
            href="https://github.com/kparkok"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors bg-white"
            style={{ textDecoration: "none" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>

          <a
            href="/CSLinkedIn.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full text-sm text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors bg-white"
            style={{ textDecoration: "none" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Resume
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-10">
          Mahalo for visiting — let's build something great.
        </p>
      </div>
    </section>
  );
}

export default Connect;
