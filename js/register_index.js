import { showError, clearError } from "./validate.js";
import { showToast } from "./toast.js";

export function setupRegisterForm() {
  const form = document.getElementById("register-form");
  if (!form) return;

  const lastName = document.getElementById("last-name");
  const firstName = document.getElementById("first-name");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm-password");
  const submitBtn = form.querySelector('button[type="submit"]');

  const rules = {
    length: document.getElementById("rule-length"),
    upper: document.getElementById("rule-upper"),
    lower: document.getElementById("rule-lower"),
    number: document.getElementById("rule-number"),
    special: document.getElementById("rule-special"),
  };

  submitBtn.disabled = true;

  function toggleRule(rule, ok) {
    rule.checked = ok;
    rule.nextElementSibling.classList.toggle("text-success", ok);
    rule.nextElementSibling.classList.toggle("fw-bold", ok);
  }

  function checkPassword(value) {
    toggleRule(rules.length, value.length >= 8 && value.length <= 20);
    toggleRule(rules.upper, /[A-Z]/.test(value));
    toggleRule(rules.lower, /[a-z]/.test(value));
    toggleRule(rules.number, /[0-9]/.test(value));
    toggleRule(rules.special, /[!@#$%^&*()]/.test(value));
  }

  function isEmailValid(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function isFormValid() {
    return (
      lastName.value.trim() &&
      firstName.value.trim() &&
      username.value.length >= 8 &&
      username.value.length <= 20 &&
      isEmailValid(email.value) &&
      password.value === confirm.value &&
      Object.values(rules).every((r) => r.checked)
    );
  }
  username.addEventListener("text", () => {
    username.value.trim()
      ? clearError(username)
      : showError(email, "Vui lòng nhập Username");
  });
  password.addEventListener("input", () => {
    checkPassword(password.value);
    submitBtn.disabled = !isFormValid();
  });

  form.addEventListener("input", () => {
    submitBtn.disabled = !isFormValid();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      showToast("⚠️ Vui lòng hoàn thành đầy đủ thông tin", "error");
      return;
    }
    showToast("🎉 Đăng ký thành công!");
    form.reset();
    Object.values(rules).forEach((r) => toggleRule(r, false));
    submitBtn.disabled = true;
  });
}
