let productLS = JSON.parse(localStorage.getItem("Product"));


let affichage = ("");
for (let item of productLS){
    let img = item.picproduct
    let nameproduct = item.nomProduit
    let itemcolor = item.couleurProduit
    let quantiteproduct = item.nombreproduit
    let idProduit = item.idProduit
    let urlApiProduct = `http://localhost:3000/api/products/${idProduit}`;
    let price = ('')
    
    fetch(urlApiProduct).then((response) =>
response.json().then((data) => {
  price = data.price

    affichage += 
    `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    <div class="cart__item__img">
    <img src="${img}" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${nameproduct}</h2>
        <p>${itemcolor}</p>
        <p>${price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" data-id="${idProduit}" data-couleur="${itemcolor}" name="itemQuantity" min="1" max="100" value="${quantiteproduct}">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem"data-id="${idProduit}" data-couleur="${itemcolor}">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`;

document.querySelector("#cart__items") .innerHTML = affichage;

let panier = JSON.parse(localStorage.getItem("Product"));
let totalArticle = 0;
let prixCombiné = 0;
let totalPrix = 0;
for (let article of panier) {
  totalArticle += JSON.parse(article.nombreproduit);
  prixCombiné = article.nombreproduit * price;
  totalPrix += prixCombiné;
}
document.getElementById("totalQuantity").textContent = totalArticle;
document.getElementById("totalPrice").textContent = totalPrix;
  

// total Product $$$$$$$
let nbProduits = document.querySelectorAll("input.itemQuantity")  
for (let nbProduit of nbProduits)
nbProduit.addEventListener("change", recupProd)

function recupProd(){

    let panier = JSON.parse(localStorage.getItem("Product"));
    let totalArticle = 0;
    let prixCombiné = 0;
    let totalPrix = 0;
    for (let article of panier) {
      totalArticle += JSON.parse(article.nombreproduit);
      prixCombiné = article.nombreproduit * price;
      totalPrix += prixCombiné;
      location.reload();
    }
    document.getElementById("totalQuantity").textContent = totalArticle;
    document.getElementById("totalPrice").textContent = totalPrix;
  }
  }))
}

window.onload = () => {

  let nbProduits = document.querySelectorAll("input.itemQuantity")
  for (let nbProduit of nbProduits)
  nbProduit.addEventListener("change", recupProd)
  function recupProd(){
  let recupProdId = this.dataset.id
  let recupProdColor = this.dataset.couleur
  let recupProdValue = this.value
  
  for (let item of productLS){
      if(recupProdId == item.idProduit &&
        recupProdColor == item.couleurProduit){
          return(
            item.nombreproduit = recupProdValue,
              localStorage.setItem("Product",JSON.stringify(productLS)),
              (productLS = JSON.parse(localStorage.getItem("Product")))
          )
      }
  }
  }
  let boutonsSupr = document.querySelectorAll(".deleteItem");
for (let boutonSupr of boutonsSupr)
boutonSupr.addEventListener("click", Supr)
}

function Supr(){
  let idSupr = this.dataset.id
  let ColorSupr = this.dataset.couleur
  for (let item of productLS){
    if(idSupr == item.idProduit &&
      ColorSupr == item.couleurProduit){
          console.log(productLS)
          console.log(item)
          let filterproduct = productLS.filter(obj => obj != item)
          console.log(filterproduct)
          localStorage.setItem("Product", JSON.stringify(filterproduct));
          location.reload();

    }
}
}
// ***********************************************************************************************************************************************

let form = document.querySelector('.cart__order__form')
let inputFirstName = form.firstName
let inputLastName = form.lastName
let inputaddress = form.address
let inputcity = form.city
let inputemail = form.email

form.firstName.addEventListener('change', function(){
    valideFirstName(this);
})
const valideFirstName =function(inputFirstName){
  let firstNameRegExp = new RegExp("^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$", "gi")


let testFirstName = firstNameRegExp.test(inputFirstName.value);
let firstNameErrorMsg = document.querySelector('#firstNameErrorMsg')
if(testFirstName == false){
  firstNameErrorMsg.innerHTML = "Vérifié votre saisie"
  return false;
}else{
  firstNameErrorMsg.innerHTML = ""
  return true;
}
}

// ************************************************************************
form.lastName.addEventListener('change', function(){
  valideLastName(this);
})
const valideLastName =function(inputLastName){
let LastNameRegExp = new RegExp( "^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$", 'g')

let testLastName = LastNameRegExp.test(inputLastName.value);
let LastNameErrorMsg = document.querySelector('#lastNameErrorMsg')
if(testLastName == false){
lastNameErrorMsg.innerHTML = "Vérifié votre saisie"
return false;

}else{
lastNameErrorMsg.innerHTML = ""
return true;

}
}

// ************************************************************************
form.address.addEventListener('change', function(){
  valideaddress(this);
})
const valideaddress =function(inputaddress){
let addressRegExp = new RegExp( /[0-9,'a-zA-Zéèàêëï]/g)

let testaddress = addressRegExp.test(inputaddress.value);
let addressErrorMsg = document.querySelector('#addressErrorMsg')
if(testaddress == false){
addressErrorMsg.innerHTML = "Vérifié votre saisie"
return false;

}else{
addressErrorMsg.innerHTML = ""
return true;

}
}
// ************************************************************************
form.city.addEventListener('change', function(){
  validecity(this);
})
const validecity =function(inputcity){
let cityRegExp = new RegExp( /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/, 'g')

let testcity = cityRegExp.test(inputcity.value);
let cityErrorMsg = document.querySelector('#cityErrorMsg')
if(testcity == false){
  cityErrorMsg.innerHTML = "Vérifié votre saisie"
  return false;

}else{
  cityErrorMsg.innerHTML = ""
  return true;

}
}
// ************************************************************************
form.email.addEventListener('change', function(){
  valideemail(this);
})
const valideemail =function(inputemail){
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

let testemail = emailRegExp.test(inputemail.value);
let emailErrorMsg = document.querySelector('#emailErrorMsg')
if(testemail == false){
  emailErrorMsg.innerHTML = "Adresse Email non valide"
  return false;

}else{
  emailErrorMsg.innerHTML = ""
  return true;

}
}
let ReadyToSend
let newBasket = [];
function tabID() {
// appel des ressources
let panier = JSON.parse(localStorage.getItem("Product"));
// récupération des id produit dans panierId
if (panier && panier.length > 0) {
  for (let items of panier) {
    newBasket.push(items.idProduit);
  }
} else {
  console.log("le panier est vide");
  document.querySelector("#order").setAttribute("value", "Panier vide!");
}
}
tabID();
form.addEventListener('submit', function(e){
  e.preventDefault();
  if(valideFirstName(form.firstName) && valideLastName(form.lastName) && valideaddress(form.address) && validecity(form.city) && valideemail(form.email)){
    console.log('valide')
    ReadyToSend ={
      contact: {
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
      address: inputaddress.value,
      city: inputcity.value,
      email: inputemail.value
     },
     products: newBasket,
    }
    console.log(ReadyToSend)
    let options = {
      method: "POST",
      body: JSON.stringify(ReadyToSend),
      headers: {
        "content-type": "application/json",
      },
    };
    fetch("http://localhost:3000/api/products/order", options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // localStorage.clear();
      window.location.href = `/front/html/confirmation.html?orderId=${data.orderId}`;
    });







  }else{
    console.log("non valide")
  }
});

