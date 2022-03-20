<div align="center">
<h3>useState Exercises</h3>
</div>

#

Ex1: character counter (Twitter) -

See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.

[Solution - StackBlitz](https://stackblitz.com/edit/react-wvv3re)

#

Ex2: password match -

Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.

[Solution - StackBlitz](https://stackblitz.com/edit/react-zegdc8)

#

Ex3: alphanumeric password -

Password should contain a number. Show error if user misses character.

[Solution - StackBlitz](https://stackblitz.com/edit/react-3xbnba)

#

Ex4: disable submit -

- Add a submit button to password change field.
- Disable submit button if passwords don't match
- Clicking on submit should console the password field

[Solution - StackBlitz](https://stackblitz.com/edit/react-mqifdz)

#

Ex5: show password -

- Create a password reset form
- Put a button show password near the input element.
- Clicking should show password to the user.
- Text on show password should change to hide password when password is shown.
- Click on hide password and password goes back to hidden again.

[Solution - StackBlitz](https://stackblitz.com/edit/react-ggeftb)

#

Ex6: designer tool (mini figma) -

- Let user finalise the size of text she would like on the screen. 
- Two buttons + and - both will increase/decrease size by 8px. Show the size on the screen.

 IDEA You can make a small app around this which quickly selects you between fonts.

- Have prefixed sizes. Multiples of 8px.
- Have some selected best fonts.
- Tell which fonts are good for heading. which are good for text.
- Suggest pair of fonts which go together.
- Give user an option to copy the CSS. (Bonus feature)

[Solution - StackBlitz](https://stackblitz.com/edit/react-qgywce?file=src%2FApp.js)

#

Ex7: add to cart -

- Show a list of items with add to cart button
- Clicking on the button should add that item to cart.
- Show the cart below with items added.
- Clicking on the same item twice should add more items in cart.
- CHALLENGE : increase the count of the item in cart without adding it to list.

[Solution - StackBlitz](https://stackblitz.com/edit/react-rdfipk?file=src%2FApp.js)

[Solution(Simplified) - StackBlitz](https://stackblitz.com/edit/react-zpgrsd?file=src%2Findex.js)

#

Ex8: switch tabs

- Make three components: Home, About, Profile.
- Put some text in the components
- Now, create three buttons with same name
- Clicking on the button should show that component
- UNDERSTANDING : this is kind of your own router, unless we get into router implementation.

[Solution - StackBlitz](https://stackblitz.com/edit/react-u8njar?file=src%2FApp.js)

#

Ex9: toast -

- Create a Toast Component
- Component should have two things
    - Text
    - Hide Button
- Create a button show toast
- Clicking on this button should show Toast
- Clicking on hide button on toast should hide the toast
- UNDERSTAND : how callbacks can be passed to control state from parent component.
- CHALLENGE :
    - Create different type of toasts: Error, Success, Warning etc.
    - Differentiate your toast by just a prop and the design should change.

[Solution - StackBlitz](https://stackblitz.com/edit/react-3twgod?file=src%2FToast.js)

#

Ex10: todo/strikethrough -

- Write a TODO app
- Add TODOs from input
- Clicking on a TODO should complete it using strikethrough
- Clicking again should remove the strikethrough.

<!-- [Solution - StackBlitz]() -->

#

Ex11: dark mode - 

- Create a toggle dark mode button
- Clicking on the button should change background and text color and toggle between dark and light mode

[Solution - StackBlitz](https://stackblitz.com/edit/react-mostt7)

#
