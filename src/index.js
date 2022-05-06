document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    buildTasklist(e.target["new-task-description"].value)
  })
});

function buildTasklist(task){
  let item = document.createElement('li') // createing li element and setting it to item
  let btn = document.createElement("button") // createing button element and setting it to btn
  btn.addEventListener('click', handleDelete)  
  btn.textContent = 'x'
  item.textContent = `${task} `
  item.appendChild(btn)
  console.log(item)
  document.querySelector('#list').appendChild(item)
}

function handleDelete(e){
  e.target.parentNode.remove();
}
