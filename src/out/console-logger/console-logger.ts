import { IStreamLogger } from '../../core/handlers/sream-logger.interface';

export class ConsoleLogger implements IStreamLogger {
  public static logger: ConsoleLogger;
  public static getInstance() {
    if (!ConsoleLogger.logger) {
      ConsoleLogger.logger = new ConsoleLogger();
    }
    return ConsoleLogger.logger;
  }

  end(): void {
    console.log('Done');
  }

  error(...args: any[]): void {
    console.error(...args);
  }

  log(...args: any[]): void {
    console.log(...args);
  }
}
