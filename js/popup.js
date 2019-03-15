var searchBtn = document.querySelector('.search-button');
var popup = document.querySelector('.modal-search');
var form = popup.querySelector('form');
var arrival = popup.querySelector('[name=arrival]');
var departure = popup.querySelector('[name=departure]');
var adults = popup.querySelector('[name=adults]');
var children = popup.querySelector('[name=children]');

window.onload = function() {
  popup.classList.toggle('open');
};

var isStorageSupport = true;
var arrivalStore = '';
var departureStore = '';
var adultsStore = '';
var childrenStore = '';

try {
  arrivalStore = localStorage.getItem('arrival');
  departureStore = localStorage.getItem('departure');
  adultsStore = localStorage.getItem('adults');
  childrenStore = localStorage.getItem('children');
} catch (err) {
  isStorageSupport = false;
}

searchBtn.addEventListener('click', function(ev) {
  ev.preventDefault();
  popup.classList.toggle('open');

  if (arrivalStore) {
    arrival.value = arrivalStore;
  }

  if (departureStore) {
    departure.value = departureStore;
  }

  if (adultsStore) {
    adults.value = adultsStore;
  }

  if (childrenStore) {
    children.value = childrenStore;
  }
});

form.addEventListener('submit', function(ev) {
  if (!arrival.value || !departure.value || !adults.value) {
    ev.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('arrival', arrival.value);
      localStorage.setItem('departure', departure.value);
      localStorage.setItem('adults', adults.value);
      localStorage.setItem('children', children.value);
    }
  }
});

window.addEventListener('keydown', function(ev) {
  if (ev.keyCode === 27) {
    if (popup.classList.contains('open')) {
      ev.preventDefault();
      popup.classList.remove('open');
    }
  }
});
