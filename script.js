// 1. Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 2. Save / Print CV as PDF
const printBtn = document.getElementById('print-btn');
printBtn.addEventListener('click', () => {
    window.print();
});

// 3. Copy Email to Clipboard
const copyEmailBtn = document.getElementById('copy-email');
const copyFeedback = document.getElementById('copy-feedback');
const emailAddress = 'mohamedhani2007299@gmail.com';

copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailAddress).then(() => {
        copyFeedback.textContent = 'Email copied to clipboard!';
        setTimeout(() => {
            copyFeedback.textContent = '';
        }, 3000);
    }).catch(() => {
        copyFeedback.textContent = 'Failed to copy email.';
    });
});