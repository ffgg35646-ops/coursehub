import { PlayCircle } from "lucide-react";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed?: boolean;
}

interface LessonListProps {
  lessons: Lesson[];
  onSelect?: (lesson: Lesson) => void;
}

function LessonList({
  lessons,
  onSelect,
}: LessonListProps) {
  return (
    <div className="space-y-3">

      {lessons.map((lesson, index) => (
        <button
          key={lesson.id}
          type="button"
          onClick={() => onSelect?.(lesson)}
          className="
            flex w-full items-center justify-between
            rounded-lg border bg-white p-4
            text-left transition
            hover:border-blue-500
            hover:bg-blue-50
          "
        >

          <div className="flex items-center gap-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
              {index + 1}
            </div>


            <div>
              <h4 className="font-medium text-gray-900">
                {lesson.title}
              </h4>

              <p className="text-sm text-gray-500">
                {lesson.duration}
              </p>
            </div>

          </div>


          <PlayCircle
            size={24}
            className={
              lesson.completed
                ? "text-green-500"
                : "text-blue-600"
            }
          />

        </button>
      ))}

    </div>
  );
}

export default LessonList;
