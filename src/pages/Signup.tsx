
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Apple } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useGoogleLogin } from "@react-oauth/google";

const quotes = [
  "Travel the World, Your Way!",
  "Explore the World, Beyond Boundaries!",
  "Discover destinations of your choice with personalized journeys."
];

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully",
        description: "Welcome to JourneyGen!",
      });
      console.log('signup', {email, password, username});
      
      navigate("/");
    }, 1500);
  };

   const googleLogin = useGoogleLogin({
      onSuccess: (tokenResponse) => {console.log(tokenResponse); navigate("/"), toast({title: "Sign successfully",})},
      onError: () => console.log('Login Failed'),
    });

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Left section with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10 p-4 md:p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Sign up with Open account</h2>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="w-full flex items-center justify-center py-5 hover:bg-gray-50 hover:border-travel transition-all">
                <Apple className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="w-full flex items-center justify-center py-5 hover:bg-gray-50 hover:border-travel transition-all" onClick={() => googleLogin()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </Button>
            </motion.div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full absolute"></div>
              <div className="bg-white px-4 z-10 text-sm text-gray-500">or</div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSignup}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700">Username</Label>
                <Input
                  id="username"
                  placeholder="eli_trekker"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-gray-200 focus:border-travel focus:ring-travel transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input
                  id="email"
                  placeholder="your.email@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-gray-200 focus:border-travel focus:ring-travel transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-gray-200 focus:border-travel focus:ring-travel transition-all pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 top-1 h-8 w-8 text-gray-500 hover:text-travel"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-travel hover:bg-travel-dark text-white py-6"
                disabled={isLoading} >
                {isLoading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                    Creating account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
              <div className="text-center text-sm mt-2 text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-travel hover:underline">
                  Log In
                </Link>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* Right section with image */}
      <div className="hidden md:block md:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80')" }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-travel/60 to-black/10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-20 left-10 right-10 z-10 bg-white/80 backdrop-blur-md p-5 rounded-xl shadow-lg max-w-sm"
        >
          <div className="bg-travel/10 text-travel inline-flex items-center justify-center p-1 px-2 rounded-md mb-2">
            <span className="text-xs font-medium">Travel the World</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{quote}</h3>
          <p className="text-gray-600 text-sm mt-1">Start your adventure today!</p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute top-10 right-10 flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-md rounded-full"
        >
          <div className="w-2 h-2 bg-travel rounded-full animate-ping-slow"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
