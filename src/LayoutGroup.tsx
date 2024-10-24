// App.js
import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion"; // Optional for styling

const items = [
  {
    id: 1,
    title: "JavaScript",
    description: "JavaScript is a programming language",
  },
  {
    id: 2,
    title: "TypeScript",
    description: "TypeScript is a superset of JavaScript",
  },
  {
    id: 3,
    title: "Framer Motion",
    description: "Framer Motion is a motion library",
  },
];

const LayoutGroupExample1 = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const expand = (id: number) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <LayoutGroup>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          className="bg-blue-400  py-2 px-5 rounded-md shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer min-w-[200px] mb-2 "
          whileHover={{ scale: 1.03 }}
          onClick={() => expand(item.id)}
        >
          <motion.h2 className="text-white text-lg" layout>
            {item.title}
            {expanded === item.id && (
              <motion.p className="py-2 text-slate-300">
                {item.description}
              </motion.p>
            )}
          </motion.h2>
        </motion.div>
      ))}
    </LayoutGroup>
  );
};

export default LayoutGroupExample1;
