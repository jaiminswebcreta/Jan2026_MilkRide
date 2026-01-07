import { Locator,Page } from "@playwright/test";
import { Logger } from "../../utils/logger";

export class HubListPage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly Firsthub: Locator;
    readonly AddHubButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator(`//input[@placeholder='Search Hub']`);
        this.Firsthub = page.locator(`(//table//tbody//tr//td[2]//a)[1]`);
        this.AddHubButton = page.locator(`(//a[normalize-space()='Add Hub'])[1]`);
    }
    async searchHub(hubName: string) {
        try {
        await this.searchBox.fill(hubName);
        Logger.info(`Searched for hub: ${hubName}`);
        }
        catch (error) {
            Logger.error(`Failed to search for hub: ${error}`);
        }
    }
    async selectFirstHub() {
        try {
        await this.Firsthub.click();
        Logger.info('Selected the first hub from the list');
        } catch (error) {
            Logger.error(`Failed to select the first hub: ${error}`);
        }
    }
    async clickAddHub() {
        try {

        await this.AddHubButton.click();
        Logger.info('Clicked on Add Hub button');
        } catch (error) {
            Logger.error(`Failed to click on Add Hub button: ${error}`);
        }   
    }
}   