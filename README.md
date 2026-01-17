# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
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

![Interactive Rating Component Screenshot](./screenshot-interactive%20rating%20component.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/GhostDawg1313/Interactive-Rating-Component)
- Live Site URL: [Live Demo](https://ghostdawg1313.github.io/Interactive-Rating-Component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript
- Google Fonts (Overpass)

### What I learned

Through this project, I strengthened my understanding of:

1. **State Management with Vanilla JS**: Implementing a two-state interface (rating and thank you) without a framework.

```js
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-ou-state');

submitButton.addEventListener("click", function () {
    if (selectedRating) {
        selectedRatingDisplay.textContent = selectedRating;
        ratingState.style.display = "none";
        thankYouState.style.display = "block";
    }
});
```

2. **Dynamic Button Selection**: Creating an interactive rating system with visual feedback.

```js
ratingButtons.forEach(button => {
    button.addEventListener("click", function () {
        ratingButtons.forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
        selectedRating = this.getAttribute("data-rating");
        submitButton.classList.add("active");
    });
});
```

3. **Responsive Design**: Implementing mobile-first design principles with media queries.

```css
@media (max-width: 375px) {
    .rating-state, .thank-ou-state {
        width: 100%;
        max-width: 327px;
        padding: 24px;
        box-sizing: border-box;
    }
}
```

4. **CSS Transitions**: Creating smooth hover effects for better user experience.

```css
.rating-btn:hover:not(.selected) {
    background-color: hsl(25, 97%, 53%);
    color: hsl(0, 0%, 100%);
}
```

5. **Circular Button Styling**: Using border-radius to create perfectly circular rating buttons.

```css
.rating-btn {
    background-color: hsl(213, 22%, 28%);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
}
```

### Continued development

Areas I want to continue focusing on in future projects:

- **Accessibility**: Adding ARIA labels and keyboard navigation support for better accessibility compliance
- **Animation**: Implementing smooth transitions between states using CSS animations or JavaScript libraries
- **Form Validation**: Adding more robust validation feedback and error handling
- **CSS Architecture**: Exploring CSS methodologies like BEM for better code organization
- **JavaScript Patterns**: Learning more about module patterns and clean code practices
- **Progressive Enhancement**: Ensuring the component works without JavaScript as a fallback

### Useful resources

- [MDN Web Docs - Event Handling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) - This helped me understand event delegation and DOM manipulation patterns.
- [CSS-Tricks - Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Great reference for implementing the button layout with flexbox.
- [Google Fonts](https://fonts.google.com/specimen/Overpass) - Used the Overpass font family for typography.

## Author

- Website - [William S. Houston Sr](https://github.com/GhostDawg1313)
- Frontend Mentor - [@GhostDawg1313](https://www.frontendmentor.io/profile/GhostDawg1313)
- GitHub - [@GhostDawg1313](https://github.com/GhostDawg1313)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the community for their helpful feedback and inspiration through their solutions.
