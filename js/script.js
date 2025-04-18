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