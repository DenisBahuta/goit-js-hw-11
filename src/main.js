import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../src/img/octagon.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formSearch = document.querySelector('.form');
const imageList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
// const preload = document.querySelector('.preload');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

formSearch.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.input.value;

  imageList.innerHTML = '';

  if (!searchQuery.trim()) {
    iziToast.show({
      title: '❕',
      theme: 'light',
      message: 'Please, fill in the search field',
      messageSize: '20px',
      messageColor: '#808080',
      backgroundColor: '#e7fc44',
      position: 'topLeft',
      timeout: 3000,
    });
    return;
  }
  // preload.classList.remove('is-hidden');

  showLoader();

  const searchParams = new URLSearchParams({
    key: '41838546-9d950a50e841202e6c289d2dd',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 9,
  });

  fetchImages(searchParams)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          iconUrl: icon,
          theme: 'dark',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageSize: '16px',
          messageColor: 'white',
          backgroundColor: '#EF4040',
          position: 'topRight',
          timeout: 5000,
        });
      }
      imageList.innerHTML = createMarkup(data.hits);
      gallery.refresh();
    })
    .catch(error => {
      console.error(error);
      handleError();
    })
    .finally(() => {
      hideLoader();
      event.currentTarget.reset();
    });
}

function fetchImages(searchParams) {
  const BASE_URL = 'https://pixabay.com/api';

  return fetch(`${BASE_URL}/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
          </a>
          <div class="container-additional-info">
            <div class="container-descr-inner"><p class="description">Likes</p><span class="description-value">${likes}</span></div>
            <div class="container-descr-inner"><p class="description">Views</p><span class="description-value">${views}</span></div>
            <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${comments}</span></div>
            <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${downloads}</span></div>
          </div>
        </li>`
    )
    .join('');
}

function handleError() {
  imageList.innerHTML = '';
  iziToast.show({
    iconUrl: icon,
    theme: 'dark',
    message: 'Sorry, there is a problem with connection with the server.',
    messageSize: '16px',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'center',
    timeout: 5000,
  });
}

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}
