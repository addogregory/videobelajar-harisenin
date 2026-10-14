
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const formMessage = document.getElementById("form-message");
const forgotLink = document.getElementById("lupa-password");
const googleLogin = document.getElementById("google-login");

// Tampilkan / sembunyikan kata sandi
togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";

  passwordInput.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Sembunyikan" : "Lihat";
  togglePassword.setAttribute(
    "aria-label",
    isPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
  );
  togglePassword.setAttribute("aria-pressed", String(isPassword));
});

// Tampilkan pesan
function showMessage(message, type = "error") {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}

// Simulasi pengiriman form login
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    showMessage("Email dan kata sandi wajib diisi.");
    return;
  }

  showMessage(
    "Form berhasil divalidasi. Autentikasi akun belum tersedia.",
    "success"
  );
});

// Lupa kata sandi
// forgotLink.addEventListener("click", (event) => {
//   event.preventDefault();

//   showMessage(
//     "Fitur pemulihan kata sandi akan tersedia pada tahap berikutnya."
//   );
// });
