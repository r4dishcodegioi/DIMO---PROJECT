let countdown = 5; 
const timerElement = document.getElementById('timer');
const resendLink = document.getElementById('resendLink');
const verifyBtn = document.getElementById('verifyBtn');

function startCountdown() {
    const interval = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;

        if (countdown === 0) {
            clearInterval(interval);
            resendLink.style.display = 'inline'; // Allow resend
            document.getElementById('countdownText').style.display = 'none'; // Hide countdown text
        }
    }, 1000);
}

function moveFocus(event) {
    const currentInput = event.target;
    const currentInputId = currentInput.id;
    const nextInput = document.getElementById("otp" + (parseInt(currentInputId.charAt(3)) + 1));
    const prevInput = document.getElementById("otp" + (parseInt(currentInputId.charAt(3)) - 1));

    if (currentInput.value !== "" && nextInput) {
        nextInput.focus();
    } else if (currentInput.value === "" && prevInput) {
        prevInput.focus();
    }
}

function checkInput() {
    const otpValues = [
        document.getElementById('otp1').value,
        document.getElementById('otp2').value,
        document.getElementById('otp3').value,
        document.getElementById('otp4').value,
        document.getElementById('otp5').value,
        document.getElementById('otp6').value
    ];

    if (otpValues.every(value => value.length === 1)) {
        verifyBtn.disabled = false; // Enable the verify button
    } else {
        verifyBtn.disabled = true; // Disable the verify button
    }
}

function verifyOtp() {
    // Here you can verify the OTP using backend logic (like an API call)
    const otpEntered = [
        document.getElementById('otp1').value,
        document.getElementById('otp2').value,
        document.getElementById('otp3').value,
        document.getElementById('otp4').value,
        document.getElementById('otp5').value,
        document.getElementById('otp6').value
    ].join('');

    // Assuming the OTP is correct, hide step1 and show step2
    if (otpEntered === "123456") {  // Example: correct OTP is "123456"
        document.querySelector('.verify-page.step1').style.display = 'none';
        document.querySelector('.verify-page.step2').style.display = 'block';
    } else {
        alert("Incorrect OTP!");
    }
}

function resendOtp() {
    // Reset countdown and OTP inputs
    countdown = 5;
    document.querySelector('.verify-cell input').value = ''; // Reset OTP inputs
    startCountdown(); // Restart countdown
}

function goToHomepage() {
    window.location.href = '/homepage'; // Redirect to homepage or wherever you want
}

// Initialize countdown on page load
window.onload = startCountdown;
