import TypeIt from "typeit-react";

function Hero() {
  return (
    <>
      <section className="min-h-[70vh] flex flex-col items-center bg-white text-center px-6 pt-[250px]">
        {" "}
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1076a1] leading-tight">
          <TypeIt
            options={{ speed: 80, waitUntilVisible: true }}
            getAfterInit={(instance) => {
              instance
                .type("Oh hey there:)")
                .break()
                .pause(400)
                .type("I'm Karina!");
              return instance;
            }}
          />
        </h1>
        <p className="mt-8 text-xl tracking-widest text-gray-400 uppercase">
          Software Engineer &nbsp;~&nbsp; Community Builder &nbsp;~&nbsp;
          Sometimes a Sailor
        </p>
      </section>
      <div className="py-6 ">
        <svg
          viewBox="0 0 1200 20"
          preserveAspectRatio="none"
          className="w-full h-4"
        >
          <path
            d="M0,10 C150,0 300,20 450,10 C600,0 750,20 900,10 C1050,0 1150,20 1200,10"
            fill="none"
            stroke="#0b49a1"
            strokeWidth="2"
          />
        </svg>
      </div>
    </>
  );
}

export default Hero;
