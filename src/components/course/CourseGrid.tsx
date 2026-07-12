import type { Course } from "@/types";

import CourseCard from "@/components/course/CourseCard";
import EmptyState from "@/components/ui/EmptyState";

interface CourseGridProps {
  courses: Course[];
}

function CourseGrid({
  courses,
}: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <EmptyState
        title="No courses found"
        description="There are no courses available at the moment."
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  );
}

export default CourseGrid;
