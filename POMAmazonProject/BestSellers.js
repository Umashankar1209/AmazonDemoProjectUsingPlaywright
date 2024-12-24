exports.BestSellers=
class BestSellers
{
    constructor(page) {
        this.page = page;
        this.ProductInFirstSection = "(//div[@id='anonCarousel1']//li[@aria-posinset='1']//a)[1]";
        this.ProductInSecondSection="(//div[@id='anonCarousel2']//li[@aria-posinset='1']//a)[1]"
        this.ProductInThirdSection="(//div[@id='anonCarousel3']//li[@aria-posinset='1']//a)[1]"
        this.ProductInFourthSection="(//div[@id='anonCarousel4']//li[@aria-posinset='1']//a)[1]"
        this.ProductInFivthSection="(//div[@id='anonCarousel5']//li[@aria-posinset='1']//a)[1]"
        this.ProductInSixthSection="(//div[@id='anonCarousel6']//li[@aria-posinset='1']//a)[1]"
    }
    async firstProductInFirstSection(){
     // 1st product in FirstSection    
     await this.page.locator(this.ProductInFirstSection).hover();
     await this.page.locator(this.ProductInFirstSection).click();
    }

    //1st product in SecondSection
    async firstProductInSecondSection(){  
        await this.page.locator(this.ProductInSecondSection).hover();
        await this.page.locator(this.ProductInSecondSection).click();
    
    }
    //1st product in ThirdSection
    async firstProductInThirdSection()
    { 
        await this.page.locator(this.ProductInThirdSection).hover();
        await this.page.locator(this.ProductInThirdSection).click();
    }
    //1st product in FourthSection
    async firstProductInFourthSection()
    {
        await this.page.locator(this.ProductInFourthSection).hover();
        await this.page.locator(this.ProductInFourthSection).click();
    }
    //1st product in FivthSection
    async FirstProductInFivthSection()
    {
        await this.page.locator(this.ProductInFivthSection).hover();
        await this.page.locator(this.ProductInFivthSection).click();
    }
    //1st product in Electronics
    async FirstProductInSixthSection()
    {
        await this.page.locator(this.ProductInSixthSection).hover();
        await this.page.locator(this.ProductInSixthSection).click();

    }
}
