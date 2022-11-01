/** @type {import("next").NextConfig} */
const withTM = require('next-transpile-modules')(['lodash']);

module.exports = withTM({
  reactStrictMode: true,
});
