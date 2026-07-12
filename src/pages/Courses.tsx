import { useState } from "react";

import { useCourses } from "@/hooks/useCourses";

import CourseGrid from "@/components/course/CourseGrid";
import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";

function Courses() {
  const { courses } = useCourses();

  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main>

      <PageHeader
        title="Courses"
        description="Browse all available courses and start learning."
      />


      <section className="container mx-auto px-4 py-10">

        <div className="mb-8 max-w-md">

          <Input
            placeholder="Search courses..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <CourseGrid
          courses={filteredCourses}
        />

      </section>

    </main>
  );
}

export default Courses;
