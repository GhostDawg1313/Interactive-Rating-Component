document.addEventListener("DOMContentLoaded", function () {
    const ratingButtons = document.querySelectorAll(".rating-btn");
    const submitButton = document.querySelector(".submit-btn");
    const ratingState = document.querySelector(".rating-state");
    const thankYouState = document.querySelector(".thank-ou-state");
    const selectedRatingDisplay = document.getElementById("selected-rating");
    let selectedRating = null;
    
    // Add click event listeners to rating buttons
    ratingButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'selected' class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove("selected"));
            
            // Add 'selected' class to clicked button
            this.classList.add("selected");
            
            // Store the selected rating
            selectedRating = this.getAttribute("data-rating");
            
            // Activate the submit button
            submitButton.classList.add("active");
        });
    });
    
    // Add click event listener to submit button
    submitButton.addEventListener("click", function () {
        if (selectedRating) {
            // Display selected rating
            selectedRatingDisplay.textContent = selectedRating;
            
            // Hide rating state and show thank you state
            ratingState.style.display = "none";
            thankYouState.style.display = "block";
        }
    });
});