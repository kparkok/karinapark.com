import { useState, useRef, useEffect } from "react";

// Six hand-drawn SVG underline path styles
const underlinePaths = [
  "M0,3 Q25%,0 50%,3 Q75%,6 100%,3",
  "M0,2 C20%,6 40%,0 60%,4 C80%,8 90%,1 100%,3",
  "M0,4 Q15%,0 30%,4 Q50%,8 70%,2 Q85%,0 100%,4",
  "M0,1 C30%,7 60%,0 100%,4",
  "M0,5 Q25%,0 50%,4 Q75%,8 100%,2",
  "M0,3 C15%,0 35%,7 55%,2 C75%,0 90%,6 100%,3",
];

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0); // 0 = hidden, 1 = fully drawn
  const [pathIndex] = useState(() =>
    Math.floor(Math.random() * underlinePaths.length)
  );
  const rafRef = useRef<number | null>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth);
    }
  }, [children]);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const target = hovered ? 1 : 0;
    const speed = 0.05;

    const animate = () => {
      setProgress((prev) => {
        const next = hovered
          ? Math.min(prev + speed, 1)
          : Math.max(prev - speed, 0);
        if (next !== target) rafRef.current = requestAnimationFrame(animate);
        return next;
      });
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hovered]);

  // Convert relative path (using % notation) to absolute pixel coords
  const buildPath = (w: number) => {
    return underlinePaths[pathIndex].replace(/(\d+)%/g, (_, n) =>
      String((parseInt(n) / 100) * w)
    );
  };

  const svgH = 10;

  return (
    <a
      href={href}
      className="relative inline-flex flex-col items-start text-xl font-semibold text-[#1076a1]"
      style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span ref={textRef}>{children}</span>

      {width > 0 && (
        <svg
          width={width}
          height={svgH}
          viewBox={`0 0 ${width} ${svgH}`}
          className="absolute -bottom-1 left-0"
          style={{ overflow: "visible", opacity: progress }}
        >
          <path
            d={buildPath(width)}
            fill="none"
            stroke="#ce17eb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={width * 2}
            strokeDashoffset={(1 - progress) * width * 2}
            style={{ transition: "none" }}
          />
        </svg>
      )}
    </a>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-20 py-5">
        {/* Left links */}
        <div className="flex items-center gap-8">
          <NavLink href="#about">about</NavLink>
          <NavLink href="#experience">experience</NavLink>
        </div>

        {/* Center name */}
        <span className="text-3xl font-bold text-[#1076a1] absolute left-1/2 -translate-x-1/2">
          Karina Park
        </span>

        {/* Right links */}
        <div className="flex items-center gap-8">
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#connect">connect</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
