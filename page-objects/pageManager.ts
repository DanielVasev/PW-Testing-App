import { Locator, Page, expect } from "@playwright/test"
import { NavigationPage } from "./navigationPage"
import { formLayoutsPage } from "./formLayoutsPage"

export class PageManager {

    private readonly page: Page
    private readonly navigationPage: NavigationPage
    private readonly formLayoutPage: formLayoutsPage

    constructor(page: Page) {
        this.page = page
        this.navigationPage = new NavigationPage(this.page)
        this.formLayoutPage = new formLayoutsPage(this.page)

    }

    navigateTo() {

        return this.navigationPage
    }



}