
function buttonAnimation(){
    let activeButton = document.querySelector(".nav-pills .nav-link.active");
 
    activeButton.classList.add("pressed");
 
    setTimeout(function(){
       activeButton.classList.remove("pressed");
 
    }, 100);
 
 }

 document.addEventListener("select", function(e){
    let buttonInnerHTML = this.innerHTML;

    buttonAnimation(buttonInnerHTML);
 
    buttonAnimation(e.key);
 })