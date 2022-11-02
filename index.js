let btn = document.getElementById("reset");

function tipV(event) {
    let activeButton = document.getElementById("tipVa")
    if (activeButton) {
        activeButton.style.backgroundColor = "hsl(183, 100%, 15%)";
        activeButton.setAttribute("id", "tipvalue");
        activeButton.value = ""
        event.target.style.backgroundColor = "hsl(186, 14%, 43%)";
        event.target.setAttribute("id", "tipVa");
        event.target.value = document.getElementById("tipVa").innerHTML
    }
    else {
        event.target.style.backgroundColor = "hsl(186, 14%, 43%)";
        event.target.setAttribute("id", "tipVa");
        event.target.value = document.getElementById("tipVa").innerHTML
    }
}
btn.addEventListener('click', function () {
    let activeButton = document.getElementById("tipVa")
    let ppl = document.getElementById("ppl").value;
    let billAmount = document.getElementById("billValue").value;
    let tipAmount = document.getElementById("tipValue1").value;
    let tipAm = document.getElementById("tipVa").value.slice(0, -1);
    let tip = 0;
    console.log(tipAmount)
    if (ppl == 0) {
        document.getElementById("error").style.display = "flex";
        document.getElementById("ppl").style.borderColor = "red";
    }
    else {
        document.getElementById("error").style.display = "none";
        document.getElementById("ppl").style.borderColor = "black";
        if (tipAmount) {
            tip = billAmount * tipAmount / 100 / ppl;
            activeButton.style.backgroundColor = "hsl(183, 100%, 15%)";
            activeButton.setAttribute("id", "tipvalue");
            activeButton.value = ""
        }
        else {
            tip = billAmount * tipAm / 100 / ppl;
        }
        let tot = billAmount / ppl + tip;
        document.getElementById("tipAmount2").innerHTML = "$ " + tip.toFixed(2);
        document.getElementById("totalAmount2").innerHTML = "$ " + tot.toFixed(2);
    }
})
