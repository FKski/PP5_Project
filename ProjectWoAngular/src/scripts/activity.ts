class Activity{
    constructor(){}
    ActivityNo : number = 0;
    ActivityDay : string = "";
    ActivityHour : string = "";
    ClientsList : Array<Client> = [];
    Name : string = "";
    MaxClients : number = 0;
    SignedClients : number = 0;
    InstructorNo:number = 0;

    GetFullDay = () =>{
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
    }

    

    ActivityDetails = () =>{
        return this.Name + " | Day: " + this.GetFullDay() + " | Hour: " + this.ActivityHour ;
    }

    ActivityDetailsForInstructor = () =>{
        return this.Name + " | Day: " + this.GetFullDay() + " | Hour: " + this.ActivityHour ;
    }


}