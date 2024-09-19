# Expanding Cards

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

---

1. Clone the repository
2. Join to the correct path of the clone
3. Execute: `yarn install`
4. Execute: `yarn dev`


## Description

I made a web page that works like a photo gallery, when you click on an image it expands and the other photos in the gallery shrink. I did this using methods that add and remove classes to the images with javascript.

## Technologies used

1. Typescript
2. CSS3
3. HTML5

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Expanding-Cards`](https://www.diegolibonati.com.ar/#/project/Expanding-Cards)

## Video

https://user-images.githubusercontent.com/99032604/198900511-304ad5a3-5a79-45d9-b98c-5db4a9456b5c.mp4

## Documentation

In this element we bring all the images of the page with the class `.expanding_card img`:

```
const expandingCardsImages = document.querySelectorAll(
  ".expanding_card img"
) as NodeList;
```

At this point we take all the images, go through them one by one and assign an event when clicked will be executed: `expandingCard()`:

```
expandingCardsImages.forEach(function (expandingCardImage) {
  expandingCardImage.addEventListener("click", (e) => expandingCard(e));
});
```

This function `expandingCard()`, this function gets the parent directory of the clicked image. Then it checks the parent directory of each image with the parent directory of the clicked image and if it is different. It will remove the class and then add the class to the clicked image:

```
const expandingCard = (e: Event) => {
  const target = e.currentTarget as HTMLImageElement;
  const cardContainer = target.parentElement;

  const prevImgOpen = document.querySelector(".cardTouched") as HTMLImageElement

  prevImgOpen.classList.remove("cardTouched")
  cardContainer?.classList.add("cardTouched");
};
```
