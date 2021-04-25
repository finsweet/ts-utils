// Constants
const alertTypes = ['info', 'error'] as const;

export default class Debug {
  private static alertsActivated = false;

  public static activateAlerts(): void {
    this.alertsActivated = true;
  }

  public static alert(text: string, type: 'info'): void;
  public static alert<T>(text: string, type: 'error'): T;
  public static alert<T>(text: string, type: typeof alertTypes[number]): T | void {
    if (this.alertsActivated) window.alert(text);
    if (type === 'error') throw new Error(text);
  }
}
