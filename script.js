
let Parent = document.querySelector(".parent")
let Object1 = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], ["C", "0", "=", "/"]]
let Operat = ["+", "-", "*", "/"];
let outPut;

document.addEventListener("DOMContentLoaded", function () {
    outPut = document.createElement("div")
    outPut.innerHTML = "0"
    outPut.classList.add("output")
    Parent.appendChild(outPut)

    for (let s = 0; s < Object1.length; s++) {
        let Div = document.createElement("div")
        Div.classList.add("add")
        Parent.appendChild(Div)
        for (let L = 0; L < Object1[s].length; L++) {
            let btn = document.createElement("div")
            btn.classList.add("btn_div")
            btn.innerHTML = Object1[s][L]
            Div.appendChild(btn)
            btn.addEventListener("click", Update)
        }
    }
})

function Update(s) {
    let ClickValue = this.innerText
    let OutPut = outPut.innerText
    if (OutPut == "0") {
        OutPut = ""
    }
    if (ClickValue == "=") {
        OutPut = eval(OutPut)
    }
    else {
        let Last = OutPut.substring(OutPut.length - 1)
        if (Operat.includes(ClickValue)) {
            if (Operat.includes(Last)) {
                OutPut = OutPut.substring(0, OutPut.length - 1)
            }
            else {
                OutPut = eval(OutPut)
            }
        }
        OutPut = OutPut + ClickValue
    }
    if (ClickValue == "C") {
        OutPut = 0
    }
    outPut.innerHTML = OutPut
}


