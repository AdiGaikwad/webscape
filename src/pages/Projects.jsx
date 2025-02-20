import { useState } from "react";
import { Button } from "../components/ui/button";

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
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
// Sample project data; this can be replaced or extended as needed.
const sampleProjects = [
  {
    id: 1,
    title: "AI Chatbot",
    description:
      "An AI-driven chatbot designed to assist users with common queries.",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/002/161/935/original/artificial-intelligence-chatbot-free-vector.jpg", // Placeholder image
    // TODO: Add additional details (e.g., project technology, live demo link)
  },
  {
    id: 2,
    title: "Smart Campus App",
    description:
      "A mobile app to streamline campus services and enhance connectivity.",
    imageUrl:
      "https://i.pinimg.com/originals/a5/67/4a/a5674afdafcd0354d2f443e663b2e0ed.png",
  },
  {
    id: 3,
    title: "Virtual Reality Lab",
    description:
      "A project exploring virtual reality applications in education and research.",
    imageUrl:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200713230156/8-Best-Virtual-Reality-Apps-in-2020.png",
  },
  {
    id: 4,
    title: "Game Labs",
    description:
      "A project exploring virtual reality applications in education and research.",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F31%2Fc9%2F30%2F31c93027e5a474314d0e9205dc7365d0.jpg&f=1&nofb=1&ipt=ed28f6802990fba254c75850810df7fede699e0edbdca3b71e0edc71a8e68552&ipo=images",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "A project exploring virtual reality applications in education and research.",
    imageUrl:
      "https://i.pinimg.com/originals/d8/36/85/d8368564cf05fa0b95f6d92ad16cb419.png",
  },
  {
    id: 6,
    title: "Event booking app",
    description:
      "A project exploring virtual reality applications in education and research.",
    imageUrl:
      "https://eventmie-event-booking-app-ui-kit.classiebit.com/storage/products/March2024/UTwDcELHvwuDdMS27K3y.png",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState();
  const [loading, setLoading] = useState(false);
  const [show, showBtn] = useState(true);


  useEffect(() => {
    setProjects(sampleProjects.slice(0, 3));
  }, []);


  // TODO: Implement "Load More" functionality to fetch or display additional projects.
  const handleLoadMore = () => {
    // Placeholder: This could fetch more projects or simply append dummy data.
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setProjects(sampleProjects)
      showBtn(false)
    }, 1000);
  };

  return (
    <div className="projects-page min-h-screen  text-white overflow-hidden flex flex-col">
      <div className="fixed inset-0 -z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="z-10">
        {/* Page Header */}
        <section className="projects-header py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
            <p className="text-white">
              {/* TODO: Add an introductory text about the projects or the club's initiatives */}
              Discover our innovative projects that showcase the future of
              technology.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="projects-grid py-6">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects && projects.map((project) => (
              <div
                key={project.id}
                className="project-card border rounded overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
               
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-72  object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl  font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600">
                    {/* TODO: Optionally limit or truncate description length */}
                    {project.description}
                  </p>

                  <AlertDialog>
                    <br />
                    <br />
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-slate-900 border-none"
                      >
                        View More
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-white">
                          {project.title}
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full  object-cover"
                          />
                          <br />
                          <br />
                          {project.description}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        <section className="load-more py-6 text-center">
          {show && <button
            onClick={handleLoadMore}
            className="bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-600 transition"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Load More"}
          </button>}
        </section>

        {/* Project Detail Modal */}
      </div>
    </div>
  );
};

export default Projects;
