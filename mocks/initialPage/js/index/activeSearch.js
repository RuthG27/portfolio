 /* input search*/
 const search = document.querySelector(".search-toolbar")
console.log(search)
const button = document.querySelector("#input-menu");
console.log(button)
button.addEventListener("click", showHide)
function showHide() {
 if (search.classList.contains("is-motion")) {
    search.classList.remove("is-motion");
    } else {
    search.classList.add("is-motion");
    }

}
