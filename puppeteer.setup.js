// const puppeteer = require('puppeteer')

const { setup: setupPuppeteer } = require('jest-environment-puppeteer');

// const fs = require('fs')
// const mkdirp = require('mkdirp')
// const os = require('os')
// const path = require('path')

// const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function() {
  await setupPuppeteer();
  // This global is not available inside tests but only in global teardown
  //   global.__BROWSER_GLOBAL__ = browser
  // Instead, we expose the connection details via file system to be used in tests
  //   mkdirp.sync(DIR)
  //   fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
};