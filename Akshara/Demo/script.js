const signUpBtnLink=document.querySelector('.signUpBtn-link');
const signInBtnLink=document.querySelector('.signInBtn-link');
const wrapper=document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click',() => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click',() => {
    wrapper.classList.toggle('active');
});


 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signInForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(this);

        // Send form data to signIn.php using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "signin.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Handle response from signIn.php (if needed)
                console.log(xhr.responseText);
            }
        };
        xhr.send(formData);
    });

    document.getElementById("signUpForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(this);

        // Send form data to signUp.php using AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "signup.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Handle response from signUp.php (if needed)
                console.log(xhr.responseText);
            }
        };
        xhr.send(formData);
    });
});


    