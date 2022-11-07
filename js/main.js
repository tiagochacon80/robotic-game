const control = document.querySelectorAll("[data-control]")

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulatesData(event.target.dataset.control, event.target.parentNode)        
    })
})

function manipulatesData(operation, control) {
    const piece = control.querySelector("[data-counter]")

    if(operation === "-") {
        piece.value = parseInt(piece.value) - 1
    } else {
        piece.value = parseInt(piece.value) + 1
    }
}

