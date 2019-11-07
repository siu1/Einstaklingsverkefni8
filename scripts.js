const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    alert("hallo");
    document.body.item.style.textDecoration='line-through';
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const li = document.createElement("li");
    li.setAttribute("class", "item");

    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "item-_checkbox");

    const span = document.createElement("span");
    span.setAttribute("class", "item__text");

    const button = document.createElement("button");
    button.setAttribute("class", "item__button");
  }

  return {
    init: init
  }
})();
