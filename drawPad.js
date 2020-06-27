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
        div.addEventListener("click", function(){
            color = "white"; 
        })

        const reset = document.getElementById("reset"); 
        reset.addEventListener("click", function(){
            div.style.background = "white"; 
            color = "red"; 
        })

        container.appendChild(div); 
    }

}; 

createPixels(input); 

function canvasSize() {
    input = prompt("What size canvas would you like? Note: numbers higher than 100 will cause lag.")
    createPixels(input); 
}; 



const colorChoice = document.getElementById('colorChoice'); 
colorChoice.addEventListener("click", function () {
    color = prompt("What color do you want?"); 
})

function randomColor() {
    color = '#'+Math.floor(Math.random()*16777215).toString(16);
}
