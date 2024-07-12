const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEL = document.createElement("span");
  spanEL.style.left = xPos + "px";
  spanEL.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEL.style.width = size + "px";
  spanEL.style.height = size + "px";
  bodyEl.appendChild(spanEL);
  setTimeout(() => {
    spanEL.remove();
  }, 3000);
});

bodyEl.addEventListener("click",(event)=>{

    const spanC = document.createElement("span");

    spanC.style.width="50px";
    spanC.style.height="50px";

    bodyEl.appendChild(spanC);

    setTimeout(() => {
        spanC.remove();
    }, 2000);

})
bodyEl.addEventListener("",(event)=>{

    const spanC = document.createElement("span");

    spanC.style.width="50px";
    spanC.style.height="50px";

    bodyEl.appendChild(spanC);

    setTimeout(() => {
        spanC.remove();
    }, 2000);})