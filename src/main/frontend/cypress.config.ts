import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'bacibg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
