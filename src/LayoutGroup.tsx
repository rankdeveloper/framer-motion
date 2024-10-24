// App.js
import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion"; // Optional for styling

const items = [
  { id: 1, title: "Item 1", description: "This is the description for item 1" },
  { id: 2, title: "Item 2", description: "This is the description for item 2" },
  { id: 3, title: "Item 3", description: "This is the description for item 3" },
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
          className="bg-blue-400  py-2 px-5 rounded-md shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer"
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
