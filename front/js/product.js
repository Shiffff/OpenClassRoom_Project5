let params = new URLSearchParams(window.location.search)
let resultID = params.get('id')
let urlApiProduct = `http://localhost:3000/api/products/${resultID}`;


//********************************************************************* */
fetch(urlApiProduct).then((response) =>
response.json().then((data) => {
    document.querySelector("#title") .innerHTML = data.name;
    document.querySelector("#price") .innerHTML = data.price;
    document.querySelector("#description") .innerHTML = data.description;
    document.querySelector("article div.item__img") .innerHTML = `<img src="${data.imageUrl}" alt=${data.altTxt}>`;
    couleurs = data.colors
    let printcolor = [];
    for  (let i = 0; i < couleurs.length; i++){
        let color = couleurs[i];
    printcolor += `<option value="${i}">${color}</option>`;
}
document.querySelector("#colors") .innerHTML = printcolor;
const btnCart = document.querySelector("#addToCart");


btnCart.addEventListener("click",(e)=>{
    e.preventDefault();
    let selectColor = document.querySelector("#colors");
    let couleurchoisie = couleurs[selectColor.value];
    let quantite = document.querySelector("#quantity");
    let quantiteProduit = quantite.value;
    let optionProduit = {
        nomProduit: data.name,
        idProduit: resultID,
        couleurProduit: couleurchoisie,
        prixProduit: data.price,
        nombreproduit: quantiteProduit,
        picproduct: data.imageUrl
    }
    let product = [`${couleurchoisie } + ${ resultID}`]
    let produitLocalStorage = JSON.parse(localStorage.getItem(product));
 
    if(produitLocalStorage){
        produitLocalStorage.push(optionProduit);
        localStorage.setItem(product, JSON.stringify(produitLocalStorage));


    }else{
        produitLocalStorage = [];
        produitLocalStorage.push(optionProduit);
        localStorage.setItem(product, JSON.stringify(produitLocalStorage));
    }
        })
    })
);
