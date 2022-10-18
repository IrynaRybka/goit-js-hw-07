import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);


const containerGallery = document.querySelector(".gallery");
const cardsMarkup = createGalleryMarkup(galleryItems);

containerGallery.insertAdjacentHTML("beforeend", cardsMarkup);
containerGallery.addEventListener("click", onClickSelectImg);



function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}"/>
         </a>`;
  }).join('');
}

function onClickSelectImg(event) {
  if (event.target.nodeName !== "IMG") {
      return;
    }
    event.preventDefault();
} 

new SimpleLightbox('.gallery__item', {
  overlay: true,
  overlayOpacity: 0.5,
  captionsData: "alt",
  captionDelay: 250,

});

// const ulGallery = document.querySelector(".gallery");
// console.log(ulGallery)
// const cardsMarkup = createGalleryMarkup(galleryItems);

// ulGallery.insertAdjacentHTML("beforeend", cardsMarkup);
// ulGallery.addEventListener("click", onClickSelectImg);

// function createGalleryMarkup(galleryItems) {
//   return galleryItems.map(({ preview, original, description }) => {
//     return `<a class="gallery__item" href="${original}">
//     <img class="gallery__image" src="${preview}" alt="${description}"/>
//     </a>`;
//   })
//   .join('');
// };

// function onClickSelectImg(event) {
//   console.log(event.target)
//   if (event.target.nodeName !== "IMG") {
//       return;
//     }
//     event.preventDefault();

//     const gallery = new SimpleLightbox('.gallery');
// gallery.on('show.simplelightbox', function (e) {
// 	// console.log(e);
// });
//   //   const largeImgSrc = event.target;
//   //   console.log(largeImgSrc);

//     // const gallery = ('.gallery a').simpleLightbox();
//     // gallery.next()
//     // closeModalEsc();
//     // window.addEventListener('keydown', onEscKeyPress);
//  }