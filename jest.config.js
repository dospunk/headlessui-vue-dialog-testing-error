module.exports = {
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.(js)?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["vue", "js", "json", "jsx", "node"],
  globals: {
    __APP_INFO__: {
      pkg: {
        name: "test-package-name",
        version: "test-version",
      },
      lastBuildTime: "test-build-time",
    },
  },
};
