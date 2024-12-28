const API_BASE_URL = 'https://tune-tonic-api.vercel.app/api/login';

$("#submit").click(async function (e) {
    e.preventDefault();

    const email = $("#username").val();
    const password = $("#password").val();

    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            mode:"no-cors"
        });

        // Check if the response is OK (status code 2xx)
        if (response.ok) {
            const data = await response.json();
            alert('Login successful!');
        } else {
            // Try to parse error response as JSON or handle it as plain text
            const errorData = await response.text();  // Read response as text if JSON is not available
            alert(`Error: ${errorData}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    }
});
