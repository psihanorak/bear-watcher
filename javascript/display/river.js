import utils from '/javascript/helpers/utils.js';
import bearForm from '/javascript/bearForm.js';

const submitBear = (e) => {
  if(document.getElementById('bear-name').value === '' && document.getElementById('bear-image').value === '') {
    alert('Please enter a name & image to proceed.')
  } else {
    bearForm.createNewBear();
    document.getElementById('bear-name').value = '';
    document.getElementById('bear-image').value = '';
  }
};

const createBearCard = (bearCollection) => {
  let domString = '';

  for (let i = 0; i < bearCollection.length; i++) {
    const bear = bearCollection[i]
    domString += `<div class="card" style="width: 18rem; margin: 0px 30px 40px;" >
                    <img class="bear-image" src="${bear.image}" alt="Card image cap">
                    <div class="card-body">
                      <h5 id="${bear.id}" class="card-title">${bear.name}</h5>
                      <p class="card-text">Size: ${bear.size} ft</p>
                      <p class="card-text">Weight: ${bear.weight} lbs</p>
                      <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                  </div>`;
  }

  utils.printToDom ('#container-bears', domString);
}

const clickEvent = () => {
  document.getElementById('submit').addEventListener('click', submitBear);
}

export default { clickEvent, createBearCard };
