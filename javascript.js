document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function() {
        var stringInput = document.getElementById("stringInput").value;
        var numberInput = document.getElementById("numberInput").value;
        var booleanInput = document.getElementById("booleanInput").value;

        if (stringInput.trim() !== "" && numberInput.trim() !== "" && (booleanInput.trim() === "true" || booleanInput.trim() === "false")) {
            alert("OK");
        } else {
            alert("NOK");
        }
    });
});
