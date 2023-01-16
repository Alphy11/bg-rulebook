// eslint-disable-next-line no-undef
module.exports = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-undef
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
