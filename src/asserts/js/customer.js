"use strict";
// function Client(){
// this.ClientNo=null;
// this.name="";
// this.surname="";
// this.street="";
// this.HouseNumber="";
// this.FlatNumber="";
// this.City="";
// this.ZIP="";
// this.Sex="";
// this.Notes="";
// this.active="";
//   }
//   function Supplier(AccoutNoVar){
//     this.AccoutNo=AccoutNoVar
//     this.Faktury=function(){
//       return ["faktura1","faktura2"]
//     }
//   }
//   Supplier.prototype = new Client()
//   let sup =  new Supplier(21151)
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
class Supplier extends Client {
    constructor(AccoutNo) {
        super();
        this.Faktury = [];
        this.AccoutNo = AccoutNo;
    }
}
