var mailId= JSON.parse(localStorage.getItem("cricbuzzEmail"))

var count=0;
var k=0;
document.getElementById("checkBox").addEventListener("click",newvalue);

function newvalue(){
count++;
if(count%2==0){
    k=0;
}
if(count%2==1){
   k=1;
}
}


function signin(){
  var mail=  document.getElementById("emailID").value
  var count1=0;
    var count2=0;
    for(var i=0;i<mailId.length;i++)
    {
    if(mailId[i].cmail==mail||mailId[i].email==mail||mailId[i].gmail==mail||mailId[i].tmail==mail )
    {
        if(k==1){
            
            window.location.href="payment.html";
        count1++;
        }
        if(k==0){
            alert("check the check box")
            count2++;
        }
    
    }
    if(mail=="")
    {
        alert("Enter EmailId first")
        count1++
    }

    }
    if(count1==0 && count2==0){
        alert("Need to varify")
        window.location.href="cricbuzz_Otp.html"

    }
}
document.getElementById("homeTransfer").addEventListener("click",backHome)
function backHome(){
    window.location.href= "index.html"
}
document.getElementById("toHome").addEventListener("click",backToHome)
function backToHome(){
    window.location.href= "index.html"
}
