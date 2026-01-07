import { test, expect } from "@playwright/test";
import { LoginPage } from "../../Pages/loginpage";
import { Logger } from "../../utils/logger";
import users from "../../test-data/user.json";
import { allure } from "allure-playwright";

const loginTestCases = [
  {
    name: "Valid Admin Login",
    user: users.validAdmin,
    isSuccess: true,
  },
  {
    name: "Invalid Admin Login",
    user: users.invalidUser,
    isSuccess: false,
    errorMsg: "Invalid credentials",
  },
  {
    name: "Empty Credentials Login",
    user: users.emptyUser,
    isSuccess: false,
    errorMsg: "Both Required",
  },
];

loginTestCases.forEach(({ name, user, isSuccess, errorMsg }) => {
  test(name, async ({ page }) => {
    // 🔹 ALLURE METADATA
    allure.feature("Login");
    allure.story(name);
    allure.severity(isSuccess ? "critical" : "normal");

    Logger.info(`Starting test: ${name}`);

    const loginPage = new LoginPage(page);
    await allure.step("Navigate to Login Page and perform login", async () => {
      await loginPage.navigateToLoginPage();
    });
    await allure.step("Perform login action", async () => {
      await loginPage.login(user.username, user.password);
    });

    await allure.step("Verify login outcome", async () => {
      if (isSuccess) {
        await expect(page).toHaveURL(/dashboard|home/);
        Logger.success("Login successful");
      } else {
        if (errorMsg === "Invalid credentials") {
          await expect(loginPage.invliderror).toContainText(
            "Invalid password."
          );
          Logger.error("Password field error displayed as expected");
        } else if (errorMsg === "Both Required") {
          await expect(loginPage.emailerror).toContainText(
            "The email field is required."
          );
          await expect(loginPage.passworderror).toContainText(
            "The password field is required."
          );
          Logger.error("Email and Password field errors displayed as expected");
        }
      }
    });
  });
});
