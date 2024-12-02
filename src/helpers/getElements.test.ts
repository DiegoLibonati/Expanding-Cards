import { getElements } from "./getElements";

const INITIAL_HTML: string = `
    <main>
      <section class="section_expanding_cards">
        <article class="section_expanding_cards_article">
          <div class="expanding_card cardTouched">
            <img
              src="https://images5.alphacoders.com/422/thumb-1920-422909.jpg"
              alt="img"
            />
            <h3>Imagen 1</h3>
          </div>

          <div class="expanding_card">
            <img
              src="https://i.pinimg.com/originals/38/53/36/385336bdb4b63eecc5f68246f80a29e5.jpg"
              alt="img"
            />
            <h3>Imagen 2</h3>
          </div>

          <div class="expanding_card">
            <img
              src="https://www.10wallpaper.com/wallpaper/1920x1080/1410/Best_Nature_Views-Scenery_HD_Wallpaper_1920x1080.jpg"
              alt="img"
            />
            <h3>Imagen 3</h3>
          </div>

          <div class="expanding_card">
            <img
              src="https://www.wallpaperuse.com/wallp/8-84445_m.jpg"
              alt="img"
            />
            <h3>Imagen 4</h3>
          </div>

          <div class="expanding_card">
            <img
              src="https://s1.1zoom.me/b5050/278/Argentina_Mountains_Scenery_Bay_Clouds_Grass_569639_1920x1080.jpg"
              alt="img"
            />
            <h3>Imagen 5</h3>
          </div>
        </article>
      </section>
    </main>
`;

beforeEach(() => {
  const body = INITIAL_HTML;

  document.body.innerHTML = body;
});

afterEach(() => {
  document.body.innerHTML = "";
});

test("It must render the elements of the document that the 'getElements' function exports.", () => {
  const { images } = getElements();

  for (let img of images) {
    expect(img).toBeInTheDocument();
  }
});
