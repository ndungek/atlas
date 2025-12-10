"use client";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-4xl w-full" style={{ marginLeft: '13%' }}>
      <Reveal>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-[#64ffda] mb-12">
          My Data Story
        </h2>
      </Reveal>

      <div className="space-y-5">
        <Reveal delay={0.1}>
          <p className="text-[#8892b0] leading-relaxed">
            It started with a single spreadsheet and one simple question:
            <em className="text-[#ccd6f6]"> “Why does this number matter?”</em>
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[#8892b0] leading-relaxed">
            That curiosity pulled me into the world of data — a space full of
            patterns, relationships, and untold stories.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-[#8892b0] leading-relaxed">
            What began with writing SQL queries and visualizing metrics evolved
            into a passion for building{" "}
            <strong className="text-[#64ffda]">smarter, scalable systems</strong>{" "}
            across cloud environments.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-[#8892b0] leading-relaxed">
            Today, I focus on designing pipelines, modeling data, and enabling
            teams to uncover insights that drive meaningful decisions.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="text-[#8892b0] leading-relaxed italic pt-2">
            Because in the end, I&apos;m not just shaping data — I&apos;m shaping how we{" "}
            <em className="text-[#ccd6f6]">think</em> with data.
          </p>
        </Reveal>
      </div>

      {/* Focus Area Pills */}
      <Reveal delay={0.6}>
        <div className="flex flex-wrap gap-3 mt-10">
          {[
            "Data Pipelines & ETL",
            "Cloud Architecture",
            "Business Intelligence",
            "Data Modeling",
            "Analytics & Insights",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-[#112240] text-sm text-[#8892b0] rounded-lg border border-[#233554] hover:border-[#64ffda] hover:text-[#64ffda] transition"
            >
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}