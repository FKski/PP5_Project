let companies = [];
ClientNo = 1;


function SaveClient() {
    
    console.log('Moved to client_list form')
    let newClient = {
        ClientNo : ClientNo,
        InputName : document.getElementById('InputName').value,
        InputLastName : document.getElementById('InputLastName').value,
        InputDateOfBirth : document.getElementById('InputDateOfBirth').value,
        InputStreet : document.getElementById('InputStreet').value,
        InputHouseNumber : document.getElementById('InputHouseNumber').value,
        InputFlatNumber : document.getElementById('InputFlatNumber').value,
        InputCity : document.getElementById('InputCity').value,
        InputZIP : document.getElementById('InputZIP').value,
        InputSex : document.getElementById('InputSex').value,
        InputNotes : document.getElementById('InputNotes').checked,
        InputActive : document.getElementById('InputActive').checked
    }

    // Zapisz dane do konsoli
    console.log('Company:', newClient);
    companies.push(newClient)
    document.getElementById("client_create_form").style.display = "none";
    document.getElementById("client_list").style.display = "block";;
    let ul=document.getElementById("list-group");
    ul.innerHTML = ''
    companies.forEach((e)=>{
        ul.innerHTML += `<li class="list-group-item">Name: ${e.InputName}, NIP: ${e.InputLastName}</li>`;
    })
    ClientNo += 1;
  }

  function CreateNewClient() {
    document.getElementById("client_create_form").style.display = "block";
    document.getElementById("client_list").style.display = "none";
    console.log('Moved to client_create_form form')
  }