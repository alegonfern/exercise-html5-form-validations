document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Detener el envío predeterminado del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const errorMsg = document.getElementById('error-msg');

    // Validar si los campos están vacíos
    if (nombre === '' || email === '') {
      errorMsg.innerText = 'Por favor, complete todos los campos';
      return;
    }

    // Validar si el formato del email es correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMsg.innerText = 'Por favor, ingrese un email válido';
      return;
    }

    // Si todo es válido, limpiar el mensaje de error y enviar el formulario
    errorMsg.innerText = '';
    document.getElementById('myForm').submit();
  });