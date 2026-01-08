import { test, expect } from "@playwright/test";
import { DashboardPage } from "../../Pages/dashboardPage";
import { DeliveryDashboradPage } from "../../Pages/Delivery_Dashborad/DeliveryDashboradPage";
import { LoginPage } from "../../Pages/loginpage";
import users from "../../test-data/user.json";

import { Logger } from "../../utils/logger";
import { allure } from "allure-playwright";
test("DeliveryDashborad", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await allure.step("Navigate to Login Page and perform login", async () => {
    Logger.info("Starting Delivery Dashboard test");
    await loginPage.navigateToLoginPage();
  });
  await allure.step("Perform login action", async () => {
    await loginPage.login(users.validAdmin.username, users.validAdmin.password);
    await expect(page).toHaveURL(/dashboard|home/);
    Logger.success("Login successful");
  });
  const dashboardPage = new DashboardPage(page);
  await allure.step("Navigate to Delivery Dashboard tab", async () => {
    await dashboardPage.navigateToDeliveryTab();
    await dashboardPage.navigateToDeliveryDashboardTab();
    await expect(page).toHaveURL(/delivery-dashboard/);
    Logger.success("Navigated to Delivery Dashboard page successfully");
  });
  const deliveryDashboradPage = new DeliveryDashboradPage(page);
  await allure.step("Verify Delivery Dashboard Header", async () => {
    await deliveryDashboradPage.verifyDeliveryDashboardHeader();
  });
});
