const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    viewportWidth: 1280, 
    viewportHeight: 720, 
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
