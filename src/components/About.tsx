function About() {
  const stack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Git",
    "Agile",
    "Node.js",
    "Firebase",
  ];

  return (
    <section className="px-16 py-20" id="about">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-semibold text-red-500 tracking-widest uppercase mb-6 flex items-center gap-2">
          <span>—</span> about me
        </p>

        {/* Two column layout */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left — text */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
              Builder.
              <br />
              Leader.
              <br />
              Shipper.
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed max-w-lg">
              <p>
                I'm a CS senior at the{" "}
                <strong className="text-gray-900 font-medium">
                  University of Hawaiʻi at Mānoa
                </strong>{" "}
                graduating Spring 2026 — ready to bring everything I've learned
                to a team working at real scale.
              </p>
              <p>
                I've shipped production software to 20,000+ users, held{" "}
                <strong className="text-gray-900 font-medium">
                  Secret Clearance
                </strong>{" "}
                as a Solutions Engineering intern at Pacific Shipyards, led a
                civic tech team in the Hawaii Annual Code Challenge, and
                consulted on Salesforce implementations.
              </p>
              <p>
                I also founded{" "}
                <strong className="text-gray-900 font-medium">
                  Recycle to Outreach
                </strong>{" "}
                in 2021 — a volunteer initiative connecting community resources
                to houseless services.
              </p>
              <p>
                Building for the people on the other end is just how I think.
              </p>
            </div>

            {/* Links */}
            <div className="mt-8">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
                professional links
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://linkedin.com/in/kparkokuna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-500 hover:text-gray-900 transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/kparkok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 border border-gray-300 rounded-full text-sm text-gray-600 hover:border-gray-500 hover:text-gray-900 transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Stack */}
            <div className="mt-6">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">
                my stack
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 bg-gray-200 text-gray-600 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — photo */}
          <div className="w-full md:w-80 shrink-0">
            <img
              src="/images/projects/ParkKarina.jpeg"
              alt="Karina Park"
              className="w-full rounded-lg object-cover"
              style={{ aspectRatio: "4/4" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
