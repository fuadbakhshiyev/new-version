const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide__popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide__popup");
    }, 500);
  });
}
gsap.from(".popup__content", { opacity: 0, duration: 1, delay: 1, y: 50 ,x: 0 , z:50});
gsap.from(".right__content",{opacity: 0, duration: 1.5, delay: 1.5, z: 50 ,x: 50 });
gsap.from(".popup-img__container",{opacity: 0, duration: 1.5, delay: 1.5, z: -50 ,x: -50 });
