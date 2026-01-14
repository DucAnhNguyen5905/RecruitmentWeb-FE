// ===== MODAL =====
const openBtn = document.getElementById("open-contact");
const modal = document.getElementById("contact-modal");
const closeBtn = document.getElementById("close-modal");
const overlay = document.getElementById("modal-overlay");

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
});

overlay.addEventListener("click", function () {
  modal.style.display = "none";
});

// ===== SCROLL =====
const scrollBtn = document.getElementById("scroll-down");
const servicesSection = document.querySelector(".services");

scrollBtn.addEventListener("click", function () {
  servicesSection.scrollIntoView({ behavior: "smooth" });
});

// ===== FORM =====
const form = document.querySelector(".modal-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const company = document.getElementById("company").value.trim();
  const phone = form.querySelector("input[type='tel']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const checkbox = form.querySelector("input[type='checkbox']").checked;

  if (!name || !company || !phone || !email) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  if (!checkbox) {
    alert("Bạn cần đồng ý chính sách!");
    return;
  }

  alert("Gửi thành công!");
  modal.style.display = "none";
  form.reset();
});
