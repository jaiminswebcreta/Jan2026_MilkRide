import{test, expect} from "@playwright/test";
import { LoginPage } from "../../Pages/loginpage";
import { Logger } from "../../utils/logger";
import users from '../../test-data/user.json';
import { allure } from 'allure-playwright'; 
import { HubListPage } from "../../Pages/HubmanagerPage/HubListPage";
import { DashboardPage } from "../../Pages/dashboardPage";


test('HubListPage', async ({page})=>{


    const loginPage = new LoginPage(page);
    await allure.step('Navigate to Login Page and perform login', async () => {
    Logger.info('Starting Hub List Page test');
    await loginPage.navigateToLoginPage();
    });
    await allure.step('Perform login action', async () => {
    await loginPage.login(users.validAdmin.username, users.validAdmin.password);
    });
    const dashboardPage = new DashboardPage(page);
    await allure.step('Navigate to Hub Manager and All Hubs tabs', async () => {
    await dashboardPage.navigateToHubManager();
    await dashboardPage.navigateToAllHubs();
    }); 
    const hubListPage = new HubListPage(page);
    await allure.step('Search and select first hub', async () => {
    await hubListPage.searchHub('ahmedabad');
    await hubListPage.selectFirstHub();
    Logger.success('Hub List Page test completed successfully');
    });

    // 🔹 ALLURE METADATA
});
