window.addEventListener('DOMContentLoaded', () => {
    const one = document.getElementById('history-one')
    const two = document.getElementById('history-two')
    const three = document.getElementById('history-three')
    const four = document.getElementById('history-four')

    one.addEventListener('mouseover', () => {
        one.style.height = 50 + '%'
        two.style.height = 50/3 + '%'
        three.style.height = 50/3 + '%'
        four.style.height = 50/3 + '%'
    })

    one.addEventListener('mouseleave', () => {
        one.style.height = 25 + '%'
        two.style.height = 25 + '%'
        three.style.height = 25 + '%'
        four.style.height = 25 + '%'
    })

    two.addEventListener('mouseover', () => {
        one.style.height = 50/3 + '%'
        two.style.height = 50 + '%'
        three.style.height = 50/3 + '%'
        four.style.height = 50/3 + '%'
    })

    two.addEventListener('mouseleave', () => {
        one.style.height = 25 + '%'
        two.style.height = 25 + '%'
        three.style.height = 25 + '%'
        four.style.height = 25 + '%'
    })

    three.addEventListener('mouseover', () => {
        one.style.height = 50/3 + '%'
        two.style.height = 50/3 + '%'
        three.style.height = 50 + '%'
        four.style.height = 50/3 + '%'
    })

    three.addEventListener('mouseleave', () => {
        one.style.height = 25 + '%'
        two.style.height = 25 + '%'
        three.style.height = 25 + '%'
        four.style.height = 25 + '%'
    })

    four.addEventListener('mouseover', () => {
        one.style.height = 50/3 + '%'
        two.style.height = 50/3 + '%'
        three.style.height = 50/3 + '%'
        four.style.height = 50 + '%'
    })

    four.addEventListener('mouseleave', () => {
        one.style.height = 25 + '%'
        two.style.height = 25 + '%'
        three.style.height = 25 + '%'
        four.style.height = 25 + '%'
    })
})
