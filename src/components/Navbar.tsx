
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Search, User, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-travel" />
            <span className="font-semibold text-xl tracking-tight">Journey<span className="text-travel">Gen</span></span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/destinations" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">
              Destinations
            </Link>
            <Link to="/flights" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">
              Flights
            </Link>
            <Link to="/hotels" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">
              Hotels
            </Link>
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
            </Link>
            <Link to="/plan-trip">
              <Button variant="default" className="bg-travel hover:bg-travel-dark rounded-full shadow-sm">
                Plan a Trip
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="neo-blur md:hidden mt-2 p-4 mx-4 rounded-xl animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/destinations" 
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/flights" 
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flights
            </Link>
            <Link 
              to="/hotels" 
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hotels
            </Link>
            <Link 
              to="/itineraries" 
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Itineraries
            </Link>
            <div className="pt-2 flex items-center justify-between">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
              <Link to="/plan-trip" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="bg-travel hover:bg-travel-dark rounded-full shadow-sm">
                  Plan
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
