"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    allScriptsTimeout: 25000,
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine2',
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 100000,
    },
    onPrepare: () => {
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get("https://www.securian.com/insights-tools/retirement-calculator.html");
        protractor_1.browser.manage().timeouts().implicitlyWait(35000);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: './etqaReport/AllureReport'
        }));
    },
    specs: ['../etqaSpecFiles/retirementcalcispec.js'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZXRxYUNvbmZpZ0ZpbGUvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUEyQztBQUVoQyxRQUFBLE1BQU0sR0FBVztJQUd4QixhQUFhLEVBQUUsSUFBSTtJQUNuQixpQkFBaUIsRUFBRSxLQUFLO0lBR3hCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsU0FBUyxFQUFFLFVBQVU7SUFFckIsZUFBZSxFQUFFO1FBQ2YsU0FBUyxFQUFFLEtBQUs7UUFDaEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsS0FBSztRQUN4QixzQkFBc0IsRUFBRSxNQUFNO0tBRS9CO0lBRUQsU0FBUyxFQUFDLEdBQUcsRUFBRTtRQUNiLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUNsRixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksY0FBYyxDQUFDO1lBQ2hELFVBQVUsRUFBRSwyQkFBMkI7U0FDeEMsQ0FBQyxDQUFDLENBQUM7SUFTTixDQUFDO0lBS0MsS0FBSyxFQUFFLENBQUMseUNBQXlDLENBQUM7Q0FDbkQsQ0FBQyJ9