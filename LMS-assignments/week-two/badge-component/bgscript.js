console.log('connected!')

const showToggleBtn = document.querySelector('#btn-toggle-bg')
const showToggleNum = document.querySelector('#circle-show')

showToggleBtn.addEventListener('click', () => {
    if (showToggleBtn.style.display === "none"){
        showToggleBtn.style.display = "block";
    }
    else showToggleBtn.style.display = "none";
});