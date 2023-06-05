// ALL Stars to NodeList
let stars = document.querySelectorAll(".stars i");

//Thanks Message
let msg = document.querySelector("#msg");

// Loops through star Node list
stars.forEach((star, index1) => {

    // Function when click event triggers
    star.addEventListener("click", () => {

        //Loop through stars Nide list again
        stars.forEach((star, index2) =>{

            //Adding Color Stars
            if(index1 >= index2){
                star.classList.add("color-star");
                msg.innerHTML = "Thank You";
            } else{
                star.classList.remove("color-star");
            }
        });
    });
});