let arr = [];
let actionArr = [];
let id = [];
let inputBox = document.getElementById('inputBox');
let tableBody = document.getElementById('tableBody');

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("myform").click();
    }
  });
function forSave() {
    if (inputBox.value.length > 0) {
        document.getElementById('fristTable').classList.add('show');
        document.getElementById('actionBtn').classList.add('show2');
        inputBox.classList.remove('err');
        
        let exists = arr.some(item => item ==inputBox.value);
        if(!exists){
            tableBody.innerHTML = "";
            arr.push(inputBox.value);
            arr.map((item, index) => {
                tableBody.innerHTML += `<tr>
                    <td class="ps-3">${index + 1}</td>
                    <td class="item">${item}</td>
                    <td class="text-danger">In process</td>
                    <td class="action"><div class="mini"><input type="checkbox" ref="${item}"><i class="bi bi-x h1" onclick="removeEle(${index})"></i></div></td>
                </tr>`;
            });

        }
        else{
            inputBox.classList.add('err');
            
            
        }
        
       
        inputBox.value = "";
    } else {
        inputBox.classList.add('err');
    }
}

function forClear() {
    inputBox.value = "";
}

function removeEle(element) {
    arr.pop(element);
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    if (arr.length == 0) {
        document.getElementById('fristTable').classList.remove('show');
        document.getElementById('actionBtn').classList.remove('show2');
    }
    arr.forEach((item, index) => {
        tableBody.innerHTML += `<tr>
            <td class="ps-3">${index + 1}</td>
            <td class="item">${item}</td>
            <td class="text-danger">In process</td>
            <td class="action"><div class="mini"><input type="checkbox" ref="${item}"><i class="bi bi-x h1" onclick="removeEle(${index})"></i></div></td>
        </tr>`;
    });
}

function saveAction() {
    document.getElementById('table2').classList.add('show');
    let actionTableBody = document.getElementById('actionTableBody');
    let checkBox = document.querySelectorAll('input:checked');
    actionTableBody.innerHTML = "";
    checkBox.forEach(element => {
        id.push(element.getAttribute('ref'));
    });
    id.forEach(item => {
        actionArr.push(item);
        arr.pop(item);
        
    })
    id.splice(0)
    actionArr.forEach((item, index) => {
        actionTableBody.innerHTML += `<tr>
            <td class="ps-3">${index + 1}</td>
            <td class="item">${item}</td>
            <td class="text-success ">Completed</td>
            <td><i class="bi bi-x h1 text-dark removeAll " onclick="removeEleTable(${index})"></i></td>
        </tr>`;
    });

    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    arr.forEach((item, index) => {
        tableBody.innerHTML += `<tr>
            <td class="ps-3">${index + 1}</td>
            <td class="item">${item}</td>
            <td class="text-danger">In process</td>
            <td class="action"><div class="mini"><input type="checkbox" ref="${item}"><i class="bi bi-x h1" onclick="removeEle(${index})"></i></div></td>
        </tr>`;
    });

    if (arr.length == 0) {
        document.getElementById('fristTable').classList.remove('show');
        document.getElementById('actionBtn').classList.remove('show2');
    }
}

function removeEleTable(element) {
    actionArr.pop(element);
    let actionTableBody = document.getElementById('actionTableBody');
    actionTableBody.innerHTML = "";
    actionArr.forEach((item, index) => {
        actionTableBody.innerHTML +=`<tr>
        <td class="ps-3">${index + 1}</td>
        <td class="item">${item}</td>
        <td class="text-success ">Completed</td>
        <td><i class="bi bi-x h1 text-dark removeAll" onclick="removeEleTable(${index})"></i></td>
    </tr>`;
    });
    if (actionArr.length == 0) {
        document.getElementById('table2').classList.remove('show');
    }
}
function removeAll(){
    actionArr.splice(0)
    actionTableBody.innerHTML = "";
    if (actionArr.length == 0) {
        document.getElementById('table2').classList.remove('show');
    }


}