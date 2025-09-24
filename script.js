
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle('dark-mode');
});

// Counter Feature
let counter = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterValue.textContent = counter;
});

// Collapsible FAQ
document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', function () {
        this.classList.toggle('open');
        const answer = this.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

// Form Validation
const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const formSuccess = document.getElementById('form-success');

// Helper functions for validation
function validateName(name) {
    return name.trim().length >= 3;
}

function validateEmail(email) {
    // Simple Regex for email validation
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function validatePassword(password) {
    // At least 6 characters, at least one letter and one number
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

// Real-time validation as user types
nameInput.addEventListener('input', () => {
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 3 characters.';
    } else {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
    } else {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters and include a letter and a number.';
    } else {
        passwordError.textContent = '';
    }
});

// Form submit validation
signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    let valid = true;

    // Name validation
    if (!validateName(nameInput.value)) {
        nameError.textContent = 'Name must be at least 3 characters.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (!validatePassword(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 6 characters and include a letter and a number.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    // If all fields are valid, show success message and reset form
    if (valid) {
        formSuccess.textContent = 'Signup successful!';
        signupForm.reset();
        setTimeout(() => {
            formSuccess.textContent = '';
        }, 3000);
    } else {
        formSuccess.textContent = '';
    }
});