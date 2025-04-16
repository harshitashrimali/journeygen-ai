
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import TravelAssistant from '@/components/TravelAssistant';
import DestinationCard from '@/components/DestinationCard';
import { motion } from 'framer-motion';
import {  Globe,  Sparkles,  Compass,  Star, Zap, Clock, Shield, Heart,Plane,Hotel,Map, Umbrella} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Featured destinations data
  const featuredDestinations = [
    {
      id: 1,
      name: "Kyoto",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      price: 1850,
    },
    {
      id: 2,
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1507501336603-6e31db2be093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4.9,
      price: 2100,
    },
    {
      id: 3,
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1938&q=80",
      rating: 4.7,
      price: 1200,
    },
    {
      id: 4,
      name: "Swiss Alps",
      country: "Switzerland",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      rating: 4.8,
      price: 2300,
    },
  ];

  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero section */}
      <Hero />
      
      {/* Features section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-medium text-travel mb-3">WHY CHOOSE US</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Travel planning reimagined with AI</h3>
              <p className="text-gray-600 text-lg">
                Our intelligent platform learns your preferences and creates personalized travel experiences that perfectly match your style.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Sparkles className="h-10 w-10 text-travel" />, 
                title: "Personalized Recommendations", 
                description: "Our AI learns your preferences and suggests destinations you'll love."
              },
              { 
                icon: <Clock className="h-10 w-10 text-travel" />, 
                title: "Save Time Planning", 
                description: "Create complete itineraries in minutes instead of hours of research."
              },
              { 
                icon: <Zap className="h-10 w-10 text-travel" />, 
                title: "Real-time Updates", 
                description: "Get instant alerts about flight changes, weather, and travel advisories."
              },
              { 
                icon: <Shield className="h-10 w-10 text-travel" />, 
                title: "Travel With Confidence", 
                description: "24/7 AI support to help with any questions or issues during your trip."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover-lift"
              >
                <div className="mb-4 rounded-full bg-travel/10 p-3 inline-block">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured destinations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm font-medium text-travel mb-3">EXPLORE DESTINATIONS</h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Trending destinations</h3>
                <p className="text-gray-600 text-lg">
                  Discover the most popular destinations loved by travelers around the world.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <button className="mt-4 md:mt-0 text-travel hover:text-travel-dark font-medium flex items-center space-x-1 group">
                <span>View all destinations</span>
                <Compass className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <DestinationCard 
                key={destination.id} 
                {...destination} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-medium text-travel mb-3">HOW IT WORKS</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Plan your perfect trip in 3 simple steps</h3>
              <p className="text-gray-600 text-lg">
                Our AI-powered platform makes travel planning effortless and personalized to your preferences.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line on desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200 z-0"></div>
            
            {[
              { 
                icon: <Globe className="h-12 w-12 text-white" />, 
                title: "Tell us about your dream trip", 
                description: "Share your travel preferences, budget, and dates with our AI assistant."
              },
              { 
                icon: <Sparkles className="h-12 w-12 text-white" />, 
                title: "Get personalized recommendations", 
                description: "Review AI-curated destinations, flights, hotels, and activities tailored to you."
              },
              { 
                icon: <Heart className="h-12 w-12 text-white" />, 
                title: "Book and enjoy your journey", 
                description: "Confirm your selections, receive your personalized itinerary, and start exploring."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className="bg-travel rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  {step.icon}
                </div>
                <span className="bg-travel text-white text-sm font-medium px-3 py-1 rounded-full mb-4">Step {index + 1}</span>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Travel categories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-medium text-travel mb-3">TRAVEL YOUR WAY</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Experiences for every type of traveler</h3>
              <p className="text-gray-600 text-lg">
                Whether you're an adventure seeker, luxury traveler, or exploring with family, we've got you covered.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Flights",
                icon: <Plane className="h-8 w-8 text-travel" />,
                description: "Find the best deals on flights to anywhere in the world",
                color: "bg-blue-50"
              },
              {
                title: "Hotels",
                icon: <Hotel className="h-8 w-8 text-travel" />,
                description: "Discover accommodations that match your style and budget",
                color: "bg-indigo-50"
              },
              {
                title: "Itineraries",
                icon: <Map className="h-8 w-8 text-travel" />,
                description: "Get day-by-day plans customized to your interests",
                color: "bg-purple-50"
              },
              {
                title: "Weather",
                icon: <Umbrella className="h-8 w-8 text-travel" />,
                description: "Know what to pack with accurate weather forecasts",
                color: "bg-cyan-50"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${category.color} p-6 rounded-2xl hover-lift`}
              >
                <div className="mb-4">{category.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{category.title}</h4>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-travel">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to start your journey?
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                Join thousands of travelers who are exploring the world with personalized recommendations from JourneyGen AI.
              </p>
              <Link to="/plan-trip">
                <button className="bg-white text-travel hover:bg-gray-100 font-medium px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  Plan Your Trip Now
                </button>
              </Link>
              <div className="pt-6 flex flex-wrap justify-center gap-8 text-white">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>4.9/5 from 2,500+ reviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-white" />
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-white" />
                  <span>24/7 AI support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
      <TravelAssistant />
    </div>
  );
};

export default Index;
