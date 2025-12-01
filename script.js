// Script för index.html

const checkboxElement = document.getElementsByName("divStyle")[0];
console.log(checkboxElement);

const textElements = document.getElementsByClassName("textField");
console.log(textElements);

const removeButton = document.getElementById("removeButton");
console.log(removeButton);

const divElement = document.getElementsByTagName("div")[0];
console.log(divElement);

let colorOfDiv = "red";
let checkBoxIsChecked = false;

checkboxElement.addEventListener("change", function (e) {
  if (e.target.checked) {
    checkBoxIsChecked = true;
    divElement.style.backgroundColor = colorOfDiv;
  } else {
    checkBoxIsChecked = false;
    divElement.style.backgroundColor = null;
  }
});

for (let input of textElements) {
  input.addEventListener("input", changeColorOrPrintInDiv);
}

function changeColorOrPrintInDiv(e) {
  const value = e.target.value;
  const fieldName = e.target.name;

  if (fieldName === "color") {
    colorOfDiv = value;
    if (checkBoxIsChecked == true) {
      divElement.style.backgroundColor = value;
    }
  } else if (fieldName === "content") {
    divElement.innerHTML = value;
  }
}

removeButton.addEventListener("click", function (e) {
  divElement.remove();
  document.getElementById("emptyDiv");
});
