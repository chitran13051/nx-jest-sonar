/* eslint-disable */
export default {
  displayName: 'mul',
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
  coverageDirectory: '../../coverage/packages/mul',
};
