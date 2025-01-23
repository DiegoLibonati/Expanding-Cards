import { screen, within } from "@testing-library/dom";
import user from "@testing-library/user-event";

import { OFFICIAL_BODY } from "./tests/jest.constants";

describe("index.ts", () => {
  describe("General Tests.", () => {
    beforeEach(() => {
      document.body.innerHTML = OFFICIAL_BODY;

      require("./index.ts");
      document.dispatchEvent(new Event("DOMContentLoaded"));
    });

    afterEach(() => {
      document.body.innerHTML = "";
    });

    test("It must render the totality of images and the first one must be expanded and the others closed.", () => {
      const imgs = screen.getAllByRole("img");
      const cards = document.querySelectorAll(".cards__list-card");

      expect(cards).toHaveLength(imgs.length);

      cards.forEach((element, index) => {
        const card = element as HTMLDivElement;

        const img = within(card).getByRole("img");
        const heading = within(card).getByRole("heading", { name: /imagen/i });

        expect(img).toBeInTheDocument();
        expect(heading).toBeInTheDocument();

        if (index === 0) expect(card).toHaveClass("cards__list-card--touched");
        else expect(card).not.toHaveClass("cards__list-card--touched");
      });
    });

    test("It must add the 'card--touched' class to the clicked image, while the other images must remain without the 'card--touched' class.", async () => {
      const cards = document.querySelectorAll(".cards__list-card");

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

        if (index === 1) expect(card).toHaveClass("cards__list-card--touched");
        else expect(card).not.toHaveClass("cards__list-card--touched");
      });
    });
  });
});
