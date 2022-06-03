const str="hello try typing this to test the speed of your typing with our Speed Typing website"

function start(){
  time()
  const str="hello try typing this to test the speed of your typing with our Speed Typing website"
  var bo=document.getElementById("body")
  const len=str.length
  bo.innerHTML="<p> "+str+"</p><input id='i2' type='text' onkeypress='corr()' style='color:green;width:auto;' autofocus maxlength='"+len+"'>"
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
  var t=0,i
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
