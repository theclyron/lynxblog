function removeSkeleton(id) {
    var imageElement = document.getElementById(id);
    if (imageElement) {
      imageElement.classList.remove("is-skeleton");
    }
  }