import { test, expect } from '@playwright/test'
//Import classes from outside file 
import { NavigationPage } from '../page-objects/navigationPage'


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async ({ page }) => {
    //Creating a new instance of navigation page
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()


})
