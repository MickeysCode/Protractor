import {browser, Config} from "protractor";

export let config: Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    allScriptsTimeout: 25000,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    framework: 'jasmine2',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      isVerbose: false,
      showColors: true, // Use colors in the command line report.
      includeStackTrace: false,
      defaultTimeoutInterval: 100000,
      // grep: "@proAS",
    },

    onPrepare:() => {
      browser.driver.manage().window().maximize();
      browser.waitForAngularEnabled(false);
      browser.get("https://www.securian.com/insights-tools/retirement-calculator.html");
      browser.manage().timeouts().implicitlyWait(35000); 
      //Implementing Allure Report:
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: './etqaReport/AllureReport'
    }));
    //   jasmine.getEnv().afterEach((done) =>{
    //     browser.takeScreenshot().then((png) => {
    //     allure.createAttachment('Screenshot', () => {
    //       return new Buffer(png, 'base64')
    //     }, 'image/png')();
    //     done();
    //   })
    // });
  },  

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../etqaSpecFiles/retirementcalcispec.js'],
  };  