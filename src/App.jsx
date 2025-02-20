import Home from "./pages/Home";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import { motion } from "framer-motion";
import { Code2, InstagramIcon, Twitter, Youtube } from "lucide-react";
import { BrowserRouter, Route, Routes } from "react-router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Events", href: "/events", current: false },
  { name: "Projects", href: "/projects", current: false },
];
function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Disclosure as="nav" className=" z-50">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <Code2 className="h-8 w-8 text-blue-400" />
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Tech Innovators Club
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4"></div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="opacity-0 sm:opacity-100">

                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      "rounded-md px-3 py-2 text-sm font-medium bg-transparent hover:text-blue-400 text-white"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                </div>

              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>

        {/* Main Content */}
        <main className="container mx-auto flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-6 w-6 text-blue-400" />
                <span className="text-sm text-gray-400">
                  © 2024 Tech Innovators Club. All rights reserved.
                </span>
              </div>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
