"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function SkillCard({
  icon,
  title,
  description,
  className,
}: SkillCardProps) {
  return (
    <motion.div
      className={cn(
        "p-6 rounded-xl border bg-card/80 backdrop-blur-sm text-card-foreground shadow-sm transition-all duration-300 border-primary/10",
        className
      )}
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 text-primary text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-muted-foreground">{description}</p>}
    </motion.div>
  );
}