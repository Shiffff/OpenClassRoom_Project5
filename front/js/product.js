const params = new URLSearchParams(window.location.search) // récupération du liens
const resultID = params.get('id') // séléction du paramétre ID dans le lien
const urlApiProduct = `http://localhost:3000/api/products/${resultID}`; // création d'une constante avec le lien du produit grace a l'ID récupéré


//********************************************************************* */
fetch(urlApiProduct).then((response) => // récupération des données de l'api du produit en question
response.json().then((data) => {
    document.querySelector("#title") .innerHTML = data.name;     // info du produit dans HTML
    document.querySelector("#price") .innerHTML = data.price;
    document.querySelector("#description") .innerHTML = data.description;
    document.querySelector("article div.item__img") .innerHTML = `<img src="${data.imageUrl}" alt=${data.altTxt}>`;
    couleurs = data.colors
    let printcolor = [];
    for  (let i = 0; i < couleurs.length; i++){             // Création d'une boucle pour le choix des couleurs dynamique
        let color = couleurs[i];
    printcolor += `<option value="${i}">${color}</option>`;
}
document.querySelector("#colors") .innerHTML = printcolor; // Positionnement couleurs
const btnCart = document.querySelector("#addToCart");


btnCart.addEventListener("click",(e)=>{     // Ecoute l'evenement du "click" "ajouter au panier"
    e.preventDefault();
    const selectColor = document.querySelector("#colors");
    let couleurchoisie = couleurs[selectColor.value];  // Selection de la couleur choisie
    const quantite = document.querySelector("#quantity"); 
    let quantiteProduit = quantite.value; // selection de la quantité choisie
      
      let optionProduit = {     //Création d'une object avec tout les éléments du produit
        nomProduit: data.name,
        idProduit: resultID,
        couleurProduit: couleurchoisie,
        nombreproduit: quantiteProduit,
        picproduct: data.imageUrl
    }

    let productLS = JSON.parse(localStorage.getItem("Product"));    // appel de la clé localstorage "Product" et création d'une variable pour la contenir

    if (
        quantiteProduit <= 0 ||     // If /  pour bloqué les commandes négative
        quantiteProduit > 100 ||
        isNaN(quantiteProduit)
      ) {
        alert(
          "Veuillez choisir une quantité entre 1 et 100"  // Condition non respectée, l'utilisateur reçoit une alerte
        );
      }else{ 

    if(productLS){
        for(i = 0; i < productLS.length; i++)
        if(productLS[i].idProduit == optionProduit.idProduit &&  // si la clé local storage existe déja alors comparé couleurs et ID, si == ajouté uniquement la quantité 
             productLS[i].couleurProduit == optionProduit.couleurProduit){
            return(
                productLS[i].nombreproduit = parseInt(productLS[i].nombreproduit) + parseInt(optionProduit.nombreproduit),
                localStorage.setItem("Product",JSON.stringify(productLS)),
                (productLS = JSON.parse(localStorage.getItem("Product")))
            )
        }
        else (productLS[i].idProduit != optionProduit.idProduit &&          //sinon crée un nouvelle object dans le array
            productLS[i].couleurProduit != optionProduit.couleurProduit)
            {
            productLS.push(optionProduit);
            localStorage.setItem("Product", JSON.stringify(productLS));
        
            }
    }else{
        productLS = [];         // Si la clé LS n'existe pas alors la crée
        productLS.push(optionProduit);
        localStorage.setItem("Product", JSON.stringify(productLS));
    }
}
        })
    })
);
