const d = document;
const $form = d.querySelector("#register-form");
const $nameInput = d.querySelector("#name");
const $nameError = d.querySelector("#name-error");
const $emailInput = d.querySelector("#email");
const $emailError = d.querySelector("#email-error");
const $passwordInput = d.querySelector("#password");
const $passwordError = d.querySelector("#password-error");
const $confirmPasswordInput = d.querySelector("#confirm-password");
const $confirmPasswordError = d.querySelector("#confirm-password-error");
const $successMessage = d.querySelector("#success-message");
const $errorsMessages = d.querySelectorAll(".error");
const $loader = d.querySelector("#loader");


// Función de Validación del Formulario
function validateForm(e) {
  // Reiniciar mensajes de error y éxito
  $errorsMessages.forEach((el) => {
    el.innerText = "";
  });
  $successMessage.innerText = "";

  let isValid = true;

  //Validar Nombre
  if ($nameInput.value.trim() === "") {
    $nameError.innerText = "El nombre es obligatorio";
    isValid = false;
  } else if ($nameInput.value.trim().search(/[0-9]/) > 0 || $nameInput.value.trim().search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) > 0) {
    $nameError.innerText = "Tu nombre no puede tener numeros o caracteres especiales, solo letras y espacios";
    isValid = false;
  }

  //Validar Email
  let emailPattern = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if ($emailInput.value.trim() === "") {
    $emailError.innerText = "El email es obligatorio";
    isValid = false;
  } else if (!emailPattern.test($emailInput.value.trim())) {
    $emailError.innerText = "El formato del correo no es válido";
    isValid = false;
  }

  //Validar Password
  if ($passwordInput.value.trim() === "") {
    $passwordError.innerText = "La contraseña es obligatorio";
    isValid = false;
  } else if ($passwordInput.value.trim().length < 8) {
    $passwordError.innerText = "La contraseña debe tener al menos 8 caracteres";
    isValid = false;
  } else if ($passwordInput.value.trim().search(/[A-Z]/) < 0) {
    $passwordError.innerText = "La contraseña debe tener al menos una mayuscula";
    isValid = false;
  } else  if ($passwordInput.value.trim().search(/[0-9]/) < 0) {
    $passwordError.innerText = "La contraseña debe tener al menos un numero";
    isValid = false;
  } else if ($passwordInput.value.trim().search(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) < 0) {
    $passwordError.innerText = "La contraseña debe tener al menos un caracter especial";
    isValid = false;
  }

  //Validar Confirmar Password
  if ($confirmPasswordInput.value.trim() !== $passwordInput.value.trim()) {
    $confirmPasswordError.innerText = "Las contraseñas no coinciden";
    isValid = false;
  }

  if (!isValid) {
    //Prevenir el envío del formulario si hay errores
    e.preventDefault();
  } else {
    e.preventDefault();
    DisplayWait();
    // Aquí puedes manejar el envío real de datos a un servidor, por ejemplo, usando fetch.
  }
}

function DisplayWait(){
    $loader.classList.remove("hidden");
    setTimeout(() => {
        $loader.classList.add("hidden");
        $successMessage.innerText = "Formulario enviado exitosamente.";
        $form.reset(); 
    }, 5000);
}


$form.addEventListener("submit", validateForm);