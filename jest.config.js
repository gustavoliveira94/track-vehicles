module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/src/config/tests/setupTests.ts'],
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  coveragePathIgnorePatterns: [
    'styles.ts',
    'style.ts',
  ],
  collectCoverageFrom: [
    'src/app/components/**/*.{ts,tsx}',
    'src/app/pages/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/pages/ListVehicles/index.tsx',
    '!**/pages/ListVehicles/components/Map/**',
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(react-leaflet/lib|@react-leaflet/core/lib)/)"
  ],
  moduleNameMapper: {
    '^root(.*)$': '<rootDir>/src$1',
    '^app(.*)$': '<rootDir>/src/app$1',
    '^core(.*)$': '<rootDir>/src/core$1',
    '^config(.*)$': '<rootDir>/src/config$1', 
    "react-leaflet": "<rootDir>/src/config/mocks/reactLeafletMock.js",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  },
}