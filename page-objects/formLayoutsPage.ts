import { Locator, Page } from "@playwright/test"
import { HelperBase } from "./helperBase"

export class formLayoutsPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: "Using the Grid" })
        await usingTheGridForm.getByRole("textbox", { name: "Email" }).fill(email)
        await usingTheGridForm.getByRole("textbox", { name: "Password" }).fill(password)
        await usingTheGridForm.getByRole("radio", { name: optionText }).click({ force: true })
        await usingTheGridForm.getByRole("button").click()

    }
    /**
     * Will submitt application By using the Inline form 
     * @param name - String User name 
     * @param email - Using valid email 
     * @param rememberme - Yes / No to rememeber the data 
     */
    async submitInlineFormWithNameEmailAndCheckbox(name: string, email: string, rememberme: boolean) {
        const inLineForm = this.page.locator('nb-card', { hasText: "Inline form" })
        await inLineForm.getByRole("textbox", { name: "Jane Doe" }).fill(name)
        await inLineForm.getByRole("textbox", { name: "Email" }).fill(email)

        if (rememberme) {
            await inLineForm.getByRole('checkbox').check({ force: true })
        }
        await inLineForm.getByRole('button').click()

    }




}