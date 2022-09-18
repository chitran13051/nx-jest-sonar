/* eslint-disable */
export default {
  displayName: 'random-quote',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '../../coverage/packages/random-quote',
};
