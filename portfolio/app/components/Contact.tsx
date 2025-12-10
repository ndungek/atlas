"use client";
import Reveal from "./Reveal";


export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-40 text-center">
      <Reveal>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mt-3">
          Ready to collaborate??
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="text-[#8892b0] leading-relaxed max-w-xl mx-auto mt-6">
          I’m always open to opportunities Whether you’re building something new or improving what
          already exists — I’d love to help.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ndungek66@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block mt-10 px-8 py-4 border border-[#64ffda]
            rounded-md font-mono text-[#64ffda]
            hover:bg-[#64ffda]/10 transition
          "
        >
          Email me
        </a>
      </Reveal>


    </section>
  );
}