import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Navbar";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-white dark:bg-background border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="h-10 mb-2" />
           
            <p className="text-gray-600 dark:text-foreground text-sm">
              Transform your career with our intensive coding bootcamps. Learn from industry experts and build real-world projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-tertiary dark:text-foreground dark:hover:text-tertiary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tertiary dark:text-foreground dark:hover:text-tertiary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tertiary dark:text-foreground dark:hover:text-tertiary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-tertiary dark:text-foreground dark:hover:text-tertiary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Programs</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  Java Full-Stack
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  MERN Stack
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  DevOps
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  Free Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          {/* Newsletter subscription form moved to Enrollment section */}
        </div>

        <Separator className="my-8 dark:bg-gray-800" />

        {/* Contact Info & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center text-sm text-gray-600 dark:text-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              Bengaluru, Karnataka, India
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-foreground">
              <Phone className="h-4 w-4 mr-2" />
              91 8797979773
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-foreground">
              <Mail className="h-4 w-4 mr-2" />
              hello@gmail.com
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-foreground hover:text-tertiary dark:hover:text-tertiary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        <Separator className="my-6 dark:bg-gray-800" />

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-foreground">
            © 2025 Xworkz. All rights reserved. Built with passion for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;