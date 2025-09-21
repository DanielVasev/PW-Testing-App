import { Locator, Page } from "@playwright/test"

export class NavigationPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }
    ////// Other way to organise the locators / check the locators for Auth section down 
    /*    readonly sideMenuAuthElement: Locator
       readonly loginMenuItem: Locator
       readonly registerMenuItem: Locator
       readonly resetPassMenuItem: Locator
       readonly requestPassMenuItem: Locator
   
       constructor(page: Page) {
           this.page = page
   
           ///////////////Side Menu Locators
           //Side Menu Auth Items 
           this.sideMenuAuthElement = page.getByText('Auth')
           this.loginMenuItem = page.getByText('Login')
           this.registerMenuItem = page.getByText('Register')
           this.requestPassMenuItem = page.getByText('Request Password')
           this.resetPassMenuItem = page.getByText('Reset Password')
       } 
           
          // Navigate to Login
       async loginPage() {
           await this.sideMenuAuthElement.click()
           await this.loginMenuItem.click()
       }
       // Navigate to Register
       async registerPage() {
           await this.sideMenuAuthElement.click()
           await this.registerMenuItem.click()
       }
       // Navigate to Request Password 
       async requestPasswordPage() {
           await this.sideMenuAuthElement.click()
           await this.requestPassMenuItem.click()
       }
       // Navigate to Reset Password 
       async resetPasswordPage() {
           await this.sideMenuAuthElement.click()
           await this.resetPassMenuItem.click()
       } */

    //Mthod to navigate and click on elements in the side menu 
    async formLayoutsPage() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Form Layouts').click()
    }

    // Navigate to Datepicker 
    async datePickerPage() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Datepicker').click()
    }

    // Navigate to Dialog
    async dialogPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Dialog').click()
    }

    // Navigate to Window
    async windowPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Window').click()
    }

    // Navigate to Popover
    async popOverPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Popover').click()
    }

    // Navigate to Toastr
    async toastrPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Toastr').click()
    }

    // Navigate to Tooltip 
    async toolTipPage() {
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Tooltip').click()
    }

    // Navigate to Calendar
    async calendarPage() {
        await this.page.getByText('Extra Components').click()
        await this.page.getByText('Calendar').click()
    }

    // Navigate to Echarts 
    async echartsPage() {
        await this.page.getByText('Charts').click()
        await this.page.getByText('Echarts').click()
    }

    // Navigate to Smart Table 
    async smartTablePage() {
        await this.page.getByText('Tables & Data').click()
        await this.page.getByText('Smart Table').click()
    }

    // Navigate to Tree Grid 
    async treeGridPage() {
        await this.page.getByText('Tables & Data').click()
        await this.page.getByText('Tree Grid').click()
    }


}