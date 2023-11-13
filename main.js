let clients = [];
ClientNo = 0;
ModifyClientNo = 0;
ModifyClientObj = null;


function SaveClient() {
    
    console.log('Moved to client_list form')
    const SexCheck = document.querySelectorAll('input[name="SEX"]');
    let selectedSex;
    for (const radioButton of SexCheck) {
      if (radioButton.checked) {
        selectedSex = radioButton.value;
          break;
      }
    }

    
    let newClient = new Client();
    newClient.ClientNo = ClientNo;
    newClient.name = document.getElementById('InputName').value;
    newClient.surname = document.getElementById('InputLastName').value;
    newClient.street = document.getElementById('InputStreet').value;
    newClient.HouseNumber = document.getElementById('InputHouseNumber').value;
    newClient.FlatNumber = document.getElementById('InputFlatNumber').value;
    newClient.City = document.getElementById('InputCity').value;
    newClient.ZIP = document.getElementById('InputZIP').value;
    newClient.Sex = selectedSex;
    newClient.Notes = document.getElementById('InputNotes').value;
    newClient.active = document.getElementById('InputActive').checked;


    // Zapisz dane do konsoli
    console.log('Client:', newClient);
    clients.push(newClient)
    document.getElementById("client_create_form").style.display = "none";
    document.getElementById("client_list").style.display = "block";;
    let ul=document.getElementById("list-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">${e.clientDetails()}</li>`;
    })
    ClientNo += 1;
    document.getElementById('InputName').value = null;
      document.getElementById('InputLastName').value = null;
      document.getElementById('InputStreet').value = null;
      document.getElementById('InputHouseNumber').value = null;
      document.getElementById('InputFlatNumber').value = null;
      document.getElementById('InputCity').value = null;
      document.getElementById('InputZIP').value = null;
      document.getElementById('InputSex').value = null;
      document.getElementById('InputNotes').value = null;
      document.getElementById('InputActive').checked = null;

      
  }
  

function SaveModified(ModifyClientNo){
  const SexCheck = document.querySelectorAll('input[name="SEX"]');
    let selectedSex;
    for (const radioButton of SexCheck) {
      if (radioButton.checked) {
        selectedSex = radioButton.value;
          break;
      }
    }

  let modifiedClient = clients[ModifyClientNo]
  modifiedClient.ClientNo = ModifyClientNo;
  modifiedClient.name = document.getElementById('InputName').value;
  modifiedClient.surname = document.getElementById('InputLastName').value;
  modifiedClient.street = document.getElementById('InputStreet').value;
  modifiedClient.HouseNumber = document.getElementById('InputHouseNumber').value;
  modifiedClient.FlatNumber = document.getElementById('InputFlatNumber').value;
  modifiedClient.City = document.getElementById('InputCity').value;
  modifiedClient.ZIP = document.getElementById('InputZIP').value;
  modifiedClient.Sex = selectedSex;
  modifiedClient.Notes = document.getElementById('InputNotes').value;
  modifiedClient.active = document.getElementById('InputActive').checked;

  clients[ModifyClientNo] = modifiedClient;
  let ul=document.getElementById("list-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">${e.clientDetails()}</li>`;
    })
  clients.forEach(e=>{console.log(e)})

  document.getElementById('InputName').value = null;
      document.getElementById('InputLastName').value = null;
      document.getElementById('InputStreet').value = null;
      document.getElementById('InputHouseNumber').value = null;
      document.getElementById('InputFlatNumber').value = null;
      document.getElementById('InputCity').value = null;
      document.getElementById('InputZIP').value = null;
      document.getElementById('InputSex').value = null;
      document.getElementById('InputNotes').value = null;
      document.getElementById('InputActive').checked = null;

  document.getElementById("client_create_form").style.display = "none";
  document.getElementById("client_list").style.display = "block";
  document.getElementById("modifyButton").style.display = "none";
  document.getElementById("saveButton").style.display = "block";

  document.getElementById('InputName').removeAttribute('readonly');
  document.getElementById('InputLastName').removeAttribute('readonly');
}

function editClientFunc(ClientNo){
  document.getElementById("client_create_form").style.display = "block";
  document.getElementById("client_list").style.display = "none";
  document.getElementById("modifyButton").style.display = "block";
  document.getElementById("saveButton").style.display = "none";
  console.log(`loaded ${ClientNo}`)

  clients.forEach(e => {
    if (e.ClientNo == ClientNo) {
      let loadedClient = clients[ClientNo]

      // Wypełnij pola formularza danymi z konsoli
      document.getElementById('InputName').value = loadedClient.name;
      document.getElementById('InputLastName').value = loadedClient.surname;
      document.getElementById('InputStreet').value = loadedClient.street;
      document.getElementById('InputHouseNumber').value = loadedClient.HouseNumber;
      document.getElementById('InputFlatNumber').value = loadedClient.FlatNumber;
      document.getElementById('InputCity').value = loadedClient.City;
      document.getElementById('InputZIP').value = loadedClient.ZIP;
      document.getElementById('InputSex').value = loadedClient.Sex;
      document.getElementById('InputNotes').value = loadedClient.Notes;
      document.getElementById('InputActive').checked = loadedClient.active;
      document.getElementById('InputName').setAttribute('readonly', true);
      document.getElementById('InputLastName').setAttribute('readonly', true);

      ModifyClientNo = loadedClient.ClientNo;
      }

  });
  
}

  function CreateNewClient() {
    document.getElementById("client_create_form").style.display = "block";
    document.getElementById("client_list").style.display = "none";
    document.getElementById("saveButton").style.display = "block";
    console.log('Moved to client_create_form form')
  }

  function Back(){
    document.getElementById('InputName').value = null;
      document.getElementById('InputLastName').value = null;
      document.getElementById('InputStreet').value = null;
      document.getElementById('InputHouseNumber').value = null;
      document.getElementById('InputFlatNumber').value = null;
      document.getElementById('InputCity').value = null;
      document.getElementById('InputZIP').value = null;
      document.getElementById('InputSex').value = null;
      document.getElementById('InputNotes').value = null;
      document.getElementById('InputActive').checked = null;
    document.getElementById("client_create_form").style.display = "none";
    document.getElementById("client_list").style.display = "block";
    document.getElementById("modifyButton").style.display = "none";
  document.getElementById("saveButton").style.display = "none";
  document.getElementById('InputName').removeAttribute('readonly');
  document.getElementById('InputLastName').removeAttribute('readonly');
  }
