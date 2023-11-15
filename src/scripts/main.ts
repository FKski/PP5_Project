let clients:Array<Client> = [];
let ClientNo:number = 0;
let ModifyClientNo:Number = 0;
let ModifyClientObj:number = 0;



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
    let ul=getElementById("list-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">${e.clientDetails()}</li>`;
    })
    ClientNo += 1;
    Back();

      
  }
  

function SaveModified(ModifyClientNo:number){
  
  let modifiedClient = clients[ModifyClientNo]
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

  clients[ModifyClientNo] = modifiedClient;
  let ul=getElementById("list-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">${e.clientDetails()}</li>`;
    })
  clients.forEach(e=>{console.log(e)})

  getElementById('InputName').value = modifiedClient.name;
      getElementById('InputLastName').value = modifiedClient.surname;
      getElementById('InputStreet').value = modifiedClient.street;
      getElementById('InputHouseNumber').value = modifiedClient.HouseNumber;
      getElementById('InputFlatNumber').value = modifiedClient.FlatNumber;
      getElementById('InputCity').value = modifiedClient.City;
      getElementById('InputZIP').value = modifiedClient.ZIP;
      getElementById('InputSex').value = modifiedClient.Sex;
      getElementById('InputNotes').value = modifiedClient.Notes;
      getElementById('InputActive').checked = modifiedClient.active;

  getElementById("client_create_form").style.display = "none";
  getElementById("client_list").style.display = "block";
  getElementById("modifyButton").style.display = "none";
  getElementById("saveButton").style.display = "block";

  getElementById('InputName').removeAttribute('readonly');
  getElementById('InputLastName').removeAttribute('readonly');
}

function editClientFunc(ClientNo:number){
  getElementById("client_create_form").style.display = "block";
  getElementById("client_list").style.display = "none";
  getElementById("modifyButton").style.display = "block";
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
      document.getElementsByName("SEX").forEach((element: HTMLElement) => {
        // Sprawdź, czy element jest inputem typu radio
        if (element instanceof HTMLInputElement && element.type === "radio" && element.value === loadedClient.Sex) {
            element.checked;
        }
    });
      getElementById('InputNotes').value = loadedClient.Notes;
      getElementById('InputActive').checked = loadedClient.active;
      getElementById('InputName').setAttribute('readonly', 'true');
      getElementById('InputLastName').setAttribute('readonly', 'true');

        
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
    document.getElementsByName("SEX").forEach((element: HTMLElement) => {
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


  function getElementById(element: string): HTMLInputElement{
    return document.getElementById(element) as HTMLInputElement;
  }
  function querySelectorAll(element: string): HTMLInputElement{
    return document.querySelectorAll(element)[0] as HTMLInputElement;
  }
  function getElementsByName(element: string): NodeListOf<HTMLElement>{
    return document.getElementsByName(element) as NodeListOf<HTMLElement>;
  }

  function getButtons() {


    document.getElementsByName("SEX").forEach((element: HTMLElement) => {
        // Sprawdź, czy element jest inputem typu radio
        if (element instanceof HTMLInputElement && element.type === "radio" && element.value === "Female") {
            element.checked;
        }
    });
}
