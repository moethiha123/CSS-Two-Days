let bars = document.querySelector("#bars")
let navlinks = document.querySelector(".nav-links")
bars.addEventListener("click", () => {
    navlinks.classList.toggle("toggle")
    bars.classList.toggle("fa-times")
})

// console.log('---------------');
// console.log(navlinks);
// console.log('========================');