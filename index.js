let main_key = document.getElementById("main_key");
let new1 = document.querySelector(".new");
// new1.classList.remove("new");
document.addEventListener('keydown', function(e){
    main_key.textContent = "Pressed Key: " + e.key;
    // new1.classList.remove("new");
    new1.style.display = "flex";
    
    setTimeout(() => {
        new1.classList.add("new");
    });

        new1.textContent=  + e.keyCode;
   
});