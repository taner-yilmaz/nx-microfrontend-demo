const coreLibraries = require('./core-libraries');

module.exports = {
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.coreLibraries.has(libraryName)) {
      return defaultConfig;
    }
    // Returning false means the library is not shared.
    return false;
  },
  name: 'shell',
  remotes: ['sub-app-1', 'sub-app-2', 'auth'],
};
