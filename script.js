document.addEventListener("DOMContentLoaded", function() {
    const formulaSelect = document.getElementById("formulaSelection");
    formulaSelect.addEventListener("change", function() {
        // Placeholder: Generate input fields based on the selected formula
        alert("Selected formula: " + this.value);
    });
});
