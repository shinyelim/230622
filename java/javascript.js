const container = document.querySelectorAll('.container')
container.forEach(item => {
  console.log(item)
  const bar = item.querySelector('.bar')
const number = item.querySelector('.number')
//console.log(bar.dataset.number)

const dataNumber = bar.dataset.number;
//console.log(dataNumber)
//number 에 숫자 변경/삽입
//number.textContent = dataNumber;
//bar 그래프의 width 값으로 % 표현 
bar.style.width = dataNumber + '%'
console.log(dataNumber)
});


