const mqDesktop = window.matchMedia("(min-width: 768px)");
const shareBtn = document.querySelector(".share-btn");
const authorInfo = document.querySelector(".author-info");
const authorShare = document.querySelector(".author-share");
const shareDiv = document.querySelector(".toggle-share");
const shareToDiv = document.querySelector(".share-to");

shareBtn.addEventListener("click", () => {
  if (mqDesktop.matches) {
    const shareToDivStyle = window.getComputedStyle(shareToDiv);
    const display = shareToDivStyle.getPropertyValue("display");

    shareToDiv.style.display = display === "none" ? "flex" : "none";

    document.addEventListener("click", (e) => {
      /*
      In the syntax object.method("argument", function), object is the object that the method belongs to, method is the name of the method, and argument is where you would add any necessary arguments for the method. The function parameter is a callback function that will be executed when the method is called.
      */
      const shareBtnClicked = shareBtn.contains(e.target);
      /*
      checks if the target element (the element that triggered the event) is contained within the shareBtn element, and assigns the result (true or false) to the shareBtnClicked variable.
      */
      const shareToDivClicked = shareToDiv.contains(e.target);
      /*
      e.target refers to the element that triggered the event. In this case, it refers to the element that was clicked inside the document. When the click event occurs, the browser creates an event object that contains information about the event, such as the type of the event, the target element, etc.

      So e.target represents the HTML element that was clicked and caused the event to occur. It's used to check whether the click occurred inside the shareBtn or shareToDiv, which helps determine whether to hide or show the shareToDiv element.
      */
      if (!shareBtnClicked && !shareToDivClicked) {
        /*
        "if shareBtnClicked is false AND shareToDivClicked is false, then...". The && operator is the logical AND operator, which means that both conditions must be true for the whole expression to evaluate as true. The ! operator in front of each condition negates it, so it means "if shareBtnClicked is NOT true AND shareToDivClicked is NOT true, then..."
        */
        shareToDiv.style.display = "none";
      }
      /*
if the user clicks on the shareBtn when the shareToDiv is being displayed the shareToDiv display property is also set to "none"

because the display property of the shareToDiv element is set to "flex" (or some other value) when it is displayed.

The code inside the if statement only checks the current value of the display property and toggles it between "none" and its current value. So, if the shareToDiv element is already displayed (with a display value of "flex" or something else), and the user clicks on the shareBtn, the display property will be set to "none" and the shareToDiv element will be hidden.
*/
    });
  } else {
    if (authorInfo.style.display !== "none") {
      //If the display style property of authorInfo element is not equal to the string 'none'...
      authorInfo.style.display = "none";
      authorShare.style.backgroundColor = "hsl(217, 19%, 35%)";
      shareDiv.style.display = "inline-flex";
    } else {
      authorInfo.style.display = "inline-flex";
      authorShare.style.backgroundColor = "white";
      shareDiv.style.display = "none";
    }
  }
});

/*
First, the code checks whether the `mqDesktop` media query matches the current screen size using the `matches` property. If the media query matches (i.e., if the screen is desktop-sized), the code executes the code block inside the if statement.

The first line inside the if statement gets the computed style of the `shareToDiv` element using the `window.getComputedStyle()` method and assigns it to the `shareToDivStyle` constant.

The second line gets the value of the `display` property of the `shareToDivStyle` object using the `getPropertyValue()` method and assigns it to the `display` constant.

The third line sets the `display` property of the `shareToDiv` element to either `"flex"` or `"none"` based on the `display` value. If the `display` value is `"none"`, the code sets the `display` property to `"flex"`, and if the `display` value is `"flex"`, the code sets the `display` property to `"none"`. This toggles the visibility of the `shareToDiv` element.

The fourth line adds a click event listener to the `document` object using the `addEventListener()` method. This event listener listens for click events that occur anywhere on the document.

The function passed as the second argument to the `addEventListener()` method executes whenever a click event occurs on the document. The function receives an event object as its argument, which we can use to get information about the event.

Inside the function, the code checks whether the click event occurred on the share button or the share-to div using the `contains()` method. The `contains()` method checks whether an element contains another element as its descendant.

If the click event did not occur on the share button or the share-to div, the code sets the `display` property of the `shareToDiv` element to `"none"`. This hides the `shareToDiv` element when the user clicks anywhere else on the document.

That's it! This code block toggles the visibility of the `shareToDiv` element and hides it when the user clicks anywhere else on the document.

the second block of code is executed when the media query condition is not satisfied, which means the viewport width is less than 768 pixels. It handles the display of the author information section and the share button section.

If the author information section is currently displayed (meaning its display property is not set to "none"), it hides the author information section, changes the background color of the share button, and displays the share button section.

Otherwise, if the author information section is currently hidden (meaning its display property is set to "none"), it shows the author information section, changes the background color of the share button to white, and hides the share button section.

Overall, this block of code toggles the display of the author information and share button sections based on their current visibility state, and adjusts the background color of the share button accordingly.

*/

/*
this code adds the functionality for the click outside of the shareDiv and shareBtn to change the style display of the shareDiv to none.
although I see it working and can understand the functions I'm not sure I understand how or why. so I'll not use it



const mqDesktop = window.matchMedia("(min-width: 768px)");
const shareBtn = document.querySelector(".share-btn");
const authorInfo = document.querySelector(".author-info");
const authorShare = document.querySelector(".author-share");
const shareDiv = document.querySelector(".toggle-share");
const shareToDiv = document.querySelector(".share-to");

shareBtn.addEventListener("click", () => {
  if (mqDesktop.matches) {
    const shareToDivStyle = window.getComputedStyle(shareToDiv);
    const display = shareToDivStyle.getPropertyValue("display");

    shareToDiv.style.display = display === "none" ? "flex" : "none";

    document.addEventListener("click", (e) => {
      const shareBtnClicked = shareBtn.contains(e.target);
      const shareToDivClicked = shareToDiv.contains(e.target);
      if (!shareBtnClicked && !shareToDivClicked) {
        shareToDiv.style.display = "none";
      }
    });
  } else {
    if (authorInfo.style.display !== "none") {
      authorInfo.style.display = "none";
      authorShare.style.backgroundColor = "hsl(217, 19%, 35%)";
      shareDiv.style.display = "inline-flex";
    } else {
      authorInfo.style.display = "inline-flex";
      authorShare.style.backgroundColor = "white";
      shareDiv.style.display = "none";
    }

    function handleDocumentClick(event) {
      if (
        !shareBtn.contains(event.target) &&
        !shareDiv.contains(event.target)
      ) {
        authorInfo.style.display = "inline-flex";
        authorShare.style.backgroundColor = "white";
        shareDiv.style.display = "none";
      }
    }

    document.addEventListener("click", handleDocumentClick);
  }

  function handleResize() {
    if (window.innerWidth >= 768) {
      authorInfo.style.display = "inline-flex";
      authorShare.style.backgroundColor = "initial";
      shareDiv.style.display = "none";
    }
  }

  window.addEventListener("resize", handleResize);
});
*/
