// Script för index.html

const checkboxElement = document.getElementsByName("divStyle")[0];
console.log(checkboxElement);

const textElements = document.getElementsByClassName("textField");
console.log(textElements);

const removeButton = document.getElementById("removeButton");
console.log(removeButton);

const divElement = document.getElementsByTagName("div")[0];
console.log(divElement);

let colorOfDiv = null;

textElements.addEventListener(
  "input",
  printInConsole(textElements.target.value)
);

function printInConsole(e) {
  if (textElements.target.name == "color") {
    colorOfDiv = e;
    divElement.style.color = colorOfDiv;
  } else if (textElements.target.name == "content") {
    divElement.innerHTML = e;
  }
  console.log();
}
