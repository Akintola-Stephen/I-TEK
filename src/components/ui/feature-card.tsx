import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

import { CSSProperties } from "react";

import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
  className?: string;
  style?: CSSProperties;
  index?: number;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  iconClassName,
  className,
  style,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className={cn(
        "group p-6 rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.25, 0, 1],
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      <motion.div
        className={cn(
          "rounded-full w-12 h-12 flex items-center justify-center bg-itek-100 text-itek-700 mb-4 transition-colors group-hover:bg-itek-200",
          iconClassName
        )}
        initial={{ scale: 0.8 }}
        whileInView={{
          scale: 1,
          transition: { delay: index * 0.1 + 0.2, type: "spring" },
        }}
        viewport={{ once: true }}
        whileHover={{
          rotate: [0, -10, 10, -5, 0],
          transition: { duration: 0.5 },
        }}
      >
        <Icon className="h-6 w-6" />
      </motion.div>
      <motion.h3
        className="text-xl font-semibold mb-2 tracking-tight"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: index * 0.1 + 0.3 } }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-muted-foreground leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: index * 0.1 + 0.4 } }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
