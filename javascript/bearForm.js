import bearData from './javascript/bearData.js';

const submitBear = (e) => {
  if(document.getElementById('bear-name').value === '' && document.getElementById('bear-image').value === '') {
    alert('Please enter a name & image to proceed.')
  } else {
    bearData.createNewBear();
    document.getElementById('bear-name').value = '';
    document.getElementById('bear-image').value = '';
  }
};

export default { submitBear };
