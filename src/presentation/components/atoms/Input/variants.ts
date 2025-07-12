import { tv } from "tailwind-variants";

export const input = tv({
  slots: {
    container: "w-full",
    label: "mb-1 font-semibold text-gray-700",
    input:
      "rounded border border-gray-300 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
    errorMessage: "mt-1 text-sm text-red-600",
  },

  variants: {
    hasError: {
      true: {
        input: "border-red-600 focus:ring-red-600",
        label: "text-red-600",
      },
      false: {},
    },
    disabled: {
      true: {
        input: "bg-gray-100",
      },
      false: {},
    },
  },

  defaultVariants: {
    hasError: false,
    disabled: false,
  },
});
