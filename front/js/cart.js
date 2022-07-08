let productLS = JSON.parse(localStorage.getItem("Product")); // rappel de la clé dans le local storage


let affichage = ("");     // création d'une variable pour stocké tout les éléments HTML
for (let item of productLS){
    const img = item.picproduct     // création d'une boucle (pour chaque produits du LS création d'une variable pour chaque parametre d'un produit)
    const nameproduct = item.nomProduit
    const itemcolor = item.couleurProduit
    const quantiteproduct = item.nombreproduit
    const idProduit = item.idProduit
    let urlApiProduct = `http://localhost:3000/api/products/${idProduit}`;    
    let price = ('')    // Variable pour contenir chaque price par ID produit
    
    fetch(urlApiProduct).then((response) =>     //Rappel de l'API produit car le prix ne doit pas etre stocké dans le LS 
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

document.querySelector("#cart__items") .innerHTML = affichage; // insertion dans le HTML

const panier = JSON.parse(localStorage.getItem("Product")); 
let totalArticle = 0;
let prixCombiné = 0;
let totalPrix = 0;
for (let article of panier) {   // création d'une boucle pour chaque article  récupéré nombre et multiplié nombre * prix
  totalArticle += JSON.parse(article.nombreproduit);
  prixCombiné = article.nombreproduit * price;
  totalPrix += prixCombiné;
}
document.getElementById("totalQuantity").textContent = totalArticle; // // insertion dans le HTML
document.getElementById("totalPrice").textContent = totalPrix;
  

const nbProduits = document.querySelectorAll("input.itemQuantity")  
for (let nbProduit of nbProduits)
nbProduit.addEventListener("change", refreshprod) // séléction et écoute via "change " de l'élément input.itemQuantity (choix quantité)


  function refreshprod(){     
  const recupProdId = this.dataset.id // récup l'id du dataset précédement crée pour identifier le produit et couleur + nombre 
  const recupProdColor = this.dataset.couleur
  const recupProdValue = this.value
  if (recupProdValue > 0){      // Si value choisie est supérieur a 0
  for (let item of productLS){
      if(recupProdId == item.idProduit &&
        recupProdColor == item.couleurProduit){       // Compare couleur + id et si identique faire :
          return(
            item.nombreproduit = recupProdValue,
              localStorage.setItem("Product",JSON.stringify(productLS)),  //remplacé l'ancienne quantité par la nouvelle et la renvoyé au localstorage
              (productLS = JSON.parse(localStorage.getItem("Product"))),
              location.reload()
          )
      }
  }
}
else if(recupProdValue < 0){
  alert(
    "Veuillez choisir une quantité entre 1 et 100"      //Sinon message d'erreur si quantité négative
  );
}
}



  const boutonsSupr = document.querySelectorAll(".deleteItem");
for (let boutonSupr of boutonsSupr)             // séléction et écoute du bouton supprimer au click
boutonSupr.addEventListener("click", Supr)




function Supr(){
  let idSupr = this.dataset.id
  let ColorSupr = this.dataset.couleur        //Récupération dataset précédement crée pour identitifier le produit
  for (let item of productLS){        //boucle pour chaque produit
    if(idSupr == item.idProduit &&    // Si id et couleur identique
      ColorSupr == item.couleurProduit){
          let filterproduct = productLS.filter(obj => obj != item)          // utilisation commande filter pour supprimé l'élément séléctionné dans le array (LS précédement récupéré)
          localStorage.setItem("Product", JSON.stringify(filterproduct));     // renvoyé le LS et remplacé la clé product éxistante
          location.reload();      // Refresh la page

        }
      }
    }
  }))
}







// ***********************************************************************************************************************************************

const form = document.querySelector('.cart__order__form')   // selection du des differrents champs input 
const inputFirstName = form.firstName
const inputLastName = form.lastName
const inputaddress = form.address       // recupération des champs
const inputcity = form.city
const inputemail = form.email

form.firstName.addEventListener('change', function(){       // écoute de l'input via "change"
    valideFirstName(this);
})
const valideFirstName =function(inputFirstName){
  const firstNameRegExp = new RegExp("^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$", "gi")   // first regexp


const testFirstName = firstNameRegExp.test(inputFirstName.value);
let firstNameErrorMsg = document.querySelector('#firstNameErrorMsg')
if(testFirstName == false){
  firstNameErrorMsg.innerHTML = "Vérifié votre saisie"    // message error si regexp non valide
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
const LastNameRegExp = new RegExp( "^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$", 'g')

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
const addressRegExp = new RegExp( /[0-9,'a-zA-Zéèàêëï]/g)

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
const cityRegExp = new RegExp( /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/, 'g')

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
const emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');

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

//************************************************************************ */

let ReadyToSend
let newBasket = [];
function tabID() {
// appel des ressources
let panier = JSON.parse(localStorage.getItem("Product"));
// récupération des id produit dans panierId
if (panier && panier.length > 0) {      // si il y a quelques choses dans le localstorage
  for (let items of panier) {
    newBasket.push(items.idProduit);    // séléctionné uniquement les ID produit et les mettre dans une nouvelle variables
  }
} else {
  console.log("le panier est vide");
  document.querySelector('H1').innerHTML = "Votre panier est vide"
}
}
tabID();


form.addEventListener('submit', function(e){
  e.preventDefault();
  if(valideFirstName(form.firstName) && valideLastName(form.lastName) && valideaddress(form.address) && validecity(form.city) && valideemail(form.email)){    // si tout les champs sont rempli et OK
    console.log('valide')
    ReadyToSend ={        //Formé l'objet a envoyé avec un objet contenant toutes les infos du client
      contact: {
      firstName: inputFirstName.value,
      lastName: inputLastName.value,
      address: inputaddress.value,
      city: inputcity.value,
      email: inputemail.value
     },
     products: newBasket,   // Et les ID des produits séléctionné
    }
    let options = {         // utilisation de la méthode post vers l'API pour lui confirmé l'action
      method: "POST",
      body: JSON.stringify(ReadyToSend),
      headers: {
        "content-type": "application/json",
      },
    };
    fetch("http://localhost:3000/api/products/order", options)        // récupération de la reponse de l'api (ID commande généré)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // localStorage.clear();
      window.location.href = `/front/html/confirmation.html?orderId=${data.orderId}`;   // direction vers la nouvelle page crée avec l'id retourné par l'api en paramétre
    });

  }else{
    console.log("non valide")
  }
});
