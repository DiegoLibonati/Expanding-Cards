import { screen, within } from "@testing-library/dom";
import user from "@testing-library/user-event";

import fs from "fs";
import path from "path";

const INITIAL_HTML: string = fs.readFileSync(
  path.resolve(__dirname, "../index.html"),
  "utf8"
);

beforeEach(() => {
  jest.resetModules();
  const body = INITIAL_HTML.match(/<body[^>]*>([\s\S]*?)<\/body>/i)![1];

  document.body.innerHTML = body;
  require("./index.ts");
  document.dispatchEvent(new Event("DOMContentLoaded"));
});

afterEach(() => {
  document.body.innerHTML = "";
});

test("It must render the totality of images and the first one must be expanded and the others closed.", () => {
  const imgs = screen.getAllByRole("img");
  const cards = document.querySelectorAll(".expanding_card");

  expect(cards).toHaveLength(imgs.length);

  cards.forEach((element, index) => {
    const card = element as HTMLDivElement;

    const img = within(card).getByRole("img");
    const heading = within(card).getByRole("heading", { name: /imagen/i });

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();

    if (index === 0) expect(card).toHaveClass("cardTouched");
    else expect(card).not.toHaveClass("cardTouched");
  });
});

test("It must add the 'cardTouched' class to the clicked image, while the other images must remain without the 'cardTouched' class.", async () => {
  const cards = document.querySelectorAll(".expanding_card");

  const secondCard = cards[1] as HTMLDivElement;
  const imgButton = within(secondCard).getByRole("img");

  expect(secondCard).toBeInTheDocument();
  expect(imgButton).toBeInTheDocument();

  await user.click(imgButton);

  cards.forEach((element, index) => {
    const card = element as HTMLDivElement;

    const img = within(card).getByRole("img");
    const heading = within(card).getByRole("heading", { name: /imagen/i });

    expect(img).toBeInTheDocument();
    expect(heading).toBeInTheDocument();

    if (index === 1) expect(card).toHaveClass("cardTouched");
    else expect(card).not.toHaveClass("cardTouched");
  });
});
