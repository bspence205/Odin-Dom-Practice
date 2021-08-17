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

const newheading1 = document.createElement("h1");
newheading1.textContent = "in a div";
newDiv.appendChild(newheading1);

const newpara = document.createElement("p");
newpara.textContent = "me too";
newDiv.appendChild(newpara);

container.appendChild(newDiv);
