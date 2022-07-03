let ConfirmLocation = new URLSearchParams(window.location.search).get(
    "orderId"
  );
  
  function searchId() {
    let textId = document.querySelector("#orderId");
    textId.innerHTML = `${ConfirmLocation}`;
    localStorage.clear();
  }
  
  searchId();