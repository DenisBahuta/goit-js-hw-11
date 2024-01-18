import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import cssLoader from 'css-loader';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let page = 1;
let searchQuery = '';

const lightbox = new SimpleLightbox('.gallery a');

function searchImages(query) {
  const BASE_URL = 'https://pixabay.com/api';
  const API_KEY = '41838546-9d950a50e841202e6c289d2dd';

  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`;

  loader.classList.add('show');

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const images = data.hits;

      if (images.length === 0) {
        iziToast.show({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          theme: 'dark',
          position: 'topCenter',
          timeout: 3000,
        });
      } else {
        if (page === 1) {
          gallery.innerHTML = '';
        }

        images.forEach(function (image) {
          const card = `<div class="card">
              <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}">
              </a>
              <div class="card-info">
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
              </div>
            </div>`;
          gallery.insertAdjacentHTML('beforeend', card);
        });

        lightbox.refresh();
      }

      loader.classList.remove('show');
    })
    .catch(function (error) {
      console.log(error);
    });
}
