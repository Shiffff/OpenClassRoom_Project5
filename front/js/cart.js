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



/*window.onload = () => {
  
let boutonsSupr = document.querySelectorAll(".deleteItem");
for (let boutonSupr of boutonsSupr)
boutonSupr.addEventListener("click", Supr)
}

function Supr(){
  console.log("event")
}

*/

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
/*
function Supr(){
let idSupr = this.dataset.id
let ColorSupr = this.dataset.couleur
let productLSFiltre = productLS.filter(function(el){
  for (let item of productLS){
    if(idSupr != item.idProduit &&
      ColorSupr != item.couleurProduit){
        
})
}
*/
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
