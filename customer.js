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

class Client{
    constructor(){}

    ClientNo=null;
    name="";
    surname="";
    street="";
    HouseNumber="";
    FlatNumber="";
    City="";
    ZIP="";
    Sex="";
    Notes="";
    active="";

    actionAddr = function(){
        if (this.FlatNumber == ""){
            return "Address: " + this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber;
        }
        else{
            return "Address: " +this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber + '/' + this.FlatNumber;
        }
    }

    clientDetails = function(){
        return "No: " + this.ClientNo + ", " + this.name + " " + this.surname + ", " + this.actionAddr();
    }
}

class Supplier extends Client{

    constructor(AccoutNo){
        this.AccoutNo = AccoutNo
        super();
    }

    Faktury=[];
}

