var list = document.getElementById("list");
var input = document.getElementById("id1");
function add(){
    var li = document.createElement("LI");
    var liText = document.createTextNode(input.value);
    li.appendChild(liText);
    list.appendChild(li);
    input.value = "";
    var button = document.createElement("button");
    var text = document.createTextNode("Delete");
    button.appendChild(text);
    li.appendChild(button);
    button.setAttribute("onclick","del(this)");
    var button1 = document.createElement("button");
    var txt = document.createTextNode("Edit");
    button1.appendChild(txt);
    li.appendChild(button1);
    button1.setAttribute("onclick","edit(this)");




}
function removeall(){
    
    list.innerHTML= "";
}
function del(e){
    e.parentNode.remove();
}
function edit(f){
    var newVal = prompt("Edit", f.parentNode.firstChild.nodeValue);
    f.parentNode.firstChild.nodeValue= newVal

}
