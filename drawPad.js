let input = 16;
let color = "red";



function createPixels(gridNum){
    let num = gridNum * gridNum; 
    container.setAttribute("style", `grid-template-columns: repeat(${gridNum}, auto);`); 
    for (let i = 1; i <= num; i++) {
        const div = document.createElement("div"); 
        div.setAttribute("class", "container-grid"); 
        div.addEventListener("mouseover", function () {
            div.style.background = `${color}`; 
        }) 

        container.appendChild(div); 
    }

}; 

createPixels(input); 
 
const resetBtn = document.getElementById('reset'); 
resetBtn.addEventListener("click", function() {
    div.style.background = "white"; 

}); 

