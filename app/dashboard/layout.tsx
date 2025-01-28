"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import * as SolidIcons from "@heroicons/react/24/solid";
import * as OutlineIcons from "@heroicons/react/24/outline";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <div
        className={`overlay fixed inset-0 bg-pink-400/50 z-40 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
        } transition-opacity duration-300`}
        onClick={toggleSidebar}
      ></div>

      <header className="fixed w-full bg-white text-red-500 z-50 shadow-lg animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-16">
          <button
            className="mobile-menu-button p-2 lg:hidden"
            onClick={toggleSidebar}
          >
            <OutlineIcons.Bars3Icon />
          </button>
          <div className="text-xl font-bold text-red-500">
            Dash<span className="text-red-400">Board</span>
          </div>
          <div className="flex items-center space-x-2">
            <OutlineIcons.MagnifyingGlassIcon className="h-6 w-6 cursor-pointer hover:text-red-400 transition-transform duration-300 hover:scale-110 hidden md:block" />
            <OutlineIcons.BellIcon className="h-6 w-6 cursor-pointer hover:text-red-400 transition-transform duration-300 hover:scale-110 hidden md:block" />
            <OutlineIcons.UserCircleIcon className="h-10 w-10 cursor-pointer hover:text-red-400 transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </header>

      <div className="pt-16 max-w-7xl mx-auto flex">
        <aside
          className={`sidebar fixed lg:static w-[240px] bg-white h-[calc(100vh-4rem)] lg:h-auto transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 z-45 overflow-y-auto p-4`}
        >
          <div className="bg-white rounded-xl shadow-lg mb-6 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link
              href="#"
              className="flex items-center text-gray-600 hover:text-red-500 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <OutlineIcons.ViewColumnsIcon className="h-5 w-5 mr-2" />
              Home
              <span className="ml-auto">›</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-600 hover:text-red-500 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <OutlineIcons.AdjustmentsHorizontalIcon className="h-5 w-5 mr-2" />
              Some menu item
              <span className="ml-auto">›</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-600 hover:text-red-500 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <OutlineIcons.DocumentIcon className="h-5 w-5 mr-2" />
              Another menu item
              <span className="ml-auto">›</span>
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <Link
              href="#"
              className="flex items-center text-gray-600 hover:text-red-500 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <OutlineIcons.UserCircleIcon className="h-5 w-5 mr-2" />
              Profile
              <span className="ml-auto">›</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-600 hover:text-red-500 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <OutlineIcons.Cog6ToothIcon className="h-5 w-5 mr-2" />
              Settings
              <span className="ml-auto">›</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-600 hover:text-red-500 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <OutlineIcons.ArrowLeftEndOnRectangleIcon className="h-5 w-5 mr-2" />
              Log out
              <span className="ml-auto">›</span>
            </Link>
          </div>
        </aside>

        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
