// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    const signupButtons = document.querySelectorAll('.btn-primary[data-bs-target], .btn-primary[data-bs-toggle="modal"]');

    // Add click event listener to each signup button
    signupButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Send clicked_signup event to Google Analytics
            gtag('event', 'clicked_signup', {
                'event_category': 'Sign Up',
                'event_label': `Clicked ${button.textContent.trim()} Button`
            });
        });
    });

    // Get the waiting list form
    const waitingListForm = document.querySelector('form[netlify]');

    // Add a submit event listener to the waiting list form
    waitingListForm.addEventListener('submit', (event) => {
        const emailInput = document.querySelector('#waitingListEmail');
        const email = emailInput.value.trim();

        if (email) {
            // Send the submitted_signup event to Google Analytics
            gtag('event', 'submitted_signup', {
                'event_category': 'Sign Up',
                'event_label': 'Submitted Waiting List Form'
            });
        }
    });
});