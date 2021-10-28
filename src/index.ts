import Autor from "./Autor";
import Komentarz from "./Komentarz";
import Artykul from "./Artykul";
import Blog from "./Blog";

function hello() {
  console.log("Witaj w swiecie TypeScript");
  const nowyAutor = new Autor("Jan", "Kowalski", "janko@gmail.com");
  const nowyKomentarz = new Komentarz("tresc komentarza jakas", "elo123");
  const nowyArtykul = new Artykul("Jakis tytul", "tresc artykulu", "nickKogos");
  const nowyBlog = new Blog(
    "Samochody",
    nowyAutor,
    "Top 20 samochodów",
    "Opiszemy dzisiaj samochody",
    "elo123"
  );
}
hello();

(function zad3() {})();

(function zad4() {
  const input: HTMLInputElement = document.createElement("input");
  // const input = document.querySelector("#input")!;
  const btnPlus = document.querySelector("#plus")!;
  const btnMinus = document.querySelector("#minus")!;

  btnMinus.addEventListener("click", (event) => {
    input.textContent = `Click`;
  });
  btnPlus.addEventListener("click", (event) => {
    btnPlus.textContent = `Click`;
  });
  // document.getElementById('input').querySelector<HTMLInputElement>('.myClass').value
  // document.getElementById('input')!.querySelector<HTMLInputElement>('#input')!.value = "xd"

  // btnMinus.onclick()
})();
