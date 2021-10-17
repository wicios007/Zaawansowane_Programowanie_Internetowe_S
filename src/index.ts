
function hello() {
  console.log("Witaj w świecie Typescript");
  const body = document.body;
  body.innerHTML = `<button type="button" id="sub">-</button>
                    <input type="text" id="field" value=0>
                    <button type="button" id="add">+</button>`
  
}
hello();