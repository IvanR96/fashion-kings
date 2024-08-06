let activeButton = document.querySelector(".nav-pills .nav-link.active");

let cartBtn = document.querySelector(".nav-link svg");


function buttonAnimation(){
 
    activeButton.classList.add("pressed");
 
    setTimeout(function(){
       activeButton.classList.remove("pressed");
 
    }, 100);
 
 }

 function cartAnimation(){
 
    cartBtn.classList.add("pressed");
 
    setTimeout(function(){
       cartBtn.classList.remove("pressed");
 
    }, 100);
 
 }
    

 activeButton.addEventListener("click", function(e){
    let buttonInnerHTML = this.innerHTML;

    buttonAnimation(buttonInnerHTML);
 
 })

 
 cartBtn.addEventListener("click", function(e){
    let btnInnerHTML = this.innerHTML;

    cartAnimation(btnInnerHTML);

    
 });


 