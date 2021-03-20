// ############## READ ONLY  ##############
/*
  I had to modify this. I just didn't like that it re-set all the colors.
*/

function updateColorChoosers() {
  const new_num = Math.abs(parseInt(document.querySelector('#num_colors').value));
  const container = document.querySelector('#colors_container');

  // Remove extra colors
  for (let i = new_num; i < container.childElementCount; i++)
    container.removeChild(container.lastChild);

  // Add new colors if needed
  for (let i = container.childElementCount; i < new_num; i++) {
    let temp = document.createElement("div");
    temp.classList.add("subrow")
    temp.innerHTML = '<label for="color_sel' + i + '">Color #' + (i + 1) + '</label>\
                      <input id="color_sel' + i + '" type="color"/>';

    container.appendChild(temp)
  }
}

document.querySelector('#num_colors').addEventListener('input', updateColorChoosers);
