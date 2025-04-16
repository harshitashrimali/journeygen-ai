import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPin, Users, Search, X } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

interface Destination {
  id: string;
  name: string;
}

const SearchDestination = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [travelers, setTravelers] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [destinationInput, setDestinationInput] = useState("");
  const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

 useEffect(() => {
    const fetchDestinations = async () => {
      setIsLoading(true);
      try { 
      
        // const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,cca2");
        // const data = await response.json();

        // if (Array.isArray(data)) {
        //   const formattedDestinations = data
        //     .filter((country) => country.capital && country.capital.length > 0)
        //     .flatMap((country) =>
        //       country.capital.map((capital: string) => ({
        //         id: `${country.cca2.toLowerCase()}-${capital.toLowerCase().replace(/\s+/g, "-")}`,
        //         name: `${capital}, ${country.name.common}`,
        //       }))
        //     )
        //     .sort((a: Destination, b: Destination) => a.name.localeCompare(b.name));

        //   (formattedDestinations); // Store API destinations separately
        // }

        const indianDestinations = [
          { id: "delhi", name: "Delhi, India" },
          { id: "mumbai", name: "Mumbai, India" },
          { id: "bangalore", name: "Bangalore, India" },
          { id: "kolkata", name: "Kolkata, India" },
          { id: "chennai", name: "Chennai, India" },
          { id: "hyderabad", name: "Hyderabad, India" },
          { id: "jaipur", name: "Jaipur, India" },
          { id: "agra", name: "Agra, India" },
          { id: "varanasi", name: "Varanasi, India" },
          { id: "goa", name: "Goa, India" },
          { id: "udaipur", name: "Udaipur, India" },
          { id: "rishikesh", name: "Rishikesh, India" },
          { id: "amritsar", name: "Amritsar, India" },
          { id: "shimla", name: "Shimla, India" },
          { id: "manali", name: "Manali, India" },
          { id: "darjeeling", name: "Darjeeling, India" },
          { id: "kochi", name: "Kochi, India" },
          { id: "mysore", name: "Mysore, India" },
          { id: "pondicherry", name: "Pondicherry, India" },
          { id: "hampi", name: "Hampi, India" },
          { id: "khajuraho", name: "Khajuraho, India" },
          { id: "ajanta", name: "Ajanta Caves, India" },
          { id: "ellora", name: "Ellora Caves, India" },
          { id: "rann-of-kutch", name: "Rann of Kutch, India" },
          { id: "kaziranga", name: "Kaziranga National Park, India" },
          { id: "ladakh", name: "Ladakh, India" },
          { id: "munnar", name: "Munnar, India" },
          { id: "coorg", name: "Coorg, India" },
          { id: "ooty", name: "Ooty, India" },
          { id: "pushkar", name: "Pushkar, India" },
          { id: "haridwar", name: "Haridwar, India" },
          { id: "dehradun", name: "Dehradun, India" },
          { id: "ahmedabad", name: "Ahmedabad, India" },
          { id: "lucknow", name: "Lucknow, India" },
          { id: "aurangabad", name: "Aurangabad, India" },
          { id: "andaman", name: "Andaman Islands, India" },
          { id: "lakshadweep", name: "Lakshadweep Islands, India" },
          { id: "puri", name: "Puri, India" },
          { id: "konark", name: "Konark, India" },
          { id: "mahabalipuram", name: "Mahabalipuram, India" }
        ];
        
        setAllDestinations(indianDestinations);
      } catch (error) {
        console.error("Error fetching destinations:", error);
        toast({
          title: "Failed to load destinations",
          description: "Could not retrieve the list of destinations.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, [toast]);

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
  e.preventDefault(); // Prevent page reload

  const errors = [
    { condition: selectedDestinations.length === 0, title: "No Destination Selected", description: "Please add at least one destination before submitting." },
    { condition: !date?.from, title: "Start Date Missing", description: "Please select a start date for your journey." },
    { condition: !date?.to, title: "End Date Missing", description: "Please select an end date for your journey." },
    { condition: date?.to && date?.from && date.to < date.from, title: "Invalid Date Range", description: "The end date cannot be before the start date." },
    { condition: true, title: "ok", description: "Te." }
  ];

  const error = errors.find((err) => err.condition);
  if (error) {
    toast({ ...error, variant: "destructive", duration: 5000 });
    return;
  }

  console.log("Searching for:", { selectedDestinations, date, travelers });
};

  

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="glass-card rounded-2xl p-4 md:p-6 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Destination dropdown */}
          <div className="relative">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
              Where to?
            </label>
            <div className="relative">
            <MapPin className="absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-black-400" />
                <Input
                  className="w-full pl-10 h-12 rounded-xl border-gray-200 text-black-400 placeholder:text-gary"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="e.g. Udaipur, jaipur, ajmer"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (destinationInput.trim() && !selectedDestinations.includes(destinationInput)) {
                        setSelectedDestinations([...selectedDestinations, destinationInput]);
                        setDestinationInput("");
                      }
                    }
                  }}
                />

                {/* Show filtered destination suggestions */}
                {destinationInput && (
                  <div className="absolute left-0 right-0 bg-white border border-gray-200 shadow-md rounded-md mt-1 max-h-48 overflow-y-auto z-10">
                    {allDestinations
                      .filter((destination) =>
                        destination.name.toLowerCase().includes(destinationInput.toLowerCase())
                      )
                      .slice(0, 5) // Show only 5 suggestions
                      .map((destination) => (
                        <div
                          key={destination.id}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            if (!selectedDestinations.includes(destination.name)) {
                              setSelectedDestinations([...selectedDestinations, destination.name]);
                              setDestinationInput("");
                            }
                          }}
                        >
                          {destination.name}
                        </div>
                      ))}
                  </div>
                )}

                {/* Selected destinations */}
                {selectedDestinations.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedDestinations.map((destination, index) => (
                      <div key={index} className="flex items-center bg-gray-100 p-2 rounded-lg">
                        <span className="mr-2">{destination}</span>
                        <X
                          className="cursor-pointer text-red-500 h-5 w-5"
                          onClick={() =>
                            setSelectedDestinations(selectedDestinations.filter((_, i) => i !== index))
                          }
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
          </div>

          {/* Date selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              When?
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left h-12 rounded-xl border-gray-200",
                    !date && "text-gray-500"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? (
                    date.to ? (
                      <>
                        {format(date.from, "MMM d, yyyy")} - {format(date.to, "MMM d, yyyy")}
                      </>
                    ) : (
                      format(date.from, "MMM d, yyyy")
                    )
                  ) : (
                    "Select travel dates"
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-xl" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  initialFocus
                  className="rounded-xl"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Travelers input */}
          <div className="relative">
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
              Travelers
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                id="travelers"
                className="w-full pl-10 h-12 rounded-xl border-gray-200 bg-white focus:ring-2 focus:ring-travel focus:border-travel"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Traveler' : 'Travelers'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Search button */}
        <div className="mt-6 flex justify-center">
          <Button 
            type="submit" 
            className="bg-travel hover:bg-travel-dark text-white font-medium px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            <Search className="mr-2 h-5 w-5 group-hover:animate-ping-slow" />
            Find Your Journey
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchDestination;
