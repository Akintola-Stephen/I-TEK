import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClassName?: string;
  className?: string;
  style?: any
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  iconClassName,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group p-6 rounded-xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      <div
        className={cn(
          "rounded-full w-12 h-12 flex items-center justify-center bg-itek-100 text-itek-700 mb-4 transition-colors group-hover:bg-itek-200",
          iconClassName
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
