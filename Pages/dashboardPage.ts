import { Locator, Page } from "@playwright/test";
import { Logger } from "../utils/logger";

export class DashboardPage {
    readonly page: Page;
    readonly HubManagerTab: Locator;
    readonly AllHubtab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.HubManagerTab = page.locator(`(//*[normalize-space()='Hub Manager'])[1]`);
        this.AllHubtab = page.locator(`(//*[normalize-space()='All Hubs'])[1]`);
    }

    async navigateToHubManager() {
        try {   

        await this.HubManagerTab.click();
        Logger.info('Navigated to Hub Manager tab');
        } catch (error) {
            Logger.error(`Failed to navigate to Hub Manager tab: ${error}`);
        }
    }

    async navigateToAllHubs() {
        try {
        await this.AllHubtab.click();
        Logger.info('Navigated to All Hubs tab');
        } catch (error) {
            Logger.error(`Failed to navigate to All Hubs tab: ${error}`);
        }
    }
}