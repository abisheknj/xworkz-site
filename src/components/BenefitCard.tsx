import React from "react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const BenefitCard = ({ icon, title, description, className }: BenefitCardProps) => {
  return (
    <div className={cn(
      "bg-white dark:bg-neutral-900 text-gray-800 dark:text-foreground p-8 rounded-2xl border border-gray-200 dark:border-border flex flex-col transition-all hover:shadow-lg",
      className
    )}>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-foreground transition-colors duration-300">{description}</p>
    </div>
  );
};

export default BenefitCard;
