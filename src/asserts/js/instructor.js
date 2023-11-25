"use strict";
class Instructor {
    constructor() {
        this.InstructorNo = 0;
        this.name = "";
        this.surname = "";
        this.street = "";
        this.HouseNumber = "";
        this.FlatNumber = "";
        this.City = "";
        this.ZIP = "";
        this.Sex = "Female";
        this.Notes = "";
        this.active = false;
        this.Activities = [];
        this.actionAddr = () => {
            if (this.FlatNumber == "") {
                return "Address: " + this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber;
            }
            else {
                return "Address: " + this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber + '/' + this.FlatNumber;
            }
        };
        this.instructorDetails = () => {
            return "No: " + this.InstructorNo + ", " + this.name + " " + this.surname + ", " + this.actionAddr();
        };
    }
}
