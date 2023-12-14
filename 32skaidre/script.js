const maincont = document.getElementsByClassName("container");
const nuotraukos = [
  "https://image.shutterstock.com/image-photo/wadi-disah-known-qaraqir-15-260nw-1949691562.jpg",
  "https://image.shutterstock.com/image-photo/lower-antelope-canyon-page-arizona-260nw-597846689.jpg",
  "https://image.shutterstock.com/image-photo/waves-water-river-sea-meet-260nw-1529923664.jpg",
  "https://image.shutterstock.com/image-photo/winter-christmas-landscape-pink-tones-260nw-644773606.jpg",
  "https://image.shutterstock.com/image-photo/perfect-view-famous-powerful-gljufrabui-260nw-646807012.jpg",
];
const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(randomIndex);
  return array(randomIndex)
};
for(let i=1;i<=nuotraukos.length;i++){
   const imgEL= document.createElement("img")
   imgEL.style.width="100px"
   imgEL.style.height="100px"
}