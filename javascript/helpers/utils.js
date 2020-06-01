const printToDom = (selector, print) => {
  document.querySelector(selector).innerHTML = print;
};

export default { printToDom };
