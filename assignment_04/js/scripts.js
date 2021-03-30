const form = document.querySelector("#main-form");

form.addEventListener("submit", (ev) => {
    if (validate(ev)) {
        // Perform the changes to the output.
        ev.preventDefault();
    } else {
    }
})

const formItems = form.elements;

const name = formItems["name"];
const username = formItems["username"];
const password = formItems["password"];
const age = formItems["age"];
const bio = formItems["bio"];
const udogs = formItems["udogs"];
const topdog = formItems["topdog"];

name.required = "true";
username.required = "true";
username.min = 5;
password.required = "true";
password.min = 6;
age.required = "true";
age.min = 1;
bio.required = "true";
topdog.required = "true";

// Will perform all the checks
// and return wether the form validated or not
function validate(event) {
    const form = event.target;
    if (form["name"].value[0] !== form["name"].value[0])
        return false;
    if (!
        (form['bio'].value.toLowerCase().includes('fsu')
            ||
            form['bio'].value.toLowerCase().includes('florida state')))
        return false;
    if (!form["udogs"].checked && form['topdog'].value !== "0")
        return false;
}