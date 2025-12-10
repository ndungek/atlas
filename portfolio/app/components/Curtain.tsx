"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Curtain() {
  const message = "Welcome, Friend";
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= message.length) {
        setText(message.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShow(false);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#0a192f] text-[#ccd6f6] flex items-center justify-center z-[9999]"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-wide"
          >
            {text}
            {text.length < message.length && (
              <span className="inline-block w-1 h-12 bg-white ml-1 animate-pulse" />
            )}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}