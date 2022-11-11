let form = document.querySelector("#form");

let list = document.querySelector("#list");

let expence = document.querySelector("input[name=expence]");

let des = document.querySelector("input[name=description]");

let category = document.querySelector("select[name=category]");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  console.log(expence.value, des.value, category.value);

  createObj(expence.value, des.value, category.value);
  expence.value = "";
  des.value = "";
  category.value = "select";
}

function createElements(expence, description, category, id) {
  let inner = `<li id="${id}">${expence}-${description}-${category} 

    <button class="edit" onclick=onEdit('${id}','${expence}','${description}','${category}') )>Edit</button><button class="delete" onclick=onDelete('${id}')>Delete</button></li>`;

  list.innerHTML = list.innerHTML + inner;
}

function createObj(expence, description, category) {
  let Obj = {
    expence: expence,

    description: description,

    category: category,
  };
  axios
    .post(
      `https://crudcrud.com/api/29957ed71b804dfc8dbdb99f85587249/expencedata`,
      Obj
    )
    .then((res) => {
      createElements(
        res.data.expence,
        res.data.description,
        res.data.category,
        res.data._id
      );
    })
    .catch((err) => {
      document.body.innerHTML = `<h3>${err}</h3>`;
    });
}
function onDelete(id) {
  console.log("hi");
  axios
    .delete(
      `https://crudcrud.com/api/29957ed71b804dfc8dbdb99f85587249/expencedata/${id}`
    )
    .then((res) => {
      console.log(res);

      removeUser(id);
    })
    .catch((err) => {
      document.body.innerHTML = `<h3>${err}</h3>`;
    });
}
function removeUser(id) {
  const deletedElemen = document.getElementById(id);

  console.log(deletedElemen);
  deletedElemen.remove();
}
//list.addEventListener("click", onClick);
function onEdit(ele_id, exp, description, cat) {
  expence.value = exp;
  des.value = description;
  category.value = cat;
  onDelete(ele_id);
}

document.addEventListener("DOMContentLoaded", domloaded);

function domloaded() {
  axios
    .get(
      `https://crudcrud.com/api/29957ed71b804dfc8dbdb99f85587249/expencedata`
    )
    .then((res) => {
      res.data.forEach((key) => {
        createElements(key.expence, key.description, key.category, key._id);
      });
    })
    .catch((err) => {
      document.body.innerHTML = `<h3>${err}</h3>`;
    });
}
