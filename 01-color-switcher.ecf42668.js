const body=document.querySelector(".body"),btnStart=document.querySelector("[data-start]"),btnStop=document.querySelector("[data-stop]");let timerId=null;function changeInterval(){timerId=setInterval(changeBgColor,1e3),btnStart.disabled=!0}function stopChange(){clearInterval(timerId),btnStart.disabled=!1}function changeBgColor(){let t=getRandomHexColor();body.style.backgroundColor=`${t}`}function getRandomHexColor(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}btnStart.addEventListener("click",changeInterval),btnStop.addEventListener("click",stopChange);
//# sourceMappingURL=01-color-switcher.ecf42668.js.map