"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const retirementcalcipo_1 = require("../etqaPageObject/retirementcalcipo");
describe('SC1: Validate Retirement Calculator Page', () => {
    let td = require("../etqaTestData/retirementcalciprop");
    let retirepo = new retirementcalcipo_1.RetirementCalci;
    it('TC1: Verify retirement calculator by poviding inputs', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.sleep(500);
        yield retirepo.CurrentAge.sendKeys(td.DataDriven.testData1.currentAge);
        yield retirepo.RetirementAge.sendKeys(td.DataDriven.testData1.retirementAge);
        retirepo.CurrentAnnualIncome.click();
        yield retirepo.CurrentAnnualIncome.sendKeys(td.DataDriven.testData1.currentAnnualIncome);
        retirepo.SpouseAnnualIncome.click();
        yield retirepo.SpouseAnnualIncome.sendKeys(td.DataDriven.testData1.spouseAnnualIncome);
        retirepo.CurrentSavings.click();
        yield retirepo.CurrentSavings.sendKeys(td.DataDriven.testData1.currentSavings);
        yield retirepo.RetirementContribution.sendKeys(td.DataDriven.testData1.retirementContribution);
        yield retirepo.RetirementContributionIncrease.sendKeys(td.DataDriven.testData1.retirementContributionIncrease);
        yield retirepo.SocialSecurityBenefits.click();
        protractor_1.browser.executeScript('window.scrollTo(0,1500);').then(function () {
            retirepo.MaritalStatus.click();
            let EC = protractor_1.ExpectedConditions;
            let condition = EC.visibilityOf(retirepo.SocialSecurityOveriride);
            protractor_1.browser.wait(condition, 30000);
            retirepo.SocialSecurityOveriride.click();
            retirepo.SocialSecurityOveriride.sendKeys(td.DataDriven.testData1.socialSecurityOveriride);
        });
        protractor_1.browser.sleep(500);
        yield retirepo.AdjustCalculator.click();
        protractor_1.browser.sleep(500);
    }));
    it('TC2: Verify default caluclutor vaules', () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.sleep(500);
        yield retirepo.AdditionalIncome.click();
        yield retirepo.AdditionalIncome.sendKeys(td.DataDriven.testData1.additionalIncome);
        protractor_1.browser.executeScript('window.scrollTo(0,750);').then(function () {
            retirepo.NoOfYears.sendKeys(td.DataDriven.testData1.noOfYears);
            retirepo.PostRetirement.click();
            protractor_1.browser.sleep(500);
            retirepo.FinalAnnualIncome.sendKeys(td.DataDriven.testData1.finalAnnualIncome);
            protractor_1.browser.sleep(500);
            retirepo.PreInvestmentReturn.sendKeys(td.DataDriven.testData1.preInvestmentReturn);
            retirepo.PostInvetmentReturn.sendKeys(td.DataDriven.testData1.postInvetmentReturn);
            protractor_1.browser.sleep(500);
            retirepo.SaveButton.click();
            protractor_1.browser.sleep(500);
        });
        protractor_1.browser.sleep(500);
        yield retirepo.CalculateButton.click();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0aXJlbWVudGNhbGNpc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2V0cWFTcGVjRmlsZXMvcmV0aXJlbWVudGNhbGNpc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE4RTtBQUM5RSwyRUFBc0U7QUFFdEUsUUFBUSxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsRUFBRTtJQUN0RCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUN4RCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1DQUFlLENBQUM7SUFFbkMsRUFBRSxDQUFDLHNEQUFzRCxFQUFFLEdBQVMsRUFBRTtRQUNsRSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0UsUUFBUSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLE1BQU0sUUFBUSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pGLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxNQUFNLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2RixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLE1BQU0sUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMs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