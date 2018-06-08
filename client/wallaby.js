module.exports = wallaby1 => {
  return {
    files: [
      'jest.config.js',
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'config/**/*.js',
      '!src/**/*.test.js?(x)',
      '*/**/__test__/*.js?(x)'
    ],

    tests: ['src/**/__test__/*.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby1.compilers.babel({})
    },

    workers: {
      recycle: true,
    },

    setup: wallaby => {
      const jestConfig = require('./jest.config');
      delete jestConfig.transform['^.+\\.(js|jsx)$'];
      delete jestConfig.testEnvironment;
      wallaby.testFramework.configure(jestConfig);
    },

    hints: {
      ignoreCoverage: /ignore coverage/ // or /istanbul ignore next/, or any RegExp
    },

    testFramework: 'jest'
  };
};