const str="hello try typing this to test the speed of your typing with our Speed Typing website"

function start(){
  const str="hello try typing this to test the speed of your typing with our Speed Typing website"
  var bo=document.getElementById("body")
  const len=str.length
  bo.innerHTML="<p> "+str+"</p><input id='i2' type='text' onkeypress='corr()' style='color:green;width:auto;' autofocus maxlength='"+len+"'>"
}
function corr(){
  var inp=document.getElementById('i2')
  var val=inp.value
  var i = val.length
  console.log(i)
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