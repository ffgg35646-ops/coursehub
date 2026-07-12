import { Star } from "lucide-react";

interface RatingProps {
  value: number;
  count?: number;
}

function Rating({
  value,
  count,
}: RatingProps) {
  return (
    <div className="flex items-center gap-2">

      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={
              star <= Math.round(value)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <span className="text-sm text-gray-600">
        {value.toFixed(1)}

        {count !== undefined && (
          <span>
            {" "}
            ({count})
          </span>
        )}
      </span>

    </div>
  );
}

export default Rating;
