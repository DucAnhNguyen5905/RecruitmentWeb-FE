export function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
  error.style.display = "block";
  input.classList.add("input-error");
}

export function clearError(input) {
  const error = input.nextElementSibling;
  error.innerText = "";
  error.style.display = "none";
  input.classList.remove("input-error");
}
