import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowRight, GraduationCap, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  background: z.string().optional(),
  preferredCourse: z.string().min(1, {
    message: "Please select your preferred course.",
  }),
  marketingConsent: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const EnrollmentForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      background: "",
      preferredCourse: "Java Full Stack Developer",
      marketingConsent: false,
    },
  });

  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const handleNewsletterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", newsletterEmail);
    setNewsletterEmail("");
  };

  function onSubmit(data: FormValues) {
    console.log(data);
    toast.success("Enrollment submitted successfully!", {
      description: "We'll contact you shortly to confirm your enrollment.",
    });
    form.reset();
  }

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-white dark:bg-background animate-fade-in transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm text-purple-700 dark:text-purple-300 animate-scale-in transition-colors duration-300">
            Enrollment Form
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white animate-slide-in-right transition-colors duration-300">
            Start Your Coding Journey Today
          </h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
            Fill out the form below to enroll in our bootcamp program. Our team will contact you with more information.
          </p>
        </div>
        
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2 items-start">
          {/* Left column: Expert Instruction + Newsletter */}
          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-gray-200 dark:border-border bg-slate-50 dark:bg-background p-6 shadow-sm transition-colors duration-300">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <GraduationCap className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Expert Instruction</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Learn from industry professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <ArrowRight className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">Job Placement</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">We'll help you find a job after completing the program</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <User className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">1-on-1 Mentoring</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Get personalized guidance and support throughout the program</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Newsletter Subscription below Expert Instruction */}
            <div className="space-y-4 bg-white dark:bg-background rounded-lg p-6 border border-gray-200 dark:border-border shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Stay Updated</h4>
              <p className="text-gray-600 dark:text-foreground text-sm">
                Subscribe to our newsletter for the latest updates and coding tips.
              </p>
              <form onSubmit={handleNewsletterSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="pl-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-tertiary hover:bg-orange-600 text-white"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          {/* Right column: Enrollment Form */}
          <div className="rounded-lg border border-gray-200 dark:border-border bg-white dark:bg-background p-6 shadow-sm animate-scale-in transition-colors duration-300">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                      <FormLabel className="text-gray-900 dark:text-foreground transition-colors duration-300">Full Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                          <Input placeholder="John Doe" className="pl-10 bg-white dark:bg-background border-gray-200 dark:border-border text-gray-900 dark:text-foreground transition-colors duration-300" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 dark:text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                      <FormLabel className="text-gray-900 dark:text-foreground transition-colors duration-300">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                          <Input placeholder="johndoe@example.com" className="pl-10 bg-white dark:bg-background border-gray-200 dark:border-border text-gray-900 dark:text-foreground transition-colors duration-300" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 dark:text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in" style={{ animationDelay: "300ms" }}>
                      <FormLabel className="text-gray-900 dark:text-foreground transition-colors duration-300">Phone</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                          <Input placeholder="(123) 456-7890" className="pl-10 bg-white dark:bg-background border-gray-200 dark:border-border text-gray-900 dark:text-foreground transition-colors duration-300" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage className="text-red-500 dark:text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="background"
                  render={({ field }) => (
                    <FormItem className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                      <FormLabel className="text-gray-900 dark:text-foreground transition-colors duration-300">Educational Background</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your educational background and any previous coding experience"
                          className="resize-none bg-white dark:bg-background border-gray-200 dark:border-border text-gray-900 dark:text-foreground transition-colors duration-300"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-gray-500 dark:text-foreground transition-colors duration-300">
                        This helps us understand your starting point
                      </FormDescription>
                      <FormMessage className="text-red-500 dark:text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="marketingConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 animate-fade-in" style={{ animationDelay: "500ms" }}>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-gray-900 dark:text-foreground transition-colors duration-300">
                          I agree to receive promotional emails about upcoming bootcamps
                        </FormLabel>
                        <FormDescription className="text-gray-500 dark:text-foreground transition-colors duration-300">
                          You can unsubscribe at any time
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full transition-all duration-300 hover:translate-y-[-2px] animate-scale-in bg-tertiary text-white hover:bg-orange-600"
                  style={{ animationDelay: "600ms" }}
                >
                  Submit Enrollment
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentForm;
