const navItem = document.getElementsByClassName('nav-item');
const homePage = document.getElementById('home');
const aboutUsPage = document.getElementById('about-us');
const productsPage = document.getElementById('products');

const beers = [{
    beerName: 'King Penguin',
    beerImgURL: './img/king-penguin-bottle.png',
    beerId: 'p1',
    beerPrice: 2.00,
    beerType: 'Amber Lager',
    beerFlavor: ['full', ' bready', ' biscuity', ' malt', ' crisp finish'],
    isAvailable: 'Available',
  },
  {
    beerName: 'Emperor Penguin',
    beerImgURL: './img/emperor-penguin-bottle.png',
    beerId: 'p2',
    beerPrice: 3.00,
    beerType: 'IPA',
    beerFlavor: ['bold', ' herbal', ' citric', ' hoppy'],
    isAvailable: 'Available',
  },
  {
    beerName: 'Little Penguin',
    beerImgURL: './img/little-penguin-bottle.png',
    beerId: 'p3',
    beerPrice: 1.50,
    beerType: 'Hefeweizen',
    beerFlavor: ['spicy', ' refreshing', ' floral aroma', ' snappy finish'],
    isAvailable: 'Available',
  },
  {
    beerName: 'Wasted Penguin',
    beerImgURL: './img/wasted-penguin-bottle.png',
    beerId: 'p4',
    beerPrice: 7.50,
    beerType: 'Stout',
    beerFlavor: ['dark', ' heavy', ' coffee aroma', ' creamy finish'],
    isAvailable: 'Not Available',
  }];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
  
const beerBuilder = (beersArray) => {
    domString = '';
    beersArray.forEach((beer) => {      
      domString += `<div class="card">`;
      domString +=   `<div id='card' class="card-body p-0 m-0">`;
      domString +=     `<img src=${beer.beerImgURL} class="card-img-top beer-img">`;
      domString +=     `<div class="card-text p-2 border-top d-flex flex-row flex-wrap">`
      domString +=       `<h4 class="card-title my-0 col-9 m-0 p-0">${beer.beerName}</h4>`;
      domString +=       `<p class="text-right align-self-end text-muted-2 col-3 m-0 p-0">$${beer.beerPrice.toFixed(2)}</p>`;
      domString +=       `<p class="col-9 m-0 p-0">${beer.beerType}</p>`;
      domString +=       `<p class="text-muted-2 m-0 flavor-size col-7"><small>${beer.beerFlavor}</small></p>`;
      domString +=       `<p class="text-right col-5 p-0 m-0 align-self-end">${beer.isAvailable}</p>`; //add an if loop or something
      // form inputs for bootstrap
      domString +=       `<form>`
      domString +=         `<div class="form-row row mt-1 justify-content-between align-items-center">`
      domString +=           `<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm px-0 mx-0" id="prompt">Quantity:</label>`
      domString +=           `<div class="col-4 px-0 mx-2">`
      domString +=             `<input type="numbers" class="form-control form-control-sm" id="inputNumber" placeholder="0">`
      domString +=           `</div>`
      domString +=             `<button type="submit" class="btn btn-primary col-4 px-3 mx-0">Buy</button>`
      domString +=         `</div>`
      domString +=       `</form>`
      domString +=     `</div>`
      domString +=   `</div>`;
      domString += `</div>`;
    });
    printToDom('products', domString);
};

const pageLoad = () => {
  aboutUsPage.classList.add('d-none');
  productsPage.classList.add('d-none');
  productsPage.classList.remove('d-flex');
};

const handleNavClick = (e) => {
  const navId = e.target.id;
  console.log(navId);
  if (navId === 'navToHome') {
    homePage.classList.remove('d-none');
    aboutUsPage.classList.add('d-none');
    productsPage.classList.remove('d-flex')
    productsPage.classList.add('d-none');
  } else if (navId === 'navToAboutUs') {
    homePage.classList.add('d-none');
    aboutUsPage.classList.remove('d-none');
    productsPage.classList.remove('d-flex')
    productsPage.classList.add('d-none');
  } else if (navId === 'navToProducts') {
    homePage.classList.add('d-none');
    aboutUsPage.classList.add('d-none');
    productsPage.classList.remove('d-none');
    productsPage.classList.add('d-flex');
  };
};

const eventListeners = () => {
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', handleNavClick);
  }
};

const init = () => {
  pageLoad();
  beerBuilder(beers);
  eventListeners();
};

init();

