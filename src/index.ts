import { getElements } from "./helpers/getElements";

const expandCard = (e: Event) => {
  const target = e.currentTarget as HTMLImageElement;
  const cardContainer = target.parentElement;

  const prevImgOpen = document.querySelector(
    ".cards__list-card--touched"
  ) as HTMLImageElement;

  prevImgOpen.classList.remove("cards__list-card--touched");
  cardContainer?.classList.add("cards__list-card--touched");
};

const settingImagesToButtons = (image: Node) => {
  const img = image as HTMLImageElement;
  img.addEventListener("click", (e) => expandCard(e));
};

const onInit = () => {
  // console.log("YOUR CONFIG FILE: ", CONFIG);
  const { images } = getElements();

  images.forEach((img) => settingImagesToButtons(img));
};

document.addEventListener("DOMContentLoaded", onInit);
