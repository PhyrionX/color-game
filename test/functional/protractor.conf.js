exports.config = {
  specs: ['*.js'],
  capabilities: {
      browserName: 'chrome'
  },
  baseUrl: 'http://localhost:3000',
  framework: 'jasmine',
  allScriptsTimeout: 60000,
  DEFAULT_TIMEOUT_INTERVAL: 60000
};