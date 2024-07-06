document.addEventListener('DOMContentLoaded', () => { //make sure the DOM is loaded fully before script starts running
    const emailInput = document.getElementById('email'); // reference to email are to be recieved adn confim email input fields.
    const confirmEmailInput = document.getElementById('confirmEmail');
    //get reference to contact form
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {      //adds event listener for submission form
        if (emailInput.value !== confirmEmailInput.value) { //check if email matches the confirm email
            event.preventDefault(); // Prevent form submission
            confirmEmailInput.setCustomValidity('Email addresses must match.');
            confirmEmailInput.style.borderColor = 'red';
            alert('Email addresses do not match. Please enter matching email addresses.');
        } else {
            confirmEmailInput.setCustomValidity('');
            confirmEmailInput.style.borderColor = 'green'; //confirm email border is changed to green 
            alert('Form has been submitted successfully!'); //informs the user the form is submitted successfully
        }
    });
});
