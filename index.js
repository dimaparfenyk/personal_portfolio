const emailLabelEl = document.querySelector("#email-link");

let options = {
  text: "Email coppied to buffer",
  duration: 2000,
  gravity: "bottom",
  position: "center",
  stopOnFocus: true,
};

function copyEmail(e) {
  e.preventDefault();

  try {
    options = {
      ...options,
      className: "toaster success",
    };

    navigator.clipboard.writeText(emailLabelEl.innerText).then(() => {
      Toastify(options).showToast();
    });
  } catch (error) {
    options = { ...options, className: "toaster error" };
    Toastify(options).showToast();
  }
}

emailLabelEl.addEventListener("click", (e) => copyEmail(e));
