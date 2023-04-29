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

const authorInfo = document.querySelector(".author-info");
const authorShare = document.querySelector(".author-share");
const shareDiv = document.querySelector(".toggle-share");

function handleShareBtnClick() {
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

shareBtn.addEventListener("click", handleShareBtnClick);

function handleDocumentClick(event) {
  if (!shareBtn.contains(event.target) && !shareDiv.contains(event.target)) {
    authorInfo.style.display = "inline-flex";
    authorShare.style.backgroundColor = "white";
    shareDiv.style.display = "none";
  }
}

document.addEventListener("click", handleDocumentClick);

function handleResize() {
  if (window.innerWidth >= 768) {
    authorInfo.style.display = "inline-flex";
    authorShare.style.backgroundColor = "initial";
    shareDiv.style.display = "none";
  }
}

window.addEventListener("resize", handleResize);
