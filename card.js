
    document.getElementById("procee").addEventListener("click",canPay)


    var count=0;
    var k=0;
    document.getElementById("checkBOX").addEventListener("click",checking);
    
    function checking(){
    count++;
    if(count%2==0){
        k=0;
    }
    if(count%2==1){
       k=1;
    }
    }
    
    function canPay(){
    if(k==1){
        alert("Purchase Successful")
           window.location.href= "crickbuzzPlus.html"
    }
    if(k==0){
        alert("Please agree to the terms and conditions")
    }
    }