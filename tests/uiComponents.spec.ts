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

        // confirm that the checkbox is unchecked 
        await page.getByRole('checkbox', { name: 'Hide on Click' }).isChecked()
        //await page.getByRole('checkbox', { name: 'Hide on Click' }).uncheck()

        // check the status for all of the checkboxes 
        const locatorAllCheckBoxes = await page.getByRole('checkbox')

        for (const box of await locatorAllCheckBoxes.all()) {

            //Option to click and unclick all of the radio 
            //await box.check({ force: true })
            await box.uncheck({ force: true })
            expect(box.check()).toBeTruthy()
        }

        //Alternative for Force comand 
        /* await page.getByRole('checkbox', { name: 'Hide on Click' }).waitFor({ state: 'visible' })
        await page.getByRole('checkbox', { name: 'Hide on Click' }).click() */
    })

    test('Lists and Dropdowns', async ({ page }) => {
        const dropDownMenu = page.locator('ngx-header nb-select')
        await dropDownMenu.click()

        //page.getByRole('list')// We using it when the list has a UL tag 
        //page.getByRole('listitem') // Using it when the list has a LI tag 

        //first way of getting the list elements 
        //const listElements = page.getByRole('list').locator('nb-option')

        //second way 
        const listElement = page.locator('nb-option-list nb-option')
        //assert all list elements are available 
        await expect(listElement).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])

        //select individual element 
        await listElement.filter({ hasText: 'Cosmic' }).click()

        //define header element 
        const header = page.locator('nb-layout-header')
        await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

        //validating all of the colours are set properly 
        const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
        }


        await dropDownMenu.click()
        //will select each option and validate them 
        for (const color in colors) {
            await listElement.filter({ hasText: color }).click()
            await expect(header).toHaveCSS('background-color', colors[color])
            await dropDownMenu.click()
        }
    })

    test('tooltips', async ({ page }) => {

        //Navigate to the requared page 
        await page.getByText('Modal & Overlays').click()
        await page.getByText('Tooltip').click()

        //Create a variable to hold the locator for the tooltip 
        const tooltipCard = page.locator('//html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div[1]/div/div/div/div/nb-layout-column/ngx-modal-overlays/ngx-tooltip/div/div[2]/nb-card/nb-card-body/button[1]')

        //over over the element 
        await tooltipCard.hover()
    })

    test('sliders', async ({ page }) => {
        //case: we have a slider which can adjust from 0 to 30 degreece... lets adjust the slider to 30C and validate the number
        await page.getByText('Iot Dashboard').click()
        const tempGuage = page.locator('nb-tab ngx-temperature-dragger')
        await tempGuage.hover({ force: true })



        //mouse movment 







    })


})  
