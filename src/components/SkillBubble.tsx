import React from 'react';
import { motion } from 'framer-motion';

interface SkillBubbleProps {
  name: string;
  level: number;
  category: string;
}

export function SkillBubble({ name, level, category }: SkillBubbleProps) {
  const size = 40 + level * 10; // Size based on skill level

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      className="relative group cursor-pointer"
      style={{
        width: size,
        height: size
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center"
      >
        <span className="text-sm font-medium text-primary">{name}</span>
      </motion.div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <div className="flex flex-col items-center">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-gray-300">{category}</span>
          <div className="w-24 h-1 bg-gray-700 rounded-full mt-1">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: `${level * 20}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}