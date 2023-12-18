"use strict";
const gallery = document.getElementById("gallery");
const photoArray = [
  "https://images.unsplash.com/photo-1609528027551-f5b4a1958ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1654886611366-72d5bc6be7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1702626590523-4cb590ef47d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1702576663510-5b2d014f2350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1702429506940-020be8ce7054?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1702498260443-376ccfe945d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1702429509087-915031c1e3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1702648234852-3ed37056b919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1702407716789-35208e398063?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
];
for (let i = 0; i < 9; i++) {
  const photoContainer = document.createElement("div");
  gallery.appendChild(photoContainer);
  photoContainer.style.width = "200px";
  photoContainer.style.height = "200px";
  photoContainer.style.margin = "2px";
  photoContainer.style.display = "inline-block";
  photoContainer.style.position = "relative";
}
const galleryArray = document.querySelectorAll("#gallery>div");
console.log(galleryArray);
galleryArray.forEach((el, index) => {
  const photo = document.createElement("img");
  photo.setAttribute("src", photoArray[index]);
  photo.style.width = "200px";
  photo.style.height = "200px";
  el.style.border = "solid 2px white";
  el.append(photo);
  const heart = document.createElement("img");
  heart.setAttribute("class", "heart");
  const masyvas = [];
  el.addEventListener("click", () => {
    if (el.style.border === "5px solid black") {
      el.style.border = "solid 2px white";
      heart.remove();
    } else {
      el.style.border = "solid 5px black";
      heart.setAttribute(
        "src",
        "https://downloadfreesvgicons.com/icons/shape-icons/svg-heart-icon-3/svg-heart-icon-3.svg"
      );
      heart.style.position = "absolute";
      heart.style.height = "25px";
      heart.style.width = "25px";
      heart.style.right = "0";
      el.append(heart);
      el.style.glow = "0px 0px 10px 0px rgba(255,0,0,1)";
    }
  });
});
