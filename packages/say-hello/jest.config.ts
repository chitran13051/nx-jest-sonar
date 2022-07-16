/* eslint-disable */
export default {
  displayName: 'say-hello',
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
  coverageReporters: ['json', 'lcov'], //Manually?
  coverageDirectory: '../../coverage/packages/say-hello',
};
