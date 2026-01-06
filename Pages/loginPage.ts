import { Locator, Page } from "@playwright/test";
import { Logger } from "../utils/logger";

export class LoginPage {
    readonly page: Page;
    readonly emailerror: Locator;
    readonly invliderror: Locator;
    readonly passworderror  : Locator;

   constructor(page: Page) {
    this.page = page;
    this.emailerror = page.locator(`(//strong[normalize-space()='The email field is required.'])[1]`);
    this.invliderror = page.locator(`//strong[normalize-space()='Invalid password.']`);
    this.passworderror = page.locator(`//strong[normalize-space()='The password field is required.']`);
   }     
   async navigateToLoginPage() {
      await this.page.goto('/');
      Logger.info('Navigated to Delivrise login page');
   }
   async login(username: string, password: string) {
     Logger.info('Filling in login credentials');
     if (username){
      await this.page.fill(`(//input[@id='email'])[1]`, username);
     }
     if (password){
      await this.page.fill(`(//input[@id='password'])[1]`, password);
     }
        await this.page.click(`(//button[@type='submit'])[1]`);
        Logger.success('Login form submitted');
   }

   async verifyLoginSuccess() {
      await this.page.waitForURL(/admin\/merchant\/dashboard/);
      Logger.success('Login successful, navigated to dashboard');
   }
    async verifyLoginFailure() {
      Logger.error('Login failed');
   }   
 
}