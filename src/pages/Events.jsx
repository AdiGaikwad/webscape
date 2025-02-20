import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Sample events data (this can later be replaced or fetched from an API)
const sampleEvents = [
  {
    id: 1,
    title: "Tech Workshop",
    date: "2025-03-15",
    time: "10:00 AM",
    description: "A hands-on workshop on the latest tech trends and tools.",
    type: "Workshop",
    // TODO: Add additional properties (e.g., event type) for filtering if needed
  },
  {
    id: 2,
    title: "Innovation Seminar",
    date: "2025-03-20",
    time: "2:00 PM",
    description: "A seminar discussing innovative ideas and future technology.",
    type: "Seminar",
  },
  {
    id: 3,
    title: "Networking Meetup",
    date: "2025-03-25",
    time: "6:00 PM",
    description:
      "An informal meetup for tech enthusiasts to network and share ideas.",
    type: "Meetup",
  },
];

const Events = () => {
  const [events, setEvents] = useState(sampleEvents);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    setEvents(sampleEvents);
  }, []);

  // TODO: Implement real filtering based on event type or other criteria
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Placeholder filtering logic: Currently just resets to sampleEvents
    // In a real implementation, update "events" based on the filter criteria.
    const events =
      filter == "All"
        ? sampleEvents
        : sampleEvents.filter((x) => x.type == filter);
    setEvents(events);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveEvent(null);
  };

  return (
    <div className="min-h-screen  text-white overflow-hidden flex flex-col">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>
      <div className="z-10">
        {/* Header & Filter Controls */}
        <section className="events-header py-6">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
            <div className="filters mb-4">
              <Button
                onClick={() => handleFilterChange("All")}
                className={`px-4 py-2 border rounded mr-2
              border-none hover:text-white hover:bg-slate-800 ${
                selectedFilter == "All" ? "bg-blue-800" : "bg-slate-900"
              }
                  transition`}
                variant="outline"
              >
                All
              </Button>
              <Button
                onClick={() => handleFilterChange("Workshop")}
                className={`px-4 py-2 border rounded mr-2
              border-none hover:text-white hover:bg-slate-800 ${
                selectedFilter == "Workshop" ? "bg-blue-800" : "bg-slate-900"
              }
                 transition`}
                variant="outline"
              >
                Workshop
              </Button>
              <Button
                onClick={() => handleFilterChange("Seminar")}
                className={`px-4 py-2 border rounded mr-2
              border-none hover:text-white hover:bg-slate-800 ${
                selectedFilter == "Seminar" ? "bg-blue-800" : "bg-slate-900"
              }
                transition`}
                variant="outline"
              >
                Seminar
              </Button>
              <Button
                onClick={() => handleFilterChange("Meetup")}
                className={`px-4 py-2 border rounded mr-2
              border-none hover:text-white hover:bg-slate-800 ${
                selectedFilter == "Meetup" ? "bg-blue-800" : "bg-slate-900"
              }
               transition`}
                variant="outline"
              >
                Meetup
              </Button>
              {/* TODO: Add additional filter Buttons if needed */}
            </div>
          </div>
        </section>

        {/* Event Cards List */}
        <section className="events-list py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-900/50 h-[250px] border-gray-800 backdrop-blur-xl hover:border-blue-500/50 transition-colors">
                  <CardHeader>
                    {/* <Users className="h-12 w-12 text-purple-400 mb-4" /> */}
                    <CardTitle className="text-xl text-white">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      <span className="text-gray-700">
                        {/* TODO: Optionally limit description length */}
                        {event.date} at {event.time}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      {/* <Globe className="h-4 w-4" /> */}
                      {event.description.slice(0, 50)}...
                    </div>

                    <AlertDialog>
                      <br />
                      <br />
                      <AlertDialogTrigger asChild>
                        <Button variant="outline">View More</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-white">
                            {event.title}
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            <span className="text-gray-700">
                              {/* TODO: Optionally limit description length */}
                              {event.date} at {event.time}
                            </span>
                            <br />
                            <br />
                            {event.description}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Close</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
