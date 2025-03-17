import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  alignment = "center",
  className 
}: SectionHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <motion.div 
      className={cn(
        "space-y-5 mb-10", 
        {
          "text-center": alignment === "center",
          "text-left": alignment === "left",
          "text-right": alignment === "right"
        },
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold tracking-tight letter-spacing-[-0.02em]"
        variants={itemVariants}
        whileInView={{
          textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 2px 5px rgba(0,0,0,0.1)"],
          transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 }
        }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
