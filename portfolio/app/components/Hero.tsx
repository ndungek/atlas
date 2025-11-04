"use client";
import Reveal from "./Reveal";
import Link from "next/link";
import Logo from "@/app/components/Logo";


export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0a192f] text-white px-6 md:px-20 flex flex-col justify-center">
      {/* TOP NAV ROW */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center py-8 px-6 md:px-20">
        {/* LOGO */}
        <Logo />

        {/* NAV LINKS */}
        <div className="flex items-center gap-8 text-[#ccd6f6] font-mono text-sm">
          <Link href="#about" className="hover:text-[#64ffda] transition">
            <span className="text-[#64ffda]">About</span>
          </Link>
          <Link href="#work" className="hover:text-[#64ffda] transition">
            <span className="text-[#64ffda]">Work</span>
          </Link>
          <Link href="#contact" className="hover:text-[#64ffda] transition">
            <span className="text-[#64ffda]">Contact</span>
          </Link>

          <button className="border border-[#64ffda] px-4 py-2 rounded hover:bg-[#112240] transition">
            Resume
          </button>
        </div>
      </div>


      {/* HERO TEXT */}
      <div className="max-w-4xl w-full" style={{ marginLeft: '10%' }}>
        <Reveal>
          <p className="text-[#64ffda] font-mono mb-5 tracking-tight">
            Hi, my name is
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#ccd6f6] mb-3">
            Maureen Kitang&apos;a.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0] mt-2">
            I build reliable data systems
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-[#8892b0] max-w-xl leading-relaxed">
            I design and maintain modern data pipelines, models, and analytics
            workflows across cloud environments. By combining ETL architecture, SQL,
            and business intelligence tooling, I help transform fragmented data into
            clarity, empower teams to answer critical questions, and support decisions
            that actually move the needle.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <a
            href="#projects"
            className="
              inline-block mt-10 px-8 py-4 border border-[#64ffda]
              rounded-md font-mono text-[#64ffda]
              hover:bg-[#64ffda]/10 transition
            "
          >
            Check My Work
          </a>
        </Reveal>
      </div>
    </section>
  );
}
