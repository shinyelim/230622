const container = document.querySelectorAll('.container')
container.forEach(item => {
  console.log(item)
  const bar = item.querySelector('.bar')
const number = item.querySelector('.number')
//console.log(bar.dataset.number)

const dataNumber = bar.dataset.number;
//console.log(dataNumber)
//number 앞에있는 숫자 변경/삽입
number.textContent = dataNumber;
//number.textContent = dataNumber;
//bar 그래프의 width 값으로 % 표현 
bar.style.width = dataNumber + '%'
console.log(dataNumber)

let index = 0;
let interval;
interval = setInterval(() => {
      //index + 1 씩 증가함
 index++
 if(index <= dataNumber){
  bar.style.width = index + '%'              //<-차트 그래프의 게이지 채우기
  number.textContent = index
  //앞에있는 숫자가 그래프게이지만큼 짧은시간에 변함
  //interval에 setInterval 할당
  //setInterval은 정해진 시간마다 반볻하는 메소드요소
 } 
}, 30);//0.030초마다 반복한다


 
});


