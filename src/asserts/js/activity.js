"use strict";
class Activity {
    constructor() {
        this.ActivityNo = 0;
        this.ActivityDay = "";
        this.ActivityHour = "";
        this.ClientsList = [];
        this.Name = "";
        this.MaxClients = 0;
        this.ActivityDetails = () => {
            return "Name: " + this.Name + ", Day: " + this.ActivityDay + ", Hour: " + this.ActivityHour;
        };
    }
}
