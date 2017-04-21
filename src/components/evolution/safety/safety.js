/**
 * Created by luisr on 08/04/17.
 */
export default function() {
  // Counter variable
  var i=0;
  // Seconds to wait for submit
  var t=3;

  var timInt;

  var timOut;

  // Counter element that displays t
  var counter = document.getElementsByClassName("evo_c-safety__count")[0]

  // Alert element
  var alert = document.getElementsByClassName("evo_c-safety__alert")[0];

  // Security check
  if (alert) {
    alert.style.visibility = "hidden";
  }

  function hold() {
    timInt = window.setInterval(showTime,1000);
    timOut = window.setTimeout(submitSafety,4000);
    alert.style.visibility = "hidden";
  }

  function release(){
    if (timOut) window.clearTimeout(timOut);
    window.clearInterval(timInt);
    i=0;
    t=3;
  }

  function showTime(){
    if(t==0){
      window.clearInterval(timInt);
      counter.innerHTML= "Go";
      t=3;
    }else{
      counter.innerHTML=t;
      t--;
    }
  }

  function submitSafety() {
    alert.style.visibility = "initial";
  }

  var safety = document.getElementsByClassName("evo_c-safety")[0];
  safety && safety.addEventListener("mousedown", hold);
  document.body.addEventListener("mouseup", release);
}
