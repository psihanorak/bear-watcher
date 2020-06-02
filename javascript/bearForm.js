import river from '/javascript/display/river.js';

const bears = [];

const bearSize = () => {
  let min = 7;
  let max = 10;
  const size = Math.floor(Math.random() * (10 - 7) + 7);
  return size;
}

const bearWeight = () => {
  let min = 900;
  let max = 1300;
  const weight = Math.floor(Math.random() * (1300 - 900) + 900);
  return weight;
}

const createNewBear = () => {
  const name = document.getElementById('bear-name').value;
  const image = document.getElementById('bear-image').value;

  const newBear = {
    image: image,
    name: name,
    size: bearSize(),
    weight: bearWeight(),
    id: `${Date.now()}`
  };

  bears.unshift(newBear);
  river.createBearCard(bears);
};

const init = () => {
  river.clickEvent();
}

init();

export default { createNewBear };
