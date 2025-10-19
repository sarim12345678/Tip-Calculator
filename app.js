let firstInput = document.getElementById("firstInput") 
let secondInput = document.getElementById("secondInput")
let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")

function totalBill (){
    let firstIsInput = +firstInput.value
    let secondIsInput = +secondInput.value
    let finalBillAmount = firstIsInput + secondIsInput
    result1.innerText = "Total Bill : " + finalBillAmount
}
function tipAmount (){
    let secondIsInput = +secondInput.value
    result2.innerText = "Tip Amount : " + secondIsInput
}