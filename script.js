document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('reveal-btn');
    const message = document.getElementById('message-text');

    const extraMessage = " Here's to another year of growth, happiness, and achieving all your goals. Enjoy every moment of your day!";

    let isExpanded = false;

    if (btn) {
        btn.addEventListener('click', () => {
            if (!isExpanded) {
                message.style.opacity = '0';
                setTimeout(() => {
                    message.textContent += extraMessage;
                    message.style.opacity = '1';
                    btn.textContent = "Close";
                    isExpanded = true;
                }, 300);
            } else {
                message.style.opacity = '0';
                setTimeout(() => {
                    message.textContent = message.textContent.replace(extraMessage, '');
                    message.style.opacity = '1';
                    btn.textContent = "Read More";
                    isExpanded = false;
                }, 300);
            }
        });
    }

    // Smooth fade in for the message text transition
    message.style.transition = 'opacity 0.3s ease';
});

