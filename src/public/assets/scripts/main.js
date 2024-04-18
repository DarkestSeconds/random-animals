window.addEventListener('DOMContentLoaded', () => {

    initEvent()
    
})

function initEvent () {

    const event = new EventSource('/get-animals')

    console.log(event)

    event.onmessage = (e) => {
        const link = e.data

        addImage(link)
    }

}

function addImage (src) {

    const gallery = document.querySelector('#gallery')

    const url = new URL(src)

    const image = document.createElement('img')
    image.src = url.toString()
    image.classList.add('hidden', 'object-cover',  'w-full', 'h-full', 'align-middle')

    const div = document.createElement('div')
    div.classList.add('relative', 'h-80', 'flex-grow', 'flex-auto', 'p-2')

    div.appendChild(image)

    const span = document.createElement('span')
    span.innerText = 'Carregando...'

    div.appendChild(span)

    image.addEventListener('load', () => {
        image.classList.remove('hidden')
        span.remove()
    })

    gallery.appendChild(div)

}