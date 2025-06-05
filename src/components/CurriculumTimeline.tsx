import React, { useState } from "react";
import { Code, Database, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Module {
  id: string;
  title: string;
  tag: string;
  tagType: "frontend" | "backend" | "database";
  duration: string;
  isOpen?: boolean;
  topics: {
    left: string[];
    right: string[];
  };
}

const modules: Module[] = [
  {
    id: "web-design",
    title: "Web Design",
    tag: "Frontend",
    tagType: "frontend",
    duration: "3.2 Weeks",
    isOpen: true,
    topics: {
      left: [
        "Weaving the World Wide Web",
        "Text Formatting tags",
        "HTML structures",
        "Transformers of the Web (CSS)",
        "Unlocking creative toolbox (CSS Properties)",
        "Responsive Utilities",
        "Bootstrap"
      ],
      right: [
        "Introduction to Javascript",
        "Conditional and Control Statements",
        "Javascript Function",
        "Javascript Objects",
        "Document Object Model",
        "Modern Javascript"
      ]
    }
  },
  {
    id: "java",
    title: "Java",
    tag: "Backend",
    tagType: "backend",
    duration: "5.6 Weeks",
    topics: {
      left: [
        "Core Java fundamentals",
        "Object-Oriented Programming",
        "Exception Handling",
        "Collections Framework"
      ],
      right: [
        "Multithreading",
        "File I/O and Serialization",
        "Java 8+ Features",
        "Design Patterns"
      ]
    }
  },
  {
    id: "sql",
    title: "SQL",
    tag: "Database",
    tagType: "database",
    duration: "4 Weeks",
    topics: {
      left: [
        "Database fundamentals",
        "SQL Queries",
        "Data Manipulation",
        "Joins and Subqueries"
      ],
      right: [
        "Indexing and Optimization",
        "Stored Procedures",
        "Triggers",
        "Transactions"
      ]
    }
  },
  {
    id: "hibernate",
    title: "Hibernate",
    tag: "Backend",
    tagType: "backend",
    duration: "4 Weeks",
    topics: {
      left: [
        "Database fundamentals",
        "SQL Queries",
        "Data Manipulation",
        "Joins and Subqueries"
      ],
      right: [
        "Indexing and Optimization",
        "Stored Procedures",
        "Triggers",
        "Transactions"
      ]
    }
  },
  {
    id: "spring-boot",
    title: "Spring Boot",
    tag: "Backend",
    tagType: "backend",
    duration: "4 Weeks",
    topics: {
      left: [
        "Spring Framework basics",
        "Dependency Injection",
        "Spring MVC",
        "Spring Data JPA"
      ],
      right: [
        "RESTful API development",
        "Spring Security",
        "Microservices",
        "Testing with Spring Boot"
      ]
    }
  }
];

const CurriculumTimeline: React.FC = () => {
  const [openModules, setOpenModules] = useState<{ [key: string]: boolean }>({
    "web-design": true
  });

  const toggleModule = (id: string) => {
    setOpenModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-white dark:bg-black transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-foreground transition-colors duration-300">Java Full Stack Developer Curriculum</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
        {/* Left side info panel */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 dark:from-background dark:to-background text-white p-8 rounded-2xl border border-blue-700 dark:border-border flex flex-col h-full transition-all duration-300 shadow-lg dark:shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Industry Oriented Curriculum</h3>
            <p className="mb-8">
              An exhaustive curriculum designed by our industry experts which will help you to get placed in your dream IT company
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/10 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 transition-colors duration-300 border border-transparent dark:border-border">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-14 h-14 flex items-center justify-center transition-colors duration-300 border border-blue-200 dark:border-border">
                  <div className="text-blue-800 dark:text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <line x1="3" y1="9" x2="21" y2="9"/>
                      <line x1="9" y1="21" x2="9" y2="9"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-yellow-300 dark:text-yellow-400">Mock Interviews</div>
                </div>
              </div>
              
              <div className="bg-white/10 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 transition-colors duration-300 border border-transparent dark:border-border">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-14 h-14 flex items-center justify-center transition-colors duration-300 border border-blue-200 dark:border-border">
                  <div className="text-blue-800 dark:text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/>
                      <line x1="9" y1="9" x2="10" y2="9"/>
                      <line x1="9" y1="13" x2="15" y2="13"/>
                      <line x1="9" y1="17" x2="15" y2="17"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-yellow-300 dark:text-yellow-400">Languages & Tools</div>
                </div>
              </div>
              
              <div className="bg-white/10 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl flex items-center gap-4 transition-colors duration-300 border border-transparent dark:border-border">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full w-14 h-14 flex items-center justify-center transition-colors duration-300 border border-blue-200 dark:border-border">
                  <div className="text-blue-800 dark:text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">280+</div>
                  <div className="text-yellow-300 dark:text-yellow-400">Live Sessions Hours</div>
                </div>
              </div>
            </div>
            
            <Button className="mt-8 bg-lime-500 hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700 text-black dark:text-white font-semibold py-6 transition-all duration-300">
              Download Brochure
              <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/>
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Right side timeline */}
        <div className="lg:col-span-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 top-10 bottom-0 w-0.5 bg-gray-200 dark:bg-border transition-colors duration-300"></div>
            
            {/* Modules */}
            <div className="space-y-6">
              {modules.map((module, index) => (
                <Collapsible
                  key={module.id}
                  open={openModules[module.id] || false}
                  onOpenChange={() => toggleModule(module.id)}
                  className="group"
                >
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className={cn(
                      "absolute left-0 top-6 w-7 h-7 rounded-full z-10 flex items-center justify-center border-2 border-white dark:border-border transition-all duration-300",
                      openModules[module.id] ? "bg-lime-500 dark:bg-lime-600" : "bg-gray-300 dark:bg-gray-700"
                    )}>
                      <div className={cn(
                        "w-3 h-3 rounded-full border border-gray-300 dark:border-border transition-all duration-300",
                        openModules[module.id] ? "bg-white dark:bg-background" : "bg-gray-400 dark:bg-gray-500"
                      )}></div>
                    </div>
                    {/* Module card with animation */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                      className="ml-10"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 overflow-hidden">
                        <CollapsibleTrigger asChild>
                          <div className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-background border border-gray-100 dark:border-border rounded-xl shadow-sm dark:shadow-lg transition-colors duration-300">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center">
                                {module.tagType === "frontend" && <Code className="text-blue-500 dark:text-blue-400 w-5 h-5" />}
                                {module.tagType === "backend" && <Code className="text-purple-500 dark:text-purple-400 w-5 h-5" />}
                                {module.tagType === "database" && <Database className="text-green-500 dark:text-green-400 w-5 h-5" />}
                                <span className="font-semibold ml-2 text-gray-900 dark:text-foreground transition-colors duration-300">{module.title}</span>
                              </div>
                              <Badge 
                                className={cn(
                                  "text-xs px-2 py-0.5 transition-colors duration-300",
                                  module.tagType === "frontend" ? "bg-lime-500 text-black dark:bg-lime-600 dark:text-white" : 
                                  module.tagType === "backend" ? "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200" :
                                  "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                                )}
                              >
                                #{module.tag}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center transition-colors duration-300">
                                <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"/>
                                  <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                {module.duration}
                              </span>
                              <div className="text-gray-400 dark:text-gray-500 transition-colors duration-300">
                                {openModules[module.id] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                              </div>
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="animate-accordion-down">
                          <div className="p-6 pt-2 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 dark:bg-background border border-gray-100 dark:border-border rounded-xl shadow-sm dark:shadow-lg transition-colors duration-300">
                            <div>
                              <ul className="space-y-2">
                                {module.topics.left.map((topic, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="mr-2 mt-1 text-lime-600 dark:text-lime-500">•</div>
                                    <span className="text-gray-700 dark:text-foreground transition-colors duration-300">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <ul className="space-y-2">
                                {module.topics.right.map((topic, i) => (
                                  <li key={i} className="flex items-start">
                                    <div className="mr-2 mt-1 text-lime-600 dark:text-lime-500">•</div>
                                    <span className="text-gray-700 dark:text-foreground transition-colors duration-300">{topic}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </motion.div>
                  </div>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumTimeline;
