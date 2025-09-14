import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:4200/pages/forms/layouts")
})

// Basic tests and suits 
/* test.describe("first suite 'Forms'", () => {
    test("click on forms", async ({ page }) => {
        await page.getByText("Forms").click()
        await page.getByText("Form Layouts").click()
    })
})

test.describe("second suite 'Auth'", () => {
    test('click on "Auth"', async ({ page }) => {
        // click on the submenu option "Datepicker" and click
        await page.getByText("Auth").click()
        await page.getByText("Register").click()
    })
}) */

////////////////////////////////////////////

// Locators by role 

test("user facing locators", async ({ page }) => {
    await page.getByRole("textbox", { name: "Email" }).first().click()
    await page.getByRole("button", { name: "Sign in" }).first().click()

    // Get by Text 
    await page.getByText('Using the Grid').click()
    await page.getByText('Horizontal form').click()

    /////////////////////////////////////////////////////
    // User facing locators 
    /////////////////////////////////////////////////////

    // Get by Role 

    //await page.locator('#inputEmail3').click()

    //await page.getByRole('textbox', { name: "Email" }).click()

    //await page.getByRole('button', { name: "Sign in" }).first().click()

    //await page.getByRole('button', { name: "Send" }).first().click()

    //await page.getByRole('button', { name: "Submit" }).first().click()

    //await page.locator('//html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-form-elements/ngx-form-layouts/div[1]/div/nb-card/nb-card-body/form/nb-checkbox/label/span[1]').click()

    // Locate by label 
    //await page.getByLabel('Email').first().click()

    // By placeholder 
    //await page.getByPlaceholder('Recipients').click()

    // By text
    //await page.getByText('Using the Grid').click()

    //Selecting by title 
    //await page.getByTitle('IoT Dashboard').click()
})

test.skip('Locating by using child elements', async ({ page }) => {

    await page.locator('//span[contains(.,"Option 1")]').click()

    // a few elements in one call 
    //await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
    //await page.getByPlaceholder('Message').click()

})

test.skip('Using parents element', async ({ page }) => {

    await page.locator('nb-card').locator('nb-card-header').getByText("Using the Grid").click()

})

test('reusing locators', async ({ page }) => {

    // adding code to the variables 
    const clickOnUsingTheGreed = page.locator('nb-card').locator('nb-card-header').getByText("Using the Grid")
    await clickOnUsingTheGreed.click()

})

test('extracting values', async ({ page }) => {
    /* // we want to extract data from elements 

    // we assign most of the code to the variable 
    const labelBasicForm = page.locator('//html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-form-elements/ngx-form-layouts/div[2]/div[2]/nb-card[1]/nb-card-header')

    // reusing the variable and clicking on the label
    await labelBasicForm.click()
    const buttonText = await labelBasicForm.textContent()

    // Simulating error 
    expect(buttonText).toEqual("Basic form") */

    // extracting data from all of the buttons 
    /* const textAllOfTheRadioBtn = await page.locator('nb-radio').allTextContents()
    expect(textAllOfTheRadioBtn).toContain("Option 1") */

    //Ading element in array and validating them 
    const textAllOfTheRadioBtn = await page.locator('nb-radio').allTextContents()

})

test('input values to the fields', async ({ page }) => {

    const elementJoe = page.getByRole('textbox', { name: "Email" })
    await page.getByPlaceholder('Jane Doe').fill('Hello Dani!')

    const fieldText = await page.getByPlaceholder('Jane Doe').inputValue()
    console.log(fieldText)
    expect(fieldText).toContain('Hello Dani!')

    // how to validate atribute value getAttribute('')

    const elementAttribute = page.getByPlaceholder('Jane Doe')
    const placeholderValue = await elementAttribute.getAttribute('placeholder')
    expect(placeholderValue).toContain('Jane Doe')
    //console.log(elementAttribute) 

})
