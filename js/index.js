import { setupLoginModal } from "./modal_index.js";
import { setupLoginForm } from "./login_index.js";

document.addEventListener("DOMContentLoaded", () => {
  setupLoginModal();
  setupLoginForm();
});
