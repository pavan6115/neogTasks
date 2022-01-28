console.log('connected!')

const showToggleBtn = document.querySelector('.btn-toggle-bg')
const showToggleNum = document.querySelector('.circle-show')

showToggleBtn.addEventListener('click', () => {
    if (showToggleNum.style.display === "none") {
        showToggleNum.style.display = "block"
    }
    else showToggleNum.style.display = "none"
})