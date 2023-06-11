function addElement() {
  const divElement = document.getElementById("conatiner");

  const div = document.createElement("div");
  const text = document.createTextNode("Box");
  div.appendChild(text);

  divElement.appendChild(div);
}
