let intervalId = null;

document.getElementById('set-interval-btn').addEventListener('click', () => {
    const intervalInput = document.getElementById('interval-input').value;
    intervalId = setInterval(() => {
        document.getElementById('output').innerHTML += 'Printando usando setInterval<br>';
    }, intervalInput);
});

document.getElementById('stop-interval-btn').addEventListener('click', () => {
    clearInterval(intervalId);
});

document.getElementById('set-timeout-btn').addEventListener('click', () => {
    const intervalInput = document.getElementById('interval-input').value;
    setTimeout(() => {
        document.getElementById('output').innerHTML += 'Printando usando setTimeout<br>';
    }, intervalInput);
});