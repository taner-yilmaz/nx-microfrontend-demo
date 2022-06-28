const coreLibraries = require('../../shell/core-libraries');

module.exports = {
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.coreLibraries.has(libraryName)) {
        return defaultConfig;
    }
    // Returning false means the library is not shared.
    return false;
  },
  name: 'sub-app-1',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
