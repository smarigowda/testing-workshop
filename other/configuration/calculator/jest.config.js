module.exports = {
  moduleNameMapper: {
    '\\.module\\.css$': require.resolve('identity-obj-proxy'),
    '\\.css$': require.resolve('./src/test/style-mock'),
  }
}