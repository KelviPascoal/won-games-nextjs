// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/', '<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['**/*.{ts,tsx}']
}

module.exports = createJestConfig(customJestConfig)