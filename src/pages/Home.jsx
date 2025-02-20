import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  Globe,
  Laptop2,
  Lightbulb,
  Users,
} from "lucide-react";
// import MagicButton from "../components/ui/MagicButton";
import { TextGenerateEffect } from "../components/text-genereate-effect";
import RegisterForm from "../components/RegisterForm";



export default function Home() {
  return (
    <div className="min-h-screen  text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

   

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 container mx-auto px-4 py-24 text-center"
      >
        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className=""
        > */}
        <TextGenerateEffect duration={1}  words={"Innovate. Create. Transform."} className={""} />
  
        {/* </motion.h1> */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Join a community of tech enthusiasts shaping the future through
          innovation, collaboration, and cutting-edge technology.
          <br />
          We make the world of tech a little less daunting! 🌟
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center"
        >
          {/* <MagicButton title={"Get Started"} className="bg-blue-500 hover:bg-blue-600 text-white px-8" /> */}
            <RegisterForm buttonTitle={"Get Started"}

            />
  
        
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 container mx-auto px-4 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900/50 h-[250px] border-gray-800 backdrop-blur-xl hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <Laptop2 className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-xl text-white">
                  Workshops & Training
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Hands-on sessions with industry experts to master the latest
                  technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>Weekly sessions</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900/50 h-[250px] border-gray-800 backdrop-blur-xl hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-xl text-white">
                  Networking Events
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Connect with like-minded innovators and industry
                  professionals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Globe className="h-4 w-4" />
                  <span>Global community</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gray-900/50 h-[250px] border-gray-800 backdrop-blur-xl hover:border-blue-500/50 transition-colors">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-pink-400 mb-4" />
                <CardTitle className="text-xl text-white">
                  Innovation Challenges
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Solve real-world problems with cutting-edge technology
                  solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>Monthly challenges</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 container mx-auto px-4 py-24"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
              500+
            </motion.div>
            <div className="text-gray-400">Active Members</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
            >
              50+
            </motion.div>
            <div className="text-gray-400">Events Hosted</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
              className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2"
            >
              30+
            </motion.div>
            <div className="text-gray-400">Projects Launched</div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
            >
              100%
            </motion.div>
            <div className="text-gray-400">Innovation</div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 container mx-auto px-4 py-24 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Shape the Future?
          </h2>
          <p className="text-gray-300 mb-8">
            Join our community of innovators and start your journey towards
            technological excellence today.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
            Join Tech Innovators Club
          </Button>
        </div>
      </motion.section>

 
    </div>
  );
}
