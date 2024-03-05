function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = 'AM';

    // Convert to 12-hour format and set AM/PM
    if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    }

    // Ensure midnight is displayed as 12 AM and noon as 12 PM
    hours = hours === 0 ? 12 : hours;

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById('clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
