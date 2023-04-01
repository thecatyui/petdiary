module.exports = {
  cache: {
    type: "filesystem",
    buildDependencies: {
      config: [__filename],
    },
  },
};