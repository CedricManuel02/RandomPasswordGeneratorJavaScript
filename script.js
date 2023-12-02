document.addEventListener("DOMContentLoaded", function () {
    // getting the id element from each tag
    const length = document.getElementById("length");
    const password = document.getElementById("password");
    const slider = document.getElementById("range-slider");
    const button = document.getElementById("generatePassword");
    slider.value = 15; // assigning a default value in the slider
    length.innerText = slider.value; // changing the text of the length id
    // assigning a password when the page is loaded
    password.value = passwordGenerator(slider.value);


    // functions for generating the password with a parameters of the length
    const passwordGenerator = (num) => {
        let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':";
        let passwords = "";
        for(let i = 0; i < Number(num); i++) {
            passwords += char.charAt(Math.random() * char.length);
        }
        return passwords;
    }
    //this is the slider input checking and updating the value of the length tag to display the current length
    slider.addEventListener("change", (event) => {
        length.innerText = event.target.value;
    });

    // Buttons for generating the random password 
    button.addEventListener("click", () => {
        if(slider.value < 15)
            alert("Length must be greater than to 15");
        else if(slider.value > 50)
            alert("Length must be less than to 50")
        else{
            password.value = passwordGenerator(slider.value);
        }
    });

});
