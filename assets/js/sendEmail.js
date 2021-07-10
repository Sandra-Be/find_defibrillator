/* function to send email */
function sendMail(contactForm) {
    emailjs.send("service_d3u4bmq","template_2w9zdfq",{
    from_name: contactForm.name.value,
    new_message: contactForm.newmessage.value,
    from_email: contactForm.email.value,
    })
.then (
    /* Success pop-up from SweetAlert.js library */
    function success(){
        swal({
            title: "Thank You!",
            text: "Your message has been sent!",
            icon: "success",
            button: "OK",
        });
    },
    /* error pop-up from SweetAlert.js library */
    function error(){
        swal({
            title: "Try again!",
            text: "Something went wrong, your message could not be sent!",
            icon: "error",
            button: "OK",
        });
    }
);
    return false;
}

// Function to reset value to empty string after submitting form
$(document).ready(function () {
    $("form[name=contactForm]").on("submit", function () {
        $("input[name=name]").val("");
        $("input[name=email]").val("");
        $("textarea[name=newmessage]").val("");
    });
});
