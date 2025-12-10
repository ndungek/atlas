"use client";
import { motion } from "framer-motion";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";


const socials = [
  { icon: <FiGithub />, href: "https://github.com/ndungek" },
  { icon: <FiInstagram />, href: "https://instagram.com/_ndunge._" },
  { icon: <FaXTwitter/>, href: "https://X.com/__ndunge" },
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/maureen-kitang-a-301908204/" },
];

export default function SocialBar() {
  return (
    <div className="hidden lg:flex flex-col fixed left-16 bottom-0 space-y-6 text-gray-400">
      {socials.map((s, i) => (
        <motion.a
          key={i}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, color: "#64ffda" }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="text-xl"
        >
          {s.icon}
        </motion.a>
      ))}
      <div className="h-28 w-px bg-gray-600 mx-auto" />
    </div>
  );
}