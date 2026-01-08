import { Locator, Page } from "@playwright/test";
import { Logger } from "../../utils/logger";

export class DeliveryDashboradPage {
  readonly page: Page;
  readonly DeliveryDashboardHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.DeliveryDashboardHeader = page.locator(
      `(//span[normalize-space()='Delivery Dashboard'])[2]`
    );
  }
  async verifyDeliveryDashboardHeader() {
    try {
      const deleveryDashboardUrl = await this.page.url();
      Logger.info(`Current URL is: ${deleveryDashboardUrl}`);
      await this.DeliveryDashboardHeader.waitFor({
        state: "visible",
        timeout: 5000,
      });
      Logger.success("Delivery Dashboard Header is visible");
    } catch (error) {
      Logger.error(`Failed to verify Delivery Dashboard Header: ${error}`);
    }
  }
}
