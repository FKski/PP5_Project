let clients:Array<Client> = [];
let ClientNo:number = 0;
let ModifyClientNo:number = 0;
let ModifyClientObj:number = 0;

let activities:Array<Activity> = [];
let activityNo:number = 0;
let activityNoForInstructorChange :number = 0;

let InstructorNo:number = 0;
let instructors:Array<Instructor> = [];
let ModifyInstructorNo:number = 0;

function generatePOC() {
  let client1:Client = new Client();
  client1.ClientNo = 0;
  client1.name = 'Filip';
  client1.surname = 'Kamiński';
  client1.street='Krakowska';
  client1.HouseNumber='5';
  client1.FlatNumber='2';
  client1.City='Kraków';
  client1.ZIP='33-33';
  client1.Sex='Male';
  client1.Notes='None';
  client1.active=true;

  let client2:Client = new Client();
  client2.ClientNo = 1;
  client2.name = 'Adam';
  client2.surname = 'Skowron';
  client2.street = 'Malarska';
  client2.HouseNumber = '12';
  client2.FlatNumber = '';
  client2.City = 'Rabka Zdrój';
  client2.ZIP = '21-732';
  client2.Sex = 'Male';
  client2.Notes = 'Had ankle injury';
  client2.active = false;

  let client3:Client = new Client();
  client3.ClientNo = 2;
  client3.name = 'Ewenlina';
  client3.surname = 'Kałamarz';
  client3.street='Bura';
  client3.HouseNumber='4';
  client3.FlatNumber='21';
  client3.City='Gdańsk';
  client3.ZIP='12-093';
  client3.Sex='Female';
  client3.Notes='None';
  client3.active=true;

  let instructor1:Instructor = new Instructor();
  instructor1.InstructorNo=0;
  instructor1.name = 'Kamil';
  instructor1.surname = 'Stoch';
  instructor1.street = 'Zakopiańska';
  instructor1.HouseNumber = '22';
  instructor1.FlatNumber = '';
  instructor1.City = 'Leszno';
  instructor1.ZIP = '93-212';
  instructor1.Sex = 'Male';
  instructor1.Notes = 'None';
  instructor1.active = true;

  let activity1:Activity = new Activity();
  activity1.ActivityNo = 0;
  activity1.ActivityDay = "TU";
  activity1.ActivityHour = "20:30";
  activity1.Name = "Ćwiczenia skokowe";
  activity1.MaxClients = 2;
  activity1.SignedClients = 0;
  activity1.InstructorNo = 0;

  clients.push(client1)
  clients.push(client2)
  clients.push(client3)
  activities.push(activity1)
  instructors.push(instructor1)
  client1.Activities.push(activity1)
  client3.Activities.push(activity1)
  instructor1.Activities.push(activity1)
  activity1.ClientsList.push(client1)
  activity1.ClientsList.push(client3)
  activity1.SignedClients = 2

  let ul=getElementById("clients-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">${e.clientDetails()}</li>`;
    })
  
    let ul2=getElementById("activites-group");
    ul2.innerHTML = ''
    activities.forEach((e)=>{
        ul2.innerHTML += `<li class="list-group-item" onclick="showAddClientToActivity(${e.ActivityNo})">${e.ActivityDetails()}  </li>`;
        // <button onclick="showAddClientToActivity(${e.ActivityNo})">Add clients</button>
    })

    let ul_added=getElementById("clients-added-group");
    ul_added.innerHTML = '';
    activities[activity1.ActivityNo].ClientsList.forEach((cl) =>{
      ul_added.innerHTML += `<li class="list-group-item" onclick="removeClientFromActivity(${cl.ClientNo}, ${activity1.ActivityNo})">${cl.clientDetails()}</li>`;
    })

    let ul3=getElementById("instructors-group");
    ul3.innerHTML = ''
    instructors.forEach((e)=>{
        ul3.innerHTML += `<li class="list-group-item" onclick="editInstructorFunc(${e.InstructorNo })">${e.instructorDetails()}</li>`;
    })
}

function SaveClient() {
    
    console.log('Moved to client_list form')
  
    let newClient = new Client();
    newClient.ClientNo = ClientNo;
    newClient.name = getElementById('InputName').value;
    newClient.surname = getElementById('InputLastName').value;
    newClient.street = getElementById('InputStreet').value;
    newClient.HouseNumber = getElementById('InputHouseNumber').value;
    newClient.FlatNumber = getElementById('InputFlatNumber').value;
    newClient.City = getElementById('InputCity').value;
    newClient.ZIP = getElementById('InputZIP').value;
    newClient.Sex = querySelectorAll('input[name="SEX"]:checked').value;
    newClient.Notes = getElementById('InputNotes').value;
    newClient.active = getElementById('InputActive').checked;


    // Zapisz dane do konsoli
    console.log('Client:', newClient);
    clients.push(newClient)
    getElementById("client_create_form").style.display = 'none';
    getElementById("client_list").style.display = 'block';;
    let ul=getElementById("clients-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">${e.clientDetails()}</li>`;
    })
    ClientNo += 1;
    Back();

      
  }
  

function SaveModified(ModifyClientNo:number){
  
  let modifiedClient = clients[ModifyClientNo];
  let ClientActiveCheck = clients[ModifyClientNo].active;
  let ClientActivities = clients[ModifyClientNo].Activities;
  let Client = clients[ModifyClientNo];
  modifiedClient.ClientNo = ModifyClientNo;
  modifiedClient.name = getElementById('InputName').value;
  modifiedClient.surname = getElementById('InputLastName').value;
  modifiedClient.street = getElementById('InputStreet').value;
  modifiedClient.HouseNumber = getElementById('InputHouseNumber').value;
  modifiedClient.FlatNumber = getElementById('InputFlatNumber').value;
  modifiedClient.City = getElementById('InputCity').value;
  modifiedClient.ZIP = getElementById('InputZIP').value;
  modifiedClient.Sex = querySelectorAll('input[name="SEX"]:checked').value;
  modifiedClient.Notes = getElementById('InputNotes').value;
  modifiedClient.active = getElementById('InputActive').checked;

       if(ClientActiveCheck != getElementById('InputActive').checked && getElementById('InputActive').checked == false){
        ClientActivities.forEach(ClientActivity => {
          activities.forEach(activity => {
            if (activity == ClientActivity) {
              delete activity.ClientsList[activity.ClientsList.indexOf(Client)];
              activity.SignedClients -= 1;
            }
          });
        });
        modifiedClient.Activities = [];
      }

  clients[ModifyClientNo] = modifiedClient;
  let ul=getElementById("clients-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">${e.clientDetails()}</li>`;
    })
  clients.forEach(e=>{console.log(e)})



  Back()

  getElementById("client_create_form").style.display = "none";
  getElementById("client_list").style.display = "block";
  getElementById("modifyButton").style.display = "none";
  getElementById("saveButton").style.display = "block";
  getElementById("client-activities-group-label").style.display = "none";
  getElementById("client-activities-group").style.display = "none";

  getElementById('InputName').removeAttribute('readonly');
  getElementById('InputLastName').removeAttribute('readonly');
}

function editClientFunc(ClientNo:number){
  getElementById("client_create_form").style.display = "block";
  getElementById("client_list").style.display = "none";
  getElementById("modifyButton").style.display = "block";
  getElementById("client-activities-group-label").style.display = "block";
  getElementById("client-activities-group").style.display = "block";
  getElementById("saveButton").style.display = "none";
  console.log(`loaded ${ClientNo}`)

  clients.forEach(e => {
    if (e.ClientNo == ClientNo) {
      let loadedClient = clients[ClientNo]

      // Wypełnij pola formularza danymi z konsoli
      getElementById('InputName').value = loadedClient.name;
      getElementById('InputLastName').value = loadedClient.surname;
      getElementById('InputStreet').value = loadedClient.street;
      getElementById('InputHouseNumber').value = loadedClient.HouseNumber;
      getElementById('InputFlatNumber').value = loadedClient.FlatNumber;
      getElementById('InputCity').value = loadedClient.City;
      getElementById('InputZIP').value = loadedClient.ZIP;
      getElementsByName("SEX").forEach((element: HTMLElement) => {
        // Sprawdź, czy element jest inputem typu radio
        if (element instanceof HTMLInputElement && element.type === "radio" && element.value === loadedClient.Sex) {
            element.checked;
        }
    });
      getElementById('InputNotes').value = loadedClient.Notes;
      getElementById('InputActive').checked = loadedClient.active;
      getElementById('InputName').setAttribute('readonly', 'true');
      getElementById('InputLastName').setAttribute('readonly', 'true');

      let ul=getElementById("client-activities-group");
      ul.innerHTML = ''
      loadedClient.Activities.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item">${e.ActivityDetails()}</li>`;
      })
      
      ModifyClientNo = loadedClient.ClientNo;

      }

  });
  
}

  function CreateNewClient() {
   getElementById("client_create_form").style.display = 'block';
   getElementById("client_list").style.display = 'none';
   getElementById("saveButton").style.display = 'block';
   console.log('Moved to client_create_form form')
  }

  function Back(){
    let client = new Client();
    getElementById('InputName').value = client.name;
    getElementById('InputLastName').value = client.surname;
    getElementById('InputStreet').value = client.street;
    getElementById('InputHouseNumber').value = client.HouseNumber;
    getElementById('InputFlatNumber').value = client.FlatNumber;
    getElementById('InputCity').value = client.City;
    getElementById('InputZIP').value = client.ZIP;
    getElementsByName("SEX").forEach((element: HTMLElement) => {
      // Sprawdź, czy element jest inputem typu radio
      if (element instanceof HTMLInputElement && element.type === "radio" && element.value === "Female") {
          element.checked;
      }
    });
    getElementById('InputNotes').value = client.Notes;
    getElementById('InputActive').checked = client.active;
    getElementById("client_create_form").style.display = "none";
    getElementById("client_list").style.display = "block";
    getElementById("modifyButton").style.display = "none";
    getElementById("saveButton").style.display = "none";
    getElementById('InputName').removeAttribute('readonly');
    getElementById('InputLastName').removeAttribute('readonly');
  }

  function InstructorBack(){
    let instructor = new Instructor();
    getElementById('InstructorInputName').value = instructor.name;
    getElementById('InstructorInputLastName').value = instructor.surname;
    getElementById('InstructorInputStreet').value = instructor.street;
    getElementById('InstructorInputHouseNumber').value = instructor.HouseNumber;
    getElementById('InstructorInputFlatNumber').value = instructor.FlatNumber;
    getElementById('InstructorInputCity').value = instructor.City;
    getElementById('InstructorInputZIP').value = instructor.ZIP;
    getElementsByName("InstructorSEX").forEach((element: HTMLElement) => {
      // Sprawdź, czy element jest inputem typu radio
      if (element instanceof HTMLInputElement && element.type === "radio" && element.value === "Female") {
          element.checked;
      }
    });
    getElementById('InstructorInputNotes').value = instructor.Notes;
    getElementById('InstructorInputActive').checked = instructor.active;
    getElementById("instructor_create_form").style.display = "none";
    getElementById("instructor_list").style.display = "block";
    getElementById("modifyButton").style.display = "none";
    getElementById("saveButton").style.display = "none";
    getElementById('InstructorInputName').removeAttribute('readonly');
    getElementById('InstructorInputLastName').removeAttribute('readonly');
  }

  function Login(){
    if (getElementById("unlockPasswd").value === "passwd") {
      getElementById("menu").style.display = 'block';
      getElementById("login").style.display = 'none';
      getElementById("unlockPasswd").value = "";
    }
  }

  function LockPage(){
      getElementById("menu").style.display = 'none';
      getElementById("login").style.display = 'block';
    
  }
  
  function ShowClientsScreen(){
    getElementById("menu").style.display = 'none';
    getElementById("client_list").style.display = 'block';
  }

  function ShowActivitiesScreen(){
    getElementById("menu").style.display = 'none';
    getElementById("activities_list").style.display = 'block';
  }

  function ShowMenu(){
    getElementById("menu").style.display = 'block';
    getElementById("client_list").style.display = 'none';
    getElementById("activities_list").style.display = 'none';
    getElementById("instructor_list").style.display = 'none';
  }

  function CreateNewActivity(){
    getElementById("activity_create_form").style.display = 'block';
    getElementById("activities_list").style.display = 'none';

    let selectInst=getElementById("activityInstructorSelect");
    selectInst.innerHTML = '';
    selectInst.innerHTML += '<option selected>Choose instructor...</option>';
      instructors.forEach((instructor)=>{
        if (instructor.active==true) {
          selectInst.innerHTML += `<option value='${instructor.InstructorNo}'}'> ${instructor.name + ' ' + instructor.surname}</option>`;
        }
      })

    console.log("Create actv")
  }

  function saveToActivities(){
    let newActivity =  new Activity();
    newActivity.ActivityNo = activityNo;
    newActivity.Name = getElementById('inputActivityName').value;
    newActivity.ActivityDay = getElementById('activityDaySelect').value;
    newActivity.ActivityHour = getElementById('activityHourSelect').value;
    newActivity.MaxClients = +getElementById('inputMaxClients').value;
    newActivity.InstructorNo = +getElementById('activityInstructorSelect').value;

    console.log(newActivity);
    activities.push(newActivity);
    instructors[newActivity.InstructorNo].Activities.push(newActivity);
    getElementById("activity_create_form").style.display = 'none';
    getElementById("activities_list").style.display = 'block';

    let ul=getElementById("activites-group");
    ul.innerHTML = ''
    activities.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="showAddClientToActivity(${e.ActivityNo})">${e.ActivityDetails()}  </li>`;
        // <button onclick="showAddClientToActivity(${e.ActivityNo})">Add clients</button>
    })
    activityNo += 1;
    }
  
  function showAddClientToActivity(ActivityNo :number){

    activityNoForInstructorChange = ActivityNo;
    getElementById("activities_list").style.display = 'none';
    getElementById("client_add_to_activity").style.display = 'block';

    let actv=activities[ActivityNo]
    getElementById('SignedClients').innerHTML  = `Signed clients:  ${actv.SignedClients} / ${actv.MaxClients}`;

    let ul=getElementById("clients-add-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{      
      if (e.active==true && activities[ActivityNo].ClientsList.indexOf(e)==-1) {
        ul.innerHTML += `<li class="list-group-item" onclick="addClientToActivity(${e.ClientNo}, ${ActivityNo})">${e.clientDetails()}</li>`;
      }
    })

    let ul_added=getElementById("clients-added-group");
    ul_added.innerHTML = '';
    activities[ActivityNo].ClientsList.forEach((cl) =>{
      ul_added.innerHTML += `<li class="list-group-item" onclick="removeClientFromActivity(${cl.ClientNo}, ${ActivityNo})">${cl.clientDetails()}</li>`;
    })

    getElementById('client-add-to-activity-instructor').innerHTML = `Instructor: ${instructors[activities[ActivityNo].InstructorNo].name + ' ' + instructors[activities[ActivityNo].InstructorNo].surname}`

    if (actv.SignedClients >= actv.MaxClients) {
      getElementById('SignedClients').style.color = 'red';
    }
    else{
      getElementById('SignedClients').style.color = 'rgb(241, 241, 241)';
    }
  }

  function addClientToActivity(ClientNo:number, ActivityNo:number){

    let actv = activities[ActivityNo]
    actv.SignedClients += 1;

    activities.forEach(a => {
      if (a.ActivityNo === ActivityNo) {
        clients.forEach(c => {
          if (c.ClientNo === ClientNo) {
            a.ClientsList.push(c);
            c.Activities.push(a);
          }
        });
      }
    });

    showAddClientToActivity(ActivityNo);
  }

  function removeClientFromActivity(ClientNo:number, ActivityNo:number){
    let actv = activities[ActivityNo]
    actv.SignedClients -= 1;

    activities.forEach(a => {
      if (a.ActivityNo === ActivityNo) {
        clients.forEach(c => {
          if (c.ClientNo === ClientNo) {
            delete a.ClientsList[a.ClientsList.indexOf(c)];
            delete c.Activities[c.Activities.indexOf(a)];
          }
        });
      }
    })

    showAddClientToActivity(ActivityNo);
  }

  function BackActivityList(){
    let activity = new Activity();
      getElementById('inputActivityName').value = activity.Name;
      getElementById('inputMaxClients').value = "";
      getElementById('activityDaySelect').value = 'Choose day...';
      getElementById('activityHourSelect').value = '00:00';

      getElementById("client_add_to_activity").style.display = 'none';
      getElementById("activity_create_form").style.display = 'none';
    getElementById("activities_list").style.display = 'block';

  }

  function ShowInstructorsScreen(){
    getElementById("menu").style.display = 'none';
    getElementById("instructor_list").style.display = 'block';
  }

  function CreateNewInstructor() {
    getElementById("instructor_create_form").style.display = 'block';
    getElementById("instructor_list").style.display = 'none';
    getElementById("saveButton").style.display = 'block';
    console.log('Moved to instructor_create_form form')
   }

   function SaveInstructor() {
    
    console.log('Moved to instructor_list form')
  
    let newInstructor = new Instructor();
    newInstructor.InstructorNo = InstructorNo;
    newInstructor.name = getElementById('InstructorInputName').value;
    newInstructor.surname = getElementById('InstructorInputLastName').value;
    newInstructor.street = getElementById('InstructorInputStreet').value;
    newInstructor.HouseNumber = getElementById('InstructorInputHouseNumber').value;
    newInstructor.FlatNumber = getElementById('InstructorInputFlatNumber').value;
    newInstructor.City = getElementById('InstructorInputCity').value;
    newInstructor.ZIP = getElementById('InstructorInputZIP').value;
    newInstructor.Sex = querySelectorAll('input[name="InstructorSEX"]:checked').value;
    newInstructor.Notes = getElementById('InstructorInputNotes').value;
    newInstructor.active = getElementById('InstructorInputActive').checked;


    // Zapisz dane do konsoli
    console.log('Client:', newInstructor);
    instructors.push(newInstructor)
    getElementById("instructor_create_form").style.display = 'none';
    getElementById("instructor_list").style.display = 'block';;
    let ul=getElementById("instructors-group");
    ul.innerHTML = ''
    instructors.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editInstructorFunc(${e.InstructorNo })">${e.instructorDetails()}</li>`;
    })
    InstructorNo += 1;
    InstructorBack();

      
  }

  function editInstructorFunc(InstructorNo:number){
    getElementById("instructor_create_form").style.display = "block";
    getElementById("instructor_list").style.display = "none";
    getElementById("InstructorModifyButton").style.display = "block";
    getElementById("InstructorSaveButton").style.display = "none";
    getElementById("instructor-activities-group-label").style.display = "block";
    getElementById("instructor-activities-group").style.display = "block";
    console.log(`loaded ${InstructorNo}`)
  
    instructors.forEach(e => {
      if (e.InstructorNo == InstructorNo) {
        let loadedInstructor = instructors[InstructorNo]
  
        // Wypełnij pola formularza danymi z konsoli
        getElementById('InstructorInputName').value = loadedInstructor.name;
        getElementById('InstructorInputLastName').value = loadedInstructor.surname;
        getElementById('InstructorInputStreet').value = loadedInstructor.street;
        getElementById('InstructorInputHouseNumber').value = loadedInstructor.HouseNumber;
        getElementById('InstructorInputFlatNumber').value = loadedInstructor.FlatNumber;
        getElementById('InstructorInputCity').value = loadedInstructor.City;
        getElementById('InstructorInputZIP').value = loadedInstructor.ZIP;
        getElementsByName("InstructorSEX").forEach((element: HTMLElement) => {
          // Sprawdź, czy element jest inputem typu radio
          if (element instanceof HTMLInputElement && element.type === "radio" && element.value === loadedInstructor.Sex) {
              element.checked;
          }
      });
        getElementById('InstructorInputNotes').value = loadedInstructor.Notes;
        getElementById('InstructorInputActive').checked = loadedInstructor.active;
        getElementById('InstructorInputName').setAttribute('readonly', 'true');
        getElementById('InstructorInputLastName').setAttribute('readonly', 'true');
  
        let ul=getElementById("instructor-activities-group");
        ul.innerHTML = ''
        loadedInstructor.Activities.forEach((e)=>{
          ul.innerHTML += `<li class="list-group-item">${e.ActivityDetailsForInstructor()}</li>`;
        })
        ModifyInstructorNo = loadedInstructor.InstructorNo;
        }
  
    });
    
  }
  
  function SaveModifiedInstructor(ModifyInstructorNo:number){
  
    let modifiedInstructor = instructors[ModifyInstructorNo]
    let InstructorActiveCheck = instructors[ModifyInstructorNo].active;
    let InstructorActivities = instructors[ModifyInstructorNo].Activities;
    let Instructor = instructors[ModifyInstructorNo];
    modifiedInstructor.InstructorNo = ModifyInstructorNo;
    modifiedInstructor.name = getElementById('InstructorInputName').value;
    modifiedInstructor.surname = getElementById('InstructorInputLastName').value;
    modifiedInstructor.street = getElementById('InstructorInputStreet').value;
    modifiedInstructor.HouseNumber = getElementById('InstructorInputHouseNumber').value;
    modifiedInstructor.FlatNumber = getElementById('InstructorInputFlatNumber').value;
    modifiedInstructor.City = getElementById('InstructorInputCity').value;
    modifiedInstructor.ZIP = getElementById('InstructorInputZIP').value;
    modifiedInstructor.Sex = querySelectorAll('input[name="SEX"]:checked').value;
    modifiedInstructor.Notes = getElementById('InstructorInputNotes').value;
    modifiedInstructor.active = getElementById('InstructorInputActive').checked;

    if(InstructorActiveCheck != getElementById('InstructorInputActive').checked && getElementById('InstructorInputActive').checked == false){
      InstructorActivities.forEach(InstructorActivity => {
        activities.forEach(activity => {
          if (activity == InstructorActivity) {
            activity.InstructorNo = 1;
          }
        });
      });
      modifiedInstructor.Activities = [];
    }

  
    instructors[ModifyInstructorNo] = modifiedInstructor;
    let ul=getElementById("instructors-group");
      ul.innerHTML = ''
      instructors.forEach((e)=>{
          ul.innerHTML += `<li class="list-group-item" onclick="editInstructorFunc(${e.InstructorNo })">${e.instructorDetails()}</li>`;
      })
    instructors.forEach(e=>{console.log(e)})
  
    InstructorBack()
  
    getElementById("instructor_create_form").style.display = "none";
    getElementById("instructor_list").style.display = "block";
    getElementById("modifyButton").style.display = "none";
    getElementById("saveButton").style.display = "block";
    getElementById("instructor-activities-group-label").style.display = "none";
    getElementById("instructor-activities-group").style.display = "none";
  
    getElementById('InstructorInputName').removeAttribute('readonly');
    getElementById('InstructorInputLastName').removeAttribute('readonly');
  }

  

  function getElementById(element: string): HTMLInputElement{
    return document.getElementById(element) as HTMLInputElement;
  }
  function querySelectorAll(element: string): HTMLInputElement{
    return document.querySelectorAll(element)[0] as HTMLInputElement;
  }
  function getElementsByName(element: string): NodeListOf<HTMLElement>{
    return document.getElementsByName(element) as NodeListOf<HTMLElement>;
  }