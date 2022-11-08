# Expanding-Cards-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a web page that works like a photo gallery, when you click on an image it expands and the other photos in the gallery shrink. I did this using methods that add and remove classes to the images with javascript.

## Technologies used

1. Javascript
2. CSS3
3. HTML5

## Galery

![Expanding-Cards](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/expandingCards-0.jpg)

![Expanding-Cards](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/expandingCards-1.jpg)

![Expanding-Cards](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/expandingCards-2.jpg)

![Expanding-Cards](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/expandingCards-3.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Expanding%20cards%20page`

## Video

https://user-images.githubusercontent.com/99032604/198900511-304ad5a3-5a79-45d9-b98c-5db4a9456b5c.mp4

## Documentation

In this element we bring all the images of the page with the class `.expanding_card img`:

```
const expandingCardsImages = document.querySelectorAll(".expanding_card img");
```

At this point we take all the images, go through them one by one and assign an event when clicked will be executed: `expandingCard()`:

```
expandingCardsImages.forEach(function(expandingCardImage){

    expandingCardImage.addEventListener("click", expandingCard);

})
```

This function `expandingCard()`, this function gets the parent directory of the clicked image. Then it checks the parent directory of each image with the parent directory of the clicked image and if it is different. It will remove the class and then add the class to the clicked image:

```
const expandingCard = (e) => {

    const expandingCardContainer = e.currentTarget.parentElement;

    expandingCardsImages.forEach(function(expandingCardImage){

       if (expandingCardImage.parentElement !== expandingCardContainer){
            expandingCardImage.parentElement.classList.remove("cardTouched");
       }

    });

    expandingCardContainer.classList.add("cardTouched");

}
```
