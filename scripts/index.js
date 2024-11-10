// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const cardsContainer = document.querySelector(".places__list")
// @todo: Функция создания карточки
function createCard (cardContent, deleteCard) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title");
    const deleteButton = card.querySelector(".card__delete-button")

    cardImage.src = cardContent.link;
    cardImage.alt = cardContent.name;


    cardTitle.textContent = cardContent.name;

    deleteButton.addEventListener("click", deleteCard);

    return card;
}
// @todo: Функция удаления карточки
function deleteCard(event) {
    event.target.closest(".places__item").remove()
}
// @todo: Вывести карточки на страницу
function addCards (array){
    array.forEach(function (cardContent){
        const newCard = createCard(cardContent, deleteCard);
        cardsContainer.append(newCard);
    });
}

addCards(initialCards);
