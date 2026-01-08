import { Locator, Page } from "@playwright/test";
import { Logger } from "../utils/logger";

export class DashboardPage {
  readonly page: Page;
  readonly HubManagerTab: Locator;
  readonly AllHubtab: Locator;
  readonly DeliveryTab: Locator;
  readonly Delivery_DashboardTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HubManagerTab = page.locator(
      `(//*[normalize-space()='Hub Manager'])[1]`
    );
    this.AllHubtab = page.locator(`(//*[normalize-space()='All Hubs'])[1]`);
    this.DeliveryTab = page.locator(
      `(//span[normalize-space()='Delivery'])[2]`
    );
    this.Delivery_DashboardTab = page.locator(
      `(//span[normalize-space()='Delivery Dashboard'])[1]`
    );
  }

  async navigateToHubManager() {
    try {
      await this.HubManagerTab.click();
      Logger.info("Navigated to Hub Manager tab");
    } catch (error) {
      Logger.error(`Failed to navigate to Hub Manager tab: ${error}`);
    }
  }

  async navigateToAllHubs() {
    try {
      await this.AllHubtab.click();
      Logger.info("Navigated to All Hubs tab");
    } catch (error) {
      Logger.error(`Failed to navigate to All Hubs tab: ${error}`);
    }
  }
  async navigateToDeliveryTab() {
    try {
      await this.DeliveryTab.click();
      Logger.info("Navigated to Delivery tab");
    } catch (error) {
      Logger.error(`Failed to navigate to Delivery tab: ${error}`);
    }
  }
  async navigateToDeliveryDashboardTab() {
    try {
      await this.Delivery_DashboardTab.click();
      Logger.info("Navigated to Delivery Dashboard tab");
    } catch (error) {
      Logger.error(`Failed to navigate to Delivery Dashboard tab: ${error}`);
    }
  }
}
