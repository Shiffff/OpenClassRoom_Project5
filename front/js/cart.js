let productLS = JSON.parse(localStorage.getItem("Product"));


let affichage = ("");
for (let item of productLS){
    let img = item.picproduct
    let nameproduct = item.nomProduit
    let itemcolor = item.couleurProduit
    let priceproduct = item.prixProduit
    let quantiteproduct = item.nombreproduit
    let idProduit = item.idProduit

    affichage += 
    `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
    <div class="cart__item__img">
    <img src="${img}" alt="Photographie d'un canapé">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${nameproduct}</h2>
        <p>${itemcolor}</p>
        <p>${priceproduct} €</p>
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
  </article>`
}
document.querySelector("#cart__items") .innerHTML = affichage;


    let panier = JSON.parse(localStorage.getItem("Product"));
    let totalArticle = 0;
    let prixCombiné = 0;
    let totalPrix = 0;
    for (let article of panier) {
      totalArticle += JSON.parse(article.nombreproduit);
      prixCombiné = article.nombreproduit * article.prixProduit;
      totalPrix += prixCombiné;

    }
    document.getElementById("totalQuantity").textContent = totalArticle;
    document.getElementById("totalPrice").textContent = totalPrix;





  

  let input = document.querySelector('.itemQuantity');
  input.addEventListener('change', function(){
    console.log(input.value)

  });
