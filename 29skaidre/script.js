//1.
const pText = document.querySelector("p");
console.log(pText);
pText.innerText = "Labas vakaras";
//2.
const divas = document.querySelector("div");
console.log(divas);
const textDiv = document.createElement("p");
divas.appendChild(textDiv);
textDiv.innerText = "Mažokai vietos sakyčiau";
// 3.a
divas.setAttribute("class", "myClass");
//3.b
divas.setAttribute("id", "myId");
//3.c not sure dėl šito
const img = document.createElement("img");
divas.appendChild(img);
const a = document.createElement("a");
divas.appendChild(a);

//4.
const divas2 = document.createElement("div");
document.body.appendChild(divas2);
console.log(divas2);
divas.insertAdjacentElement("afterend", divas2);
const text1 = document.createElement("p");
divas2.append(text1);
text1.innerText = "Mažokai vietos sakyčiau";
const text2 = document.createElement("p");
divas2.appendChild(text2);
text2.innerText = "Mažokai vietos sakyčiau";
const text3 = document.createElement("p");
divas2.appendChild(text3);
text3.innerText = "Mažokai vietos sakyčiau";
const text4 = document.createElement("p");
divas2.appendChild(text4);
text4.innerText = "Mažokai vietos sakyčiau";

const pGroup = divas2.querySelectorAll("p");

pGroup.forEach(function (el, index) {
  if (index % 2 === 1) {
    el.style.color = "red";
    el.style.backgroundColor = "black";
  } else {
    el.style.color = "white";
    el.style.backgroundColor = "green";
  }
});
//5.
const forma = document.querySelector("form");
const inputas = document.querySelector("input");
const submitas = document.querySelector("form > button");
console.log(forma, inputas, submitas);

const array = [];

submitas.addEventListener("click", (event) => {
  //leidzia isdisplayint nerefreshinus page
  event.preventDefault();

  const inputvalue = inputas.value;
  console.log(inputvalue);
  // varijantas kad lieka page search bare uzrasas
  forma.reset();
  //arba sitas
  alert(inputvalue);
});
const nuke = document.getElementById("nuke1");
console.log(nuke);
const prideti = document.querySelector("div>button");
const isimti = document.querySelector(".antras");
console.log(prideti, isimti);

prideti.addEventListener("click", (event) => {
  event.preventDefault();
  const tekstas1 = document.createElement("button");
  tekstas1.classList.add("Nauji");
  document.body.appendChild(tekstas1);
  tekstas1.innerText = "text";
  const tekstas2 = document.createElement("button");
  tekstas2.classList.add("Nauji");
  document.body.appendChild(tekstas2);
  tekstas2.innerText = "text";
  const tekstas3 = document.createElement("button");
  tekstas3.classList.add("Nauji");
  document.body.appendChild(tekstas3);
  tekstas3.innerText = "text ";
});

isimti.addEventListener("click", (event) => {
  event.preventDefault();
  const naujiMygtukai = document.querySelectorAll(".Nauji");
  naujiMygtukai.forEach((mygtukas) => {
    mygtukas.remove();
  });
});

const click = document.querySelector(".clicker");

let spaudimai = 0;
click.addEventListener("click", () => {
  spaudimai++;
  click.innerText = `paspaudete ${spaudimai}`;
});
