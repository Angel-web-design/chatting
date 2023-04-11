const cover = document.querySelector('cover');
const loader = document.querySelector('.loader-container')

document.querySelector('form').addEventListener('submit', (e)=>{
  if(e == undefined){e= window.event}

  e.preventDefault()

  const data = Object.fromEntries( new FormData(e.target) )
  const username = data.username

  load()
})

function load(){
  loader.classList.toggle('off')
  const int = setTimeout(() => {
    loader.classList.toggle('off')
    cover.classList.toggle('off')
  }, 2000);
}