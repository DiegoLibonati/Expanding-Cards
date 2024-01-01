const expandingCardsImages = document.querySelectorAll(
  ".expanding_card img"
) as NodeList;

// Diego del Futuro: Al hacer click en una imagen se hace esta funcion. Dicha funcion obtiene el directorio padre de la imagen clickeada ->
// Luego se comprueba el directorio padre de cada imagen con el directorio padre de la imagen clickeada y si es diferente ->
// Se removera la clase para luego agregar la clase a la imagen clickeada.

const expandingCard = (e: Event) => {
  const card = e.currentTarget as HTMLElement;
  const cardContainer = card.parentElement;

  expandingCardsImages.forEach(function (expandingCardImage) {
    const image = expandingCardImage as HTMLImageElement;

    if (image.parentElement !== cardContainer) {
      image.parentElement?.classList.remove("cardTouched");
    }
  });

  cardContainer?.classList.add("cardTouched");
};

// Diego del Futuro: A cada imagen le damos un addEventListener con un Click!
expandingCardsImages.forEach(function (expandingCardImage) {
  expandingCardImage.addEventListener("click", (e) => expandingCard(e));
});
