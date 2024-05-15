let arr = [];   
function forSave(){
    let inputBox = document.getElementById('inputBox');

    if(inputBox.value.length > 0){
        document.getElementById('fristTable').classList.add('show');
        document.getElementById('actionBtn').classList.add('show2');
        inputBox.classList.remove('err');
        var tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = "";
        arr.push(inputBox.value);
        arr.map(item => { 
            let sno = arr.indexOf(item)+1;
            let id = arr.indexOf(item);
            
        tableBody.innerHTML += ` <tr>
         <td class="ps-3">${sno}</td>
         <td class="item">${item}</td>
         <td class="text-danger">In process</td>
         <td class="action"><div class="mini"><input type="checkbox" id="checkBox" value = ${id}><i class="bi bi-x h1" id="cancle" onclick= "removeEle(${id})"></i></div></td>
     
        </tr>`
        inputBox.value = ""
        
         })
    }
    else{
        inputBox.classList.add('err')

    }
 

}
function forClear(){
    inputBox.value = ""

}
function removeEle(element){
    arr.splice(element,1);
    tableBody.innerHTML = "";
    arr.map(item => { 
        let sno = arr.indexOf(item)+1;
        let id = arr.indexOf(item);
        
    document.getElementById('tableBody').innerHTML += ` <tr>
     <td class="ps-3">${sno}</td>
     <td class="item">${item}</td>
     <td class="text-danger">In process</td>
     <td class="action"><div class="mini"><input type="checkbox" value = ${id}><i class="bi bi-x h1" id="cancle" onclick= "removeEle(${id})"></i></div></td>
 
    </tr>`
    
})
}

let actionArr=[]
let value
function saveAction(){
    let actionTableBody = document.getElementById('actionTableBody');
    let checkBox = document.querySelectorAll('input:checked');
    console.log(checkBox)
    actionTableBody.innerHTML ="";
    checkBox.forEach(element => {
    value = element.getAttribute('value');
    console.log(element,arr[value])
    actionArr.push(arr[value])
    console.log(actionArr)
    
});
actionArr.map((item,index)=> {
    console.log(item)   

    actionTableBody.innerHTML +=`<tr>
    <td class="ps-3">${index+1}</td>
    <td class="item">${item}</td>
    <td class="text-success mini">Completed <span><i class="bi bi-x h1 text-dark" onclick = "removeEleTable(${value})"></i></span></td>
</tr>   `
        arr.splice(value,1);
        tableBody.innerHTML = "";
        arr.map(item => { 
            let sno = arr.indexOf(item)+1;
            let id = arr.indexOf(item);
            
        document.getElementById('tableBody').innerHTML += ` <tr>
         <td class="ps-3">${sno}</td>
         <td class="item">${item}</td>
         <td class="text-danger">In process</td>
         <td class="action"><div class="mini"><input type="checkbox" id="checkBox" value = ${id}><i class="bi bi-x h1" id="cancle" onclick= "removeEle(${id})"></i></div></td>
     
        </tr>`})
    })


    
}
function removeEleTable(element){
    actionArr.splice(element,1);
    actionTableBody.innerHTML = "";
    actionArr.map((item,index) => { 
        let sno = actionArr.indexOf(item)+1;
        let id = actionArr.indexOf(item);
        
    document.getElementById('actionTableBody').innerHTML += `<tr>
    <td class="ps-3">${index+1}</td>
    <td class="item">${item}</td>
    <td class="text-success mini">Completed <span><i class="bi bi-x h1 text-dark" onclick = "removeEleTable(${value})"></i></span></td>
</tr>`
    
})
}