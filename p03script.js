//Jack Spencer //

var mon;
var tue;
var wed;
var thu;
var fri;
var sat;
var sund;

function addArray(){
  var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  document.getElementById("array").innerHTML = weekdays;
}



function calculateTotal(){
  mon = document.getElementById("monday").value;
  tue = document.getElementById("tuesday").value;
  wed = document.getElementById("wednesday").value;
  thu = document.getElementById("thursday").value;
  fri = document.getElementById("friday").value;
  sat = document.getElementById("saturday").value;
  sund = document.getElementById("sunday").value;
  var sum = (+mon) + (+tue) + (+wed) + (+thu) + (+fri) + (+sat) + (+sund);
  console.log(sum);

  if (isNaN (mon)||isNaN(tue)||isNaN(wed)||isNaN(thu)||isNaN(fri)||isNaN(sat)||isNaN(sund)){
    document.getElementById("error").innerHTML =  "Error: input is not a number.";
  }
  else if (mon==""|| tue==""|| wed==""|| thu==""|| fri==""|| sat==""|| sund==""){
    document.getElementById("error").innerHTML =  "Error: input is blank.";
  }
  else {
    window.alert("Your total time this week is " + sum + " minutes!");
  }
}




function calculateFeedback(){
  mon = document.getElementById("monday").value;
  tue = document.getElementById("tuesday").value;
  wed = document.getElementById("wednesday").value;
  thu = document.getElementById("thursday").value;
  fri = document.getElementById("friday").value;
  sat = document.getElementById("saturday").value;
  sund = document.getElementById("sunday").value;

  var sum = (+mon) + (+tue) + (+wed) + (+thu) + (+fri) + (+sat) + (+sund);

  var short;
  short = 210-sum

  if (sum>420){
    document.getElementById("feedback").innerHTML = "You exercised over 60 minutes per day on average";
    document.getElementById("feedback2").innerHTML = "Keep up the good work!";
  }
  else if (sum>210){
    document.getElementById("feedback").innerHTML = "You exercised over 30 minutes per day on average";
    document.getElementById("feedback2").innerHTML = "Keep up the good work!";
  }

  else if (sum>150){
    document.getElementById("feedback").innerHTML = "You total time is " + sum + " minutes";
    document.getElementById("feedback2").innerHTML = "Increase your time by " + short + " minutes next week and you will average 30 minutes per day!";
  }
  else if (sum<70){
    document.getElementById("feedback").innerHTML = "You exercised less than 10 minutes per day on average";
    document.getElementById("feedback2").innerHTML = "Try increasing that to at least 20 minutes per day next week!";
  }
  else if (mon=="0" || tue=="0" || wed=="0" || thu=="0"|| fri=="0" || sat=="0"|| sund=="0"){
    document.getElementById("feedback").innerHTML = "You didn't exercise at all one or more days";
    document.getElementById("feedback2").innerHTML = "Try to increase that time!";
  }

  else {
    document.getElementById("feedback").innerHTML = "Try to increase your total time next week to 210 minutes.";
    document.getElementById("feedback2").innerHTML = "That will bring your average up to 30 minutes per day!";
  }
}




function clearInput() {
  mon = document.getElementById("monday").value;
  tue = document.getElementById("tuesday").value;
  wed = document.getElementById("wednesday").value;
  thu = document.getElementById("thursday").value;
  fri = document.getElementById("friday").value;
  sat = document.getElementById("saturday").value;
  sund = document.getElementById("sunday").value;
  fbx = document.getElementById("feedback").innerHTML;
  fby = document.getElementById("feedback2").innerHTML;
  err = document.getElementById("error").innerHTML;


  if (mon!==""|| tue!==""|| wed!==""|| thu!==""|| fri!==""|| sat!==""|| sund!==""|| fbx!==""||fby!==""||err!==""){
    document.getElementById("monday").value = "";
    document.getElementById("tuesday").value = "";
    document.getElementById("wednesday").value = "";
    document.getElementById("thursday").value = "";
    document.getElementById("friday").value = "";
    document.getElementById("saturday").value = "";
    document.getElementById("sunday").value = "";
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("feedback2").innerHTML = "";
    document.getElementById("error").innerHTML = "";
  }

 console.log("clear");
}
