let imgGif = document.querySelector(".gif");
let messageGif = document.querySelector(".message-gif");
let puttingMessage = document.querySelector(".inside-here");
let input = document.querySelector(".input-txt");
let icon = document.querySelector(".send");


input.onfocus = function () {
    icon.style.cssText = "opacity: 1 !important;"
}


icon.onclick = function () {
    if (input.value === "") return;
    let element = document.createElement("div");
    let eleText = document.createTextNode(input.value);
    element.className = "send-message"
    element.appendChild(eleText)
    puttingMessage.appendChild(element);
    input.value = "";
}

imgGif.onclick = function () {
    let imgClone = imgGif.cloneNode(true);

    imgClone.style.cssText = "width:70px"

    imgGif.parentElement.remove();

    puttingMessage.appendChild(imgClone)
}
