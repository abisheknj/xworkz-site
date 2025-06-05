import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Facebook, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Team member data
const teamMembers = [
  {
    name: "Devendra",
    role: "trainer",
    avatar: "",
    avatarFallback: "D",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    socials: [
      { type: "coding-ninjas", icon: "cn", url: "#" },
      { type: "facebook", icon: "facebook", url: "#" },
      { type: "amazon", icon: "shopping-cart", url: "#" },
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Competitive Programming"
    ],
    linkedinUrl: "#"
  },
  {
    name: "Omkar",
    role: "Founder",
    avatar: "",
    avatarFallback: "Om",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
    socials: [
      { type: "iitd", icon: "iitd", url: "#" },
      { type: "amazon", icon: "shopping-cart", url: "#" },
    ],
    teaches: [
      "Core java",
      "Advanced java",
      "Spring Boot"
    ],
    linkedinUrl: "#"
  },
  {
    name: "Lokesh",
    role: "Trainer",
    avatar: "",
    avatarFallback: "NA",
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    socials: [
      { type: "mercor", icon: "md", url: "#" },
      { type: "coding-ninjas", icon: "cn", url: "#" },
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course"
    ],
    linkedinUrl: "#"
  },
];

// Company logo component
const CompanyLogo = ({ type }: { type: string }) => {
  switch (type) {
    case "facebook":
      return <Facebook size={24} className="text-[#1877F2]" />;
    case "shopping-cart":
      return <ShoppingCart size={24} className="text-[#FF9900]" />;
    case "coding-ninjas":
      return (
        <div className="bg-[#F78C40] rounded-full w-6 h-6 flex items-center justify-center">
          <span className="text-white font-bold text-xs">CN</span>
        </div>
      );
    case "iitd":
      return (
        <div className="bg-red-100 dark:bg-red-900/30 rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-300">
          <span className="text-red-600 dark:text-red-400 font-bold text-xs transition-colors duration-300">ID</span>
        </div>
      );
    case "mercor":
      return (
        <div className="bg-gray-100 dark:bg-background rounded-full w-6 h-6 flex items-center justify-center transition-colors duration-300">
          <span className="text-gray-700 dark:text-foreground font-bold text-xs transition-colors duration-300">MD</span>
        </div>
      );
    default:
      return null;
  }
};

const OurTeam = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="w-full py-16 bg-white dark:bg-background transition-colors duration-300" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-tertiary/20 bg-tertiary/5 text-tertiary px-3 py-1 mb-4 dark:bg-tertiary/10">
            OUR EXPERTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-foreground max-w-3xl mx-auto transition-colors duration-300">
            Learn directly from industry experts with years of experience in teaching and product development
          </p>
        </div>
        {/* Mobile slider */}
        <div className="block md:hidden">
          <div className="relative flex items-center justify-center overflow-hidden" style={{height: '100%'}}>
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 bg-white dark:bg-gray-800 rounded-full shadow p-2 text-gray-700 dark:text-gray-200"
              aria-label="Previous"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <div className="w-full flex justify-center overflow-hidden" style={{maxWidth: 340, minHeight: 420}}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)`, width: `${teamMembers.length * 100}%` }}
              >
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="w-full shrink-0 flex justify-center" style={{width: '100%'}}>
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 bg-white dark:bg-gray-800 rounded-full shadow p-2 text-gray-700 dark:text-gray-200"
              aria-label="Next"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full ${current === idx ? 'bg-tertiary' : 'bg-gray-300 dark:bg-gray-700'}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    avatar: string;
    avatarFallback: string;
    bgColor: string;
    socials: { type: string; icon: string; url: string }[];
    teaches: string[];
    linkedinUrl: string;
  };
}

const TeamMemberCard = ({ member }: TeamMemberProps) => {
  return (
    <Card className="w-80 lg:w-96 mx-auto flex flex-col items-center p-8 border border-gray-100 dark:border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-neutral-900">
      {/* Avatar with colored background */}
      <div className={`rounded-full p-1 ${member.bgColor} mb-4 transition-colors duration-300`}>
        <Avatar className="w-24 h-24 border-4 border-white dark:border-border transition-colors duration-300">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.avatarFallback}</AvatarFallback>
        </Avatar>
      </div>

      {/* Name and role */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 transition-colors duration-300">{member.name}</h3>
      <p className="text-sm text-gray-600 dark:text-foreground text-center mt-1 mb-4 transition-colors duration-300">{member.role}</p>

      {/* Social icons */}
      <div className="flex items-center gap-3 mb-6">
        {member.socials.map((social, idx) => (
          <a 
            key={idx} 
            href={social.url} 
            className="hover:scale-110 transition-transform"
            aria-label={`${social.type} profile`}
          >
            <CompanyLogo type={social.icon} />
          </a>
        ))}
      </div>

      {/* Teaches section */}
      <div className="w-full">
        <p className="text-center text-gray-500 dark:text-foreground mb-2 transition-colors duration-300">Teaches</p>
        <div className="space-y-2">
          {member.teaches.map((course, idx) => (
            <p key={idx} className="text-center text-gray-800 dark:text-foreground transition-colors duration-300">{course}</p>
          ))}
        </div>
      </div>

      {/* LinkedIn profile link */}
      <a 
        href={member.linkedinUrl} 
        className="mt-6 inline-flex items-center text-tertiary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="mr-1" size={16} />
        LinkedIn profile
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="ml-1"
        >
          <path d="M7 7l9.2 9.2M17 7v10H7" />
        </svg>
      </a>
    </Card>
  );
};

export default OurTeam;
