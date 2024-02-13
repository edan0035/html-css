// Find element in DOM
const btn = document.querySelector('.btn-hello-world')

// Add style to the button
btn.style.width = '100%'
btn.style.backgroundColor = 'chocolate'
btn.style.color = 'white'
btn.style.padding = '5px'

// Button on-click event-listener
btn.addEventListener('click', e => {
  e.stopPropagation()
  alert('Hello, JavaScript!')
})