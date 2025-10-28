// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger) hamburger.classList.remove('active');
    if (navMenu) navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else if (navbar) {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Product data with multiple images for carousel
const products = {
    'product1': {
        images: [
            'hand-tufted-lightsaber-keyboard-armrest-pad-in-use-Mustafar.png',
            'hand-tufted-lightsaber-armrest-red-sith.png',
            'hand-tufted-lightsaber-armrest-blue-jedi.png',
            'hand-tufted-lightsaber-armrest-red-sith-back.png',
            'hand-tufted-lightsaber-armrest-blue-jedi-back.png'
        ],
        title: 'Hand-Tufted Lightsabre Keyboard Armrest',
        description: 'Upgrade your desk setup with this hand-tufted red Sith lightsaber armrest, the perfect Star Wars-themed ergonomic accessory for fans, gamers, and remote workers alike. Crafted using high-quality materials, the durable design offers wrist support during long typing sessions. Ideal for use with keyboards, laptops, and workstations.',
        price: 'R 350.00',
        features: [
            'Height: 2.5 cm',
            'Width: 13 cm',
            'Length: 74 cm',
        ]
    },
    'product2': {
        images: [
            'naruto_akatsuki_cloud_rug.png',
			'naruto_akatsuki_cloud_rug_back.png'
        ],
        title: 'Handmade Tufted Naruto Cloud Akatsuki Rug',
        description: 'Introducing the Naruto Cloud Rug by Bangarang Crafts: a hand-tufted homage to the iconic imagery of Naruto. Soft, durable, and whimsically designed, it brings the serene essence of floating clouds into your home. Elevate any space with this unique blend of fandom and comfort, perfect for any Naruto enthusiast or lover of artisanal decor.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 69cm',
            'Length: 102cm'
        ]
    },
    'product3': {
        images: [
            'DarthVader_Tufted_Rug.png',
			'DarthVader_Tufted_Rug_Back.png'
        ],
        title: 'Handmade Tufted Darth Vader Rug',
        description: 'Step into the Star Wars universe with this striking handmade Darth Vader rug. With its bold design and cinematic vibes, this piece is a must-have for any true fan of the Empire.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 73cm',
            'Hight: 80cm'
        ]
    },
    'product4': {
        images: [
            'StarWars_StormTrooper_TuftedRug.png',
			'StarWars_StormTrooper_TuftedRug_Back.png'
        ],
        title: 'Handmade Tufted Stormtrooper Rug',
        description: 'Transform your space with this bold and unique tufted rug featuring the iconic Stormtrooper helmet.Handmade with love and precision, this piece brings character and fandom flair to any room, perfect for your gaming corner, bedroom, home theater, or collector’s display.',
        price: 'R 1250.00',
        features: [
            'Thickness: 2.5cm',
            'Width: 74cm',
            'Hight: 78cm'
        ]
    },
    'product5': {
        images: [
            'gray-xenomorph-alien-tshirt-handcarved-print-full.png',
			'gray-xenomorph-alien-tshirt-handcarved-print.png'
        ],
        title: 'Xenomorph Alien T-Shirt – Hand-Carved Stamp Print',
        description: 'Featuring a hand-carved stamp print of the iconic alien from the Alien franchise. Printed on a soft, high-quality cotton tee, this design brings raw detail and underground style to your wardrobe. Each print is inspired by traditional block printing, giving every shirt a unique, gritty look that fans of H.R. Giger and classic sci-fi horror will love.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product6': {
        images: [
            'Blanka-Street-Fighter-T-Shirt-Red-Block-Printed-Retro-Gamer-Tee-Large-edited.png',
			'blanka-street-fighter-tshirt-red-retro-gamer-tee-1.png'
        ],
        title: 'Blanka Street Fighter T-Shirt – Block Printed Retro Gamer Tee',
        description: 'This bold tee features a striking linocut-style design of Blanka in his iconic crouched pose—block printed for a crisp, bold, and timeless look. Each shirt is carefully printed using traditional block printing methods, giving it a unique texture and feel that stands out from mass-produced prints. Its the perfect wearable for fans of classic arcade action, handmade quality, and bold graphic style.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product7': {
        images: [
            'blue-hand-printed-totoro-inspired-block-print-tshirt-002.png',
			'blue-hand-printed-totoro-inspired-block-print-tshirt-001.png'
        ],
        title: 'Hand-Printed Totoro-Inspired T-Shirt – Block Print Fan Art Tee',
        description: 'This Totoro-inspired t-shirt is hand printed using block printing techniques, giving each piece a unique artisan touch. Featuring the beloved forest spirit with an umbrella alongside a young girl, this fan art shirt captures the charm of My Neighbor Totoro. Made from soft, breathable cotton fabric, this unisex tee blends comfort with handmade creativity. Perfect for Studio Ghibli fans, anime lovers, and anyone who enjoys whimsical graphic tees.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product8': {
        images: [
            'light-red-hand-printed-skull-block-print-tshirt-002.png',
			'light-red-hand-printed-skull-block-print-tshirt-001.png'
        ],
        title: 'Hand-Printed Skull T-Shirt – Block Print Gothic Streetwear',
        description: 'This skull t-shirt is hand printed using traditional block printing techniques, making every piece unique. The bold black skull design adds an edgy gothic streetwear vibe, perfect for fans of alternative fashion, festivals, and casual everyday style. Crafted with care on soft, breathable fabric, this unisex graphic tee combines comfort with handmade artistry. A one-of-a-kind skull shirt for those who love originality in their wardrobe.',
        price: 'R 250.00',
        features: [
            'Hand-printed with an original carved design',
            'Soft and breathable cotton fabric',
            'Unisex fit – perfect for everyday wear or geeky conventions',
			'custom color available'
        ]
    },
	'product9': {
        images: [
            'groot.jpg',
			
        ],
        title: 'Groot Planter Pot – Small Concrete Plant Pot',
        description: 'Introducing our stunning Rustic Mini Planter, meticulously crafted to seamlessly complement both indoor and outdoor spaces. Each planter is individually cast and thoroughly inspected to maintain our commitment to superior quality.',
        price: 'R 150.00',
        features: [
            'Height: 10cm',
            'Width: 9.1cm',
            'Length: 9.6cm',
			
        ]
    },
	'product10': {
        images: [
            'Skull.jpg',
			
        ],
        title: 'Mini Skull Cement Planter Pot',
        description: 'Introducing our stunning Rustic Mini Planter, meticulously crafted to seamlessly complement both indoor and outdoor spaces. Each planter is individually cast and thoroughly inspected to maintain our commitment to superior quality.',
        price: 'R 100.00',
        features: [
            'Height: 7cm',
            'Width: 7.6cm',
            'Length: 9.9cm',
			
        ]
    },
	'product11': {
        images: [
            'Mini_Bulbasaur_Cement_Planter_Handmade_Pokémon_Succulent_Pot_1.png',
			'Mini_Bulbasaur_Cement_Planter_Handmade_Pokémon_Succulent_Pot_2.png',
			
        ],
        title: 'Mini Bulbasaur Cement Planter – Pokémon Succulent Pot',
        description: 'Introducing our stunning Rustic Mini Planter, meticulously crafted to seamlessly complement both indoor and outdoor spaces. Each planter is individually cast and thoroughly inspected to maintain our commitment to superior quality.',
        price: 'R 100.00',
        features: [
            'Height: 7.6cm',
            'Width: 8.7cm',
            'Length: 9.8cm',
			
        ]
    },
	'product12': {
        images: [
            'skull_cement_ashtray_01.png',
			'skull_cement_ashtray_02.png',
			
        ],
        title: 'Skull Cement Ashtray',
        description: 'Elevate your space with our stunning Skull Cement Ashtray, meticulously crafted with a rustic charm that seamlessly blends indoor and outdoor aesthetics. Each piece is cast individually, ensuring impeccable quality and durability, while our meticulous quality checks guarantee consistent excellence.',
        price: 'R 60.00',
        features: [
            'Height: 2cm',
            'Width: 10cm',
            'Length: 11cm',
			
        ]
    },
	'product13': {
        images: [
            'Twist003.png',
			'Twist002.png',
			'Twist004.png',
			
        ],
        title: 'Twisted Concrete Planter',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 80.00',
        features: [
            'Height: 8cm',
            'Width: 10cm',
            'Length: 10cm',
			
        ]
    },
	'product14': {
        images: [
            'Round+Tray004.png',
			'Round+Tray002.png',
			'Round+Tray003.png',
			'Round+Tray005.png',
			
        ],
        title: 'Round+Tray Concrete Planter',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 60.00',
        features: [
            'Height: 7cm',
            'Width: 10cm',
            'Length: 10cm',
			
        ]
    },
	'product15': {
        images: [
            'x3Hex003.png',
			'x3Hex004.png',
			'x3Hex005.png',
			
			
        ],
        title: 'X3 Hex Concrete Planters',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 100.00',
        features: [
            'Height: 5cm',
            'Width: 11cm',
            'Length: 11cm',
			
        ]
    },
	'product16': {
        images: [
            'x4Honey002.png',
			'x4Honey005.png',
			
			
			
        ],
        title: 'X4 Honeycomb Concrete Planters',
        description: 'Bring contemporary style to your home or office with our handcrafted geometric concrete planters. Each planter is cast with care using durable, high-quality concrete, giving it a smooth, industrial finish that complements any modern decor.',
        price: 'R 100.00',
        features: [
            'Height: 5cm',
            'Width: 10cm',
            'Length: 10cm',
			
        ]
    },
};

// Product Modal with Carousel functionality
function openProductModal(productId) {
    const modal = document.getElementById('productModal');
    const product = products[productId];
    
    if (product && modal) {
        // Update product info
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalPrice').textContent = product.price;
        
        // Update features list
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        product.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Build carousel
        buildCarousel(product.images, product.title);
        
        // Show modal
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Carousel functionality
function buildCarousel(images, title) {
    const carousel = document.getElementById('carousel');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!carousel || !dotsContainer) return;
    
    // Clear previous content
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create carousel items
    images.forEach((image, index) => {
        // Create image element
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <img src="${image}" alt="${title} - Image ${index + 1}" class="carousel-img">
        `;
        carousel.appendChild(carouselItem);
        
        // Create dot indicator
        const dot = document.createElement('span');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Reset to first slide
    currentSlide = 0;
    updateCarousel();
}

let currentSlide = 0;

function nextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide - 1 + items.length) % items.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-dot');
    
    // Hide all items
    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show current item
    if (items[currentSlide]) {
        items[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
}

// Close modal when clicking outside content
const productModal = document.getElementById('productModal');
if (productModal) {
    productModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProductModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProductModal();
    }
});

// Product card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product and service cards
document.querySelectorAll('.product-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    `;
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255,255,255,0.2)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
    });
    
    closeBtn.addEventListener('click', function() {
        notification.remove();
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
});

/// Updated Product Filter Functionality with Scroll to Top
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const productsSection = document.querySelector('#products');
    
    console.log('Filter buttons found:', filterBtns.length);
    console.log('Product cards found:', productCards.length);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Filter button clicked:', btn.getAttribute('data-filter'));
            
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            productCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                    console.log('Showing all products');
                } else {
                    const categories = card.getAttribute('data-category').split(' ');
                    if (categories.includes(filter)) {
                        card.classList.remove('hidden');
                        console.log('Showing product:', card.querySelector('.product-title').textContent);
                    } else {
                        card.classList.add('hidden');
                        console.log('Hiding product:', card.querySelector('.product-title').textContent);
                    }
                }
            });
            
            // Scroll to top of products section with smooth animation
            setTimeout(() => {
                if (productsSection) {
                    const productsTop = productsSection.offsetTop - 100; // Offset for sticky filters and navbar
                    window.scrollTo({
                        top: productsTop,
                        behavior: 'smooth'
                    });
                    console.log('Scrolling to products section');
                }
            }, 300); // Small delay to allow filter animation to complete
        });
    });
}


// Sticky Filter Enhancement
function initStickyFilters() {
    const filterContainer = document.querySelector('.filter-container');
    const productsSection = document.querySelector('.products');
    
    if (!filterContainer || !productsSection) return;
    
    // Calculate when filters should become sticky
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    filterContainer.classList.add('scrolled');
                } else {
                    filterContainer.classList.remove('scrolled');
                }
            });
        },
        { 
            rootMargin: '-80px 0px 0px 0px', // Adjust based on your navbar height
            threshold: 0
        }
    );
    
    // Observe the products section
    observer.observe(productsSection);
    
    // Alternative simple scroll approach
    window.addEventListener('scroll', () => {
        const productsTop = productsSection.getBoundingClientRect().top;
        if (productsTop < 80) { // When products section reaches top
            filterContainer.classList.add('scrolled');
        } else {
            filterContainer.classList.remove('scrolled');
        }
    });
}

// Update your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing...');
    
    // Update copyright year
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
    
    // Preload critical images first
    preloadCriticalImages();
    
    // Initialize product filters
    initProductFilters();
    
    // Initialize sticky filters
    initStickyFilters();
    
    // Initialize image loader
    setTimeout(() => {
        ImageLoader.init();
    }, 100);
    
    console.log('Bangarang Crafts website loaded successfully!');
});

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing filters...');
    
    // Update copyright year
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
    
    // Initialize product filters
    initProductFilters();
    
    console.log('Bangarang Crafts website loaded successfully!');
});

// Fallback initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProductFilters);
} else {
    // DOMContentLoaded has already fired
    setTimeout(initProductFilters, 100);
}
