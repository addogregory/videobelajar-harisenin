
const registerForm = document.getElementById("register-form");
const passwordInput = document.getElementById("register-password");
const confirmPasswordInput = document.getElementById("confirm-password");
const registerMessage = document.getElementById("register-message");
const googleButton = document.getElementById("register-google");

// Menampilkan pesan validasi
function showRegisterMessage(message, type = "error") {
  registerMessage.textContent = message;
  registerMessage.className = `form-message ${type}`;
}

// Tampilkan / sembunyikan kata sandi
document.querySelectorAll("[data-password-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(
      button.dataset.passwordToggle
    );

    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    button.textContent = isPassword ? "Sembunyikan" : "Lihat";
    button.setAttribute(
      "aria-pressed",
      String(isPassword)
    );
    button.setAttribute(
      "aria-label",
      isPassword
        ? "Sembunyikan kata sandi"
        : "Tampilkan kata sandi"
    );
  });
});

// Periksa kesamaan kata sandi
function validatePasswordMatch() {
  if (!confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity("");
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.setCustomValidity(
      "Konfirmasi kata sandi tidak sama."
    );
  } else {
    confirmPasswordInput.setCustomValidity("");
  }
}

passwordInput.addEventListener("input", () => {
  validatePasswordMatch();
});

confirmPasswordInput.addEventListener("input", () => {
  validatePasswordMatch();
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  validatePasswordMatch();

  if (!registerForm.reportValidity()) {
    return;
  }

  showRegisterMessage(
    "Validasi berhasil! Pendaftaran akun belum terhubung ke server.",
    "success"
  );
});
// Simulasi tombol Google SSO
googleButton.addEventListener("click", () => {
  showRegisterMessage(
    "Pendaftaran dengan Google belum aktif. Integrasi Google OAuth diperlukan."
  );
});
