// Create a clock that shows the current machine time
// Update the clock every second and display the time in the following formats: HH:MM:SS and HH:MM:SS AM/PM

setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const time24 = `${hours}:${minutes}:${seconds}`;
    const time12 = `${(hours % 12 || 12)}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`;

    console.log(time24);
    console.log(time12);
}, 1000);
