// Core libraries such as react, angular, redux, ngrx, etc. must be
// singletons. Otherwise the applications will not work together.
const coreLibraries = new Set([
  'react',
  'react-dom',
  'react-router-dom',
  '@sol-demo/common-lib' // singleton
  // A workspace library for a publish/subscribe
  // system of communication.

]);

module.exports = {
  coreLibraries: coreLibraries
};
