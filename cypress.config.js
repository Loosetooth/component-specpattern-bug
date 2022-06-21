module.exports = {
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: [
      "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
      "pages/**/*.cy.{js,jsx,ts,tsx}",
    ],
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
};
