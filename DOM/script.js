const divas = document.querySelector("div");
console.log(divas);

const divas1 = document.querySelector(".divas1");
const divas2 = document.querySelector("#divas1");
console.log(divas1, divas2);

const byID = document.getElementById("divas1");
const byClass = document.getElementsByClassName("divas1");
console.log(byClass, byID);

const arr = document.querySelectorAll("div");
console.log(arr);

const byTag = document.getElementsByTagName("div");
console.log(byTag);

const child = divas.querySelector("p");
console.log(child);

const child1 = document.querySelector("div").childNodes;
console.log(child1);

const child2 = document.querySelectorAll("div > p");
console.log(child2);

const firstchild = document.querySelector("div > p");
console.log(firstchild, child2[0], child2[1]);
//prideda class
firstchild.setAttribute("class", "pirmasP");
child2[1].className = "antrasP";
//removina class
// child2[1].removeAttribute("class");
// firstchild.removeAttribute("class");
// grazina klases pavadinima
const attr = firstchild.getAttribute("class");
console.log(attr);
// Add class
child2[1].classList.add("MyclassInCSS");
//remove class
child2[1].classList.remove("MyclassInCSS");
// change class
child2[1].classList.replace("antrasP", "myClassInCss");
//stilius
child2[1].style.color = "red";
//veikia rgb,spalva,code
child2[1].style.backgroundColor = "#2549f6";
//sukuria buttona
const myButton = document.createElement("button");
myButton.style.backgroundColor = "green";
console.log(myButton);
// prideda i diva button
divas2.appendChild(myButton);
// iterpimas beforebegin, afterbegin
// divas2.insertAdjacentElement("afterbegin", myButton);
divas2.insertAdjacentElement("afterend", myButton);

//dar iterpimas bet nerekomenduojamas
divas2.innerHTML += "<span> cia yra span </span>";
//prideti teksta
// myButton.innerText = "click";
// myButton.textContent = "click";
myButton.innerHTML = "click";

const span = document.querySelector("span");
span.remove();

myButton.addEventListener(
  "click",
  () => {
    if (myButton.style.backgroundColor === "red") {
      myButton.style.backgroundColor = "blue";
    } else {
      myButton.style.backgroundColor = "red";
    }
  },
  { once: true }
);
// myButton.removeEventListener("click", () => {
//   console.log("Event listener removed");
// });

const myButton1 = document.createElement("button");
myButton1.innerText = "click1";
divas2.appendChild(myButton1);
const myButton2 = document.createElement("button");
myButton2.innerText = "click2";
divas2.appendChild(myButton2);
const myButton3 = document.createElement("button");
myButton3.innerText = "click3";
divas2.appendChild(myButton3);

const buttonsGroup = document.querySelectorAll("button");
console.log(buttonsGroup);

buttonsGroup.forEach((el, ind) =>
  el.addEventListener("click", () => {
    console.log(`you clicked button ${el.innerText}`);
  })
);

// event.value;
// event.target;

const forma = document.querySelector("form");
const inputas = document.querySelector("input");
const submitas = document.querySelector("form > button");
console.log(forma, inputas, submitas);

const array = [];
let counter = 0;
submitas.addEventListener("click", (event) => {
  //leidzia isdisplayint nerefreshinus page
  event.preventDefault();
  //LS sumetimas zmoniu

  counter++;
  const inputvalue = inputas.value;
  console.log(inputvalue);

  const persons = {
    id: counter,
    name: inputvalue,
  };

  array.push(persons);
  console.log(array);
  localStorage.setItem("zmones", JSON.stringify(array));

  //   console.log(inputvalue);
  //palieka tuscia search bar
  //   inputas.value = "";
  forma.reset();
});

submitas.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
});

const editInput = document.querySelector("#edit");
const editas = document.querySelector("#editbutton");
console.log(editInput, editas);

editas.addEventListener("click", (e) => {
  e.preventDefault();

  const editable = parseInt(editInput.value);
  console.log(editable);

  const fromLS = JSON.parse(localStorage.getItem("zmones"));
  console.log(fromLS);

  const founded = fromLS.findIndex((el) => el.id === editable);
  console.log(founded);
});
