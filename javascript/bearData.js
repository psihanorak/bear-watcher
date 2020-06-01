import river from './javascript/river.js';

const bears = [];

const bearSize = () => {
  let min = 5;
  let max = 10;
  const size = Math.floor(Math.random() * (10 - 5) + 5);
  return size;
}

const bearWeight = () => {
  let min = 400;
  let max = 1300;
  const weight = Math.floor(Math.random() * (1300 - 400) + 400);
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

export default { bearSize, bearWeight, createNewBear };
