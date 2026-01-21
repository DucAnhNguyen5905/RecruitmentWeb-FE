export function setupLoginModal() {
  const loginModal = document.getElementById("login-modal");
  const registerModal = document.getElementById("register-modal");

  const openLogin = document.getElementById("open-signin");
  const switchToRegister = document.getElementById("switch-to-register");

  const closeLogin = document.getElementById("close-modal");
  const closeRegister = document.getElementById("close-register");

  const loginOverlay = document.getElementById("login-overlay");
  const registerOverlay = document.getElementById("register-overlay");

  if (!loginModal || !registerModal) return;

  function closeAll() {
    loginModal.classList.remove("show");
    registerModal.classList.remove("show");
  }

  // mở login
  openLogin?.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.add("show");
  });

  // chuyển sang register
  switchToRegister?.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.classList.remove("show");
    registerModal.classList.add("show");
  });

  // đóng modal
  closeLogin?.addEventListener("click", closeAll);
  closeRegister?.addEventListener("click", closeAll);
  loginOverlay?.addEventListener("click", closeAll);
  registerOverlay?.addEventListener("click", closeAll);

  // ESC để đóng
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
}
