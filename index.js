function Created() {
    // Get the URL entered by the user
    let url = document.querySelector(".url").value;

    // Clear previous QR code
    let qrcodeContainer = document.querySelector(".qrcode");
    qrcodeContainer.innerHTML = "";

    // Validate if the input is not empty
    if (url.trim() === "") {
        alert("Please enter a valid URL.");
        return;
    }

    // Generate the QR code using qrcode.js
    let qrcode = new QRCode(qrcodeContainer, {
        text: url,
        width: 200,
        height: 200
    });
}

// Add an event listener to the button
$("button").on("click", function(){
    $("p").remove();
    $("h2").text("To create another QR-code, paste and hit submit button again").slideToggle().fadeToggle();
    $(".url").val(" ");
});