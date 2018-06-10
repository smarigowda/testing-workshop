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

    // /Users/santosh/SAN/github/testing-workshop/client/src/screens/__tests__/editor.todo.js
    // tests: ['src/**/__tests__/*.js?(x)'],
    tests: [ 'src/screens/__tests__/*.todo.js',
             'src/components/__tests__/login.step-1.todo.js',
             'src/components/__tests__/login.step-2.todo.js' ],

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
