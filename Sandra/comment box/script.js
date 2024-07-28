document.addEventListener("DOMContentLoaded", function() {
    // Function to create the popup element
    function createPopup() {
        const popup = document.createElement("div");
        popup.id = "popupMessage";
        popup.style.display = "none";
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.backgroundColor = "#4CAF50";
        popup.style.color = "white";
        popup.style.padding = "20px";
        popup.style.borderRadius = "5px";
        popup.style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.1)";
        popup.style.zIndex = "1000";
        popup.style.textAlign = "center";

        const img = document.createElement("img");
        img.src = "success.png"; // Ensure this path is correct
        img.alt = "Success";
        img.style.display = "block";
        img.style.margin = "0 auto";
        img.style.maxWidth = "100px";
        img.style.height = "auto";

        const message = document.createElement("p");
        message.textContent = "Your comment has been submitted successfully!";

        popup.appendChild(img);
        popup.appendChild(message);
        document.body.appendChild(popup);
    }

    // Create the popup on DOM content loaded
    createPopup();

    // Function to show the popup
    function showPopup() {
        const popup = document.getElementById("popupMessage");
        popup.style.display = "block";
        setTimeout(() => {
            popup.style.display = "none";
        }, 3000); // Hide after 3 seconds
    }

    // Add event listener to the form submission
    const commentForm = document.querySelector(".comment-form"); // Use querySelector to match the class
    commentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission
        showPopup();
    });

    // Sidebar toggle functionality
    let btn = document.querySelector('#btn');
    let sidebar = document.querySelector('.sidebar');
    btn.onclick = function() {
        sidebar.classList.toggle('active');
    };
});
