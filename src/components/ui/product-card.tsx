import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  className?: string;
  style?: CSSProperties;
  index?: number;
}

export function ProductCard({
  id,
  name,
  description,
  imageUrl,
  category,
  className,
  style,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.25, 0.25, 0, 1],
        },
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
    >
      <Link
        to={`/products/${id}`}
        className={cn(
          "group block overflow-hidden rounded-xl bg-white dark:bg-slate-900 border shadow-sm transition-all",
          className
        )}
        style={style}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          {imageUrl.includes(".mp4") ? (
            <motion.video
              src={imageUrl}
              className="w-full h-full object-cover"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              autoPlay={true}
              muted
              preload="none"
            />
          ) : (
            <motion.img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            className="absolute top-3 left-3"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { delay: index * 0.1 + 0.2 },
            }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-2 text-xs font-medium bg-itek-700 text-white rounded-md">
              {category}
            </span>
          </motion.div>
        </div>
        <div className="p-5">
          <motion.h3
            className="text-xl font-semibold mb-2 group-hover:text-itek-600 transition-colors"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: index * 0.1 + 0.3 },
            }}
            viewport={{ once: true }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-sm md:text-base line-clamp-2 font-normal"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: index * 0.1 + 0.4 },
            }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
          <motion.div
            className="mt-4 flex justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: index * 0.1 + 0.5 },
            }}
            viewport={{ once: true }}
          >
            <motion.span
              className="text-sm font-medium text-itek-600"
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
            >
              View details
            </motion.span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
