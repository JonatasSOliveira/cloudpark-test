import { tv } from 'tailwind-variants';

export const button = tv({
  slots: {
    container: 'rounded-xl px-4 py-3 items-center justify-center',
    text: 'font-semibold',
  },

  variants: {
    variant: {
      primary: {
        container: 'bg-blue-600',
        text: 'text-white',
      },
      secondary: {
        container: 'bg-gray-200',
        text: 'text-gray-900',
      },
      danger: {
        container: 'bg-red-600',
        text: 'text-white',
      },
      ghost: {
        container: 'bg-transparent',
        text: 'text-blue-600',
      },
    },
    disabled: {
      true: {
        container: 'opacity-50',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
