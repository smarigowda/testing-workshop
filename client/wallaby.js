module.exports = wallaby => {
  process.env.NODE_ENV = 'test';
  return {
    files: [
      'jest.config.js',
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'config/**/*.js',
      'test/*.js',
      '!src/**/__tests__/*.js?(x)'
    ],

    tests: ['src/**/__tests__/*.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },

    hints: {
      ignoreCoverage: /ignore coverage/ // or /istanbul ignore next/, or any RegExp
    },

    testFramework: 'jest'
  };
};
