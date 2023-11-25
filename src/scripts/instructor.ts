class Instructor{
    constructor(){}

    InstructorNo=0;
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

    instructorDetails = () =>{
        return "No: " + this.InstructorNo + ", " + this.name + " " + this.surname + ", " + this.actionAddr();
    }
}

