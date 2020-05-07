const datesInfo = document.getElementById('for-select')
const select = document.getElementById('select')

select.addEventListener('input', fakeChange)

function fakeChange() {
    datesInfo.style.opacity = 0
    setTimeout(() => datesInfo.style.opacity = 1, 500)
}
//# sourceMappingURL=main.js.map
