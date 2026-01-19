import { showError, clearError } from "./validate.js";
import { showToast } from "./toast.js";

export function setupLoginForm() {
  const form = document.querySelector(".modal-form");
  if (!form) return;

  const email = form.querySelector('input[type="email"]');
  const password = form.querySelector('input[type="password"]');

  email.addEventListener("input", () => {
    email.value.trim()
      ? clearError(email)
      : showError(email, "Vui lòng nhập email");
  });

  password.addEventListener("input", () => {
    password.value.trim()
      ? clearError(password)
      : showError(password, "Vui lòng nhập mật khẩu");
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!email.value.trim() || !password.value.trim()) return;

    showToast("Đăng nhập thành công!");
    form.reset();
    document.getElementById("login-modal").classList.remove("show");
  });
}
