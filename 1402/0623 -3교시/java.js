const input = document.getElementById('add-todo')
const addButton = document.getElementById('add-Button')
const list = document.getElementById('list')

addButton.addEventListener('click',() => {
  input.focus()

 
  /*if (input.value.length === 0) {            //<-유효성검사// 
    return alert('문자를 하나라도 입력해주세요')
    
  }*/
 // console.log(input.value)

  const li = document.createElement('li')
  li.textContent = input.value
  li.innerHTML = `$(input.value)
  <button class="list-delete">&#x2716</button>`
  li.classList.add('list-item')
  list.appendChild(li)
  input.value =''

  input.addEventListener('click',(event) => {
    if (event.key === `Enter`) {
      addList()
    }
  })
})

list.addEventListener('click',(event) => {
  if(e.target.tagName === 'li'){
    e.target.classList.toggle('checked')
  }
  if (e.target.tagName === 'Button') {
   e.target.parentElement.remove() 
  }
})

//검색창에 검색하면 기록이 남는역할

