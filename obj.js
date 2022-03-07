let showdata=function(){
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let college=document.getElementById("college").value
    let gender=document.getElementById("gender").value
    let output=document.createElement("h1");
    output.innerHTML=`I am ${name}.My college name is ${college}.I am ${age}.`
    document.body.appendChild(output);

}