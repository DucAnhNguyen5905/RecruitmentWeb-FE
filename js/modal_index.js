export function setupLoginModal() {
  const modal = document.getElementById("login-modal");
  const overlay = document.getElementById("login-overlay");
  const close = document.getElementById("close-modal");
  const open = document.querySelector(".btn--ghost");

  open.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  function closeModal() {
    modal.style.display = "none";
  }

  close.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}
