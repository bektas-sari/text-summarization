document.addEventListener("DOMContentLoaded", function() {
    const textArea = document.getElementById("text");
    const clearButton = document.getElementById("clearButton");

    // Kullanıcı metin kutusuna yazmaya başladığında "Clear" butonunu göster
    function toggleClearButton() {
        if (textArea.value.trim() !== "") {
            clearButton.style.display = "inline-block";
        } else {
            clearButton.style.display = "none";
        }
    }

    
    toggleClearButton();

   
    textArea.addEventListener("input", toggleClearButton);


    clearButton.addEventListener("click", function() {
        textArea.value = "";
        clearButton.style.display = "none";
    });
});
