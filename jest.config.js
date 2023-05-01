module.exports = {
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    coverageReporters: ['json-summary', 'text', 'lcov'],
    coveragePathIgnorePatterns: [
      'styles.ts',
      'style.ts',
    ],
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    moduleNameMapper: {
      '^root(.*)$': '<rootDir>/src$1',
      '^app(.*)$': '<rootDir>/src/app$1',
      '^core(.*)$': '<rootDir>/src/core$1',
      '^config(.*)$': '<rootDir>/src/config$1',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
}