(() => {
    const form = document.querySelector("#main-form");
    const output = document.querySelector("#output");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validate(form)) {
            // Get the name of the favourite dog race
            let fav_dog = formItems['topdog'].children[formItems['topdog'].value].innerHTML
            let gender = document.querySelector("#genders :checked").nextSibling.textContent

            output.innerHTML = `<p>
                            Your name is ${formItems["name"].value}<br>
                            Your username is ${formItems["username"].value}<br>
                            Your password has ${formItems["password"].value.length} characters<br>
                            Your age is ${formItems["age"].value}<br>
                            Your bio: <i>${formItems['bio'].value}</i><br>
                            Your gender is ${gender}<br>
                            ${
                                    // Pretty self explanatory
                                    formItems['topdog'].value !== '0' ?
                                        `Your favorite dog breed is ${fav_dog}`
                                        : "You don't like dogs"
                                    }
                            </p>`
        }
        else {
            output.innerHTML = "Form reset after failed submission"
        }
    })

    // form.onsubmit = () => {
    //     if(!validate(form))
    //         output.innerHTML = "Form reset after failed submission"
    // }

    const formItems = form.elements;

    // Set the HTML rules for form validation
    formItems["name"].required = "true";
    formItems["name"].pattern = "[A-Z].*";
    formItems["name"].title = "Must begin with an uppercase letter";
    formItems["username"].required = "true";
    formItems["username"].pattern = ".{5,}"
    formItems["username"].title = "The username must be at least 5 characters";
    formItems["password"].required = "true";
    formItems["password"].pattern = ".{6,}";
    formItems["password"].title = "The password must be at least 6 characters";
    formItems["age"].required = "true";
    formItems["age"].min = 1;
    formItems["bio"].required = "true";
    formItems["topdog"].required = "true";
    
    formItems["bio"].addEventListener('input', checkBio);
    formItems["udogs"].addEventListener('input', checkDogs);
    formItems["topdog"].addEventListener('input', checkDogs);
    
    // Will perform all the checks
    // and return wether the form validated or not
    function validate(form) {
        // textarea don't support pattern matching
        if (!checkBio())
            return false;

        // Check the dog situation
        if(!checkDogs())
            return false;
        return true
    }

    // Set the error messages return wether there's an error or not
    function checkBio() {
        if (!
            (form['bio'].value.toLowerCase().includes('fsu')
                ||
                form['bio'].value.toLowerCase().includes('florida state'))) {
            formItems['bio'].setCustomValidity("It must include either FSU or Florida State");
            return false;
        }
        else {
            formItems['bio'].setCustomValidity("");
            return true;
        }
    }

    function checkDogs(){
        if (!form["udogs"].checked && form['topdog'].value !== "0"){
            formItems['topdog'].setCustomValidity("You said you don't like dogs");
            return false;
        }
        else {
            formItems['topdog'].setCustomValidity("");
            return true;
        }
    }
})();