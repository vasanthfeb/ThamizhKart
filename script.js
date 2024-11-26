function form_fun(){
   
    let name_name= document.getElementById("full_name").value;
    alert(name_name +" ! "+"Your form has been Successfully Submitted")
    
}


// var seconds = 10; //**change 120 for any number you want, it's the seconds **//
// function secondPassed() {
//     var minutes = Math.round((seconds - 30)/60);
//     var remainingSeconds = seconds % 60;
//     if (remainingSeconds < 10) {
//         remainingSeconds = "0" + remainingSeconds;  
//     }
//     document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
//     if (seconds == 0) {
//         clearInterval(countdownTimer);
//         document.getElementById('countdown').innerHTML = "Last chance!";
//     } else {
//         seconds--;
//     }
// }
 
// var countdownTimer = setInterval('secondPassed()', 1000);