"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group relative flex items-center justify-center w-12 h-12"
    >
      {/* Hexagon outline */}
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        className="stroke-[#64ffda] fill-transparent group-hover:stroke-[2.5px] transition"
      >
        <polygon
          points="50 5, 93 27.5, 93 72.5, 50 95, 7 72.5, 7 27.5"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      {/* Initial inside */}
      <span className="absolute text-[#64ffda] font-mono text-xl group-hover:scale-110 transition">
        M
      </span>
    </Link>
  );
}

