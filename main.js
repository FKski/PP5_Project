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

    
    let newClient = {
        ClientNo : ClientNo,
        InputName : document.getElementById('InputName').value,
        InputLastName : document.getElementById('InputLastName').value,
        InputStreet : document.getElementById('InputStreet').value,
        InputHouseNumber : document.getElementById('InputHouseNumber').value,
        InputFlatNumber : document.getElementById('InputFlatNumber').value,
        InputCity : document.getElementById('InputCity').value,
        InputZIP : document.getElementById('InputZIP').value,
        InputSex : selectedSex,
        InputNotes : document.getElementById('InputNotes').checked,
        InputActive : document.getElementById('InputActive').checked
    }

    // Zapisz dane do konsoli
    console.log('Client:', newClient);
    clients.push(newClient)
    document.getElementById("client_create_form").style.display = "none";
    document.getElementById("client_list").style.display = "block";;
    let ul=document.getElementById("list-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">Name: ${e.InputName}, Last Name: ${e.InputLastName}</li>`;
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
  let modifiedClient = {
    ClientNo : ModifyClientNo,
    InputName : document.getElementById('InputName').value,
    InputLastName : document.getElementById('InputLastName').value,
    InputStreet : document.getElementById('InputStreet').value,
    InputHouseNumber : document.getElementById('InputHouseNumber').value,
    InputFlatNumber : document.getElementById('InputFlatNumber').value,
    InputCity : document.getElementById('InputCity').value,
    InputZIP : document.getElementById('InputZIP').value,
    InputSex : document.getElementById('InputSex').value,
    InputNotes : document.getElementById('InputNotes').checked,
    InputActive : document.getElementById('InputActive').checked
}
  clients[ModifyClientNo] = modifiedClient;
  let ul=document.getElementById("list-group");
    ul.innerHTML = ''
    clients.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item" onclick="editClientFunc(${e.ClientNo })">Name: ${e.InputName}, Last Name: ${e.InputLastName}</li>`;
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
      let loadedClient = {
        ClientNo: e.ClientNo,
        InputName: e.InputName,
        InputLastName: e.InputLastName,
        InputStreet: e.InputStreet,
        InputHouseNumber: e.InputHouseNumber,
        InputFlatNumber: e.InputFlatNumber,
        InputCity: e.InputCity,
        InputZIP: e.InputZIP,
        InputSex: e.InputSex,
        InputNotes: e.InputNotes,
        InputActive: e.InputActive
      }

      // Wypełnij pola formularza danymi z konsoli
      document.getElementById('InputName').value = loadedClient.InputName;
      document.getElementById('InputLastName').value = loadedClient.InputLastName;
      document.getElementById('InputStreet').value = loadedClient.InputStreet;
      document.getElementById('InputHouseNumber').value = loadedClient.InputHouseNumber;
      document.getElementById('InputFlatNumber').value = loadedClient.InputFlatNumber;
      document.getElementById('InputCity').value = loadedClient.InputCity;
      document.getElementById('InputZIP').value = loadedClient.InputZIP;
      document.getElementById('InputSex').value = loadedClient.InputSex;
      document.getElementById('InputNotes').value = loadedClient.InputNotes;
      document.getElementById('InputActive').checked = loadedClient.InputActive;
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