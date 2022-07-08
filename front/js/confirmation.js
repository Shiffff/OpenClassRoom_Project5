const ConfirmLocation = new URLSearchParams(window.location.search).get(      //recupération de l'id dans le lien
    "orderId"
  );
  
  function searchId() {     // affichage de l'id précédement récupéré dans le lien
    const textId = document.querySelector("#orderId");
    textId.innerHTML = `${ConfirmLocation}`;
    localStorage.clear();   // clear du local storage
  }
  
  searchId();