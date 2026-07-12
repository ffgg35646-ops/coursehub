import PageHeader from "@/components/layout/PageHeader";
import CourseGrid from "@/components/course/CourseGrid";

import { useCourses } from "@/hooks/useCourses";

function Learning() {
  const { courses } = useCourses();

  const enrolledCourses = courses.slice(0, 4);

  return (
    <main>
      <PageHeader
        title="My Learning"
        description="Continue learning from where you left off."
      />

      <section className="container mx-auto px-4 py-10">
        {enrolledCourses.length > 0 ? (
          <CourseGrid courses={enrolledCourses} />
        ) : (
          <div className="rounded-xl border border-dashed p-12 text-center">
            <h2 className="mb-2 text-2xl font-semibold">
              No enrolled courses
            </h2>

            <p className="text-gray-600">
              Browse the course catalog and enroll in your first course.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Learning;
