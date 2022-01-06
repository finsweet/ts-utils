export declare class Debug {
    private static alertsActivated;
    static activateAlerts(): void;
    static alert(text: string, type: 'info'): void;
    static alert<T>(text: string, type: 'error'): T;
}
