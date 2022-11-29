// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  mutate: ["Sorting/index.js", "Searching/index.js", "Tree/index.js", "LinkedList/index.js", "Strings/index.js"],
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information.",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  testRunner_comment:
    "More information about the jest plugin can be found here: https://stryker-mutator.io/docs/stryker-js/jest-runner",
  coverageAnalysis: "perTest",
  dashboard: {
    project: "github.com/stryker-mutator/stryker-js",
    version: "master",
    module: "packages/stryker-jest-runner",
    baseUrl: "https://dashboard.stryker-mutator.io/api/reports",
    // @ts-ignore
    reportType: "full",
  },
};
export default config;
