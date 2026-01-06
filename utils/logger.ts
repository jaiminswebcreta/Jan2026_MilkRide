export class Logger {

  static info(message: string) {
    console.log(`ℹ️ [INFO] ${message}`);
  }

  static success(message: string) {
    console.log(`✅ [SUCCESS] ${message}`);
  }

  static error(message: string) {
    console.error(`❌ [ERROR] ${message}`);
  }
}
