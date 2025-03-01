"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  label: string;
  percentage: number;
  className?: string;
}

export default function ProgressBar({
  label,
  percentage,
  className,
}: ProgressBarProps) {
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [controls, isInView, percentage]);

  return (
    <div className={cn("mb-6", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: "0%" }}
          animate={controls}
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}