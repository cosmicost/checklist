var elements = []
var brother = 0
if(localStorage.getItem("brother") != null) {
    brother = localStorage.getItem("brother")
}
document.addEventListener("DOMContentLoaded", function(event) {
    if(localStorage.getItem("elementExisting") == "true") {
        for(i=0; i<brother;i++) {
            elements.push(localStorage.getItem("list" + brother));
        }
    for(const element of elements) {
        var div = document.getElementById("fort")
        var li = document.createElement("li");
        li.onclick = function() {
            if(this.style.textDecoration) {
                this.style.textDecoration = ""
            }
            else {
                this.style.textDecoration = 'line-through #626064 2px'; 
            }  
        }
        li.appendChild(document.createTextNode(element));
        div.appendChild(li);
    }
}
});


console.log(brother)
console.log(elements)

function keydownHandler(e) {
    if(e.key == "Enter") {
        var input = document.getElementById("mainInput")
        var div = document.getElementById("fort")
        var li = document.createElement("li");
        li.onclick = function() {
            if(this.style.textDecoration) {
                this.style.textDecoration = ""
            }
            else {
                this.style.textDecoration = 'line-through #626064 2px'; 
            }  
        }
        brother += 1;
        li.appendChild(document.createTextNode(input.value));
        elements.push(input.value)
        localStorage.setItem("list" + brother.toString(), input.value)
        console.log(elements)
        div.appendChild(li);
        input.value = ""
        localStorage.setItem("elementExisting", "true")
        localStorage.setItem("brother", brother.toString())
    }
}

function handleButton() {
    var div = document.getElementById("fort")
    var input = document.getElementById("mainInput")
    localStorage.clear();
    input.value = "";
    elements = [];
    div.innerHTML = "";
}