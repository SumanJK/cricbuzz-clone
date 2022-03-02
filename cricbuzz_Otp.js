function otp_pay(){
    var otpNo=document.querySelector(".otp").value;
    if(otpNo=="1234")
    {
   window.location.href="payment.html";
   
    }
    if(otpNo=="")
    {
        alert("Enter OTP")
    }
    else if(otpNo!=="1234"){
        alert("Invalid OTP")
    }
    
}
document.getElementById("frontPage").addEventListener("click",backToHomePage)
function backToHomePage(){
    window.location.href= "index.html"
}
document.getElementById("frontPageImg").addEventListener("click",backToHomePageAgain)
function backToHomePageAgain(){
    window.location.href= "index.html"
}
