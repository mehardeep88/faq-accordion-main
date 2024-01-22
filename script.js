/* let para = document.querySelectorAll("li p");
para.forEach((p) => {
    const plus = document.querySelectorAll(".head img");
    let isExpanded = false;
    plus.addEventListener("click", () => {
        p.style.display = isExpanded ? "none" : "block";
        plus.src = isExpanded ? "assets/images/icon-plus.svg" : "assets/images/icon-minus.svg";
        isExpanded = !isExpanded;
        //para.forEach((p) => {
        //});
    });
}); */

let paraOpen = document.querySelectorAll("ul li p");

paraOpen.forEach(exp => {
    let listItem = exp.closest("li");
    let plusImg = listItem.querySelector("ul li .head img");
    plusImg.addEventListener("click", () => {
        exp.style.display = (exp.style.display==="none") ? "block" : "none";
        if (exp.style.display==="block") {
            plusImg.src = "assets/images/icon-minus.svg";
        }
        else {
            plusImg.src = "assets/images/icon-plus.svg";
        }
    });
});