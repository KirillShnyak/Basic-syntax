export function getApp(wrapper) {
  wrapper.innerHTML = `
  <input />
  <button hidden>Add</button>
  <div class="list">
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>

  `;

  const button = wrapper.querySelector("button");
  const input = wrapper.querySelector("input");
  const list = wrapper.querySelector(".list");

  input.addEventListener("input", () => {
    if (input.value) {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  });

  button.addEventListener("click", () => {
    const p = document.createElement("p");
    p.innerHTML = input.value;
    list.prepend(p);
    input.value = "";
    button.hidden = true;
    const allP = list.querySelectorAll("p");
    if (allP.length > 5) {
      allP[5].remove();
    }
  });
}
