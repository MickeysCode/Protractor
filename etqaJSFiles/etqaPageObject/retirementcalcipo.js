"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetirementCalci = void 0;
const protractor_1 = require("protractor");
class RetirementCalci {
    constructor() {
        this.CurrentAge = (0, protractor_1.element)(protractor_1.by.id("current-age"));
        this.RetirementAge = (0, protractor_1.element)(protractor_1.by.id("retirement-age"));
        this.CurrentAnnualIncome = (0, protractor_1.element)(protractor_1.by.id("current-income"));
        this.SpouseAnnualIncome = (0, protractor_1.element)(protractor_1.by.id("spouse-income"));
        this.CurrentSavings = (0, protractor_1.element)(protractor_1.by.id("current-total-savings"));
        this.RetirementContribution = (0, protractor_1.element)(protractor_1.by.id("current-annual-savings"));
        this.RetirementContributionIncrease = (0, protractor_1.element)(protractor_1.by.id("savings-increase-rate"));
        this.SocialSecurityBenefits = (0, protractor_1.element)(protractor_1.by.css("label[for='yes-social-benefits']"));
        this.MaritalStatus = (0, protractor_1.element)(protractor_1.by.css("label[for='married']"));
        this.SocialSecurityOveriride = (0, protractor_1.element)(protractor_1.by.css("input[id='social-security-override']"));
        this.AdjustCalculator = (0, protractor_1.element)(protractor_1.by.linkText("Adjust default values"));
        this.AdditionalIncome = (0, protractor_1.element)(protractor_1.by.id("additional-income"));
        this.NoOfYears = (0, protractor_1.element)(protractor_1.by.id("retirement-duration"));
        this.PostRetirement = (0, protractor_1.element)(protractor_1.by.css("label[for='include-inflation']"));
        this.FinalAnnualIncome = (0, protractor_1.element)(protractor_1.by.id("retirement-annual-income"));
        this.PreInvestmentReturn = (0, protractor_1.element)(protractor_1.by.id("pre-retirement-roi"));
        this.PostInvetmentReturn = (0, protractor_1.element)(protractor_1.by.id("post-retirement-roi"));
        this.SaveButton = (0, protractor_1.element)(protractor_1.by.buttonText('Save changes'));
        this.CalculateButton = (0, protractor_1.element)(protractor_1.by.buttonText("Calculate"));
    }
}
exports.RetirementCalci = RetirementCalci;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0aXJlbWVudGNhbGNpcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9ldHFhUGFnZU9iamVjdC9yZXRpcmVtZW50Y2FsY2lwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxlQUFlO0lBcUJ4QjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFFLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNKO0FBMUNELDBDQTBDQyJ9