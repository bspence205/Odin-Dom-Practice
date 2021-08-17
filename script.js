// Adding & Editing DOM

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey Im red";

container.appendChild(p);

const headingThree = document.createElement("h3");
headingThree.style.color = "blue";
headingThree.textContent = "im blue";

container.appendChild(headingThree);

const newDiv = document.createElement("div");
newDiv.style.border = "3px solid black";
newDiv.style.backgroundColor = "pink";

const newHeadingOne = document.createElement("h1");
newHeadingOne.textContent = "in a div";
newDiv.appendChild(newHeadingOne);

const newPara = document.createElement("p");
newPara.textContent = "me too";
newDiv.appendChild(newPara);

container.appendChild(newDiv);

// Events

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btnThree = document.querySelector("#btn3");
btnThree.addEventListener("click", () => {
  alert("hello world");
});

function alertFunction() {
  alert("Yay! You Did It!");
}

// method event listener

btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});




const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  button.addEventListener('click', () => {
    alert(button.id);
  });
});
