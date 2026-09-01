/* ==========================================================================
   JOYALUKKAS TEMPLATE - CAROUSEL SLIDER & INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // HERO CAROUSEL SLIDER
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(index) {
        if (!slides.length) return;
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showSlide(index);
            resetAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();

    // WISHLIST TOGGLE BUTTONS
    const favBtns = document.querySelectorAll('.fav-btn');
    const wishlistCount = document.getElementById('wishlistCount');
    let wishlistTotal = 3;

    favBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                btn.style.color = '#B30018';
                wishlistTotal++;
                showNotification('Item added to Wishlist!');
            } else {
                btn.style.color = '#CCC';
                wishlistTotal--;
                showNotification('Item removed from Wishlist!');
            }
            if (wishlistCount) wishlistCount.textContent = wishlistTotal;
        });
    });
});

// GLOBAL CART COUNTER HELPER
let cartTotal = 2;
function addToCart(productName) {
    cartTotal++;
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = cartTotal;

    showNotification(`"${productName}" added to your shopping cart!`);
}

// TOAST NOTIFICATION HELPERS
function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        right: '20px',
        backgroundColor: '#B30018',
        color: '#FFFFFF',
        padding: '12px 22px',
        borderRadius: '6px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
        zIndex: '3000',
        fontWeight: '600',
        fontSize: '0.85rem',
        border: '1px solid #D4AF37',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}
