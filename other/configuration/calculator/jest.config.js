module.exports = {
  moduleNameMapper: {
    '\\.module\\.css$': require.resolve('identity-obj-proxy'),
    '\\.css$': require.resolve('./test/style-mock'),
  },
  setupTestFrameworkScriptFile: require.resolve('./test/setup-test-framework'),
  collectCoverageFrom: [
    '**/src/**/*.js'
  ],
  coverageThreshold: {
    global: {
      statements: 18,
      branches: 15,
      functions:19,
      lines: 18,
    }
  }
}