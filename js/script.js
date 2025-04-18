//Login System - LOGIN Button - For Members

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('loginFormContainer').classList.remove('d-none'); // Show login form by default
    document.getElementById('joinFormContainer').classList.add('d-none'); // Hide join form by default
});

document.getElementById('userType').addEventListener('change', function () {
    if (this.value === 'member') {
        document.getElementById('loginFormContainer').classList.remove('d-none');
        document.getElementById('joinFormContainer').classList.add('d-none');
    } else if (this.value === 'non-member') {
        document.getElementById('joinFormContainer').classList.remove('d-none');
        document.getElementById('loginFormContainer').classList.add('d-none');
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');

    // Simple validation for demonstration purposes
    if (username === 'member' && password === 'zenfit123') {
        window.location.href = 'services.html';
    } else {
        loginError.textContent = 'Invalid username or password. Please try again.';
    }
});

document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration successful!');
});


//class Schedule Management System - SELECT CLASS TYPE
function updateSchedule() {
    const scheduleList = document.querySelector('#schedule-list tbody');
    const classType = document.getElementById('class-type').value;

    let schedule = '';
    if (classType === 'yoga') {
        schedule = `
            <tr><td>Monday</td><td>6:00 AM - 7:30 AM</td></tr>
            <tr><td>Tuesday</td><td>8:00 AM - 9:30 AM</td></tr>
            <tr><td>Wednesday</td><td>5:30 PM - 7:00 PM</td></tr>
            <tr><td>Thursday</td><td>6:00 AM - 7:30 AM</td></tr>
            <tr><td>Friday</td><td>7:00 PM - 8:30 PM</td></tr>
            <tr><td>Saturday</td><td>9:00 AM - 10:30 AM</td></tr>
            <tr><td>Sunday</td><td>4:00 PM - 5:30 PM</td></tr>
        `;
        
    } else if (classType === 'hiit') {
        schedule = `
            <tr><td>Monday</td><td>5:30 AM - 7:00 AM</td></tr>
            <tr><td>Tuesday</td><td>7:00 AM - 8:30 PM</td></tr>
            <tr><td>Wednesday</td><td>5:30 PM - 7:00 PM</td></tr>
            <tr><td>Thursday</td><td>5:30 AM - 7:00 AM</td></tr>
            <tr><td>Friday</td><td>6:00 PM - 7:30 PM</td></tr>
            <tr><td>Saturday</td><td>5:00 AM - 6:30 AM</td></tr>
            <tr><td>Sunday</td><td>5:00 AM - 6:30 AM</td></tr>
        `;
    } else if (classType === 'pilates') {
        schedule = `
            <tr><td>Monday</td><td>9:00 AM - 10:00 AM</td></tr>
            <tr><td>Tuesday</td><td>10:00 AM - 11:00 AM</td></tr>
            <tr><td>Wednesday</td><td>9:00 AM - 10:00 AM</td></tr>
            <tr><td>Thursday</td><td>10:00 AM - 11:00 AM<</td></tr>
            <tr><td>Friday</td><td>9:00 AM - 10:00 AM</td></tr>
            <tr><td>Saturday</td><td>10:00 AM - 11:00 AM</td></tr>
            <tr><td>Sunday</td><td>9:00 AM - 10:00 AM</td></tr>
        `;
    }

    scheduleList.innerHTML = schedule;
}

//Booking Management System - BOOK NOW Button
async function handleBooking(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const classType = document.getElementById('class-type').value;

    const bookingDetails = {
        name,
        email,
        date,
        time,
        classType
    };

    try {
        const response = await fetch('https://formsubmit.co/dhona.obina@outlook.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        });

        if (response.ok) {
            alert('Booking successfully sent!');
        } else {
            alert('Failed to send booking. Please try again.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
}

//Contact Form - SEND MESSAGE Button
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Form validation
    let isValid = true;
    const form = event.target;
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (isValid) {
        alert('Your message has been sent successfully!');
        form.reset(); // Reset the form after submission
    }
});