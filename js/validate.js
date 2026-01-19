export function showError(input, message) {
  let error = input.parentElement.querySelector(".error");

  if (!error) {
    error = document.createElement("div");
    error.className = "error";
    input.parentElement.appendChild(error);
  }

  error.innerText = message;
  error.style.display = "block";
  input.classList.add("input-error");
}

export function clearError(input) {
  const error = input.parentElement.querySelector(".error");
  if (error) {
    error.innerText = "";
    error.style.display = "none";
  }
  input.classList.remove("input-error");
}
