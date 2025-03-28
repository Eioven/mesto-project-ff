const cardTemplate = document.querySelector("#card-template").content;

function createCard (cardContent, deleteCard, likeCard, openImagePopup) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    const deleteButton = card.querySelector(".card__delete-button");
    const likeButton = card.querySelector(".card__like-button");

    cardImage.src = cardContent.link;
    cardImage.alt = cardContent.name;

    cardTitle.textContent = cardContent.name;

    deleteButton.addEventListener("click", deleteCard);
    likeButton.addEventListener("click", likeCard);
    cardImage.addEventListener("click", openImagePopup);

    return card;
}

function deleteCard(event) {
    event.target.closest(".card").remove();
}

function likeCard(event) {
    event.target.closest(".card__like-button").classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard };
