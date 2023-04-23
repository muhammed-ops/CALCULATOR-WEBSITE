function add(){
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let c = a + b;
    if(a==''||b ==''){
        alert('Inputs are empty, insert a value!!.');
    }else{
    document.getElementById('answer').value = String(c);
}}
function subtract(){
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let c = a - b;
    if(a==''||b ==''){
        alert('Inputs are empty, insert a value!!.');
    }else{
    document.getElementById('answer').value = String(c);
}}
function divide(){
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let c = a / b;
    if(a==''||b ==''){
        alert('Inputs are empty, insert a value!!.');
    }else{
    document.getElementById('answer').value = String(c);
}
}
function multiply(){
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    let c = a * b;
    if(a==''||b ==''){
        alert('Inputs are empty, insert a value!!.');
    }else{
    document.getElementById('answer').value = String(c);
}}

function reset(){
    document.getElementById('first').value='Enter number';
    document.getElementById('second').value='Enter number';
    document.getElementById('answer').value='Answer is diplayed here';
}