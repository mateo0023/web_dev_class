This is my notes and assignments for an introductory web development class.

## Outline

1. Assignments
   1. [Homer Page](https://mateo0023.github.io/web_dev_class/assignment_01)
   2. [FSU Homepage](https://mateo0023.github.io/web_dev_class/assignment_02)
   3. [Simple Style Changes w JS](https://mateo0023.github.io/web_dev_class/assignment_03)
   4. [Form Validation (using built-in functionality)](https://mateo0023.github.io/web_dev_class/assignment_04)
2. [HTML](#HTML)
3. [CSS](#CSS)
4. [JavaScript](#JavaScript)
5. [Servers](#Servers)

## Elements of the Web Network

* <u>Hosts</u>: computers, servers....
* <u>Communication links</u>: Wired, wireless
* <u>Networking Devices</u>: routers and other connecting devices

# HTML

## Tags

* Tables

  ```
  <tr>
  ```

### Structural Tags

| `tag` | Definition |
| -------- | ---------------------------------- |
| `header` | Defines the header of the document section |
| `nav` | Include the navigation links. Things like *Home, About Us, etc.* |
| `article` | Defines the article of the document |
| `section` | Useful for breaking the code into parts |
| `main` | Main content of the document |
| `footer` | |

  ### `head`

Metadata about the website. The following tags go inside the `head` tag:

  * `title`
  * `style` used for writing the CSS Style
  * `link` used to link for external CSS Files and JavaScript Files
        * `<link rel="stylesheet" href="style.css">`
  * `meta` used for adding other metadata used in browsers and search engines.
      * `charset="UTF-8"` Used to define the character set
      * `name="description"`
      * `name="keywords"`
      * `name="author"`
      * `<meta name="viewport" content="width=device-width, initial-scale=1.0">` It sets the width of the website to be the same as the screen and the zoom level to be 1.0.

## Forms

[Forms](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) are what they sound like. For form validation, head [here](#Form validation)

### [Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

They are used to get the user-input.

#### They have different types (`type="..."`)

* `text`
* `email` used to get email.
* `hidden` an element that is not shown
* `date` used to get a date.
  * `max` attribute has the max of the range (`max="yyyy-mm-dd"`)
  * `min`
* `password`
* `submit` a button used to send the form.
* [a lot more!](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

#### `name`

Used to send a name/value pair when submitting the form. This makes processing the data so much easier!!

#### `placeholder`

Used for the hint of the input attribute.

#### maxlength

The max number of characters.

### [Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types)

Used to select an item from a drop-down menu.

It has `name` and then it contains a lot of `<option>` elements.

## Other HTML Info

### Links

You can link with the `<a></a>` tag or link with to an ID. Like so `<a href=file_name#ID>LINK INDO</a>`. The `file_name` is not necessary of linking within the same file.

### Boxes

* **<u>Inline boxes</u>** are used for styling instead of layout
* **<u>Block boxes</u>** are used for layout of elements.
* `display`: this can be used to override many of these properties.

# CSS

```css
* { ... } /* Everything (Universal Selector) */

tag {
	item: style
}

.class { ... }

#id { ... }
```

### Grouping

It makes one group, so you don't need to have the three separate `{ ... }`.

```css
tag, tag2, tag3 { ... }
```

### Nesting

It applies to elements inside other elements. In the example, is for elements with tag2 inside elements of tag1.

```css
tag1 tag2 { ... }

/* Slects all tag2, whose parent is tag1 */
tag1 > tag2 { ... }
```

For more information, visit [w3schools' reference](https://www.w3schools.com/cssref/css_selectors.asp)

## Pseudo-classes

Useful for styling elements depending on their status

```css
slector:pseudo-class { ... }
```

* `:link` non-visited link
* `:visited` visited link
* `:hover` when the mouse is over it
* `:active` when the current element is active
* *Even more*

## `display:`

The display property is used to change how the items are displayed.

### Values

* `block`: to make the element act like a block.
* `inline`: pretty similar to `block` but with the opposite effect.
* `flex`: used to make the items inside of it have the different flows. ([see more](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))

To see which one to use, head to [float vs inlineblock vs flexbox](https://codepen.io/ooker/pen/donHc).

## Box Model

![Box Model](https://hackernoon.com/hn-images/1*2jZwpWH9XO_QllhEpyGqMA.png)

### Padding/Margin

Padding will be inside the border while margin will be applied to the outside of the object.

`padding: v h;`

`padding: top right bottom left;` see how it goes clockwise starting at 12.

* Inline elements don't have vertical components for margins, but they do for padding (somehow)

#### Margin

`auto` will occupy as much space as possible. Useful for centering things.

### Border

`border: thickness style color;`

* <u>**Style**</u>:
  * solid
  * dotted

### Background

* `background-size` it resizes the background:
  * `cover` stretch so that everything is covered by it.
  * `h v` horizontal size and vertical size
  * `contain` shrink to fit and then repeat to cover all.
* `background-repeat`
  * `repeat-x` repeat along the width
  * `repeat` repeat vertically and horizontally
* `background-image` can be either an image or a *gradient*.

## Positioning

[`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

* <u>**Static**</u>: normal flow of elements

* <u>**Relative**</u>: will offset from the static positioning and leave the space that it would've occupied.
  * `left` distance to the left of the static position (move it to the right by ...)
  * `top` distance from the top (how much to move it down).
  
* <u>**Absolute**</u>: will position the elements on the document. Will not leave space on the document flow
  
  * `z-index` the higher value will be on top of the elements with lower `z-index`.
  
* **<u>Sticky</u>**: (`-webkit-sticky` and/or `sticky`) will be static if possible or fixed if scrolled outside of the positioning.

* <u>**Float**</u>: will move the element within its containing element as far as possible (to the specified direction). Text will wrap around the *inline* float element. **Always specify its width!**

  ```css
  #item {
  	width: 100px;
  	float: left;
  }
  ```

  It can be used to have two block elements side-by-side.

  ```css
  .fl-left {
  	width: 50%;
  	float: left;
  }
  
  .fl-right {
  	width: 50%;
  	float: right;
  }
  ```

* `clear`: will specify to which side, there will be no elements. `clear: left` will make sure there are no elements in to the left it. It will always move down to adjust.

## Shadow `.shadow`

```css
.shadow{
	-moz-box-shadow: 3px 3px 5px 6px #ccc;
	-webkit-box-shadow: 3px 3px 5px 6px #ccc;
	box-shadow: 3px 3px 5px 6px #ccc;
}
```

1. `h_offset`: >0 will move **right**
2. `v_offset`: >0 will move **down**
3. `blurr`(optional): 0, super sharp & >0 more blurred.
4. `radius`(optional): >0 increase the size of the shadow.
5. `color`: the color of the shadow.

## Overlay Menu

This is a menu that appears when you hover over something.

```html
<div class="parent">
    ...
	<div class="menu-block">...</div>
    ...
</div>
```

```css
              .menu-block { display: none;  }
.parent:hover .menu-block { display: block; }
```

This will cause the menu to appear when you place the cursor over the parent object.

# JavaScript

It is the only programming language natively supported on browsers.

The script can be embedded with the code `<script src="file.js" defer></script>`. The file is only downloaded from the server when this command is run!

* **defer** makes it so that the JS Code is run after the DOM is loaded.

JavaScript is a Just-in-Time (JIT) compiled language. Head [here](https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/) for a brief intro into JIT languages.

* You don't need to declare the functions before calling them.

## Variable Scopes

* `var`: it has a global scope
* `let`: uses local scope
* `const`: uses local scope. You can still modify the object, but you cannot reassign.

## Primitive types

* Boolean: 
* Number: only *floats*
* String: either with `'...'` or with `"..."`
* Symbol
* Null: like an empty
* Undefined: the variable never received a value


### Parse

Instead of just specifying the data type of the data you want to cast it to, use `parseInt` or something else.

### Template Strings

```javascript
let a = 2;
let b = 3;

`The variable a has a value of ${a}.`
// The variable a has a value of 2.

`a + b = ...
${a} + ${b} = ${a + b}`
// a + b = ...
// 2 + 3 = 5
```

## Accessing the DOM elements

* `document.querySelector(CSS_selctor)` returns the first occurrence.
* `document.querySelectorAll(CSS_selctor)` returns a list of all occurrences.

You can access any property of a DOM object by just typing the name of the attribute:

`image.src` is the value of the `src` attribute of the DOM element.

### Class

Class is a special attribute, you have a `.classList` where you can `add` and `remove` values. This is changing the CSS Styles, class are not attributes, but CSS Rules.

```javascript
{
	// Gets the first element with ID 'my-image'
    const img = document.querySelector("#my-image");

    // Will add the class attribute 'active' to the element
    img.classList.add("active");

    // Will remove the class attribute 'hidden' from the element
    img.classList.remove("hidden");
} // img gets deleted
```

#### Methods

* `add`

* `remove`

* `contains`

* `toggle`: will add or remove the passed attribute accordingly. Basically:

  ```javascript
  function toggle(self, x){
      if(self.contains(x))
          self.remove(x);
      else
          self.add(x);
  }
  ```

### Adding elements to the DOM

1. Create the element using JS. This can be done with some functions like:

   * `document.createElement(tag)`: this will return an element. Keep in mind, this element is not yet in the DOM.
   * `document.createTextNode("text")`: will return a text to place inside an element (h1, p, ...)

   ```javascript
   let newP = document.createElement('p')
   let newP_text = document.createTextNode("Here comes the sun...")
   newP.appendChild(newP_text)
   ```

   

2. Add the element to the DOM by inserting it into a DOM element.

   * `el.appendChild(newP)`: will insert `newP` as the last child of `el`

     ```javascript
     let el = document.querySelector("#my-el")
     
     document.appendChild(newP)
     ```

   * `el.insertBefore(newP, existing)`: will insert the `newP` before the `existing` child of `el`

     ```javascript
     let el = document.querySelector("#my-el")
     let existing = document.querySelector("#my-el p")
     
     document.insertBefore(newP, existing)
     ```

#### Removing

`parent.removeChild(child)`

#### Replace

`parent.replaceChild(new, old)`

### Other Useful Things

* `document.querySelector('css_selector')` Will return the first element in the DOM that matches with the CSS Selector. *i.e.* `".className"` will return the first element with class name `"className"`
* `DOM_OBJECT.addEventListener(event, handler)`. This can be used to add an event listener for any element in the DOM. So that when the `event` gets triggered, the function `handler` will be called.

## Events

For more information see the [intro to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#adding_and_removing_event_handlers).

### Add event listeners

```javascript
const btn = document.querySelector("button")

btn.addEventListener('click', function (e) { ... })
```

This will call the specified function when the button is clicked and will pass the Event object.

### Remove event listeners

You can remove any event listener, however, you need to place a globally defined function in the `handler` argument.

```javascript
const btn = document.querySelector("button")

btn.removeEventListener('click', handler);
```

Remove the `handler` function from the list of functions that get called when you click on the button. 

### Some Events

They are case sensitive strings.

* `focus` when an element gains focus.
* `blut` when an element loses focus.
* `click` when an element is clicked and released.
* `submit` when a form element is submitted.
* [Even more](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)

### Event object

There are [multiple subclasses](https://developer.mozilla.org/en-US/docs/Web/Events) for events with added properties, however, there are some common to all:

* `self.target` is the read only DOM element that triggered the event.
* [more here](https://developer.mozilla.org/en-US/docs/Web/API/Event#properties)

## Form validation

Head here for [HTML](#Forms)

You can add an event listener to the Submit button or when the values are changed. For a full reference, head over to [MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript)

## JSON

JSON is a JavaScript object notation. An object written in text.

```json
{
    "property": "value",
    "sub-object": {
	    "property": "value",
        "p2": "v2"
    },
    "list": [
        {
            "itemNum": "0",
            "name": "val1"
        },
        {
            "itemNum": "1",
            "name": "val3"
        }
    ]
}
```



# Servers

Since servers just listen to and execute HTTP Requests, they aren't tied to a specific programming language. They just need to be able to read the HTTP protocol requests. So it is basically: get request + data **and** move/get data accordingly.

What they must do:

1. Server listens for connections
2. Server receives a connection
3. Server starts to process the connection, but keeps listening for more at the same time
4. Server parsers the HTTP request, and obtains the data contained in it
5. (*sometimes*) Server uses the data to do something (e.g., search in a database)
6. Server prepares a message body
7. Server prepares a HTTP response, and attaches the message body to it
8. Server sends the response to the user 
9. Back to 1

Since all of these steps are standard (except 5), there are Web Frameworks in multiple programming languages. Meaning that as a back-end developer you generally just need to implement step 5 and other processes that you might need.

**Separate resources. Don't give the entire functionality of a resource across the server. Create a module and share some of its functions**

```javascript
const db = // Some database
 
// They won't have access to the db instance.
module.exports = {
    addUser: (data) => {
        // Validate data
        // Do something with the data.
    }
}
```

## HTTP Request

There are two main types of requests in the HTTP protocol:

1. GET Request
2. POST Request
3. [more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### GET Request

Used to request data from a resource, usually a HTML files. The GET method is what your browser stores in the history and bookmarks (they are what we call URLs)

`url/...?key=value&key=value&....`

* Resource:

  The first part is the resource eg: `google.com/search`

* Query, *key, value pairs*

  The second part (after the `?`) eg: `q=monkey`

`google.com/search?q=monkey`

### POST Method

Used to send and update data on a server.

### HTTP Response

It contains:

1. Status Line

   `HTTP/1.1 200 OK`

2. General Headers

   `Date: ....`

   `Connection: status`

3. Response Headers

   `Server: ...`

   `Accept-Ranges: ...`

4. Entity Headers

   `Content Type: text/html`

   `Content-Length: ...`

   `Last-Modified: ...`

5. Body/payload

## Express

[Express](https://expressjs.com/) is a web framework for [Node.js](https://nodejs.org/en/).

```javascript
const express = require('express')
const app = express();

// This line configures express in order to use all the files in the public
// folder as the files that compose the web page
app.use(express.static('/public'));

// Setting up a GET handler (for a specific address)
app.get('/address/:data', (req, res) => {
    # Here it gets the value of :data
    const data = req.params.data
    
    // Do something here with the result.
})

// Default handler
app.get('*', (req, res) => {
    // Depends on the application, generally a 404
    res.send("404 - Subdomain does not exist");
})

app.post('/upload-file', (req, res) => { ... })

// Return the connection
const server = app.listen(portNumber, afterFunction)
```

### Form Handling

Forms are inside the `req.query`.

```html
<form action="/my_form" method="get">
    <input name="first_name" type="text"/>
    <input name="last_name" type="text"/>
    <input name="dob" type="date"/>
    <input type="submit" value="Submit the form"/>
</form>
```

```javascript
app.get('/my_form', (req, res) => {
	// All the form by names
	const {
        first_name,
        last_name,
        dob,
    } = req.query;
})
```

### Templates - EJS

There are multiple template offerings for Express.js, one of them is [EJS](https://www.npmjs.com/package/ejs).

```ejs
<!-- dashboard.ejs -->

<% if (userName) { %>
  <h2><%= userName %></h2>
<% } %>
<img src="<%= (userImage) ? userImage : "/imgs/defaultImage.jpg" %>" width="20" height="20">
```



```javascript
const express = require("express");
const app = express();


// Setting view engine to ejs
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // Process req and get data
    const user_name = userData.name;
    const user_img = userData.image;
    
    // Send the rendered HTML
    res.render("dashboard.ejs", {userName: user_name, userImage: user_img})
})
```



## Flask

[Flask](https://palletsprojects.com/p/flask/) is a web framework API for Python.

```python
from Flask import Flask, request, jsonify , send_from_directory
import json

# Makes the app, using the '/static' path as the "/public" in Express.js
app = Flask(__name__, static_url_path='/static')

if __name__ == '__main__':
    # By default it starts at 127.0.0.1:5000
	app.run()
    
@app.route('/address/<var:var>')
def send_index(var):
    request # This is the request object
    print(var)
    
    # Send the index file from ./static
    
    # Returns the actual data, a string, file or object
	return app.send_static_file('index.html')

```

### Form Processing

```python
# Will get triggered for GET and POST
# Default is just GET
@app.route('/form', methods=['GET', 'POST'])
def cool_form_fandler():
    if request.method == "GET":
        data = {
            "first_name": request.args.get("first_name"),
            "last_name": request.args.get("last_name"),
            "dob": request.args.get("dob"),
            "message": "You sent this form with a GET request"
        }
        # Creates a JSON from the dictionary
        return jsonify(data)
    else:
        # Dictionary from JSON
        data = json(request.data)
        response = {
            "first_name": data["first_name"],
            "last_name": data["last_name"],
            "dob": data["dob"],
            "message": "You sent this form with a POST request"
        }
    	return jsonify(response)
```

### Template - [Jinja2](https://jinja.palletsprojects.com/en/2.11.x/)

It comes with `pip install Flask`

#### Syntax

* **<u>Inline</u>:** `{{ var }}` will leave the value of `var` inline.

* **<u>Block</u>:** `{% if %} ... {% endif %}`

* **<u>Data</u>:** you can pass variables to the template as optional arguments in the `render` function.

  *For example*: `render_template('file.jtml', foo=31)` will make `foo` have a value of 31 inside `file.html`

* **<u>Filters</u>:** Jinja2 has built-in [filters](https://jinja.palletsprojects.com/en/2.11.x/templates/#builtin-filters) with the syntax `foo|filter`. These filters are used for formatting. For example `messages|length` is equivalent to `len(messages)`

#### Example

```jinja2
<!-- dashboard.html -->

<body>
	<h2 >Hello {{ name }}</h2>
	{% if messages|length == 0 %} 
		<p> There are no messages </p>
	{% else %}
        {% for i in range(messages|length) %}
        	<p> {{ messages[i] }} </p>
        {% endfor %}
	{% endif %}
</body>
```

```python
@app.route('/home', methods=['GET'])
def make_home:
    username = getUser( ... )
    data = getUserData( ... )
    
	return render_template('dashboard.html', name=username, messages=data)
```



## PHP

Server-side processing language.

1. You need to install a webserver, commonly [Apache](https://httpd.apache.org/)
2. Add PHP to the system ([instructions](https://www.php.net/manual/en/install.php))

**Alternatively**, you can download [XAMPP (cross-platform)](https://www.apachefriends.org/download.html) or LAMPP (Linux) which is a one-stop solution for PHP.

