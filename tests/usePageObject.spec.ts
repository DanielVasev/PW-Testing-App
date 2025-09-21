import { test, expect } from '@playwright/test'
//Import classes from outside file 
import { NavigationPage } from '../page-objects/navigationPage'
import { formLayoutsPage } from '../page-objects/formLayoutsPage'


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async ({ page }) => {
    //Creating a new instance of navigation page
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.popOverPage()
})

test("Navigate to FormLayOut and submit by using the Grid form ", async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const submit = new formLayoutsPage(page)
    await navigateTo.formLayoutsPage()
    await submit.submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com", "12345", "Option 1")

})
