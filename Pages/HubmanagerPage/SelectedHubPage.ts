import { Locator, Page } from "@playwright/test";
import { Logger } from "../../utils/logger";

export class SelectedHubPage {
  readonly page: Page;
  readonly HubHeader: Locator;
  readonly AcccountTab: Locator;
  readonly LocationsTab: Locator;
  readonly ProductsTab: Locator;
  readonly ContacsTab: Locator;
  readonly DocumentsTab: Locator;
  readonly DisableareaTab: Locator;
  readonly PaymentGatewayTab: Locator;
  readonly BatchTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.HubHeader = page.locator(
      `(//h1[contains(normalize-space(),'Hub: Ahmedabad')])[1]`
    );
    this.AcccountTab = page.locator(`(//a[normalize-space()='Accounts'])[1]`);
    this.LocationsTab = page.locator(`(//a[normalize-space()='Locations'])[1]`);
    this.ProductsTab = page.locator(`(//a[normalize-space()='Products'])[1]`);
    this.ContacsTab = page.locator(`(//a[normalize-space()='Contacts'])[1]`);
    this.DocumentsTab = page.locator(`(//a[normalize-space()='Documents'])[1]`);
    this.DisableareaTab = page.locator(
      `(//a[normalize-space()='Disabled Area'])[1]`
    );
    this.PaymentGatewayTab = page.locator(
      `(//a[normalize-space()='Payment Gateway'])[1]`
    );
    this.BatchTab = page.locator(`(//a[normalize-space()='Batches'])[2]`);
  }

  async verifyHubHeader() {
    await this.HubHeader.waitFor({ state: "visible", timeout: 5000 });
    Logger.success("Hub Header is visible");
  }
  async navigateToAccountsTab() {
    await this.AcccountTab.waitFor({ state: "visible", timeout: 5000 });
    await this.AcccountTab.click();
    Logger.info("Navigated to Accounts Tab");
  }
  async navigateToLocationsTab() {
    await this.LocationsTab.waitFor({ state: "visible", timeout: 5000 });
    await this.LocationsTab.click();
    Logger.info("Navigated to Locations Tab");
  }
  async navigateToProductsTab() {
    await this.ProductsTab.waitFor({ state: "visible", timeout: 5000 });
    await this.ProductsTab.click();
    Logger.info("Navigated to Products Tab");
  }
  async navigateToContactsTab() {
    await this.ContacsTab.waitFor({ state: "visible", timeout: 5000 });
    await this.ContacsTab.click();
    Logger.info("Navigated to Contacts Tab");
  }
  async navigateToDocumentsTab() {
    await this.DocumentsTab.waitFor({ state: "visible", timeout: 5000 });
    await await this.DocumentsTab.click();
    Logger.info("Navigated to Documents Tab");
  }
  async navigateToDisabledAreaTab() {
    await this.DisableareaTab.waitFor({ state: "visible", timeout: 5000 });
    await this.DisableareaTab.click();
    Logger.info("Navigated to Disabled Area Tab");
  }
  async navigateToPaymentGatewayTab() {
    await this.PaymentGatewayTab.waitFor({ state: "visible", timeout: 5000 });
    await this.PaymentGatewayTab.click();
    Logger.info("Navigated to Payment Gateway Tab");
  }
  async navigateToBatchesTab() {
    await this.BatchTab.waitFor({ state: "visible", timeout: 5000 });
    await this.BatchTab.click();
    Logger.info("Navigated to Batches Tab");
  }
}
