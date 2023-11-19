"use strict";
class Client {
    constructor() {
        this.ClientNo = 0;
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
        this.actionAddr = () => {
            if (this.FlatNumber == "") {
                return "Address: " + this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber;
            }
            else {
                return "Address: " + this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber + '/' + this.FlatNumber;
            }
        };
        this.clientDetails = () => {
            return "No: " + this.ClientNo + ", " + this.name + " " + this.surname + ", " + this.actionAddr();
        };
    }
}
