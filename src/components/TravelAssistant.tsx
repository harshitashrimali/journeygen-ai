
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  X, 
  Send, 
  MapPin, 
  Plane, 
  Hotel, 
  Calendar,
  Sun,
  RefreshCw
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  type: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const TravelAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      text: 'Hi there! I\'m your AI travel assistant. How can I help with your trip planning today?',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const toggleAssistant = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I'd recommend visiting Kyoto in April for cherry blossoms. The weather is mild and it's less crowded than Tokyo.",
        "For a family of 4 to Paris, I'd budget around $8,000 for a week, including flights, accommodation, food, and activities.",
        "The Amalfi Coast is gorgeous in September. The summer crowds are gone, but the weather is still warm enough for swimming.",
        "Based on your preferences, I'd suggest a boutique hotel in Barcelona's Gothic Quarter. It's central and full of character.",
        "For adventure travel in New Zealand, December through February offers the best hiking conditions."
      ];
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        type: 'ai',
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Sample suggestion chips
  const suggestions = [
    { icon: <MapPin size={14} />, text: "Best time to visit Bali?" },
    { icon: <Plane size={14} />, text: "Cheap flights to Europe" },
    { icon: <Hotel size={14} />, text: "Luxury hotels in Santorini" },
    { icon: <Calendar size={14} />, text: "10-day Japan itinerary" },
    { icon: <Sun size={14} />, text: "Weather in Thailand in November" }
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    // Optional: auto-submit the suggestion
    // setInputValue(suggestion);
    // handleSendMessage({ preventDefault: () => {} } as React.FormEvent);
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleAssistant}
        className={`fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-travel hover:bg-travel-dark'
        } transition-all duration-300`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Chat interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-md"
          >
            <div className="neo-blur rounded-2xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-xl">
              {/* Header */}
              <div className="bg-travel/90 backdrop-blur-sm p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative mr-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-travel"></span>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">AI Travel Assistant</h3>
                    <p className="text-xs text-white/70">Always online</p>
                  </div>
                </div>
                <button onClick={toggleAssistant} className="text-white/70 hover:text-white">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="bg-white/5 backdrop-blur-md h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                      <div
                      className={`max-w-xs rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-travel text-white rounded-tr-none'
                          : 'bg-white/10 backdrop-blur-sm text-gray-100 rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 backdrop-blur-sm text-gray-100 rounded-2xl rounded-tl-none max-w-xs px-4 py-3">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messageEndRef} />
              </div>

              {/* Suggestion chips */}
              <div className="bg-black/10 backdrop-blur-lg p-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex space-x-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion.text)}
                      className="flex items-center space-x-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1.5 transition"
                    >
                      {suggestion.icon}
                      <span>{suggestion.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleSendMessage} className="p-3 bg-black/20 backdrop-blur-lg flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Ask anything about your trip..."
                  className="bg-white/10 border-white/10 text-white placeholder:text-white/50 rounded-full"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  className="rounded-full bg-travel hover:bg-travel-dark"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>

              {/* Powered by message */}
              <div className="text-center py-2 text-xs text-white/50 bg-black/30">
                Powered by JourneyGen AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TravelAssistant;
