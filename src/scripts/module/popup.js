const loginBtn = document.querySelector(".login_btn");
const signUpBtn = document.querySelector(".sign_up_btn");
const findOutMoreBtn = document.querySelector(".find_out_more");
const playVideoBtn = document.querySelector(".play_video");

export const openPopup = (content) => {
  const popupWrapper = document.createElement("div");
  popupWrapper.classList.add("popup-wrapper");

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.innerHTML = content;

  popupWrapper.appendChild(popupContent);
  document.querySelector(".wrapper").appendChild(popupWrapper);

  document.body.classList.add("popup-active");

  popupWrapper.classList.add("visible");

  const closePopupOnOutsideClick = (event) => {
    if (!popupContent.contains(event.target)) {
      closePopup();
      document.removeEventListener("click", closePopupOnOutsideClick);
    }
  };

  setTimeout(() => {
    document.addEventListener("click", closePopupOnOutsideClick);
  }, 500);
};

export const closePopup = () => {
  const popupWrapper = document.querySelector(".popup-wrapper");

  if (popupWrapper) {
    popupWrapper.classList.remove("visible");
    popupWrapper.classList.add("close");
    setTimeout(() => {
      popupWrapper.remove();
      document.body.classList.remove("popup-active");
    }, 500);
  }
};

const popupContent = "<h2>Oops! Something went wrong</h2>";

loginBtn.addEventListener("click", () => {
  openPopup(popupContent);
});

signUpBtn.addEventListener("click", () => {
  openPopup(popupContent);
});

findOutMoreBtn.addEventListener("click", () => {
  openPopup(popupContent);
});

playVideoBtn.addEventListener("click", () => {
  openPopup(popupContent);
});
