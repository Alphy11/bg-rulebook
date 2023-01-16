module.exports = {
    '*': ['pnpm exec prettier --check --ignore-unknown'],
    '*.{js,cjs,ts,tsx}': ['pnpm exec eslint'],
};
