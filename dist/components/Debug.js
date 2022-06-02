// Constants
const alertTypes = ['info', 'error'];
export class Debug {
    static alertsActivated = false;
    static activateAlerts() {
        this.alertsActivated = true;
    }
    static alert(text, type) {
        if (this.alertsActivated)
            window.alert(text);
        if (type === 'error')
            throw new Error(text);
    }
}
