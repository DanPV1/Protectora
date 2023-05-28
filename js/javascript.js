window.onload = function () {
  var form = document.querySelector('form');
  var submitButton = form.querySelector('.btn-primary');
  var inputs = Array.from(form.querySelectorAll('input'));
  var selects = Array.from(form.querySelectorAll('select'));

  // Se añade el atributo required a todos los campos de entrada y se selecciona
  inputs.forEach(input => {
    input.setAttribute('required', '');
  });

  selects.forEach(select => {
    select.required = true;  
    select.addEventListener('change', function () {
      if (this.value === '') {  // Si no se ha seleccionado ninguna opción...
        this.setCustomValidity('Por favor, selecciona una opción válida.');  // Configura un mensaje de error.
        this.reportValidity();  // Y muéstralo.
      } else {
        this.setCustomValidity('');  // Si se selecciona, no hay mensaje de error.
      }
    });
  });

  // Igual para la casilla de verificación de la política de privacidad
  var privacyCheckbox = form.querySelector('#exampleCheck1');
  privacyCheckbox.addEventListener('change', function () {
    if (!this.checked) {
      this.setCustomValidity('Debes aceptar la política de privacidad para continuar.');
      this.reportValidity();
    } else {
      this.setCustomValidity('');
    }
  });


  var phoneInput = form.querySelector('#NumeroVoluntario');
  phoneInput.setAttribute('pattern', '^[6789][0-9]{8}$');
  phoneInput.addEventListener('input', function () {
    if (!this.value.match(/^[6789][0-9]{8}$/)) {
      this.setCustomValidity('Por favor, introduce un número de teléfono válido.');
    } else {
      this.setCustomValidity('');
    }
  });

  // Se valida la forma en la presentación
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  });
}
