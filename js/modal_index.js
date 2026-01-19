export function setupLoginModal() {
  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");

  const openLogin = document.getElementById("open-signin");
  const closeLogin = document.getElementById("close-modal");
  const closeRegister = document.getElementById("close-register");

  const loginOverlay = document.getElementById("login-overlay");
  const registerOverlay = document.getElementById("register-overlay");

  const switchToLogin = document.getElementById("switch-to-login");

  openLogin.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.add("show");
  });

  function closeAll() {
    loginModal.classList.remove("show");
    registerModal.classList.remove("show");
  }

  closeLogin.addEventListener("click", closeAll);
  loginOverlay.addEventListener("click", closeAll);

  closeRegister.addEventListener("click", closeAll);
  registerOverlay.addEventListener("click", closeAll);

  switchToLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerModal.classList.remove("show");
    loginModal.classList.add("show");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
}
