//const start = document.getElementById('start')
//console.log(start)
const number = document.querySelector('.number')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const list = document.getElementById('lsit')
let index = 0;
//1000 millseconds => 1 seconds
let timerId;

startBtn.addEventListener('click',() => {
  index = 0;
  timerId =setInterval(() => {
    index++
    number.textContent = index;

  },10);
 
})

stopBtn.addEventListener('click',() => {
  clearInterval(timerId)
  const li = document.createElement('li')
  li.textContent = index
  //list.appendChild(li)
  //list.appendChild(li)
})
/*timerId = setInterval
setInterval(()=>{
index++
number.textContent = index; //타이머숫자가 자동으로 움직인다.//
console.log(index)

},1000)*/