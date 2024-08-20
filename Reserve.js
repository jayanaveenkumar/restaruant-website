
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ReserveForm');
    const submitButton = document.getElementById('submit');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('Name').value;
        const numberOfGuests = document.getElementById('Noofguests').value;
        //const setdate = document.getElementById('reservationdate');
        const date = document.getElementById('reservationdate').value;
        const time = document.getElementById('reservationtime').value;

        document.getElementById('display_name').textContent = name;
        document.getElementById('display_guests').textContent = numberOfGuests;
        document.getElementById('display_date').textContent = date;
        document.getElementById('display_time').textContent = time;
        //setdate.setAttribute('min', new Date().toISOString().split('T')[0]);


        document.getElementById('success-message').style.display = 'block';
        document.getElementById('success-message1').style.display = 'block';
        document.getElementById('success-message2').style.display = 'block';
        document.getElementById('success-message3').style.display = 'block';
        document.getElementById('success-message4').style.display = 'block';

        printReservation(name, numberOfGuests, date, time);
    });
});









