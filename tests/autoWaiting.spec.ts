import { test, expect } from '@playwright/test'
import { TIMEOUT } from 'dns'
import { setTimeout } from 'timers'

test.beforeEach(async ({ page }) => {

    await page.goto('http://uitestingplayground.com/ajax')

    // additional wait before click event 
    await page.waitForTimeout(3000)

    await page.getByText('Button Triggering AJAX Request').click()
    //await page.getByRole

    //await page.getByText('').click()
})

test('auto Waiting', async ({ page }) => {
    const successBtn = page.locator('.bg-success')

    //await successBtn.click()

    //Read the text from the btn 
    //const text = await successBtn.textContent()

    await successBtn.waitFor({ state: 'attached' })
    //const text = await successBtn.allTextContents()

    //By deff .click will wait 30sec 
    //expect(text).toContain('Data loaded with AJAX get request.')

    // assign dedicated timout
    //await expect(successBtn).toHaveText('Data loaded with AJAX get request.', { timeout: 10000 })
})

test('Alternative waits', async ({ page }) => {
    const successBtn = page.locator('.bg-success')

    //wait for element
    await page.waitForSelector(('.bg-success'))
    //Collecting the element text 
    const text = await successBtn.allTextContents()
    // Validating the text is what we expecting 
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('Waithing for specific response ', async ({ page }) => {
    const successBtn = page.locator('.bg-success')
    // will wait for specific response to happen 
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata')
    // will collect the text from the element 
    const text = await successBtn.allTextContents()
    // validating the text is as expected 
    await expect(text).toContain('Data loaded with AJAX get request.')
})
test('timouts', async ({ page }) => {

    const successBtn = page.locator('.bg-success')
    //test.slow will increace the deff timout 3 times 
    test.slow()
    await successBtn.click()



})