import { useParams } from "react-router-dom";

import { courses } from "@/data/courses";

import CourseDetailsComponent from "@/components/course/CourseDetails";
import PageHeader from "@/components/layout/PageHeader";
import EmptyState from "@/components/ui/EmptyState";

function CourseDetails() {
  const { slug } = useParams();

  const course = courses.find(
    (item) => item.slug === slug
  );


  if (!course) {
    return (
      <main>
        <PageHeader
          title="Course Details"
          description="Course information"
        />

        <section className="container mx-auto px-4 py-16">
          <EmptyState
            title="Course not found"
            description="The course you are looking for does not exist."
          />
        </section>
      </main>
    );
  }


  return (
    <main>

      <PageHeader
        title={course.title}
        description="Course details and enrollment information."
      />


      <section className="container mx-auto px-4 py-10">

        <CourseDetailsComponent
          course={course}
        />

      </section>

    </main>
  );
}

export default CourseDetails;
