const theDiv = document.querySelector('#result');

// idk why we have that div inside there...
theDiv.removeChild(theDiv.firstChild);

const size_btn = document.querySelector("#size_btn");
// Update size of the resulting div (theDiv)
size_btn.addEventListener('click', function() {
  let width = parseInt(document.querySelector("#width").value);
  let height = parseInt(document.querySelector("#height").value);

  theDiv.style.width = `${width}px`;
  theDiv.style.height = `${height}px`;
});

const colors_btn = document.querySelector("#colors_btn");
// Set the rows to occupy the different colors inside theDiv.
colors_btn.addEventListener('click', function() {
  let num_colors = parseInt(document.querySelector("#num_colors").value);
  let curr_colors = theDiv.childElementCount;

  let new_h = `${100 / num_colors}%`;

  // Remove extra elements, if any
  for (let i = num_colors; i < curr_colors; i++)
    theDiv.removeChild(theDiv.firstChild);
  curr_colors = theDiv.childElementCount;

  // Update the existing elements.
  for (let i = 0; i < curr_colors; i++) {
    let temp = theDiv.children[i];
    temp.style.height = new_h;
    temp.style.backgroundColor =
      document.querySelector(`#color_sel${i}`).value;
  }

  // Add new elements if needed
  for (let i = curr_colors; i < num_colors; i++) {
    let temp = document.createElement("div");
    temp.classList.add("result_row");
    temp.style.height = new_h;
    temp.style.backgroundColor =
      document.querySelector(`#color_sel${i}`).value;

    theDiv.appendChild(temp)
  }
})

const border_btn = document.querySelector("#border_btn")
// Update the border of theDiv accordingly.
border_btn.addEventListener('click', function() {
  let style = document.querySelector("#border_type").value;
  let color = document.querySelector("#border_color").value;
  let thick = document.querySelector("#border_width").value;

  theDiv.style.border = `${thick}px ${style} ${color}`;
})
