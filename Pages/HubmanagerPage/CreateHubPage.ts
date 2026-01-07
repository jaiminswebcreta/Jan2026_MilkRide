import { Locator, Page } from "@playwright/test";
import { Logger } from "../../utils/logger";

export class CreateHubPage {
  readonly page: Page;
  readonly HubHeader: Locator;
  readonly BackButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HubHeader = page.locator(
      `//h1[contains(normalize-space(),'Add New')]`
    );
    this.BackButton = page.locator(
      `(//a[contains(normalize-space(),'Back')])[1]`
    );
  }
  async verifyOnCreateHeader() {
    try {
      await this.HubHeader.waitFor({ state: "visible", timeout: 5000 });
      Logger.success("On Create Hub page, header is visible");
    } catch (error) {
      Logger.error(`Create Hub header not found: ${error}`);
    }
  }
  async clickBackButton() {
    try {
      await this.BackButton.click();
      Logger.info("Clicked on Back button");
    } catch (error) {
      Logger.error(`Failed to click on Back button: ${error}`);
    }
  }
}
