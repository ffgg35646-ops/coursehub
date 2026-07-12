import type {
  InputHTMLAttributes,
} from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">

      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        className={`
          w-full rounded-lg border
          px-4 py-2.5
          text-gray-900
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-100
          ${
            error
              ? "border-red-500"
              : "border-gray-300"
          }
          ${className}
        `}
        {...props}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}

    </div>
  );
}

export default Input;
