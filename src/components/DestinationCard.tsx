
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  id: number;
  name: string;
  country: string;
  image: string;
  rating: number;
  price: number;
  index?: number;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  name, 
  country, 
  image, 
  rating, 
  price,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
      className="group overflow-hidden rounded-2xl hover-lift"
    >
      <div className="relative h-64 md:h-80 image-container overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
        <img 
          src={image} 
          alt={`${name}, ${country}`} 
          className="w-full h-full object-cover image-scale"
        />
        
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <div className="flex items-center space-x-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white text-sm ml-1">{rating.toFixed(1)}</span>
          </div>
          
          <h3 className="text-white text-xl font-bold">{name}</h3>
          <p className="text-white/80 text-sm">{country}</p>
          
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-white text-lg font-bold">₹{price.toLocaleString()}</span>
              <span className="text-white/70 text-sm ml-1">avg/person</span>
            </div>
            
            <div className="rounded-full bg-travel/20 group-hover:bg-travel p-2 transform transition-all duration-300">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
