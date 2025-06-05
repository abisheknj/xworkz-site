import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

import { ArrowRight, Code, Zap, Users, GraduationCap , Database, Monitor } from "lucide-react";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      

      {/* Hero content */}
      <div className="bg-white dark:bg-black pb-16 pt-10 md:pt-20 lg:pt-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left content - Text */}
            <motion.div
              className="space-y-6 md:space-y-8 max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="space-y-6">
                <Badge variant="outline" className="border-tertiary/20 bg-tertiary/5 text-tertiary px-3 py-1 dark:bg-tertiary/10">
                  TRANSFORM YOUR CAREER
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                  Experience <span className="text-tertiary relative">Coding <span className="absolute -bottom-0 left-0 w-full h-1 bg-tertiary rounded-full"></span></span> Like Never Before!
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  Dive into our comprehensive curriculum and transform your career. Learn from the industry experts.
                </p>
                
                {/* Feature badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-border rounded-full text-sm text-gray-700 dark:text-foreground transition-colors duration-300">
                    <GraduationCap size={16} className="text-tertiary" />
                    Expert-led Training
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-border rounded-full text-sm text-gray-700 dark:text-foreground transition-colors duration-300">
                    <Code size={16} className="text-tertiary" />
                    Hands-on Projects
                  </span>
                  {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-background border border-gray-100 dark:border-border rounded-full text-sm text-gray-700 dark:text-foreground transition-colors duration-300">
                    <Users size={16} className="text-tertiary" />
                    1:1 Mentorship
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 dark:bg-background border border-gray-100 dark:border-border rounded-full text-sm text-gray-700 dark:text-foreground transition-colors duration-300">
                    <Code size={16} className="text-tertiary" />
                    Interviews
                  </span> */}
                </div>
                
                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-tertiary hover:bg-orange-600 text-white group">
                    Enroll Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-200 dark:border-border text-gray-700 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background transition-colors duration-300">
                    Explore Courses
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 dark:border-gray-700 transition-all duration-300">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">93%</p>
                    <p className="text-gray-500 dark:text-foreground text-sm transition-colors duration-300">Placement Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">4.8<span className="text-lg">/ 5</span></p>
                    <p className="text-gray-500 dark:text-foreground text-sm transition-colors duration-300">Student Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">12K+</p>
                    <p className="text-gray-500 dark:text-foreground text-sm transition-colors duration-300">Graduates</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
           {/* Right column - Tech stack cards */}
          <motion.div
            className="grid grid-cols-2 gap-1 sm:gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <TechCard 
              icon={<Code className="h-8 w-8 text-tertiary" />}
              title="Frontend"
              description="HTML5, CSS3, JavaScript, React"
              index={0}
            />
            <TechCard 
              icon={<Database className="h-8 w-8 text-tertiary" />}
              title="Backend"
              description="Java, Spring Boot, Hibernate"
              index={1}
            />
            <TechCard 
              icon={<Monitor className="h-8 w-8 text-tertiary" />}
              title="DevOps"
              description="Docker, CI/CD, AWS Basics"
              index={2}
            />
            <TechCard 
              icon={<Zap className="h-8 w-8 text-tertiary" />}
              title="Industry Skills"
              description="Agile, Git , Code reviews"
              index={3}
            />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const TechCard = ({ icon, title, description, index }: TechCardProps) => (
  <motion.div
    className="relative group"
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <Card
      className="p-6 bg-white dark:bg-background border border-gray-100 dark:border-border hover:border-gray-200 dark:hover:border-border hover:shadow-sm transition-all hover:-translate-y-1 overflow-hidden min-h-[220px]"
    >
      <div className="flex flex-col gap-3">
        <div className="bg-tertiary/5 dark:bg-tertiary/10 w-fit p-3 rounded-lg transition-colors duration-300">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-foreground transition-colors duration-300">{description}</p>
      </div>
    </Card>
  </motion.div>
);

export default HeroSection;
