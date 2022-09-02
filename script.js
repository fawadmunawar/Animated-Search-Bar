let search = document.getElementById("search-img");
let container = document.querySelector(".container");

let counter = 1;

search.addEventListener("click", () =>{
    counter++;
    if(counter%2 == 0){
        container.style.width = "300px";
        search.style.right = "280px";
    }else{
        container.style.width = "20px";
        search.style.right = "10px";
    }
    
    
})


// search.addEventListener("click", () =>{
//     container.style.width = "20px";
//     search.style.right = "10px";
// })