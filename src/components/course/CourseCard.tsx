import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

import type { Course } from "@/types";
import Rating from "@/components/ui/Rating";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface CourseCardProps {
  course: Course;
}

function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">

      <div className="relative h-48 overflow-hidden bg-gray-100">
        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <BookOpen size={50} className="text-gray-400" />
          </div>
        )}
      </div>


      <div className="p-5">

        <div className="mb-3 flex items-center justify-between">
          <Badge>
            {course.category}
          </Badge>

          <span className="text-sm text-gray-500">
            {course.level}
          </span>
        </div>


        <h3 className="mb-2 line-clamp-2 text-lg font-bold">
          {course.title}
        </h3>


        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {course.description}
        </p>


        <Rating
          value={course.rating}
          count={course.students}
        />


        <div className="mt-5 flex items-center justify-between">

          <span className="text-xl font-bold text-blue-600">
            ${course.price}
          </span>


          <Link to={`/courses/${course.slug}`}>
            <Button>
              View Course
            </Button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default CourseCard;
