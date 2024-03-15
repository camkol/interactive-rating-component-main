# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](design/desktop-design.jpg)
![](design/active-states.jpg)
![](design/desktop-thank-you-state.jpg)

### Links

- Solution URL: [/interactive-rating-component-main.git](https://github.com/camkol/interactive-rating-component-main.git)
- Live Site URL: [Interactive Rating Component](https://camkol.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [Sass](https://sass-lang.com/) - Preprocessor scripting language
- Flexbox
- Mobile-Responsive Design
- JavaScript - Scripting language

### What I learned

Search the web for a code similiar to what I needed to accomplish the mission. Altered it to the required usage.

To see how you can add code snippets, see below:

```html
<h1>Some javaScript code I'm proud of</h1>
```

```js
icons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    icons.forEach((icon) => {
      icon.classList.remove("rating-selected");
    });

    btn.classList.add("rating-selected");

    window.stars = e.target.dataset.value;

    console.log("rating: " + window.stars);
  });
});
```

```js
submit.addEventListener("click", (e) => {
  if (window.stars) {
    select.innerText = `You selected ${window.stars} out of 5`;
    start.style.display = "none";
    thankYou.style.display = "block";
  } else {
    alert("Please select a rating");
  }
});
```

### Continued development

I will later update this with React once I finally fully have the grasps of it.

## Author

- Website - [Cameron Howze](https://camkol.github.io/)
- Frontend Mentor - [@camkol](https://www.frontendmentor.io/profile/camkol)
- GitHub- [@camkol](https://github.com/camkol)
- LinkedIn - [@cameron-howze](https://www.linkedin.com/in/cameron-howze-28a646109/)
- E-Mail - [cameronhowze4@outlook.com](mailto:cameronhowze4@outlook.com)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Do not reinvent the wheel. There is code and resources out there for what you need.
