const button = document.querySelector(".burger__menu");
const modal__mobile = document.querySelector("#modal__mobile");

let isOpen = false;

button.addEventListener("click", () => {
    if (!isOpen) {
        button.classList.add("active");
        modal__mobile.style.display = "flex";
        modal__mobile.style.position = "fixed";
        modal__mobile.style.bottom = "0";
        modal__mobile.style.left = "0";
        modal__mobile.style.transform = "translateX(0)";
        isOpen = true;
    } else {
        button.classList.remove("active");
        modal__mobile.removeAttribute("style");
        modal__mobile.style.display = "none";
        isOpen = false;
    }
});
