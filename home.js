var str="Hello try typing this to test the speed of your typing with our Speed Typing website"
var str1="You have successfully completed a paragraph ,Contuinue typing before th time runs out"
var t


function start(){
  time()
  var bo=document.getElementById("body")
  const len=str.length
  var body="<p> "+str+"</p><input id='i2' type='text' onkeypress='corr()' style='color:green;' maxlength='"+len+"'>"
  bo.innerHTML=body
  document.getElementById('i2').focus()
}
function corr(){
  var inp=document.getElementById('i2')
  var val=inp.value
  console.log(val)
  var i = val.length
  if (val===pos(i))
  {
      inp.style.color='green';
  }
  else{
      inp.style.color='red';
  }
  if (val===str && t < 60){
    console.log(t)
    var bo=document.getElementById("body")
    const len=str1.length
    var body="<p> "+str1+"</p><input id='i2' type='text' onkeypress='corr()' style='color:green;' maxlength='"+len+"'>"
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
  var i
  t=0
  var time=document.getElementById("ti")
  for(i=0;i<60;i++){
    await sleep(1000)
    t=t+1
    time.innerText=t
  }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}