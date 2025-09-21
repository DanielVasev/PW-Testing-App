import { Page } from "@playwright/test"

export class NavigationPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    //Mthod to navigate and click on elements in the side menu 
    async formLayoutsPage() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Form Layouts').click()
    }
}