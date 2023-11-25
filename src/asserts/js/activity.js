"use strict";
class Activity {
    constructor() {
        this.ActivityNo = 0;
        this.ActivityDay = "";
        this.ActivityHour = "";
        this.ClientsList = [];
        this.Name = "";
        this.MaxClients = 0;
        this.SignedClients = 0;
        this.InstructorNo = 0;
        this.GetFullDay = () => {
            switch (this.ActivityDay) {
                case 'M':
                    return 'Monday';
                case 'TU':
                    return 'Tuesday';
                case 'W':
                    return 'Wednesday';
                case 'TH':
                    return 'Thursday';
                case 'F':
                    return 'Friday';
                case 'SA':
                    return 'Saturday';
                case 'SU':
                    return 'Sunday';
            }
        };
        this.ActivityDetails = () => {
            return this.Name + " | Day: " + this.GetFullDay() + " | Hour: " + this.ActivityHour;
        };
        this.ActivityDetailsForInstructor = () => {
            return this.Name + " | Day: " + this.GetFullDay() + " | Hour: " + this.ActivityHour;
        };
    }
}
