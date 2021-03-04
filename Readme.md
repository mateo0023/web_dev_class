This is my notes and assignments for an introductory web development class.

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
  .fl-left{
  	width: 50%;
  	float: left;
  }
  
  .fl-right{
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

## Scope & Variables

* `var`: it has a global scope
* `let`: uses local scope
* `const`: uses local scope. You can still modify the object, but you cannot reassign.

## Primitive types

* Boolean: 
* Number: only *floats*
* String: either with `'...'` or with `"..."`
* Symbol
* Null
* Undefined

## Accessing the DOM elements

You can access any property of a DOM object by just typing the name of the attribute:

`image.src` is the value of the `src` attribute of the DOM element.

### Class

Class is a special attribute, you have a `.classList` where you can `add` and `remove` values.

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


## Parse

Instead of just specifying the data type of the data you want to cast it to, use `parseInt` or something else.

## Template Strings

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



## Other Useful Things

* `document.querySelector('css_selector')` Will return the first element in the DOM that matches with the CSS Selector. *i.e.* `".className"` will return the first element with class name `"className"`
* `DOM_OBJECT.addEventListener(event, foo)`. This can be used to add an event listener for any element in the DOM.