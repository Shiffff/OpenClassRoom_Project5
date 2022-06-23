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

    let productLS = JSON.parse(localStorage.getItem("Product"));


    if(productLS){
        for(i = 0; i < productLS.length; i++)
        if(productLS[i].idProduit == optionProduit.idProduit &&
             productLS[i].couleurProduit == optionProduit.couleurProduit){
            return(
                productLS[i].nombreproduit = parseInt(productLS[i].nombreproduit) + parseInt(optionProduit.nombreproduit),
                localStorage.setItem("Product",JSON.stringify(productLS)),
                (productLS = JSON.parse(localStorage.getItem("Product")))
            )
        }
        else (productLS[i].idProduit != optionProduit.idProduit &&
            productLS[i].couleurProduit != optionProduit.couleurProduit)
            {
            productLS.push(optionProduit);
            localStorage.setItem("Product", JSON.stringify(productLS));
        
            }
    }else{
        productLS = [];
        productLS.push(optionProduit);
        localStorage.setItem("Product", JSON.stringify(productLS));
    }

        })
    })
);

