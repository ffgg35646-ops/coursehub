import PageHeader from "@/components/layout/PageHeader";
import CourseGrid from "@/components/course/CourseGrid";

import { useCourses } from "@/hooks/useCourses";

function MyCourses() {
  const { courses } = useCourses();

  const myCourses = courses.slice(0, 6);

  return (
    <main>
      <PageHeader
        title="My Courses"
        description="View all courses you are currently enrolled in."
      />

      <section className="container mx-auto px-4 py-10">
        {myCourses.length > 0 ? (
          <CourseGrid courses={myCourses} />
        ) : (
          <div className="rounded-xl border border-dashed p-10 text-center">
            <h2 className="mb-3 text-2xl font-semibold">
              No Courses Found
            </h2>

            <p className="text-gray-600">
              You haven't enrolled in any courses yet.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default MyCourses;
