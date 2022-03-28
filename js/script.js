const btn = document.querySelector(".aside_container span")
let aside_container = document.querySelector(".aside_container")
let animation1  = document.querySelectorAll(".first_animation >div");
console.log(animation1)
btn.onclick=function(){
    if (aside_container.classList.contains("active1")){
        aside_container.classList.remove("active1")
    }
    else{
        aside_container.classList.add("active1")
    }
}
