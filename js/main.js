const subtract = document.querySelector("#subtract")
const add = document.querySelector("#add")
const arm = document.querySelector("#arm")

add.addEventListener("click", (event) => {
   arm.value++
})

subtract.addEventListener("click", (event) => {
    if(arm.value > 0) {
        arm.value--
    }
})