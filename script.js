
function calculator() {
  one.addEventListener('click',function() {
    forms.display.value +=1
  })
  two.addEventListener('click',function() {
    forms.display.value +=2
  })
  three.addEventListener('click',function() {
    forms.display.value +=3
  })
  four.addEventListener('click',function() {
    forms.display.value +=4
  })
  five.addEventListener('click',function() {
    forms.display.value +=5
  })
  six.addEventListener('click',function() {
    forms.display.value +=6
  })
  seven.addEventListener('click',function() {
    forms.display.value +=7
  })
  eight.addEventListener('click',function() {
    forms.display.value +=8
  })
  nine.addEventListener('click',function() {
    forms.display.value +=9
  })
  zero.addEventListener('click',function(){
    forms.display.value +=0
  })
  dot.addEventListener('click',function() {
    forms.display.value +='.'
  })
  add.addEventListener('click',function() {
    forms.display.value +='+'
  })
  sub.addEventListener('click',function() {
    forms.display.value +='-'
  })
  divide.addEventListener('click',function() {
    forms.display.value +='/'
  })
  mult.addEventListener('click',function() {
    forms.display.value +='*'
  })
  clear.addEventListener('click',function() {
    forms.display.value =''
    console.log('working');
  })
  equals.addEventListener('click',function() {
    if(display.value===''){
      alert('please enter numbers to calculate')
    }
    else{
      forms.display.value=
      eval(forms.display.value)
    }
  })
}
calculator()
