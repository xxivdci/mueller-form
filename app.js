function createInputField(id, name, labelText, placeholderText, isRequired, fieldType, options, mask) {
  const div = document.createElement('div');
  div.className = 'input-container';

  const label = document.createElement('label'); // Label creation
  label.setAttribute('for', id); // ID application for div
  label.className = 'input-label';
  label.textContent = labelText;

  let input;
  // Check if fieldTYper is text
  if (fieldType === 'text') {
    input = document.createElement('input');
    input.type = 'text';
    input.className = 'input-field';

    // Mask application if fieldType is text
    let im = new Inputmask(mask,{showMaskOnHover: false, showMaskOnFocus: false});
    im.mask(input);
  }
  // Check if fieldType is dropdown
  else if (fieldType === 'dropdown') {
    const container = document.createElement('div');
    container.classList.add('custom-select');
    input = document.createElement('select');
    input.className = 'input-field select';
    
    // Create options for dropdown and add a dummy option as placeholder value
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Selecione uma opção';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    defaultOption.hidden = true;
    input.appendChild(defaultOption);

    // Add real options to dropdown
    options.forEach(option => {
      const dropdownOption = document.createElement('option');
      dropdownOption.value = option;
      dropdownOption.textContent = option;
      input.appendChild(dropdownOption);
    });
    container.appendChild(input);
  }

  // Add id, name, placeholder to input
  input.id = id;
  input.name = name;
  input.placeholder = placeholderText;

  // Add required if isRequired is true
  if (isRequired) {
    input.required = true;
  }

  // Event listeners for interface reaction to focus
  input.addEventListener('focus', function() {
    label.style.color = '#7A7A7A';
  });
  input.addEventListener('blur', function() {
    label.style.color = '#BDBDBD';
  });

  // Add label and input to div
  div.appendChild(label);
  div.appendChild(input);

  // Add div to form
  const form = document.querySelector('.smy-form');
  form.appendChild(div);
}

// Call createInputField function and provide values for each parameter
document.addEventListener('DOMContentLoaded', function() {
  createInputField('name', 'name', 'Nome', 'John Doe', true, 'text','','');
  createInputField('email', 'email', 'Email', 'john.doe@example.com', true, 'text','','email');
  createInputField('tel-national', 'tel-national', 'Celular', '(48) 99999-9999', true, 'text','','(99) 99999-9999');
  createInputField('postal_code', 'postal_code', 'CEP', '22-021 001', true, 'text','','99 999-999');
  createInputField('street-address', 'street-address', 'Endereço', 'Avenida Atlântica', true, 'text','','');
  createInputField('street_number', 'street_number', 'Número', '123', true, 'text','','numeric');
  createInputField('bairro', 'bairro', 'Bairro', 'Copacabana', true, 'text','','');
  createInputField('city', 'city', 'Cidade', 'Rio de Janeiro', true, 'text','','');
  createInputField('state', 'state', 'Estado', 'Rio de Janeiro', true, 'text');
  createInputField('complemento', 'complemento', 'Complemento (opcional)', 'Apto 79', false, 'text','','');
  createInputField('need', 'need', 'Assunto', 'Selecione uma opção', true, 'dropdown', [
    'Informações sobre produtos',
    'Reparo no produto',
    'Informações sobre compras na loja virtual'
  ],);
});

// function adjustInputWidth() {
  //   const inputs = document.querySelectorAll('.input-field');

  //   inputs.forEach(input => {
  //     const tempEl = document.createElement('span');
  //     tempEl.style.font = '16px Inter, sans-serif';
  //     tempEl.style.visibility = 'hidden';
  //     tempEl.style.whiteSpace = 'nowrap';
  //     tempEl.innerText = input.value || input.placeholder;

  //     document.body.appendChild(tempEl);

  //     const inputStyle = getComputedStyle(input);
  //     const parentStyle = getComputedStyle(input.parentElement);

  //     const totalPadding = parseFloat(inputStyle.paddingLeft) + parseFloat(inputStyle.paddingRight);
  //     const totalBorder = parseFloat(inputStyle.borderLeftWidth) + parseFloat(inputStyle.borderRightWidth);
  //     const parentPadding = parseFloat(parentStyle.paddingLeft) + parseFloat(parentStyle.paddingRight);
  //     const parentMargin = parseFloat(parentStyle.marginLeft) + parseFloat(parentStyle.marginRight);

  //     input.style.width = `${tempEl.offsetWidth + totalPadding + totalBorder + parentPadding + parentMargin + 10}px`;

  //     document.body.removeChild(tempEl);
  //   });
  // }

  // // Call the function initially
  // adjustInputWidth();

  // // Call the function whenever the window is resized
  // window.addEventListener('resize', adjustInputWidth);

  // // Call the function whenever an input field's value changes
  // document.querySelectorAll('.input-field').forEach(input => {
  //   input.addEventListener('input', adjustInputWidth);
  // });


