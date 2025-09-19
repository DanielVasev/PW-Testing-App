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
        //Navigating to radio selector option 1....2.. 
        const navigateToRadioOption1 = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('radio', { name: "Option 1" })
        const navigateToRadioOption2 = page.locator('nb-card', { hasText: "Using the Grid" }).getByRole('radio', { name: "Option 2" })

        // click on radio Option 1 
        const clickOnRadioOption1 = await navigateToRadioOption1.click({ force: true })
        const clickOnRadioOption2 = await navigateToRadioOption2.click({ force: true })

        //Check if the Radio is selected 
        await navigateToRadioOption1.isChecked()

        //Assertion if is checked 
        expect(navigateToRadioOption1).toBeTruthy()

        // second way of validating is 
        await expect(navigateToRadioOption2).toBeChecked()

        //check if the selection is falce 
        //await expect(navigateToRadioOption1).toBeFalsy()
    })

    test('working with checkboxes', async ({ page }) => {
        await page.getByText('Modal & Overlays').click()
        await page.getByText('Toastr').click()

        //check element is visible 
        await page.getByText('Hide on click').isVisible()
        //click the checkbox 
        await page.getByRole('checkbox', { name: 'Hide on Click' }).click({ force: true })

        //Alternative for Force comand 
        /* await page.getByRole('checkbox', { name: 'Hide on Click' }).waitFor({ state: 'visible' })
        await page.getByRole('checkbox', { name: 'Hide on Click' }).click() */


    })

})
