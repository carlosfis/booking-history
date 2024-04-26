let tamplateContainerContent = document.querySelector(".tamplateContainer__content");


function downloadReservations() {

    fetch('reservations.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(reservations => {
    for (let reservation of reservations) {
        createCard(reservation.fullName,
                    reservation.email,
                    reservation.cost,
                    reservation.rooms,
                    reservation.resortName,
                    reservation.confirmationNumber);
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}


function createCard(fName, mail, coste, room, nameResort, confNum) {
    let card = document.createElement("DIV");
    let cardTop = document.createElement("DIV");
    let newDiv = document.createElement("DIV");
    let h5 = document.createElement("H5");
    let parr = document.createElement("P");
    let span = document.createElement("SPAN");


    card.className = "tamplateContainer__card";
    cardTop.className = "tamplateContainer__card--top";
    h5.textContent = fName;
    parr.textContent = mail;
    span.textContent = "$ " + coste + " USD";

    newDiv.appendChild(h5)
    newDiv.appendChild(parr)
    cardTop.appendChild(newDiv)
    cardTop.appendChild(span)
    card.appendChild(cardTop);

    let cardBottom = document.createElement("div");
    let container = document.createElement("div");
    let imgParagraph = document.createElement("p");
    let img = document.createElement("img");
    let textParagraph1 = document.createElement("p");
    let textParagraph2 = document.createElement("p");
    let button = document.createElement("button");

    cardBottom.classList.add("tamplateContainer__card--bottom");
    img.src = "assets/copyCrs.svg";
    img.alt = "copiar numero de reservacion";
    button.classList.add("btn-secundary");
    textParagraph1.textContent = room + " Rooms";
    imgParagraph.textContent = confNum;
    textParagraph2.textContent = nameResort;
    button.textContent = "OPEN"


    imgParagraph.appendChild(img);
    container.appendChild(imgParagraph);
    container.appendChild(textParagraph1);
    container.appendChild(textParagraph2);
    cardBottom.appendChild(container);
    cardBottom.appendChild(button);


    tamplateContainerContent.appendChild(card);
    card.appendChild(cardBottom)
}


