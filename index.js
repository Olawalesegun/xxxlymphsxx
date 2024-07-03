document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const todaysDate = today.getUTCDate();

    const newDayVar = document.getElementById('current-day');
    const newTimeVar = document.getElementById('utc-time');
    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    newDayVar.textContent = daysOfTheWeek[todaysDate - 1];
    const utcTime = today.toUTCString().split(' ')[4];
    newTimeVar.textContent = utcTime + ' ' + 'UTC';

    console.log(todaysDate);
    console.log(utcTime);
})