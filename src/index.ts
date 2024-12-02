import { getElements } from "./helpers/getElements";

const expandCard = (e: Event) => {
  const target = e.currentTarget as HTMLImageElement;
  const cardContainer = target.parentElement;

  const prevImgOpen = document.querySelector(
    ".cardTouched"
  ) as HTMLImageElement;

  prevImgOpen.classList.remove("cardTouched");
  cardContainer?.classList.add("cardTouched");
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
