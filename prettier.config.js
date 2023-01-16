module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './app/tailwind.config.cjs',
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    endOfLine: 'lf',
};
