document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    
    const animateCounter = (counter) => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const duration = 1500; // Duration of count animation in ms
        const startTime = performance.now();
        
        const update = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Smooth easeOutQuad function
            const easeProgress = progress * (2 - progress);
            
            const currentValue = Math.floor(easeProgress * target);
            counter.innerText = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };
        
        requestAnimationFrame(update);
    };

    const observerOptions = {
        threshold: 0.2, // Trigger when 20% of the box is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Run animation only once
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
});