let taglineIndex = 0;
const taglines = document.querySelectorAll('.tagline');
const dots = document.querySelectorAll('.dot');
const taglineContainer = document.querySelector('.tagline-container');


    function showTagline() {
        taglineIndex = (taglineIndex + 1) % taglines.length; // Update index for the next tagline
        const offset = taglineIndex * -100; // Calculate offset for sliding
        taglineContainer.style.transform = `translateX(${offset}%)`; // Apply transformation
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active-dot', i === taglineIndex); // Toggle active dot
        });
    }

    setInterval(showTagline, 5000); // Change every 5 seconds
    showTagline(); // Initial call