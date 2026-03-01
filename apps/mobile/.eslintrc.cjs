module.exports = {
  root: true,
  extends: ["expo", "prettier"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        packageDir: [__dirname, `${__dirname}/../..`],
      },
    ],
  },
};
