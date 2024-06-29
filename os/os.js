
const mycheckbox = document.getElementById("mycheckbox")
const visa = document.getElementById("visa")
const mastercard = document.getElementById("mastercard")
const paypal = document.getElementById("paypal")
const result1 = document.getElementById("result1")
const result2 = document.getElementById("result2")

submit=document.getElementById("submit").onclick = function(){
    if(mycheckbox.checked){
        result1.textContent = "you are subscribed"}
        else {
            result1.textContent = "you are not subscribed"
        }
if(visa.checked){
    result2.textContent = "please enter your visa card number"}
  
    if(mastercard.checked){
        result2.textContent = "please enter your mastercard number"}

        if(paypal.checked){
            result2.textContent = "please enter your paypal account number"}
        
}






    
