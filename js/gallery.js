function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  let caption = document.querySelector("#gallery-info");
  let captionTitle = caption.querySelector(".title");
  let captionDescription = caption.querySelector(".description");
  // either notation style above works for finding child selectors. Carrots find direct descendents.

  thumbnails.forEach(function(thumbnail) {
    // Preload the large images;
    let largeVersion = new Image();
    let newImageSrc = thumbnail.dataset.largeVersion;
    largeVersion.src = newImageSrc;
      

    thumbnail.addEventListener("click", function () {
      // set clickced image as main image.
      mainImage.setAttribute("src", newImageSrc);
      captionTitle.innerHTML = thumbnail.dataset.title;
      captionDescription.innerHTML = thumbnail.dataset.description;
      mainImage.setAttribute("alt", thumbnail.getAttribute("alt"));
      let currentThumbnail = document.querySelector(".current");
      currentThumbnail.classList.remove("current");
      thumbnail.parentNode.classList.add("current");
    });
  });
}