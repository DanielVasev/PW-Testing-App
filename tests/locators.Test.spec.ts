import { test } from '@playwright/test'

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

/* test("user facing locators", async ({ page }) => {
    await page.getByRole("textbox", { name: "Email" }).first().click()
    await page.getByRole("button", { name: "Sign in" }).first().click()

    //Selector by using label 
    await page.getByLabel("Email").first().click()

    //Selector by using ID "#" before the value
    await page.locator("#exampleInputPassword1").click()

    //By using xpath / not recomended 
    await page.locator('//*[@id="inputEmail1"]').click()


    //combination of locations 
    await page.locator('input[placeholder="Email"]').click()

    //By using class full value 
    await page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]').click()

    //By attribute e.g. placeholder
    await page.locator("[placeholder='Email']").click()

    //Using class "." before the value / no need to be full name of the class 

    await page.locator(".shape-rectangle").click() 



    /////////////////////////////////////////////////
    User Facing Elements 

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

    /////////////////////////////////////////////////
    // Locating child elements 
    ////////////////////////////////////////////////

    

})*/

