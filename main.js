const backToTop = document.querySelector('footer div button')

backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

const menuBtn = document.querySelector('.menu-btn')
const header = document.querySelector('header')
const ul = document.querySelector('header .box ul.menu')
const spans = document.querySelectorAll('header .menu-btn span')

menuBtn.addEventListener('click', () => {
    ul.classList.toggle('switch')
    header.classList.toggle('he')

    spans.forEach((span) => {
        span.classList.toggle('co')
    })
})