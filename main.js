const navItem = document.getElementsByClassName('nav-item');
const homePage = document.getElementById('home');
const aboutUsPage = document.getElementById('about-us');
const productsPage = document.getElementById('products');

const pageLoad = () => {
  aboutUsPage.classList.add('d-none');
  productsPage.classList.add('d-none');
};

const handleNavClick = (e) => {
  const navId = e.target.id;
  console.log(navId);
  if (navId === 'navToHome') {
    homePage.classList.remove('d-none');
    aboutUsPage.classList.add('d-none');
    productsPage.classList.add('d-none');
  } else if (navId === 'navToAboutUs') {
    homePage.classList.add('d-none');
    aboutUsPage.classList.remove('d-none');
    productsPage.classList.add('d-none');
  } else if (navId === 'navToProducts') {
    homePage.classList.add('d-none');
    aboutUsPage.classList.add('d-none');
    productsPage.classList.remove('d-none');
  };
};

const eventListeners = () => {
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', handleNavClick);
  }
};

const init = () => {
  pageLoad();
  eventListeners();
}

init();