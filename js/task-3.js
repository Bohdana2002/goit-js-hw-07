const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};
refs.nameInput.addEventListener('input', () => {
  const inputText = refs.nameInput.value.trim();
  if (inputText === '') {
    refs.nameOutput.textContent = 'Anonymous';
  } else {
    refs.nameOutput.textContent = refs.nameInput.value;
  }
});
