const shareBtn = document.querySelector(".share-btn");
const shareToDiv = document.querySelector(".share-to");

shareBtn.addEventListener("click", () => {
  const shareToDivStyle = window.getComputedStyle(shareToDiv);
  const display = shareToDivStyle.getPropertyValue("display");
  shareToDiv.style.display = display === "none" ? "flex" : "none";
});

document.addEventListener("click", (e) => {
  const shareBtnClicked = shareBtn.contains(e.target);
  const shareToDivClicked = shareToDiv.contains(e.target);
  if (!shareBtnClicked && !shareToDivClicked) {
    shareToDiv.style.display = "none";
  }
});

/* its the second time i run into the issue of the first click not returning result, first I went tried to think my way around it when I was not actually sure what was causing it, I was able to solve it, but running into the issue a second time made me think, if its a common problem then it must have a common solution, i was right it was simply a matter of where the js was looking for that style. the reason is pretty simple: when you get a "style" property, it represents inline styles of that element. On fist click there is no inline style for "display", so else fork fires and sets inline style for "display" to "none" by using computed style, like so,   const shareToDivStyle = window.getComputedStyle(shareToDiv); the js passou a incluir styles from all sources (inline, internal, external, etc.).




Here's a more readable version of your text:

I encountered an issue where the first click wasn't returning a result. At first, I tried to solve the problem by thinking my way around it, but I wasn't actually sure what was causing it. I was able to fix it, but when I ran into the same issue a second time, I realized that if it's a common problem, there must be a common solution.

And I was right. It was simply a matter of where the JavaScript was looking for that style. The reason is pretty simple: when you get a "style" property, it represents the inline styles of that element. On the first click, there is no inline style for "display," so the else fork fires and sets the inline style for "display" to "none" by using computed style. I did this by including styles from all sources, such as inline, internal, external, etc., like this:

```
const shareToDivStyle = window.getComputedStyle(shareToDiv);
```




The issue was that on the first click, the JavaScript was not finding the inline style for the "display" property, which caused the code to execute the else branch and set the "display" property to "none". The solution was to use window.getComputedStyle() to get the styles from all sources, including inline, internal, and external stylesheets, and use that to set the "display" property. This ensures that the correct value for "display" is retrieved even if it is not defined inline.

Overall, it seems like a reasonable solution to the problem. Using window.getComputedStyle() is a common approach to get the computed style of an element, and it ensures that you get the correct values for all the styles applied to the element.

*/
