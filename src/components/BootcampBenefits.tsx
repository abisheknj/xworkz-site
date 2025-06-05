import React from "react";
import { User, GraduationCap, Lightbulb, HelpCircle, PlayCircle, CircleCheck } from "lucide-react";
import BenefitCard from "./BenefitCard";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <User className="text-emerald-400 w-8 h-8" />,
    title: "1:1 expert session",
    description: "Connects theoretical understanding with practical implementation through their insights"
  },
  {
    icon: <GraduationCap className="text-purple-400 w-8 h-8" />,
    title: "Expert faculty",
    description: "Top-tier education enriched by practical knowledge and innovation"
  },
  {
    icon: <Lightbulb className="text-pink-400 w-8 h-8" />,
    title: "Projects & hackathons",
    description: "Hands-on learning to spark creative problem-solving"
  },
  {
    icon: <HelpCircle className="text-amber-400 w-8 h-8" />,
    title: "Fastest doubt support",
    description: "Personalised assistance for a clear understanding of concepts"
  },
  {
    icon: <PlayCircle className="text-orange-400 w-8 h-8" />,
    title: "Self-paced classes",
    description: "Learn at your pace with practice and instant feedback"
  },
  {
    icon: <CircleCheck className="text-green-400 w-8 h-8" />,
    title: "Mock Interviews",
    description: "Mock Interviews to boost your confidence and Interview Preparation"
  }
  
  
];

const BootcampBenefits = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-white dark:bg-black transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-foreground transition-colors duration-300">Job Bootcamp benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
          >
            <BenefitCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BootcampBenefits;
