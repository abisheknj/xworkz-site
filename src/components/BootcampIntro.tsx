import React from "react";
import { Code, Monitor, Database, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BootcampIntro = () => {
  return (
    <div className="w-full bg-white dark:bg-black py-16 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left column - Main content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <Badge variant="outline" className="border-tertiary/20 bg-tertiary/5 text-tertiary px-3 py-1 dark:bg-tertiary/10">
                INDUSTRY-DRIVEN CURRICULUM
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300">Master Java Full Stack Development</h2>
              <p className="text-xl text-gray-600 dark:text-foreground mt-4 transition-colors duration-300">
                We transform beginners into job-ready developers through hands-on learning, industry-relevant projects, and expert mentorship.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-border px-4 py-2 rounded-full transition-colors duration-300">
                <Zap size={18} className="text-tertiary" />
                <span className="text-sm text-gray-700 dark:text-foreground transition-colors duration-300">12-week intensive program</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-border px-4 py-2 rounded-full transition-colors duration-300">
                <Code size={18} className="text-tertiary" />
                <span className="text-sm text-gray-700 dark:text-foreground transition-colors duration-300">100+ hours of coding</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-border px-4 py-2 rounded-full transition-colors duration-300">
                <Monitor size={18} className="text-tertiary" />
                <span className="text-sm text-gray-700 dark:text-foreground transition-colors duration-300">Live project reviews</span>
              </div>
            </div>
            
            <Button className="mt-8 group bg-tertiary text-white hover:bg-orange-600">
              Explore Curriculum 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const TechCard = ({ icon, title, description, delay }: TechCardProps) => (
  <div className="relative group">
    <Card
      className="p-6 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-border hover:border-gray-200 dark:hover:border-border hover:shadow-sm transition-all hover:-translate-y-1 overflow-hidden"
      style={{ animationDelay: delay }}
    >
      <div className="flex flex-col gap-3">
        <div className="bg-tertiary/5 dark:bg-tertiary/10 w-fit p-3 rounded-lg transition-colors duration-300">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-foreground transition-colors duration-300">{description}</p>
      </div>
    </Card>
    {/* Glowing animated border */}
    <span
      className="pointer-events-none absolute inset-0 rounded-lg z-10 animate-glow-border"
      aria-hidden="true"
      style={{
        border: '2px solid transparent',
        background: 'conic-gradient(from 0deg, #ff9800, #f44336, #ff9800 100%)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        padding: '2px',
      }}
    />
  </div>
);

export default BootcampIntro;
