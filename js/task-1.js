const galleryList = document.querySelectorAll('gallery');
images.forEach(img => {
  const listItem = document.createElement('li');
  const imgElement = document.createElement('img');
  imgElement.src = img.url;
  imgElement.alt = img.alt;
  listItem.appendChild(imgElement);
  galleryList.appendChild(listItem);
  console.log(galleryList);
});
