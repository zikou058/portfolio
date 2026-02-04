// Initialize EmailJS
// Replace "YOUR_PUBLIC_KEY" with the key from your EmailJS Account
emailjs.init("tDBssc4pjbOmpuAU3");

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Visual feedback: Change button state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;

    // Send the form
    // serviceID and templateID come from your EmailJS Dashboard
    emailjs.sendForm('service_0782012', 'template_nxi53ka', this)
        .then(() => {
            alert('Message Sent Successfully!');
            submitBtn.innerHTML = 'Sent!';
            this.reset(); // Clears the form fields
        }, (error) => {
            btn.innerHTML = 'Send Failed ❌';
            console.log('Error:', error);
            alert('Error: ' + error.text);
        });
});