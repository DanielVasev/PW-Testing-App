import { test, expect } from '@playwright/test'

//Navigate to page
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

//Create a suite 
test.describe("Form Layout Page", () => {
    //run a code before each test in this suite 
    test.beforeEach(async ({ page }) => {

        //Navigate to the Form cta side menu 
        await page.getByText('Forms').click()
        //click on Layouts in the side menu
        await page.getByText('Form Layouts').click()
    })

    test('input fields', async ({ page }) => {
        const clickOnUsingTheGreed = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('textbox', { name: "Email" })

        // Using the methid fill will add text to the field 
        await clickOnUsingTheGreed.fill('test@test.com')

        // to clear text from field we need to use .clear()
        await clickOnUsingTheGreed.clear()

        // If you want to simulate keyboard typing 
        await clickOnUsingTheGreed.pressSequentially("test2@test.com", { delay: 400 })

        // how to generic assertion of data in the field 

        const inputValue = await clickOnUsingTheGreed.inputValue()
        expect(inputValue).toEqual('test2@test.com')

        //locator assertion 
        await expect(clickOnUsingTheGreed).toHaveValue('test2@test.com')
    })

    test("Radio Btn's", async ({ page }) => {
        //Navigating to the main form 
        //const usingTheGridForm = page.locator('nb-card', { hasText: "Using the Grid" })
        const usingTheGridForm = page.locator('nb-card', { hasText: "Using the Grid" })

        // Navigate to checkbox 1 and selecting it 
        //await usingTheGridForm.getByLabel('Option 1').check({ force: true })// in case the element is hiden we can use "force:true" to overrigd the action 

        await usingTheGridForm.getByRole('radio', { name: "Option 1" }).click({ force: true })



    })
})