var str =
  "Hello try typing this to test the speed of your typing with our Speed Typing website";
var str1 =
  "You have successfully completed a paragraph ,Continue typing before the time runs out";
var count =0,
  v = 0,
  val,
  r = 0;
var final =
  "<div class='card-header'><h2>Your Result is here</h2></div><div class='card-body'><div id='wpm'>WPM = </div><div id=acc>Accuracy</div></div><div id='ret'><button class='btn btn-light'><a href='index.html'  style='text-decoration:none ;'>Retake test</a></button></div>";

//This is the first function that runs after clicking "Start Typing" button
//This function also calls time() it starts the count down

function start() {
  time();
  var bo = document.getElementById("body");
  const len = str.length;
  var body =
    "<p> " +
    str +
    "</p><input id='i2' type='text' onkeyup='corr()' style='color:green;' maxlength='" +
    len +
    "'>";
  bo.innerHTML = body;
  document.getElementById("i2").focus();
}

//this funtion is called every a key is pressed, every time it will check whether the total string is correct or not
//this function also displays second paragraph after completion of first paragraph
function corr() {
  var inp = document.getElementById("i2");
  val = inp.value;
  var i = val.length;
  if (val === pos(i)) {
    inp.style.color = "green";
  } else {
    inp.style.color = "red";
    r = r + 1;
  }
  if (val === str && count < 60) {
    var bo = document.getElementById("body");
    const len = str1.length;
    var body =
      "<p> " +
      str1 +
      "</p><input id='i2' type='text' onkeypress='corr()' style='color:green;' maxlength='" +
      len +
      "'>";
    bo.innerHTML = body;
    v = str.length;
    val = "";
    str = str1;
    document.getElementById("i2").focus();
  }
}

//this function is used to get the sub string of actual string that is to be typed to check the input value
function pos(x) {
  var k = 0;
  var st = "";
  for (k = 0; k < x; k++) {
    st = st + str[k];
  }
  return st;
}

//this function runs the countdown using sleep funtion defined below
//this function also displays the result after completion of time
async function time() {
  var time=document.getElementById("ti")
  var timer = setInterval(function() {
    ti.innerHTML=(count++)+1;
    if(count == 60){ 
      clearInterval(timer);
      document.getElementById("cd").innerHTML=final;
      v = v + val.length
    document.getElementById("wpm").innerText = "WPM : " + Math.round(v / 5);
    document.getElementById("acc").innerText =
      "accuracy :" + Math.round(((v - r) / v) * 100) + "%";
    }
}, 1000)
}
