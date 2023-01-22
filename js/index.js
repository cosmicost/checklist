var elements = []
var brother = "0"
if(localStorage.getItem("brother") != null) {
    brother = localStorage.getItem("brother")
}

document.addEventListener("DOMContentLoaded", function(event) {
    var intBrother = parseInt(brother)
    if(localStorage.getItem("elementExisting") == "true") {
        for(i=1; i<intBrother+1;i++) {
            elements.push(localStorage.getItem("list" + i.toString()));
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
        let intBrother = parseInt(brother)
        intBrother += 1;
        brother = intBrother.toString()
        li.appendChild(document.createTextNode(input.value));
        elements.push(input.value)
        localStorage.setItem("list" + brother.toString(), input.value)
        console.log(localStorage.getItem("list" + brother.toString()))
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