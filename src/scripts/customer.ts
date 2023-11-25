class Client{
    constructor(){}

    ClientNo=0;
    name="";
    surname="";
    street="";
    HouseNumber="";
    FlatNumber="";
    City="";
    ZIP="";
    Sex="Female";
    Notes="";
    active=false;
    Activities:Array<Activity>= [];

    actionAddr = () =>{
        if (this.FlatNumber == ""){
            return "Address: " + this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber;
        }
        else{
            return "Address: " +this.ZIP + ' ' + this.City + ', ' + this.street + " " + this.HouseNumber + '/' + this.FlatNumber;
        }
    }

    clientDetails = () =>{
        return "No: " + this.ClientNo + ", " + this.name + " " + this.surname + ", " + this.actionAddr();
    }
}

