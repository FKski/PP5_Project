class Activity{
    constructor(){}
ActivityNo : number = 0;
    ActivityDay : string = "";
    ActivityHour : string = "";
    ClientsList : Array<Client> = [];
    Name : string = "";
    MaxClients : number = 0;

    ActivityDetails = () =>{
        return "Name: " + this.Name + ", Day: " + this.ActivityDay + ", Hour: " + this.ActivityHour;
    }

}