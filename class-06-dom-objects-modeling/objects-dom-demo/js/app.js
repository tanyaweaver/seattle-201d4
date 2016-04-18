var duck = {
  material: 'rubber',
  color: 'yellow',
  squeaks: false,
  favoriteFoods: ['ducknoms', 'peanut butter', 'children'],
  says: function() {
    console.log('QUACK!!!');
    alert('QUACK!!!');
  }
};

var paragraphEl = document.createElement('p');
paragraphEl.textContent = duck.favoriteFoods;
document.body.appendChild(paragraphEl);

var h1El = document.createElement('h1');
h1El.textContent = duck.color;
document.body.appendChild(h1El);

// Render the array as a list?
// Look in the Elements tab!
// Look at that awful dropdown menu?
