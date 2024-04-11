function createInputField(id, name, labelText, placeholderText, isRequired) {
    // Create label
    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.className = 'input-label';
    label.textContent = labelText;
  
    // Add red asterisk to label if field is required
    if (isRequired) {
      var asterisk = document.createElement('span');
      asterisk.textContent = ' *';
      asterisk.style.color = 'red';
      label.appendChild(asterisk);
    }
  
    // Create input field
    var input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.name = name;
    input.className = 'input-field';
    input.placeholder = placeholderText;
  
    // Add required attribute if field is required
    if (isRequired) {
      input.required = true;
    }
  
    // Add focus and blur event listeners to input field
    input.onfocus = function() {
      label.style.color = '#7A7A7A';
    }
    input.onblur = function() {
      label.style.color = '#BDBDBD';
    }
  
    // Append label and input field to form
    var form = document.querySelector('.smy-form');
    form.appendChild(label);
    form.appendChild(input);
  }
  
  // Use the function to create input fields
  window.onload = function() {
    createInputField('name', 'name', 'Name', 'John Doe', true);
    createInputField('email', 'email', 'Email', 'john.doe@example.com', false);
    createInputField('street-address', 'street-address', 'Street Address', '', true);
    createInputField('postal_code', 'postal_code', 'Postal Code', '', true);
    createInputField('city', 'city', 'City', '', true);
    createInputField('bairro', 'bairro', 'Bairro', '', true);
    createInputField('address', 'address', 'Address', '', true);
    createInputField('street_number', 'street_number', 'Street Number', '', true);
    createInputField('complemento', 'complemento', 'Complemento', '', true);
    createInputField('tel-national', 'tel-national', 'Cellphone', '', true);
    createInputField('need', 'need', 'Need', '', true);
  
    // Create submit button
    var button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Submit';
    button.className = 'submit-button';
  
    // Append button to form
    var form = document.querySelector('.smy-form');
    form.appendChild(button);
  }