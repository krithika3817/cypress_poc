const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nn7mv2",
  allowCypressEnv: false,

  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});