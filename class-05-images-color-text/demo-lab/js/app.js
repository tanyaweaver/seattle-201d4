function yell(aString) {
  console.log(aString.toUpperCase() + '!!!!');
  var yellEl = document.getElementById('yellEl');
  yellEl.textContent = aString.toUpperCase() + '!!!!';
}
