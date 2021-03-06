let savedField = {
    experimentName: String,
    experimentNumber: Number,
    mouseNumber: Number,
    dateOfCreation: new Date(),
    field: [[],[],[],[],[],[],[],[],[],[],[]]
};

 async function startExperiment() {
     for (let i = 0; i < 11; i++) {
         for (let j = 0; j <= 10; j++) {
             let color = document.getElementById(`111`).children[i].children[j].getAttribute('dataColor');
             let letter = document.getElementById(`111`).children[i].children[j].getAttribute('letter')
             let mouse = document.getElementById(`111`).children[i].children[j].getAttribute('dataMouse');
             let column = document.getElementById(`111`).children[i].children[j].getAttribute('dataColumn');
             let row = document.getElementById(`111`).children[i].children[j].getAttribute('dataRow');
             let id = document.getElementById(`111`).children[i].children[j].getAttribute('id')
             let inner = document.getElementById(`111`).children[i].children[j].innerHTML
             savedField.field[i].push(
                 {
                     color,
                     letter,
                     mouse,
                     column,
                     row,
                     id,
                     inner
                 }

             )
         }
     }
        let experimentNameNew = document.querySelector('#experimentName').value
        let experimentNumberNew = document.querySelector('#experimentNumber').value
        let mouseNumberNew = document.querySelector('#mouseNumber').value
        savedField.experimentName = experimentNameNew;
        savedField.experimentNumber = experimentNumberNew;
        savedField.mouseNumber = mouseNumberNew;


        const response = await fetch (`/`,{
             method: 'POST',
             headers: {'content-type': 'application/json'},
             body: JSON.stringify({ savedField })

         });
     const data = await response.json();
     location.assign(`/experiment/${data}`)


 }

