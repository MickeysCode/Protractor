import { element, by, browser, ExpectedConditions, Browser } from "protractor"
import { RetirementCalci } from "../etqaPageObject/retirementcalcipo";

describe('SC1: Validate Retirement Calculator Page', () => {
    let td = require("../etqaTestData/retirementcalciprop");
    let retirepo = new RetirementCalci;
     
    it('TC1: Verify retirement calculator by poviding inputs', async () => { 
        browser.sleep(500);
        browser.driver.getTitle().then( (getPageTitle) => { 
            console.log("PAGE TITLE: " + getPageTitle);
            expect(getPageTitle).toEqual(td.DataDriven.testData1.pageTitle);
        });
        await retirepo.CurrentAge.sendKeys(td.DataDriven.testData1.currentAge);       
        await expect(td.DataDriven.testData1.currentAge).toBe("40");
        await retirepo.RetirementAge.sendKeys(td.DataDriven.testData1.retirementAge);
        await expect(td.DataDriven.testData1.retirementAge).toBe("68");
        retirepo.CurrentAnnualIncome.click();
        await retirepo.CurrentAnnualIncome.sendKeys(td.DataDriven.testData1.currentAnnualIncome);
        await expect(td.DataDriven.testData1.currentAnnualIncome).toBe("1000000");
        retirepo.CurrentAnnualIncome.getAttribute('placeholder').then( holderText => {
            console.log("PLACEHOLDER TEXT: " + holderText);
        });
        retirepo.SpouseAnnualIncome.click();
        await retirepo.SpouseAnnualIncome.sendKeys(td.DataDriven.testData1.spouseAnnualIncome);
        await expect(td.DataDriven.testData1.spouseAnnualIncome).toBe("75000");
        retirepo.CurrentSavings.click();
        await retirepo.CurrentSavings.sendKeys(td.DataDriven.testData1.currentSavings);
        await expect(td.DataDriven.testData1.currentSavings).toBe("5000000");
        await retirepo.RetirementContribution.sendKeys(td.DataDriven.testData1.retirementContribution);
        await expect(td.DataDriven.testData1.retirementContribution).toBe("10");
        await retirepo.RetirementContributionIncrease.sendKeys(td.DataDriven.testData1.retirementContributionIncrease);
        await expect(td.DataDriven.testData1.retirementContributionIncrease).toBe("2");
        await retirepo.SocialSecurityBenefits.click();
        retirepo.SocialSecurityBenefits.getText().then( socialText => { 
            console.log("SOCIAL SECURITY OPTION: " + socialText);
            expect(socialText).toBe("Yes");
        })
        browser.executeScript('window.scrollTo(0,1500);').then(function () { 
            // browser.sleep(2500);
            retirepo.MaritalStatus.click();
            retirepo.MaritalStatus.getText().then( maritalText => { 
                console.log("MARITAL OPTION: " + maritalText);
                expect(maritalText).toBe("Married");
            })
            let EC = ExpectedConditions;
            let condition = EC.visibilityOf(retirepo.SocialSecurityOveriride)
            browser.wait(condition, 30000)
            retirepo.SocialSecurityOveriride.click();
            retirepo.SocialSecurityOveriride.sendKeys(td.DataDriven.testData1.socialSecurityOveriride);
            expect(td.DataDriven.testData1.socialSecurityOveriride).toBe("4000");
        });
        browser.sleep(500); 
        retirepo.AdjustCalculator.getText().then( adjustText => { 
            console.log("ADJUST OPTION: " + adjustText);
            expect(adjustText).toBe("Adjust default values");
        })
        await retirepo.AdjustCalculator.click();
        browser.sleep(500);
    })

    it('TC2: Verify default caluclutor vaules', async () => {
        browser.sleep(500);
        await retirepo.AdditionalIncome.click();
        await retirepo.AdditionalIncome.sendKeys(td.DataDriven.testData1.additionalIncome);
        await expect(td.DataDriven.testData1.additionalIncome).toBe("500");
        browser.executeScript('window.scrollTo(0,750);').then(function () { 
            retirepo.NoOfYears.sendKeys(td.DataDriven.testData1.noOfYears);
            expect(td.DataDriven.testData1.noOfYears).toBe("20");
            retirepo.PostRetirement.click();
            retirepo.PostRetirement.getText().then( pstretText => { 
                console.log("POST RETIREMENT OPTION: " + pstretText);
                expect(pstretText).toBe("Yes");
            })
            browser.sleep(500);
            retirepo.FinalAnnualIncome.sendKeys(td.DataDriven.testData1.finalAnnualIncome);
            expect(td.DataDriven.testData1.finalAnnualIncome).toBe("75");
            browser.sleep(500);
            retirepo.PreInvestmentReturn.sendKeys(td.DataDriven.testData1.preInvestmentReturn);
            expect(td.DataDriven.testData1.preInvestmentReturn).toBe("8");
            retirepo.PostInvetmentReturn.sendKeys(td.DataDriven.testData1.postInvetmentReturn);
            expect(td.DataDriven.testData1.postInvetmentReturn).toBe("5");
            browser.sleep(500);
            retirepo.SaveButton.getText().then( saveBtnTxt => { 
                console.log("BUTTON TEXT: " + saveBtnTxt);
                expect(saveBtnTxt).toEqual("Save changes");
            });
            retirepo.SaveButton.click();
            browser.sleep(500);
        });
            browser.sleep(500);
            retirepo.CalculateButton.getText().then( calBtnTxt => { 
            console.log("BUTTON TEXT: " + calBtnTxt);
            expect(calBtnTxt).toEqual("Calculate");
        });
        retirepo.CalculateButton.click();
    });
})