function submitForm() {
    // Get the form element
    const form = document.getElementById('paymentForm');

    // Check if the form is valid
    if (form.checkValidity()) {
        // Redirect to the thank you page if the form is valid
        window.location.href = "thankyou.html";
    } else {
        // Redirect to the error page if the form is invalid
        window.location.href = "error.html";
    }
}
    