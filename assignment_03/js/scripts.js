const theDiv = document.querySelector('#result');

const size_btn = document.querySelector("#size_btn");
// Update size of the resulting div (theDiv)
size_btn.addEventListener('click', function() {
  let width = parseInt(document.querySelector("#width").value);
  let height = parseInt(document.querySelector("#height").value);

  theDiv.style.width = `${width}px`;
  theDiv.style.height = `${height}px`;

  updateImage();
});

const colors_btn = document.querySelector("#colors_btn");
// Set the rows to occupy the different colors inside theDiv.
colors_btn.addEventListener('click', function() {
  let num_colors = parseInt(document.querySelector("#num_colors").value);
  let rows = !(num_colors < 0);
  num_colors = Math.abs(num_colors);
  let curr_colors = theDiv.childElementCount;

  let new_h = `${100 / num_colors}%`;

  // Remove extra elements, if any
  for (let i = num_colors; i < curr_colors; i++)
    theDiv.removeChild(theDiv.firstChild);
  curr_colors = theDiv.childElementCount;

  // Update the existing elements.
  for (let i = 0; i < curr_colors; i++) {
    let temp = theDiv.children[i];

    if (rows) {
      temp.style.height = new_h;
      temp.style.width = "100%";
      temp.style.float = '';
    } else {
      temp.style.width = new_h;
      temp.style.height = "100%";
      temp.style.float = 'left';
    }

    temp.style.backgroundColor =
      document.querySelector(`#color_sel${i}`).value;
  }

  // Add new elements if needed
  for (let i = curr_colors; i < num_colors; i++) {
    let temp = document.createElement("div");

    temp.classList.add("result_row");

    if (rows)
      temp.style.height = new_h;
    else {
      temp.style.width = new_h;
      temp.style.float = 'left';
    }

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

const img = document.createElement('img');
img.src = "./images/homer.jpg";
img.id = "js_image"
img.padding = "4px";
img.style.position = 'absolute';
img.style.left = "50%";
img.style.transform = `translate(-50%, 0)`;

const add_img_btn = document.createElement("input");
add_img_btn.type = "button";
add_img_btn.value = "Add Image";
add_img_btn.style.marginRight = "100px";


add_img_btn.addEventListener('click', function() {
  if (!document.querySelector("#js_image")) {
    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;

    img.style.width = `${width - 4}px`;
    img.style.height = `${height - 4}px`;

    img.style.top = `${parseFloat(window.getComputedStyle(theDiv).marginTop) + 4}px`;

    document.querySelector("#result-container").appendChild(img);
  }
})


const rm_img_btn = document.createElement("input");
rm_img_btn.type = "button";
rm_img_btn.value = "Remove Image";
rm_img_btn.addEventListener('click', function() {
  if (document.querySelector("#js_image")) {
    document.querySelector("#result-container").removeChild(img);
  }
});

{
  let col = document.querySelector(".column");
  let row = document.createElement("div");
  row.classList.add("row");
  row.innerHTML = '<h2>Homer\'s Portrait</h2>\
                   <div class="subrow"></div>';
  // let c1 = document.createElement()
  row.lastChild.appendChild(add_img_btn);
  row.lastChild.appendChild(rm_img_btn);

  col.appendChild(row);
}

function updateImage() {
  let img = document.querySelector('#js_image');
  if (img) {
    let width = document.querySelector("#width").value;
    let height = document.querySelector("#height").value;

    img.style.width = `${width - 4}px`;
    img.style.height = `${height - 4}px`;
  }
}
