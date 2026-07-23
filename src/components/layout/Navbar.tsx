import { Link } from "react-router-dom";
import { BookOpen, Menu, User, Award } from "lucide-react";

function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          <BookOpen size={28} />
          CourseHub
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-gray-700 hover:text-blue-600"
          >
            Courses
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <User size={18} />
            Profile
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
