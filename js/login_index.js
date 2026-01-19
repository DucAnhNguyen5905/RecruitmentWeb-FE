import { showError, clearError } from "./validate.js";

export function setupLoginForm() {
  const form = document.querySelector(".login-form");
  const email = document.getElementById("login-email");
  const password = document.getElementById("login-password");

  email.addEventListener("input", () => {
    if (!email.value.trim()) {
      showError(email, "Vui lòng nhập email");
    } else {
      clearError(email);
    }
  });

  password.addEventListener("input", () => {
    if (!password.value.trim()) {
      showError(password, "Vui lòng nhập mật khẩu");
    } else {
      clearError(password);
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!email.value.trim() || !password.value.trim()) return;
    alert("Đăng nhập thành công!");
  });
}
console.log("form =", document.querySelector(".login-form"));
console.log("email =", document.getElementById("login-email"));
console.log("password =", document.getElementById("login-password"));
