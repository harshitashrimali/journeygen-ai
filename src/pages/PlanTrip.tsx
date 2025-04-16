import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import { DateRange } from "react-day-picker";
import {  CalendarIcon, ArrowRight, UserPlus, X, MapPin } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Destination {
  id: string;
  name: string;
}


const formSchema = z.object({
  destination: z.string().min(3, { message: "Destination is required." }),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});


const PlanTrip = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<DateRange | undefined>({ from: undefined, to: undefined });
  const [isLoading, setIsLoading] = useState(true);
  const [showInvite, setShowInvite] = useState(false);
  const [tripmates, setTripmates] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [showNewGuide, setShowNewGuide] = useState(false)
  const [newTravelGuide, setNewTravelGuide] = useState("")
  const [destinationInput, setDestinationInput] = useState("");
  const [allDestinations, setAllDestinations] = useState<Destination[]>([]);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,cca2");
        const data = await response.json();

        if (Array.isArray(data)) {
          const formattedDestinations = data
            .filter((country) => country.capital && country.capital.length > 0)
            .flatMap((country) =>
              country.capital.map((capital: string) => ({
                id: `${country.cca2.toLowerCase()}-${capital.toLowerCase().replace(/\s+/g, "-")}`,
                name: `${capital}, ${country.name.common}`,
              }))
            )
            .sort((a: Destination, b: Destination) => a.name.localeCompare(b.name));

          setAllDestinations(formattedDestinations); // Store API destinations separately
        }
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


  const onSubmit = () => {
    if (selectedDestinations.length === 0) {
      toast({
        title: "No Destination Selected",
        description: "Please add at least one destination before submitting.",
        variant: "destructive",
      });
      return;
    }
  
    const tripDetails = {
      destinations: selectedDestinations,
      startDate: date?.from ? format(date.from, "yyyy-MM-dd") : "",
      endDate: date?.to ? format(date.to, "yyyy-MM-dd") : "",
      tripmates,
    };
  
    console.log("Trip Details:", tripDetails);
  
    toast({
      title: "Trip planned successfully!",
      description: `Your trip to "${selectedDestinations.join(", ")}" has been saved.`,
    });
  
   // setTimeout(() => navigate("/"), 1500);
  };
  

  const addTripmate = () => {
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setTripmates([...tripmates, email]);
      setEmail("");
    } else {
      toast({ title: "Invalid Email", description: "Please enter a valid email.", variant: "destructive" });
    }
  };

  const removeTripmate = (index: number) => {
    setTripmates(tripmates.filter((_, i) => i !== index));
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Navbar />
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full text-center mt-5">

      <form onSubmit={(e) => { e.preventDefault();  onSubmit(); }}>
          {/* Destination Selection */}
          {!showNewGuide && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold mb-6">Plan a new trip</h2>
              <div className="relative">
              <MapPin className="absolute left-3 top-5 -translate-y-1/2 h-5 w-5 text-black-400" />
                <Input
                  className="w-full pl-10  border border-gray-300 rounded-lg placeholder:text-black"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="Search and add destinations"
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




              {/* Date Selection */}
              <div className="flex flex-col items-center justify-center ">
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

                  <PopoverContent className="w-full min-w-[280px] md:min-w-[400px] p-0 rounded-xl">
                    <Calendar
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                      initialFocus
                      className="w-full"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid items-center text-gray-600 text-sm">
                {/* Tripmates Section */}
                <div className="text-left">
                  <button type="button" className="text-blue-500 flex items-center" onClick={() => setShowInvite(!showInvite)}>
                    <UserPlus className="h-4 w-4 mr-1" /> + Invite Tripmates
                  </button>
                  {showInvite && (
                    <div className="mt-2  w-full">
                      {/* Email Input & Add Button */}
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full">
                        <Input
                          className="w-full sm:flex-1 p-2 border border-gray-300 rounded-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                        />
                        <Button className="w-full sm:w-auto px-4 py-2" onClick={addTripmate}>
                          Add
                        </Button>
                      </div>

                      {/* List of Invited Tripmates */}
                      <div className="w-full">
                        {tripmates.map((mate, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mt-2 w-full"
                          >
                            <span className="truncate w-4/5">{mate}</span>
                            <X
                              className="cursor-pointer text-red-500 h-5 w-5"
                              onClick={() => removeTripmate(index)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>


                  )}
                </div>
              </div>

              <Button type="submit" className="w-full bg-travel hover:bg-travel-dark">
                Create Trip <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

              <p className="text-ml font-medium text-gray-700 mt-4" onClick={() => setShowNewGuide(!showNewGuide)}>
                Or <a href="#" className="hover:underline">write a new guide</a>
              </p>
            </div>
          )}

          <div className="bg-white rounded-lg max-w-4xl w-full text-center mt-5">
            {showNewGuide && (
              <div className="mt-2 w-full space-y-4">
                <h2 className="text-3xl font-bold mb-6">Write a travel guide</h2>
                <div>
                  <label className="block text-left font-medium text-gray-700">Where to?</label>
                  <div className=" grid items-center text-gray-600 text-sm space-y-2 sm:space-y-0 sm:space-x-2 w-full mt-2">
                    <Input
                      className="w-full sm:flex-1 p-2 py-4 h-14 border border-gray-300 rounded-lg"
                      value={newTravelGuide}
                      onChange={(e) => setNewTravelGuide(e.target.value)}
                      placeholder="E.g. Rajasthan , punjab, Gujarat"
                    />
                  </div>
                </div>
                <Button type="submit" className="max-w-9xl  bg-travel hover:bg-travel-dark mt-3">
                  Start Writring
                </Button>

                <p className="text-ml font-medium text-gray-700 mt-4" onClick={() => setShowNewGuide(!showNewGuide)}>
                  Or <a href="#" className="hover:underline">start planning a trip </a>
                </p>
              </div>
            )}
          </div>
        </form>


      </div>
    </div>
  );
};

export default PlanTrip;
