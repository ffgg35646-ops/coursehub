import { BookOpen, Clock, Users } from "lucide-react";

import type { Course } from "@/types";

import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface CourseDetailsProps {
  course: Course;
  onEnroll?: () => void;
}

function CourseDetails({
  course,
  onEnroll,
}: CourseDetailsProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">

      <div className="overflow-hidden rounded-xl bg-gray-100">
        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-80 items-center justify-center">
            <BookOpen
              size={70}
              className="text-gray-400"
            />
          </div>
        )}
      </div>


      <div>

        <div className="mb-4 flex items-center gap-3">
          <Badge>
            {course.category}
          </Badge>

          <span className="text-sm text-gray-500">
            {course.level}
          </span>
        </div>


        <h1 className="mb-4 text-3xl font-bold">
          {course.title}
        </h1>


        <p className="mb-6 text-gray-600">
          {course.description}
        </p>


        <Rating
          value={course.rating}
          count={course.students}
        />


        <div className="my-6 grid gap-4 sm:grid-cols-3">

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={18} />
            {course.duration}
          </div>


          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={18} />
            {course.students} Students
          </div>


          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen size={18} />
            {course.lessons} Lessons
          </div>

        </div>


        <div className="flex items-center justify-between">

          <span className="text-3xl font-bold text-blue-600">
            ${course.price}
          </span>


          <Button
            onClick={onEnroll}
          >
            Enroll Now
          </Button>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;
