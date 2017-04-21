const showCurtain = event => {
  const curtain = event.currentTarget.nextElementSibling
  if (curtain) {
    const timeout = Number(curtain.getAttribute('data-timeout'))

    curtain.classList.add('evo_c-curtain--js-animate', 'evo_c-curtain--show')
    setTimeout(() => {
      curtain.classList.remove('evo_c-curtain--show')
      setTimeout(() => {
        curtain.classList.add('evo_c-curtain--js-animate')
      }, 1000)
    }, timeout)
  }
}

const showGifCurtain = event => {
  const curtain = event.currentTarget.nextElementSibling
  if (curtain) {
    const timeout = Number(curtain.getAttribute('data-timeout'))

    curtain.classList.add('evo_c-curtain--show')

    const xhr = new XMLHttpRequest()

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr)
        curtain.querySelector('.evo_c-curtain__error').style.display = 'none'
        const img = curtain.querySelector('img') || document.createElement('IMG')
        img.setAttribute('src', xhr.data.url)
        img.style.display = 'inline-block'
      }
    }

    xhr.onerror = function () {
      console.log(xhr)
      console.log(xhr.error)
      curtain.querySelector('img').style.display = 'none'
      curtain.querySelector('.evo_c-curtain__error').style.display = 'block'
    }

    xhr.open('GET', 'https://freemusicarchive.org/api/get/albums.json?api_key=TBHJ7JH66M2F468E')
    xhr.send()

    setTimeout(() => {
      curtain.classList.remove('evo_c-curtain--show')
    }, timeout)
  }
}

export default () => {
  const brainstormButton = document.getElementById('evo_c-curtain-brainstorm-button')
  brainstormButton && brainstormButton.addEventListener('click', showCurtain)
  const gifButton = document.getElementById('evo_c-curtain-gif-button')
  gifButton && gifButton.addEventListener('click', showGifCurtain)
}
