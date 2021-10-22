function hello() {
    console.log('Witaj w swiecie TypeScript');

  }
  hello();

(function zad3(){})();

  (function zad4(){
    const input = document.querySelector("#input")!;
    const btnPlus = document.querySelector('#plus')!;
    const btnMinus = document.querySelector('#minus')!;

    btnMinus.addEventListener('click', event => {
      input.textContent = `Click`;
    });
    btnPlus.addEventListener('click', event => {
      btnPlus.textContent = `Click`;
    });
    // document.getElementById('input').querySelector<HTMLInputElement>('.myClass').value
    // document.getElementById('input')!.querySelector<HTMLInputElement>('#input')!.value = "xd"

    // btnMinus.onclick()
  })();

