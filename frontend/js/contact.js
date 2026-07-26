/**
 * contact.js
 * Handles the contact form submission — POSTs to the Express backend,
 * shows a loading state on the button, and displays a toast notification.
 */

(function () {
    const API_URL = 'http://localhost:5000/api/contact';

    const form       = document.getElementById('contactForm');
    const btnText    = document.getElementById('contactBtnText');
    const btnIcon    = document.getElementById('contactBtnIcon');
    const submitBtn  = document.getElementById('contactSubmitBtn');
    const toast      = document.getElementById('contactToast');

    if (!form) return;

    // ─── Toast Helper ─────────────────────────────────────────────────────────
    function showToast(message, type = 'success') {
        toast.textContent = message;
        toast.className   = 'contact-toast contact-toast--' + type;
        toast.style.display = 'block';

        // Animate in
        requestAnimationFrame(() => {
            toast.classList.add('contact-toast--visible');
        });

        // Auto-dismiss after 5 s
        setTimeout(() => {
            toast.classList.remove('contact-toast--visible');
            setTimeout(() => { toast.style.display = 'none'; }, 400);
        }, 5000);
    }

    // ─── Loading State ────────────────────────────────────────────────────────
    function setLoading(loading) {
        submitBtn.disabled = loading;
        if (loading) {
            btnText.textContent = 'Sending…';
            btnIcon.className   = 'fas fa-spinner fa-spin';
        } else {
            btnText.textContent = 'Send Message';
            btnIcon.className   = 'fas fa-paper-plane';
        }
    }

    // ─── Client-side Validation ───────────────────────────────────────────────
    function validate(name, email, message) {
        if (!name.trim())    return 'Please enter your name.';
        if (!email.trim())   return 'Please enter your email address.';
        if (!/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email address.';
        if (!message.trim()) return 'Please enter a message.';
        return null;
    }

    // ─── Form Submit ──────────────────────────────────────────────────────────
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name    = document.getElementById('contactName').value;
        const email   = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        // Client-side validation
        const validationError = validate(name, email, message);
        if (validationError) {
            showToast(validationError, 'error');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                showToast('✅ ' + data.message, 'success');
                form.reset();
            } else {
                showToast('⚠️ ' + (data.error || 'Something went wrong. Please try again.'), 'error');
            }
        } catch (err) {
            console.error('Contact form fetch error:', err);
            showToast('❌ Could not reach the server. Please check your connection.', 'error');
        } finally {
            setLoading(false);
        }
    });
})();
