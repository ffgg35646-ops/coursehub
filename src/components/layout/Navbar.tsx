import { Link } from "react-router-dom";
import { BookOpen, Menu, User, Award, LogOut } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

function Navbar() {

  const { user, logoutUser } = useAuth();


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


          {!user ? (

            <>
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
            </>


          ) : (

            <>

              <Link
                to="/courses"
                className="text-gray-700 hover:text-blue-600"
              >
                Courses
              </Link>


              <Link
                to="/my-courses"
                className="text-gray-700 hover:text-blue-600"
              >
                My Courses
              </Link>


              <Link
                to="/certificates"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
              >
                <Award size={18} />
                Certificates
              </Link>


              <Link
                to="/profile"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
              >
                <User size={18} />
                Profile
              </Link>


              <button
                onClick={logoutUser}
                className="flex items-center gap-1 text-gray-700 hover:text-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>

            </>

          )}


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
