const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const min = $('.min');
const sec = $('.sec');
const dots = document.querySelectorAll('.dot');
const week = $('.week');
const dateDisplay = $('.date');

function updateClock() {
    const now = new Date();
    
    // Update time
    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    // Blink effect for dots
    dots.forEach(dot => dot.classList.toggle('invisible'));

    // Highlight the current day
    Array.from(week.children).forEach((ele) => ele.classList.remove('active'));
    week.children[now.getDay()].classList.add('active');

    // Update the date display
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString(undefined, options);

    requestAnimationFrame(updateClock);
}

// Start the clock
updateClock();
