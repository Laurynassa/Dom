"use strict";
//susikuri elementus
const form = document.createElement("form");
console.log(form);
const div1 = document.createElement("div");
const inputId = document.createElement("input");
const label1 = document.createElement("label");
label1.innerText = "Product Code : ";
const div2 = document.createElement("div");
const inputName = document.createElement("input");
const label2 = document.createElement("label");
label2.innerText = "Product Name : ";
const div3 = document.createElement("div");
const inputQuantity = document.createElement("input");
const label3 = document.createElement("label");
label3.innerText = "Product Quantity : ";
const buttonInsert = document.createElement("button");
buttonInsert.setAttribute("type", "submit");
buttonInsert.innerText = "Insert New";
const buttonEdit = document.createElement("button");
buttonEdit.setAttribute("type", "submit");
buttonEdit.innerText = "Edit Item";
const buttonRemove = document.createElement("button");
buttonRemove.setAttribute("type", "submit");
buttonRemove.innerText = "Edit Item";
//su grupavimas
document.body.append(form);
form.append(div1);
div1.append(label1, inputId);
form.append(div2);
div2.append(label2, inputName);
form.append(div3);
div3.append(label3, inputQuantity);
form.append(buttonInsert, buttonEdit, buttonRemove);
//LS kurimas
// const prekes = []
const LsCheck = localStorage.getItem("items");
const itemsLs = LsCheck === null ? [] : JSON.parse(LsCheck);
console.log(itemsLs);

const findItemById = (id) => {
  return itemsLs.find((element) => element.id === id);
};
console.log(findItemById(1));

buttonInsert.addEventListener("click", () => {
  const itemId = inputId.value;
  const itemName = inputName.value;
  const itemQuantity = inputQuantity.value;

  if (itemId && itemName && itemQuantity) {
    const itemExists = findItemById(itemId);

    if (!itemExists) {
      const newQuery = {
        id: itemId,
        name: itemName,
        quantity: itemQuantity,
      };

      itemsLs.push(newQuery);
      localStorage.setItem("items", JSON.stringify(itemsLs)); // issaugom updatinta array LS
      console.log(itemsLs);
      alert("item added to LS successfuly");

      // isvalyti input laukelius
      inputId = "";
      inputName = "";
      inputQuantity = "";
    } else {
      alert("item with same id exists!");
    }
  } else {
    alert("fill in all fields");
  }
});
