const inputs = document.querySelectorAll('input');

inputs[0].focus();

inputs.forEach((code, index) => {
  code.addEventListener('keyup', (e) => {
    if (inputs[index].value) {
      inputs[index].value = e.key;
    }
    if(e.key >= 0 && e.key <= 9 && index < inputs.length - 1) {
      inputs[index].value = e.key;
      setTimeout(inputs[index + 1].focus(), 50);
    } else if (e.key == 'Backspace' && index > 0) {
      setTimeout(inputs[index - 1].focus(), 50);
    } else if (index == inputs.length - 1) {
      setTimeout(inputs[index].blur(), 50);
    }
  })
})