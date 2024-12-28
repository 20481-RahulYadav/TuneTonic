

//const API_BASE_URL = 'https://tune-tonic-api.vercel.app/api/register';
const API_BASE_URL = 'https://tune-tonic-api.vercel.app/api/register';

$("#submit").click(async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page
debugger;
    const username = $('#username').val();
    const email = $('#email').val();
    const password = $('#password').val();

    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
             mode: 'no-cors'
        });

        if (response.ok) {
            const data = await response.json();
            alert('Registration successful!');
        } else {
            const data = await response.json();
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while registering.');
    }
});

