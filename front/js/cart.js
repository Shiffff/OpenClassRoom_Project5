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
          <p class="deleteItem">Supprimer</p>
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
  }))
}


//Mise à jour du panier quand on modifie la quantité pour chaque produit
function changeQuantity() {
  let itemQuantity = document.getElementsByClassName("itemQuantity");
  //console.log(itemQuantity);
  for (let q = 0; q < itemQuantity.length; q++) {
    let changeQuantity = itemQuantity[q];
    //Mise à jour au moment de changer la valeur de l'input
    changeQuantity.addEventListener("input", (event) => {
      itemQuantity.innerHTML += `<input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100"
            value="${event.target.value}">`;

      changeQuantity.addEventListener("change", (event) => {
        if (event.target.value > 100) event.target.value = 100;
        if (event.target.value < 0) event.target.value = 0;
      });

      saveInLocalStorage[q].productQuantity = Number(changeQuantity.value);

      localStorage.setItem("product", JSON.stringify(saveInLocalStorage));

      updateCart(q);
    });
  }
}
