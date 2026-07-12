import { Link } from "react-router-dom";

import type { Course } from "@/types";

import CourseGrid from "@/components/course/CourseGrid";
import Button from "@/components/ui/Button";

interface FeaturedCoursesProps {
  courses: Course[];
}

function FeaturedCourses({
  courses,
}: FeaturedCoursesProps) {
  const featuredCourses = courses.slice(0, 3);

  return (
    <section className="py-16">

      <div className="container mx-auto px-4">

        <div className="mb-10 flex items-center justify-between">

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Courses
            </h2>

            <p className="mt-2 text-gray-600">
              Explore our most popular courses and start learning today.
            </p>
          </div>


          <Link to="/courses">
            <Button>
              View All
            </Button>
          </Link>

        </div>


        <CourseGrid
          courses={featuredCourses}
        />

      </div>

    </section>
  );
}

export default FeaturedCourses;
