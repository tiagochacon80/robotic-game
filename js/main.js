const control = document.querySelectorAll("[data-control]")
const statistics = document.querySelectorAll("[data-statistic]")
const pieces = { 
    "arms": { 
        "strength": 29, 
        "power": 35, 
        "stamina": -21, 
        "speed": -5 
    },
    "shield": { 
        "strength": 41, 
        "power": 20, 
        "stamina": 0, 
        "speed": -20 
    }, 
    "cores":{ 
        "strength": 0, 
        "power": 7, 
        "stamina": 48, 
        "speed": -24
     }, 
    "legs":{ 
        "strength": 27, 
        "power": 21, 
        "stamina": -32, 
        "speed": 42
     }, 
    "rocket":{ 
        "strength": 0, 
        "power": 28, 
        "stamina": 0, 
        "speed": -2 
    }
 }

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        manipulatesData(event.target.dataset.control, event.target.parentNode)  
        updateStatistic(event.target.dataset.piece)      
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

function updateStatistic(piece) {   

    statistics.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + pieces[piece][element.dataset.statistic]        
    })
}

