import { element, by, browser, ExpectedConditions, Browser } from "protractor"
import { RetirementCalci } from "../etqaPageObject/retirementcalcipo";

describe('SC1: Validate Retirement Calculator Page', () => {
    let td = require("../etqaTestData/retirementcalciprop");
    let retirepo = new RetirementCalci;
     
    it('TC1: Verify retirement calculator by poviding inputs', async () => { 
        browser.sleep(500);
        await retirepo.CurrentAge.sendKeys(td.DataDriven.testData1.currentAge);
        await retirepo.RetirementAge.sendKeys(td.DataDriven.testData1.retirementAge);
        retirepo.CurrentAnnualIncome.click();
        await retirepo.CurrentAnnualIncome.sendKeys(td.DataDriven.testData1.currentAnnualIncome);
        retirepo.SpouseAnnualIncome.click();
        await retirepo.SpouseAnnualIncome.sendKeys(td.DataDriven.testData1.spouseAnnualIncome);
        retirepo.CurrentSavings.click();
        await retirepo.CurrentSavings.sendKeys(td.DataDriven.testData1.currentSavings);
        await retirepo.RetirementContribution.sendKeys(td.DataDriven.testData1.retirementContribution);
        await retirepo.RetirementContributionIncrease.sendKeys(td.DataDriven.testData1.retirementContributionIncrease);
        await retirepo.SocialSecurityBenefits.click();
        browser.executeScript('window.scrollTo(0,1500);').then(function () { 
            // browser.sleep(2500);
            retirepo.MaritalStatus.click();
            let EC = ExpectedConditions;
            let condition = EC.visibilityOf(retirepo.SocialSecurityOveriride)
            browser.wait(condition, 30000)
            retirepo.SocialSecurityOveriride.click();
            retirepo.SocialSecurityOveriride.sendKeys(td.DataDriven.testData1.socialSecurityOveriride);
        });
        browser.sleep(500);
        await retirepo.AdjustCalculator.click();
        browser.sleep(500);
    })

    it('TC2: Verify default caluclutor vaules', async () => {
        browser.sleep(500);
        await retirepo.AdditionalIncome.click();
        await retirepo.AdditionalIncome.sendKeys(td.DataDriven.testData1.additionalIncome);
        browser.executeScript('window.scrollTo(0,750);').then(function () { 
            retirepo.NoOfYears.sendKeys(td.DataDriven.testData1.noOfYears);
            retirepo.PostRetirement.click();
            browser.sleep(500);
            retirepo.FinalAnnualIncome.sendKeys(td.DataDriven.testData1.finalAnnualIncome);
            browser.sleep(500);
            retirepo.PreInvestmentReturn.sendKeys(td.DataDriven.testData1.preInvestmentReturn);
            retirepo.PostInvetmentReturn.sendKeys(td.DataDriven.testData1.postInvetmentReturn);
            browser.sleep(500);
            retirepo.SaveButton.click();
            browser.sleep(500);
        });
        browser.sleep(500);
        await retirepo.CalculateButton.click();
    })
})