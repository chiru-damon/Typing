var str="Hello try typing this to test the speed of your typing with our Speed Typing website"
var str1="You have successfully completed a paragraph ,Continue typing before the time runs out"
var count
var final = "<div class='card-header'><h2>Your Result is here</h2></div><div class='card-body'><div id='wpm'>WPM = </div><div id=acc>Accuracy</div></div><div id='ret'><button class='btn btn-light'><a href='index.html'  style='text-decoration:none ;'>Retake test</a></button></div>"


function start(){
  time()
  var bo=document.getElementById("body")
  const len=str.length
  var body="<p> "+str+"</p><input id='i2' type='text' onkeyup='corr()' style='color:green;' maxlength='"+len+"'>"
  bo.innerHTML=body
  document.getElementById('i2').focus()
}
function corr(){
  var inp=document.getElementById('i2')
  var val=inp.value
  var i = val.length
  if (val===pos(i))
  {
      inp.style.color='green';
  }
  else{
      inp.style.color='red';
  }
  if (val===str && count < 60){
    var bo=document.getElementById("body")
    const len=str1.length
    var body="<p> "+str1+"</p><input id='i2' type='text' onkeyup='corr()' style='color:green;' maxlength='"+len+"'>"
    bo.innerHTML=body
    val=''
    str=str1
    document.getElementById('i2').focus()
  }
}
function pos(x){
  var k=0
  var st=''
  for (k=0;k<x;k++){
    st=st+str[k]
  }
  return st
}

async function time(){
  var time=document.getElementById("ti")
  var timer = setInterval(function() {
    ti.innerHTML=(count++)+1;
    if(count == 60){ clearInterval(timer);document.getElementById("cd").innerHTML=final}
}, 1000)
  }
