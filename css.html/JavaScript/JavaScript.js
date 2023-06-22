const title = document.getElementById('title')
console.log(title)
//구분자 기준으로 문자열을 나눠 -> 배열로 만들어줌 <-split//
const chars = title.innerText.split('')
console.log(chars)
//공백도 하나의 문자로 봄(자바스크립트의 경우에는)
title.innerText = '';
//title 안의 문자열을 삭제하는것이다.
//문자열에 '' 부호만 쓰면 삭제가 된다.

chars.forEach((char, index) => {
  const span = document.createElement('span')
  span.classList.add('char')
  //생성된 span 태그에 char 문자 삽입
  span.textContent = char
  //title에 자식요소(appendchild로 넣음)로 문자담긴 span 태그 삽입
  title.appendChild(span)
  //console.log(span)//
  setTimeout(() => {
    span.classList.add('active') 
   }, 200 * index)
})

setTimeout(()=> {console.log('첫번째 setTimeout')}, 500)
setTimeout(()=> {console.log('두번째 setTimeout')}, 800)
setTimeout(()=> {console.log('세번째 setTimeout')}, 300)
