let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("ul");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  let task = input.value;
  let li = document.createElement("li");
  let span = document.createElement("span");
  let doneBTN = document.createElement("button");
  let delBTN = document.createElement("button");

  doneBTN.classList.add("doneBtn");
  delBTN.classList.add("delBtn");

  doneBTN.addEventListener("click", function (event) {
    event.preventDefault();

    span.classList.toggle("strike")
  });

  delBTN.addEventListener("click", function (event) {
    event.preventDefault();

    li.remove();
  });

  span.textContent = task;
  doneBTN.textContent = "Done"
  delBTN.textContent = "delete"

  li.appendChild(doneBTN);
  li.appendChild(span);
  li.appendChild(delBTN);

  list.appendChild(li);

  input.value = "";
});
