interface ProgressBarProps {
  value: number;
  label?: string;
}

function ProgressBar({
  value,
  label = "Progress",
}: ProgressBarProps) {
  const progress = Math.min(
    Math.max(value, 0),
    100
  );

  return (
    <div className="w-full">

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          {label}
        </span>

        <span className="text-sm text-gray-500">
          {progress}%
        </span>
      </div>


      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">

        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}

export default ProgressBar;
