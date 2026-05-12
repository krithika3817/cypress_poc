const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nn7mv2",

  allowCypressEnv: false,

  video: true,
  screenshotOnRunFailure: true,

  // JUnit Reporter
  reporter: "mocha-junit-reporter",

  reporterOptions: {
  mochaFile: "results/results.xml",
  toConsole: true,
},

  e2e: {
    setupNodeEvents(on, config) {

      // return config is good practice
      return config;
    },
  },
});