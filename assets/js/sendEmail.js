function sendMail(contactForm) {
    emailjs.send("service_d3u4bmq","template_2w9zdfq", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "new_message": contactForm.newmessage.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}
