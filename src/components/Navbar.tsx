import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

// Reusable Logo component
export const Logo = ({ className = "" }) => (
  <img
    src="assets/xworkz-logo.png"
    alt="Xworkz Logo"
    className={`h-12 w-auto ${className}`}
    style={{ maxHeight: '50px' }}
  />
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-white/95 dark:bg-background/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100 dark:border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="dark:bg-background">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="dark:text-white dark:hover:bg-gray-800 dark:hover:text-white dark:focus:bg-gray-800">Programs</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 dark:bg-background">
                      <NavigationMenuLink asChild className="group">
                        <a href="#" className="block p-3 space-y-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                          <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-tertiary">
                            Java Full-Stack
                          </div>
                          <p className="text-xs text-gray-500 dark:text-foreground">
                            Master Java, Spring Boot, React, and more
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="group">
                        <a href="#" className="block p-3 space-y-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                          <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-tertiary">
                            MERN Stack
                          </div>
                          <p className="text-xs text-gray-500 dark:text-foreground">
                            MongoDB, Express, React, and Node.js
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="group">
                        <a href="#" className="block p-3 space-y-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                          <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-tertiary">
                            Data Science
                          </div>
                          <p className="text-xs text-gray-500 dark:text-foreground">
                            Python, Data Analysis, Machine Learning
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild className="group">
                        <a href="#" className="block p-3 space-y-1 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                          <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-tertiary">
                            DevOps
                          </div>
                          <p className="text-xs text-gray-500 dark:text-foreground">
                            CI/CD, Docker, Kubernetes, Cloud
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="dark:text-white dark:hover:bg-gray-800 dark:hover:text-white dark:focus:bg-gray-800">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-4 dark:bg-background">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 text-sm hover:bg-gray-50 dark:hover:bg-background dark:text-foreground rounded">
                            Softwares
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 text-sm hover:bg-gray-50 dark:hover:bg-background rounded">
                            Branches
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 text-sm hover:bg-gray-50 dark:hover:bg-background rounded">
                            Interview Guide
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block p-2 text-sm hover:bg-gray-50 dark:hover:bg-background rounded">
                            Events
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "dark:text-white dark:hover:bg-gray-800")}>
                    <a href="#">About</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "dark:text-white dark:hover:bg-gray-800")}>
                    <a href="#">Contact</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button className="bg-tertiary hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
          {/* Programs Dropdown */}
          <div>
            <button
              onClick={() => setProgramsOpen(!programsOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Programs
              <ChevronDown className={cn("h-4 w-4 transition-transform", programsOpen && "rotate-180")} />
            </button>
            {programsOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  <div className="font-medium">Java Full-Stack</div>
                  <p className="text-xs text-gray-500 dark:text-foreground">Master Java, Spring Boot, React, and more</p>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  <div className="font-medium">MERN Stack</div>
                  <p className="text-xs text-gray-500 dark:text-foreground">MongoDB, Express, React, and Node.js</p>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  <div className="font-medium">Data Science</div>
                  <p className="text-xs text-gray-500 dark:text-foreground">Python, Data Analysis, Machine Learning</p>
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  <div className="font-medium">DevOps</div>
                  <p className="text-xs text-gray-500 dark:text-foreground">CI/CD, Docker, Kubernetes, Cloud</p>
                </a>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div>
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Resources
              <ChevronDown className={cn("h-4 w-4 transition-transform", resourcesOpen && "rotate-180")} />
            </button>
            {resourcesOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  Blog
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  Success Stories
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  Free Tutorials
                </a>
                <a href="#" className="block px-3 py-2 text-sm text-gray-600 dark:text-foreground hover:bg-gray-50 dark:hover:bg-background rounded-md">
                  Events
                </a>
              </div>
            )}
          </div>

          {/* Simple Links */}
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Contact
          </a>
          
          {/* Mobile CTA Button */}
          <div className="mt-4 px-3">
            <Button className="w-full bg-tertiary hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
