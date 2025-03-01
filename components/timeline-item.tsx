"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export default function TimelineItem({
  year,
  title,
  description,
  icon,
  className,
}: TimelineItemProps) {
  return (
    <motion.div
      className={cn("flex gap-4", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
          {icon}
        </div>
        <div className="w-px h-full bg-border"></div>
      </div>
      <div className="pb-8">
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary mb-2">
          {year}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}