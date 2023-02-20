const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('click', () => {
        clerActive()

        slide.classList.add('active')
    })
}

function clerActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}