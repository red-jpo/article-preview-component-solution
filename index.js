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
  }
});
