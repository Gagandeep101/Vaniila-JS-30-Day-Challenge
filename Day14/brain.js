const addItems = document.querySelector('.add-items');
const items = [];


function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  this.reset();
}

addItems.addEventListener('submit', addItem);