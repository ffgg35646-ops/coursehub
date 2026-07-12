import { Link } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import CourseGrid from "@/components/course/CourseGrid";
import Button from "@/components/ui/Button";

import { useCourses } from "@/hooks/useCourses";

function Wishlist() {
  const { courses } = useCourses();

  const wishlistCourses = courses.slice(0, 3);

  return (
    <main>
      <PageHeader
        title="Wishlist"
        description="Courses you've saved for later."
      />

      <section className="container mx-auto px-4 py-10">
        {wishlistCourses.length > 0 ? (
          <CourseGrid courses={wishlistCourses} />
        ) : (
          <div className="rounded-xl border border-dashed p-12 text-center">
            <h2 className="mb-3 text-2xl font-semibold">
              Your wishlist is empty
            </h2>

            <p className="mb-6 text-gray-600">
              Browse our courses and save the ones you're interested in.
            </p>

            <Link to="/courses">
              <Button>
                Browse Courses
              </Button>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Wishlist;
