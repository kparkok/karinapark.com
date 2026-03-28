import { useState } from "react";
import { ChevronDown } from "lucide-react";

const roles = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Manoa Now",
    period: "August 2025 – Present",
    type: "Part-time",
    description:
      "Full stack engineer building scalable Firebase-backed React/Next.js components supporting 20,000+ users.",
    tech: ["TypeScript", "React", "Firebase", "Next.js"],
  },
  {
    id: 2,
    title: "Consultant Intern",
    company: "Pacific Point",
    period: "January 2026 – Present",
    type: "Internship",
    description:
      "Salesforce solutions engineer consultant intern working alongside Project Managers, Business Analysts, and Support Team.",
    tech: ["Salesforce", "Agile Methodologies"],
  },
  {
    id: 3,
    title: "IT Engineer Intern",
    company: "Pacific Shipyards International",
    period: "June 2025 – July 2025",
    type: "Internship",
    description:
      "Built an automated invoice processing system using Python and Box.com AI API — reducing manual processing by 50% across 10,000+ yearly invoices. Held Secret Clearance.",
    tech: ["Python", "Box AI API"],
  },
];

function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="px-16 py-20" id="experience">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-semibold text-red-500 tracking-widest uppercase mb-6 flex items-center gap-2">
          <span>—</span> experiences
        </p>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Left — sticky heading */}
          <div className="md:w-56 shrink-0">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight md:sticky md:top-24">
              Places
              <br />
              i've been
            </h2>
          </div>

          {/* Right — roles */}
          <div className="flex-1 border-t border-gray-200">
            {roles.map((role) => (
              <div key={role.id} className="border-b border-gray-200">
                {/* Header */}
                <button
                  onClick={() =>
                    setExpanded(expanded === role.id ? null : role.id)
                  }
                  className="w-full py-5 flex items-start justify-between text-left gap-4 hover:bg-white/60 transition-colors px-2 -mx-2 rounded"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-base">
                      {role.title}
                    </p>
                    <p className="text-[#1076a1] text-sm mt-0.5">
                      {role.company}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-gray-400">{role.period}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{role.type}</p>
                    <ChevronDown
                      size={16}
                      className={`ml-auto mt-1 text-gray-400 transition-transform duration-200 ${
                        expanded === role.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded content */}
                {expanded === role.id && (
                  <div className="pb-5 px-2">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {role.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 bg-gray-200 text-gray-600 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
