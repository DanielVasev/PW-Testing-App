import { test, expect } from '@playwright/test'
//Import classes from outside file 
import { NavigationPage } from '../page-objects/navigationPage'
import { formLayoutsPage } from '../page-objects/formLayoutsPage'
import { PageManager } from '../page-objects/pageManager'


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async ({ page }) => {

    const pm = new PageManager(page)
    //Creating a new instance of navigation page
    const navigateTo = new NavigationPage(page)
    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datePickerPage()
    await pm.navigateTo().popOverPage()

})

test("Navigate to FormLayOut and submit by using the Grid form ", async ({ page }) => {
    const pm = new PageManager(page)
    const navigateTo = new NavigationPage(page)
    const submit = new formLayoutsPage(page)
    await pm.navigateTo().formLayoutsPage()
    await submit.submitUsingTheGridFormWithCredentialsAndSelectOption("test@test.com", "12345", "Option 1")
})

test('Navigate to Form Layout page and submit by using Inline form', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const submitWithInlineForm = new formLayoutsPage(page)

    await navigateTo.formLayoutsPage()
    await submitWithInlineForm.submitInlineFormWithNameEmailAndCheckbox("Hasan", "test@test.com", true)

})

