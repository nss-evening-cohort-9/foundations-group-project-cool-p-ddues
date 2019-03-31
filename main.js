
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const beers = [{
    beerName: 'King Penguin',
    beerImgURL: './img/beer1.png',
    beerId: 'p1',
    beerPrice: 2.00,
    beerType: 'Amber Lager',
    beerFlavor: ['full', 'bready', 'biscuity', 'malt', ' and has a crisp finish'],
    isAvailable: 'Available',
  },
  {
    beerName: 'Emperor Penguin',
    beerImgURL: './img/beer2.png',
    beerId: 'p2',
    beerPrice: 3.00,
    beerType: 'IPA',
    beerFlavor: ['bold', 'herbal', 'citric', ' and hoppy'],
    isAvailable: 'Available',
  },
  {
    beerName: 'Little Penguin',
    beerImgURL: './img/beer3.png',
    beerId: 'p3',
    beerPrice: 1.50,
    beerType: 'Hefeweizen',
    beerFlavor: ['spicy', 'refreshing', 'floral aroma', ' and has a snappy finish'],
    isAvailable: 'Available',
  },
  {
    beerName: 'Wasted Penguin',
    beerImgURL: './img/beer4.png',
    beerId: 'p4',
    beerPrice: 7.50,
    beerType: 'Stout',
    beerFlavor: ['dark', 'heavy', 'coffee aroma', ' and has a creamy finish'],
    isAvailable: 'Not Available',
  }];

  const beerBuilder = (beersArray) => {
      domString = '';
      beersArray.forEach((beer) => {

        
        domString += `<div class="card" >`;
        domString +=    `<div id='card' class='card-body'>`;
        domString +=        `<img src=${beer.beerImgURL} class="card-img-top beer-img">`;
        domString +=        `<h3 class="card-title">${beer.beerName}</h3>`;
        domString +=        `<h4>${beer.beerType}</h4>`;
        domString +=        `<h5>This beer is ${beer.beerFlavor}</h3>`;
        domString +=        `<h3>${beer.beerPrice}</h3>`;
        domString +=       `<h3>${beer.isAvailable}</h3>`; //add an if loop or something
        // form inputs for bootstrap
        domString +=        `<form class="form-inline">`
        domString +=        `<div class="form-group mb-1">`
        domString +=        `<input type="text" readonly class="form-control-plaintext last-line" id="prompt" value="Quantity:">`
        domString +=        `</div>`
        domString +=        `<div class="form-group mb-2">`
        domString +=        `<input type="numbers" class="form-control last-line mr-4" id="inputNumber" placeholder="0">`
        domString +=        `</div>`
        domString +=        `<button type="submit" class="btn btn-primary mb-2 ml-4">Buy</button>`
        domString +=        `</form>`
        domString +=    `</div>`;
        domString += `</div>`;
          
      });
      printToDom('products', domString);
  };

const navItem = document.getElementsByClassName('nav-item');
const homePage = document.getElementById('home');
const aboutUsPage = document.getElementById('about-us');
const productsPage = document.getElementById('products');
const aboutUsHomeButton = document.getElementById('aboutUs-homeButton');


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
    aboutUsHomeButton.classList.remove('d-none');
    productsPage.classList.remove('d-flex')
    productsPage.classList.add('d-none');
  } else if (navId === 'navToAboutUs') {
    homePage.classList.add('d-none');
    aboutUsPage.classList.remove('d-none');
    aboutUsHomeButton.classList.remove('d-none');
    productsPage.classList.remove('d-flex')
    productsPage.classList.add('d-none');
  } else if (navId === 'aboutUs-homeButton') {
    homePage.classList.add('d-none');
    aboutUsPage.classList.remove('d-none');
    aboutUsHomeButton.classList.remove('d-none');
    productsPage.classList.remove('d-flex')
    productsPage.classList.add('d-none');
  } else if (navId === 'navToProducts') {
    homePage.classList.add('d-none');
    aboutUsPage.classList.add('d-none');
    aboutUsHomeButton.classList.add('d-none');
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

