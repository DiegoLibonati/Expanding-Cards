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

## Libraries used

#### Dependencies

```
"@types/jest": "^29.5.14"
```

#### devDependencies

```
"@testing-library/dom": "^10.4.0"
"@testing-library/jest-dom": "^6.6.3"
"@testing-library/user-event": "^14.5.2"
"jest": "^29.7.0"
"jest-environment-jsdom": "^29.7.0"
"jest-fixed-jsdom": "^0.0.9"
"ts-jest": "^29.2.5"
"typescript": "^5.2.2"
"vite": "^5.0.8"
```

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Expanding-Cards`](https://www.diegolibonati.com.ar/#/project/Expanding-Cards)

## Video

https://user-images.githubusercontent.com/99032604/198900511-304ad5a3-5a79-45d9-b98c-5db4a9456b5c.mp4

## Testing

1. Join to the correct path of the clone
2. Execute: `yarn install`
3. Execute: `yarn test`

## Documentation

In this element we bring all the images of the page with the class `.expanding_card img`:

```
export const images = document.querySelectorAll(
  ".expanding_card img"
) as NodeList;
```

At this point we take all the images, go through them one by one and assign an event when clicked will be executed: `expandCard()`:

```
const settingImagesToButtons = (image: Node) => {
  const img = image as HTMLImageElement;
  img.addEventListener("click", (e) => expandCard(e));
};

const onInit = () => {
  // console.log("YOUR CONFIG FILE: ", CONFIG);

  images.forEach((img) => settingImagesToButtons(img));
};

document.addEventListener("DOMContentLoaded", onInit);
```

This function `expandCard()`, this function gets the parent directory of the clicked image. Then it checks the parent directory of each image with the parent directory of the clicked image and if it is different. It will remove the class and then add the class to the clicked image:

```
const expandCard = (e: Event) => {
  const target = e.currentTarget as HTMLImageElement;
  const cardContainer = target.parentElement;

  const prevImgOpen = document.querySelector(
    ".cardTouched"
  ) as HTMLImageElement;

  prevImgOpen.classList.remove("cardTouched");
  cardContainer?.classList.add("cardTouched");
};
```
