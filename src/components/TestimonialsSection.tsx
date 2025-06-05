import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  testimonial: string;
  avatarUrl: string;
  avatarFallback: string;
  bgColor?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  companyLogo,
  testimonial,
  avatarUrl,
  avatarFallback,
  bgColor = "bg-white"
}) => {
  // For dark mode, adjust the background color
  const darkBgColor = bgColor.replace('bg-blue-50', 'dark:bg-blue-900/30')
    .replace('bg-pink-50', 'dark:bg-pink-900/30')
    .replace('bg-yellow-50', 'dark:bg-yellow-900/30');

  return (
    <Card className={`${bgColor} dark:bg-neutral-900 border border-gray-100 dark:border-border rounded-xl hover:shadow-md transition-shadow overflow-hidden`}>
      <div className="relative">
        <div className="absolute top-6 left-6 opacity-10">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 0L64 32L32 64L0 32L32 0Z" fill="currentColor" />
          </svg>
        </div>
        
        <CardContent className="p-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Avatar className={`h-16 w-16 ring-4 ring-white dark:ring-gray-800`}>
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback>{avatarFallback}</AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{name}</h3>
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{role}</p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">{testimonial}</p>
            
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
              {/* <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-gray-50 dark:bg-background text-gray-500 dark:text-foreground transition-colors duration-300">Post</Badge>
                <span className="text-sm text-gray-500 dark:text-foreground transition-colors duration-300">Coding Ninjas</span>
              </div> */}
              
              <div className="flex items-center">
                <ArrowRight className="h-5 w-5 text-gray-400 dark:text-foreground transition-colors duration-300" />
                {companyLogo && (
                  <img src={companyLogo} alt={company} className="h-8 ml-4" />
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Samir Sayyed",
      role: "Product Engineer",
      company: "Phenom People",
      companyLogo: "assets/infosys_logo.png",
      testimonial: "As I wanted to switch my career from Mechanical to IT, I joined bootcamp. My goal was to learn full stack development and get placed in a good company with a good package. After completing this bootcamp you will be capable of cracking any interview and ready to work in the industry.",
      avatarUrl: "https://i.pravatar.cc/300?img=11",
      avatarFallback: "SS",
      bgColor: "bg-blue-50 dark:bg-blue-900/30"
    },
    {
      name: "Manikanta Sura",
      role: "Application Management Analyst",
      company: "AXA",
      companyLogo: "assets/accenture_logo.png",
      testimonial: "I was inspired by the way things were explained during the 1st session which boosted my confidence. My goal was to have good technical knowledge to transform my career. It was overall a very good support and helped me to gain a new job.",
      avatarUrl: "https://i.pravatar.cc/300?img=12",
      avatarFallback: "MS",
      bgColor: "bg-pink-50 dark:bg-pink-900/30"
    },
    {
      name: "Rashid Khan",
      role: "Senior Software Engineer",
      company: "Oracle",
      companyLogo: "assets/kpmg_logo.png",
      testimonial: "Before joining the bootcamp I was trying to learn development on my own but I was always hitting a dead end. CN helped me figure out what exactly I needed to learn to be a good developer and get a job. The program was very well organised. It motivated me to be consistent and study.",
      avatarUrl: "https://i.pravatar.cc/300?img=13",
      avatarFallback: "RK",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/30"
    }
  ];

  const testimonialCards = testimonials.map((t, idx) => ({
    key: idx,
    content: (
      <Card className={`${t.bgColor} rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden p-4 min-h-[220px] flex flex-col justify-between`}>
        <div className="flex items-center gap-3 mb-2">
          <Avatar className="h-12 w-12 ring-2 ring-white dark:ring-gray-800">
            <AvatarImage src={t.avatarUrl} alt={t.name} />
            <AvatarFallback>{t.avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white transition-colors duration-300">{t.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">{t.role}</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug mb-3 transition-colors duration-300 line-clamp-4">{t.testimonial}</p>
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
          {/* <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-gray-50 dark:bg-background text-gray-500 dark:text-foreground transition-colors duration-300">Post</Badge>
            <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Xworkz</span>
          </div> */}
          <div className="flex items-center">
            <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500 transition-colors duration-300" />
            {t.companyLogo && (
              <img src={t.companyLogo} alt={t.company} className="h-6 ml-2" />
              
            )}
          </div>
        </div>
      </Card>
    )
  }));

  return (
    <section className="py-16 bg-gray-50 dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="border-tertiary/20 bg-tertiary/5 text-tertiary px-3 py-1 mb-4 dark:bg-tertiary/10">
            SUCCESS STORIES
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">What Our Graduates Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Our alumni have gone on to achieve great success in top companies. 
            Here's what they have to say about their journey with us.
          </p>
        </div>
        <InfiniteMovingCards
          items={testimonialCards}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className=""
          renderItem={(item: any, idx: number) => item.content}
        />
        <div className="mt-0" />
        <InfiniteMovingCards
          items={testimonialCards}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className=""
          renderItem={(item: any, idx: number) => item.content}
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
