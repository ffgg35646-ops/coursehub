import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";

function NotFound() {
  return (
    <>
      <PageHeader
        title="404"
        description="The page you are looking for could not be found."
      />

      <section className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-16">
        <div className="max-w-xl text-center">

          <h1 className="mb-4 text-8xl font-extrabold text-gray-200">
            404
          </h1>

          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Page Not Found
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Sorry, the page you requested doesn't exist or has been moved.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link to="/">
              <Button>
                <span className="flex items-center gap-2">
                  <Home size={18} />
                  Back Home
                </span>
              </Button>
            </Link>

            <Link to="/courses">
              <Button variant="outline">
                <span className="flex items-center gap-2">
                  <Search size={18} />
                  Browse Courses
                </span>
              </Button>
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default NotFound;
