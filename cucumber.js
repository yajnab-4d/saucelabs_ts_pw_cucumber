module.exports = {
  default: {
    require: ["ts-node/register", "tests/steps/**/*.ts"],
    publishQuiet: true,
    format: ["progress", "html:reports/cucumber-report.html"],
    paths: ["tests/features/**/*.feature"],
    parallel: 1,
  },
};
