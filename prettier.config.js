export default {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',

  plugins: [await import('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
};
