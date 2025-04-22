const share = document.querySelector(".share");
const share_2 = document.querySelector(".share-2");
const share_option = document.querySelector(".share-option");
const credit = document.querySelector(".credit");

share.addEventListener("click", () => {
    if (share_option.getAttribute("class") === "share-option") {
        share_option.setAttribute("class", "share-option-after-click");
        credit.setAttribute("class", "credit-after-click");
    }

    else {
        share_option.setAttribute("class", "share-option");
        credit.setAttribute("class", "credit");
    }
});


share_2.addEventListener("click", () => {
    share_option.setAttribute("class", "share-option");
    credit.setAttribute("class", "credit");
});