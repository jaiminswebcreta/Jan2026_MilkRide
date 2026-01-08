import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/loginpage";
import { Logger } from "../../utils/logger";
import users from "../../test-data/user.json";
import { allure } from "allure-playwright";
import { HubListPage } from "../../Pages/HubmanagerPage/HubListPage";
import { DashboardPage } from "../../Pages/dashboardPage";
import { CreateHubPage } from "../../Pages/HubmanagerPage/CreateHubPage";
import { SelectedHubPage } from "../../Pages/HubmanagerPage/SelectedHubPage";

test("HubListPage", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await allure.step("Navigate to Login Page and perform login", async () => {
    Logger.info("Starting Hub List Page test");
    await loginPage.navigateToLoginPage();
  });
  await allure.step("Perform login action", async () => {
    await loginPage.login(users.validAdmin.username, users.validAdmin.password);
    await expect(page).toHaveURL(/dashboard|home/);
    Logger.success("Login successful");
  });
  const dashboardPage = new DashboardPage(page);
  await allure.step("Navigate to Hub Manager and All Hubs tabs", async () => {
    await dashboardPage.navigateToHubManager();
    await dashboardPage.navigateToAllHubs();
    await expect(page).toHaveURL(/admin\/hubs/);
    Logger.success("Navigated to All Hubs page successfully");
  });
  const hubListPage = new HubListPage(page);
  await allure.step("Search and select first hub", async () => {
    await hubListPage.searchHub("ahmedabad");
    const createHubPage = new CreateHubPage(page);
    await allure.step(
      "Click on Add Hub button and verify navigation to Create Hub page",
      async () => {
        await hubListPage.clickAddHub();
        await expect(page).toHaveURL(/admin\/hubs\/create/);
        Logger.success("Navigated to Create Hub page successfully");
        await createHubPage.verifyOnCreateHeader();
        Logger.success("Create Hub page header verified successfully");
        await createHubPage.clickBackButton();
        Logger.info("Clicked on Back button to return to Hub List page");
        await expect(page).toHaveURL(/admin\/hubs/);
        Logger.success("Returned to Hub List page successfully");
        await hubListPage.selectFirstHub();
        await page.waitForLoadState("networkidle");
        await expect(page).toHaveURL(/admin\/hubs\/show/);
        Logger.success("Hub List Page test completed successfully");
        const selectedHubPage = new SelectedHubPage(page);
        await selectedHubPage.verifyHubHeader();
        await selectedHubPage.navigateToAccountsTab();
        await selectedHubPage.navigateToLocationsTab();
        await selectedHubPage.navigateToProductsTab();
        await selectedHubPage.navigateToContactsTab();
        await selectedHubPage.navigateToDocumentsTab();
        await selectedHubPage.navigateToDisabledAreaTab();
        await selectedHubPage.navigateToPaymentGatewayTab();
        await selectedHubPage.navigateToBatchesTab();
      }
    );
    // 🔹 ALLURE METADATA
  });
});
