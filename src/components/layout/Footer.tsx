import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-3">

        <div>
          <h2 className="mb-3 text-2xl font-bold text-blue-600">
            CourseHub
          </h2>

          <p className="text-sm leading-6 text-gray-600">
            A professional online learning platform to help students
            learn new skills and improve their careers.
          </p>
        </div>


        <div>
          <h3 className="mb-4 font-semibold text-gray-900">
            Navigation
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">

            <li>
              <Link
                to="/"
                className="hover:text-blue-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/courses"
                className="hover:text-blue-600"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="hover:text-blue-600"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="hover:text-blue-600"
              >
                Register
              </Link>
            </li>

          </ul>
        </div>


        <div>
          <h3 className="mb-4 font-semibold text-gray-900">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              Email: support@coursehub.com
            </li>

            <li>
              Available 24/7 for learners
            </li>

            <li>
              Online Education Platform
            </li>
          </ul>
        </div>

      </div>


      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CourseHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
