function disabledRulesFromPlugins() {
    const DISABLED_RULES_FROM_PLUGINS = [
        'react/react-in-jsx-scope',
        '@typescript-eslint/unbound-method',
        '@typescript-eslint/no-dynamic-delete',
        '@typescript-eslint/prefer-nullish-coalescing',
    ];
    return Object.fromEntries(
        DISABLED_RULES_FROM_PLUGINS.map(rule => [rule, 'off']),
    );
}
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/strict',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.eslint.json',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    // cjs are config files that use different rules, and tsconfig also won't include them, breaking eslint
    ignorePatterns: ['node_modules', '*.cjs'],
    rules: {
        ...disabledRulesFromPlugins(),

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
        react: {
            version: '18.2.0',
        },
    },
};
