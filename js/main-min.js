const datesInfo=document.getElementById("for-select"),select=document.getElementById("select");function fakeChange(){datesInfo.style.opacity=0,setTimeout(()=>datesInfo.style.opacity=1,500)}function changeDota(){document.getElementById("welcome").style.backgroundImage="url('../img/dota.jpg')",document.getElementById("btn-dota").style.display="none",document.getElementById("btn-csgo").style.display="flex"}function changeCs(){document.getElementById("welcome").style.backgroundImage="url('../img/csgo.jpg')",document.getElementById("btn-dota").style.display="flex",document.getElementById("btn-csgo").style.display="none"}select.addEventListener("input",fakeChange);
//# sourceMappingURL=main-min.js.map
