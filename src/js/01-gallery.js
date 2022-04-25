// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryNav = document.querySelector(".gallery");

const  createGallery = galleryItems => {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>`;
    })
    .join("");
}

const imageGallery = createGallery(galleryItems);
galleryNav.innerHTML = imageGallery;

let animationAlt = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
