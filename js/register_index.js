import { showError, clearError } from "./validate.js";
import { showToast } from "./toast.js";

export function setupRegisterForm() {
  const form = document.getElementById("register-form");
  if (!form) return;

  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value.trim()
        ? clearError(input)
        : showError(input, "Không được để trống");
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const [email, pass, confirm] = inputs;

    if (!email.value || !pass.value || !confirm.value) return;

    if (pass.value !== confirm.value) {
      showError(confirm, "Mật khẩu không khớp");
      return;
    }

    showToast("Đăng ký thành công!");
    form.reset();
    document.getElementById("register-modal").classList.remove("show");
  });
}
