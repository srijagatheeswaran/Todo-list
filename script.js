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
            localStorage.setItem("savearr",JSON.stringify(arr))
            showCon()
            

        }
        else{
            inputBox.classList.add('err');
            
            
        }
        
       
        inputBox.value = "";
    } else {
        inputBox.classList.add('err');
    }
}
function showCon(){
    if (arr.length == 0) {
        document.getElementById('fristTable').classList.remove('show');
        document.getElementById('actionBtn').classList.remove('show2');
    }
    arr.map((item, index) => {
        tableBody.innerHTML += `<tr>
            <td class="ps-3">${index + 1}</td>
            <td class="item">${item}</td>
            <td class="text-danger">In process</td>
            <td class="action"><div class="mini"><input type="checkbox" ref="${item}"><i class="bi bi-x h1" onclick="removeEle('${item}')"></i></div></td>
        </tr>`;
    });

}

function forClear() {
    inputBox.value = "";
}

function removeEle(element) {
    arr = arr.filter(item => item !== element);
    let tableBody = document.getElementById('tableBody');
    localStorage.setItem("savearr",JSON.stringify(arr))
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
            <td class="action"><div class="mini"><input type="checkbox" ref="${item}"><i class="bi bi-x h1" onclick="removeEle('${item}')"></i></div></td>
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
        arr = arr.filter(item1 =>item1 !==item);
    })
    id.splice(0)
    localStorage.setItem("savearr",JSON.stringify(arr))
    localStorage.setItem("saveAction",JSON.stringify(actionArr))
    

    actionArr.forEach((item, index) => {
        actionTableBody.innerHTML += `<tr>
            <td class="ps-3">${index + 1}</td>
            <td class="item">${item}</td>
            <td class="text-success ">Completed</td>
            <td><i class="bi bi-x h1 text-dark removeAll " onclick="removeEleTable('${item}')" ></i></td>
        </tr>`;
    });

    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    arr.forEach((item, index) => {
        tableBody.innerHTML += `<tr>
            <td class="ps-3">${index + 1}</td>
            <td class="item">${item}</td>
            <td class="text-danger">In process</td>
            <td class="action"><div class="mini"><input type="checkbox" ref="${item}"><i class="bi bi-x h1" onclick="removeEle('${item}')"></i></div></td>
        </tr>`;
    });

    if (arr.length == 0) {
        document.getElementById('fristTable').classList.remove('show');
        document.getElementById('actionBtn').classList.remove('show2');
    }
}
window.onload = ()=>{
    arr = JSON.parse( localStorage.getItem("savearr")) || []
    actionArr =JSON.parse(localStorage.getItem("saveAction")) ||[]
    console.log(arr)
    document.getElementById('fristTable').classList.add('show');
    document.getElementById('actionBtn').classList.add('show2');
    inputBox.classList.remove('err');
    showCon()
    if(actionArr.length>0){
        document.getElementById('table2').classList.add('show');
        actionArr.forEach((item, index) => {
            actionTableBody.innerHTML += `<tr>
                <td class="ps-3">${index + 1}</td>
                <td class="item">${item}</td>
                <td class="text-success ">Completed</td>
                <td><i class="bi bi-x h1 text-dark removeAll " onclick="removeEleTable('${item}')" ></i></td>
            </tr>`;})
    

    }
    
 }
function removeEleTable(element) {
    actionArr = actionArr.filter(item => item !== element);
    localStorage.setItem("saveAction",JSON.stringify(actionArr))
    let actionTableBody = document.getElementById('actionTableBody');
    actionTableBody.innerHTML = "";
    actionArr.forEach((item, index) => {
        actionTableBody.innerHTML +=`<tr>
        <td class="ps-3">${index + 1}</td>
        <td class="item">${item}</td>
        <td class="text-success ">Completed</td>
        <td><i class="bi bi-x h1 text-dark removeAll" onclick="removeEleTable('${item}')"></i></td>
    </tr>`;
    });
    if (actionArr.length == 0) {
        document.getElementById('table2').classList.remove('show');
    }
}
function removeAll(){
    actionArr.splice(0)
    localStorage.clear("saveAction")
    actionTableBody.innerHTML = "";
    if (actionArr.length == 0) {
        document.getElementById('table2').classList.remove('show');
    }


}

