let form = document.querySelector("#form");
let list = document.querySelector("#list");
let expence = document.querySelector("input[name=expence]");
let des = document.querySelector("input[name=description]");
let category = document.querySelector("select[name=category]");

form.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  console.log(expence.value, des.value, category.value);
  createElements(expence.value, des.value, category.value);
  createObj(expence.value, des.value, category.value);
}
function createElements(expence, description, category) {
  let inner = `<li class="list">${expence}-${description}-${category} 
    <button class="edit">Edit</button><button class="delete">Delete</button></li>`;
  list.innerHTML = list.innerHTML + inner;
}
function createObj(expence, description, category) {
  let Obj = {
    expence: expence,
    description: description,
    category: category,
  };
  let myObj = JSON.stringify(Obj);
  localStorage.setItem(Obj.description, myObj);
}

list.addEventListener("click", onClick);
function onClick(e) {
  console.log(e.target);
  if (e.target.className === "edit") {
    //console.log("but");
    console.log(e.target.parentElement);
    let index1 = e.target.parentElement.innerText.indexOf("-");
    let temp = e.target.parentElement.innerText.substring(index1 + 1);
    let index2 = temp.indexOf("-");
    //console.log(temp);
    //console.log(index2);
    let expenceValue = e.target.parentElement.innerText.substring(
      index1 + 1,
      index2 + index1 + 1
    );
    //console.log(expenceValue);
    let obj = JSON.parse(localStorage.getItem(expenceValue));
    expence.value = obj.expence;
    des.value = obj.description;
    category.value = obj.category;
    e.target.parentElement.remove();
  }
  if (e.target.className === "delete") {
    //console.log("but");
    console.log(e.target.parentElement);
    let index1 = e.target.parentElement.innerText.indexOf("-");
    let temp = e.target.parentElement.innerText.substring(index1 + 1);
    let index2 = temp.indexOf("-");
    //console.log(temp);
    //console.log(index2);
    let expenceValue = e.target.parentElement.innerText.substring(
      index1 + 1,
      index2 + index1 + 1
    );

    e.target.parentElement.remove();
    localStorage.removeItem(expenceValue);
  }
}
document.addEventListener("DOMContentLoaded", domloaded);
function domloaded() {
  var key = Object.keys(localStorage);
  key.forEach((key) => {
    let text = JSON.parse(localStorage.getItem(key));
    createElements(text.expence, text.description, text.category);
    //const li = document.createElement("li");
    //createElementNode(text.name, text.email);
    // Add text node with input values
  });
}
