import { motion } from 'framer-motion';
import SearchDestination from './SearchDestination';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-multiply"
          style={{ backdropFilter: 'blur(1px)' }}
        />
        <img 
          src="https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Travel background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm md:text-base font-medium rounded-full bg-white/20 backdrop-blur-sm border border-white/20 py-2 px-4 inline-block text-white mb-4"
              >
                Your Personal AI Travel Buddy
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-4"
              >
                Discover the world with
                <br />
                <span className="text-travel bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                  intelligent travel planning
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
              >
               Multiple destinations, real-time weather, smart hotel picks, and local experiences – all in one beautifully simple platform.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8"
            >
              <SearchDestination />
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#f8fafc" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
