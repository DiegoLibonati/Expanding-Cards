const expandingCardsImages = document.querySelectorAll(
  ".expanding_card img"
) as NodeList;

const expandingCard = (e: Event) => {
  const target = e.currentTarget as HTMLImageElement;
  const cardContainer = target.parentElement;

  const prevImgOpen = document.querySelector(".cardTouched") as HTMLImageElement

  prevImgOpen.classList.remove("cardTouched")
  cardContainer?.classList.add("cardTouched");
};

// Diego del Futuro: A cada imagen le damos un addEventListener con un Click!
expandingCardsImages.forEach(function (expandingCardImage) {
  expandingCardImage.addEventListener("click", (e) => expandingCard(e));
});
