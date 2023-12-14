// 1/2  js pagalba sukurti 5 html teksto elementus, i juos irasyti teksta

// function way

// const divOfSpans = document.createElement("div");

// function create5Spans() {
//   for (let i = 0; i < 5; i++) {
//     const span = document.createElement("span");
//     divOfSpans.appendChild(span);
//   }
// }
// create5Spans();
// console.log(divOfSpans);

// manual way

const divOfSpans = document.createElement("div");

const span1 = document.createElement("span");
span1.textContent = "Pirmas span";
divOfSpans.append(span1);
const span2 = document.createElement("span");
span2.textContent = "Antras span";
divOfSpans.append(span2);
const span3 = document.createElement("span");
span3.textContent = "Trecias span";
divOfSpans.append(span3);
// const span4 = document.createElement("span");
// span4.textContent = "Ketvirtas span";
// divOfSpans.append(span4);
// const span5 = document.createElement("span");
// span5.textContent = "Penktas span";
// divOfSpans.append(span5);

document.body.appendChild(divOfSpans);

// 3. Pasizymeti elementus skirtingais metodais ir pakeisti ju stilius: a: su id; b: su class; c: su tag

const spanId = document.getElementById("spanId");

if (span1) {
  span1.style.backgroundColor = "yellow";
}
const spanClass = document.getElementsByClassName("spanClass");
if (span2) {
  span2.style.backgroundColor = "green";
}
const spanTag = document.getElementsByTagName("span");
if (span3) {
  span3.style.backgroundColor = "red";
}

// 4. sukurti 6 div tagus ir juos modifikuoti su js: nustatyti stiliu auksti ir ploti

// vienas
let div = document.createElement("div");
div.innerText = "manual div";
div.classList.add("style");
div.style.backgroundColor = "purple";
div.style.border = "1px solid #000";
div.style.borderRadius = "5px";
document.body.appendChild(div);

// sesi
function create6Divs() {
  for (let i = 0; i < 6; i++) {
    let div = document.createElement("div");
    div.innerText = "Divas nr: " + i;
    div.classList.add("style1");
    div.style.backgroundColor = "lightblue";
    div.style.border = "1px solid #000";
    div.style.borderRadius = "5px";
    document.body.appendChild(div);
  }
}
create6Divs();

// 5. sukurti mygtuka, kuri paspaudus visu siu div fonas pasikeistu i skirtingas spalvas. Kiekvienakart paspaudus mygtukas fona turi pasikeisti i vis kitokia random spalva
// create button + append to body
const button1 = document.createElement("button");
button1.innerText = "change color of divs";
document.body.appendChild(button1);

button1.addEventListener("click", (event) => {
  event.preventDefault();
  // select elements from 6div function
  const randomColorDivs = document.querySelectorAll(".style1");
  // iterate over each div and change its colors
  randomColorDivs.forEach((div) => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = randomColor; // random hexadecimal color code generator
  });
});

// 6. Sukurti 6 p tagus ir jiems irasyti teksta is susikurto zodziu masyvo. Kaskart perkrovus puslapi p tage turi buti random zodis is masyvo
const wordsContainer = document.getElementById("words");
const masyvas = [
  "obuolys",
  "kriause",
  "vynuoges",
  "bananai",
  "mandarinas",
  "apelsimas",
];
const random = (array) => {
  const randIndex = math.floor(Math.random() * array.length);
  console.log(randIndex);
  return array[randIndex];
};

for (let i = 1; i <= masyvas.length; i++) {
  const pElement = document.createElement("p");

  const randomWord = random(masyvas);

  pElement.innerText = randomWord;
  wordsContainer.appendChild(pElement);
}
