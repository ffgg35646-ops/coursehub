import type { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  description?: string;
}

function StatsCard({
  title,
  value,
  icon,
  description,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            {value}
          </h3>
        </div>


        {icon && (
          <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
            {icon}
          </div>
        )}

      </div>


      {description && (
        <p className="mt-4 text-sm text-gray-600">
          {description}
        </p>
      )}

    </div>
  );
}

export default StatsCard;
