const API_BASE_URL = 'https://tune-tonic-api.vercel.app/api/login';

$("#submit").click(async function (e) {
    e.preventDefault();

    const email = $("#username").val();
    const password = $("#password").val();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            alert('Login successful!');
            console.log('Response:', data);
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.message || 'Login failed.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in. Please check your network connection.');
    }
});
