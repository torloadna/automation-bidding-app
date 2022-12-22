exports.config = {
    directConnect: true,
  
    capabilities: {
      'browserName': 'chrome'
    },
  
    framework: 'jasmine',
  
    specs: ['..//testCases/regression.spec.js'],
  
    //SELENIUM_PROMISE_MANAGER: false,
    // Options to be passed to Jasmine.
    /*jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }*/
  };