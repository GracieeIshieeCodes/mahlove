// Function to open the modal
function openModal() {
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const audio = document.getElementById("background-music"); // Select the audio element

    modal.style.display = "block";
    modalContent.style.animation = "popUp 0.5s ease forwards";

    if (audio) {
        audio.play(); // Play the audio when the modal opens
    }
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    const modalContent = document.querySelector(".modal-content");
    const audio = document.getElementById("background-music"); // Select the audio element

    modalContent.style.animation = "slideUp 0.5s ease forwards";
    setTimeout(() => {
        modal.style.display = "none";
        if (audio) {
            audio.pause(); // Pause the audio when the modal closes
            audio.currentTime = 0; // Reset audio to the beginning
        }
    }, 500); // Match this duration with slideUp animation duration
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}
