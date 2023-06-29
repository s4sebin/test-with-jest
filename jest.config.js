const nextJest = require("next/jest");
const createJestConfig = nextJest({
    dir: "./",
});
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    collectCoverage: true,
    // collectCoverageFrom: ["**/*.{js,jsx}", "!**/node_modules/**", "!**/.next/**"],
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/.next/**",
    ],
    coverageReporters: ["lcov", "text"],
    // coverageThreshold: {
    //     global: {
    //         branches: 80,
    //         functions: 80,
    //         lines: 80,
    //         statement: 80
    //     },
    // },
};
module.exports = createJestConfig(customJestConfig);