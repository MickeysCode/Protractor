import { by, element, ElementFinder } from "protractor";

export class RetirementCalci {
    CurrentAge : ElementFinder;
    RetirementAge: ElementFinder;
    CurrentAnnualIncome : ElementFinder;
    SpouseAnnualIncome : ElementFinder;
    CurrentSavings : ElementFinder;
    RetirementContribution : ElementFinder;
    RetirementContributionIncrease : ElementFinder;
    SocialSecurityBenefits : ElementFinder;
    MaritalStatus : ElementFinder;
    AdjustCalculator : ElementFinder;
    SocialSecurityOveriride : ElementFinder;
    AdditionalIncome : ElementFinder;
    NoOfYears : ElementFinder;
    PostRetirement : ElementFinder;
    FinalAnnualIncome : ElementFinder;
    PreInvestmentReturn : ElementFinder;
    PostInvetmentReturn : ElementFinder;
    SaveButton : ElementFinder;
    CalculateButton : ElementFinder;

    constructor() {
        this.CurrentAge = element(by.id("current-age"));
        this.RetirementAge= element(by.id("retirement-age"));
        this.CurrentAnnualIncome = element(by.id("current-income"));
        this.SpouseAnnualIncome = element(by.id("spouse-income"));
        this.CurrentSavings = element(by.id("current-total-savings"));
        this.RetirementContribution = element(by.id("current-annual-savings"));
        this.RetirementContributionIncrease = element(by.id("savings-increase-rate"));
        this.SocialSecurityBenefits = element(by.css("label[for='yes-social-benefits']"));
        this.MaritalStatus = element(by.css("label[for='married']"));
        this.SocialSecurityOveriride = element(by.css("input[id='social-security-override']"));
        this.AdjustCalculator = element(by.linkText("Adjust default values"));
        this.AdditionalIncome = element(by.id("additional-income"));
        this.NoOfYears = element(by.id("retirement-duration"));
        this.PostRetirement = element(by.css("label[for='include-inflation']"));
        this.FinalAnnualIncome = element(by.id("retirement-annual-income"));
        this.PreInvestmentReturn = element(by.id("pre-retirement-roi"));
        this.PostInvetmentReturn = element(by.id("post-retirement-roi"));
        this.SaveButton = element(by.buttonText('Save changes'));
        this.CalculateButton = element(by.buttonText("Calculate"));
    }
}