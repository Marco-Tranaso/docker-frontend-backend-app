// frontend/script.js
document.getElementById('checkBtn').addEventListener('click', async () => {
    const response = await fetch('http://backend:3000/check-connection');
    const data = await response.json();
    document.getElementById('message').textContent = data.message;
});
