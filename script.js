
        // Sample search data
        const searchData = [
            {
                category: "Lectures",
                items: [
                    {
                        title: "The Beauty of Patience in Islam",
                        description: "A comprehensive lecture on the virtue of patience (Sabr) and its importance in a Muslim's life.",
                        type: "Video"
                    },
                    {
                        title: "Understanding Tawheed",
                        description: "Deep dive into the concept of monotheism and its fundamental role in Islamic belief.",
                        type: "Video"
                    },
                    {
                        title: "The Night Prayer (Tahajjud)",
                        description: "Learn about the blessed night prayer and its spiritual benefits for the believer.",
                        type: "Video"
                    },
                    {
                        title: "Purification of the Soul",
                        description: "Guidance on spiritual purification and cleansing the heart from sins.",
                        type: "Video"
                    }
                ]
            },
            {
                category: "Quotes",
                items: [
                    {
                        title: "On Gratitude",
                        description: "\"And whoever is grateful, his gratitude is only for himself.\" - Quran 31:12",
                        type: "Quote"
                    },
                    {
                        title: "On Prayer",
                        description: "\"Prayer is the key to Paradise\" - Prophet Muhammad (PBUH)",
                        type: "Quote"
                    },
                    {
                        title: "On Knowledge",
                        description: "\"Seek knowledge from the cradle to the grave\" - Prophet Muhammad (PBUH)",
                        type: "Quote"
                    }
                ]
            },
            {
                category: "Topics",
                items: [
                    {
                        title: "Islamic Finance",
                        description: "Learn about halal investment and Islamic banking principles.",
                        type: "Topic"
                    },
                    {
                        title: "Family in Islam",
                        description: "Understanding the importance of family bonds and relationships in Islam.",
                        type: "Topic"
                    },
                    {
                        title: "Ramadan Preparation",
                        description: "How to prepare spiritually and physically for the holy month of Ramadan.",
                        type: "Topic"
                    }
                ]
            }
        ];

      // GSAP Animations
gsap.registerPlugin();

// Set global defaults for all GSAP animations
gsap.defaults({
    duration: 0.8,
    ease: "power2.out"
});

// Loading Animation
const tl = gsap.timeline();

tl.to("#loadingText", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
})
.to("#loadingText", {
    scale: 1.1,
    duration: 0.5,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut"
})
.to("#loadingOverlay", {
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
        document.getElementById('loadingOverlay').style.display = 'none';
        initMainAnimations();
    }
});

function initMainAnimations() {
    // Navbar animation
    gsap.from("#navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Hero text animation
    gsap.to(".hero-text", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out"
    });

    // Hero image animation
    gsap.to(".hero-image", {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "power3.out"
    });

    // Stagger animation for nav items
    gsap.from(".nav-menu > li", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: "power2.out"
    });

    // Button hover animations
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
}

// Content section animations
const contentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate stats cards
            gsap.from(".stat-card", {
                y: 50,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Animate minbar section
            gsap.from(".minbar-content", {
                opacity: 0,
                x: -50,
                duration: 1,
                delay: 0.3,
                ease: "power3.out"
            });

            gsap.from(".video-container", {
                opacity: 0,
                x: 50,
                duration: 1,
                delay: 0.5,
                ease: "power3.out"
            });

            // Animate Instagram posts
            gsap.from(".instagram-post", {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                stagger: 0.1,
                delay: 1,
                ease: "power3.out"
            });

            // Animate quote section
            gsap.from(".quote-section", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 1.2,
                ease: "power3.out"
            });

            // Animate blog highlights
            gsap.from(".blog-highlights", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 1.4,
                ease: "power3.out"
            });
        }
    });
}, { threshold: 0.1 });

// Filter button functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Add click animation
        gsap.to(btn, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.out"
        });
    });
});

// Video play function
function playVideo() {
    console.log('Playing video...');
    gsap.to(".play-button", {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
    });
}

// Instagram post functions
function openInstagramPost(postId) {
    console.log(`Opening Instagram post ${postId}`);
}

function openYouTube() {
    console.log('Opening YouTube channel');
}

function openInstagram() {
    console.log('Opening Instagram profile');
}

function openCommunity() {
    console.log('Opening community page');
}

// Quote sharing functions
function shareQuote(platform) {
    const quote = "The heart will not find complete happiness, until it is connected with Allah. - Ibn al-Qayyim";

    if (platform === 'copy') {
        navigator.clipboard.writeText(quote).then(() => {
            console.log('Quote copied to clipboard');
        });
    } else if (platform === 'instagram') {
        console.log('Sharing quote on Instagram');
    } else if (platform === 'share') {
        if (navigator.share) {
            navigator.share({
                title: 'Quote of the Day',
                text: quote,
                url: window.location.href
            });
        } else {
            shareQuote('copy');
        }
    }
}

// Blog functions
function openBlog(type) {
    console.log(`Opening ${type} blog`);
}

// Search Functionality
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function openSearch() {
    searchOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    gsap.fromTo(searchOverlay, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(".search-container", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "power3.out" }
    );

    setTimeout(() => {
        searchInput.focus();
    }, 300);
}

function closeSearchOverlay() {
    gsap.to(searchOverlay, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            searchInput.value = '';
            searchResults.innerHTML = '';
            searchResults.classList.remove('show');
        }
    });
}

function performSearch(query) {
    if (!query.trim()) {
        searchResults.innerHTML = '';
        searchResults.classList.remove('show');
        return;
    }

    const filteredResults = searchData.map(category => {
        const filteredItems = category.items.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        return filteredItems.length > 0 ? {
            ...category,
            items: filteredItems
        } : null;
    }).filter(Boolean);

    displaySearchResults(filteredResults, query);
}

function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <h3>No results found for "${query}"</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
    } else {
        let html = '';
        results.forEach(category => {
            html += `
                <div class="search-category">
                    <h3 class="category-title">${category.category}</h3>
                    ${category.items.map(item => `
                        <div class="search-item" onclick="selectSearchItem('${item.title}')">
                            <div class="item-title">${highlightText(item.title, query)}</div>
                            <div class="item-description">${highlightText(item.description, query)}</div>
                            <span class="item-type">${item.type}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        });
        searchResults.innerHTML = html;
    }

    searchResults.classList.add('show');
    gsap.from(".search-item", {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out"
    });
}

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark style="background: var(--gold); color: var(--deep-green); padding: 0 2px; border-radius: 2px;">$1</mark>');
}

function selectSearchItem(title) {
    console.log(`Selected: ${title}`);
    closeSearchOverlay();
}

searchBtn.addEventListener('click', openSearch);
closeSearch.addEventListener('click', closeSearchOverlay);

let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        performSearch(e.target.value);
    }, 300);
});

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
    }

    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
        closeSearchOverlay();
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        navMenu.classList.add('active');
        gsap.from(".nav-menu > li", {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.1,
            ease: "power2.out"
        });
    } else {
        navMenu.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Dropdown Toggle
const supportDropdown = document.getElementById('supportDropdown');
const dropdownToggle = supportDropdown.querySelector('.dropdown-toggle');

function toggleDropdown(event) {
    event.preventDefault();

    const isMobile = window.innerWidth <= 768;
    supportDropdown.classList.toggle('active');

    const dropdownItems = supportDropdown.querySelectorAll('.dropdown-menu li');

    if (supportDropdown.classList.contains('active')) {
        if (!isMobile) {
            gsap.fromTo(dropdownItems, 
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" }
            );
        } else {
            gsap.fromTo(dropdownItems, 
                { opacity: 0, x: -10 },
                { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" }
            );
        }
    }
}

dropdownToggle.addEventListener('click', toggleDropdown);

document.addEventListener('click', (event) => {
    if (!supportDropdown.contains(event.target)) {
        supportDropdown.classList.remove('active');
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 61, 46, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 61, 46, 0.95)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.classList.contains('dropdown-toggle')) return;

        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            isMenuOpen = false;
        }
    });
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        gsap.to(heroImage, {
            y: scrolled * 0.1,
            duration: 0.3,
            ease: "none"
        });
    }
});

// Observe content section
contentObserver.observe(document.getElementById('content'));

// Handle window resize for dropdown positioning
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        navMenu.classList.remove('active');
        isMenuOpen = false;
    }
});

  function shareQuote() {
            if (navigator.share) {
                navigator.share({
                    title: 'Quote of the Day - Ibn al-Qayyim',
                    text: 'The heart will not find complete happiness, until it is connected with Allah. - Ibn al-Qayyim',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                copyQuote();
            }
        }

        function copyQuote() {
            const quoteText = 'The heart will not find complete happiness, until it is connected with Allah. - Ibn al-Qayyim';
            navigator.clipboard.writeText(quoteText).then(() => {
                alert('Quote copied to clipboard!');
            }).catch(() => {
                alert('Unable to copy to clipboard');
            });
        }

        function openInstagram() {
            window.open('https://instagram.com', '_blank');
        }

        function openBlog() {
            alert('Opening blog highlights...');
        }

        function openMore() {
            alert('More options coming soon...');
        }

        function shareToInstagram() {
            // Instagram doesn't allow direct sharing via URL, so we'll copy the text
            copyQuote();
            alert('Quote copied! You can now paste it on Instagram.');
        }

        function shareGeneral() {
            shareQuote();
        }

        function mainShare() {
            shareQuote();
        }

        // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            const qotdFeaturedCard = document.querySelector('.qotd-featured-card');
            const qotdSidebarPanel = document.querySelector('.qotd-sidebar-panel');
            
            // Add a subtle entrance animation
            setTimeout(() => {
                qotdSidebarPanel.style.opacity = '0';
                qotdFeaturedCard.style.opacity = '0';
                qotdSidebarPanel.style.transform = 'translateX(-20px)';
                qotdFeaturedCard.style.transform = 'translateX(20px)';
                qotdSidebarPanel.style.transition = 'all 0.6s ease';
                qotdFeaturedCard.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    qotdSidebarPanel.style.opacity = '1';
                    qotdFeaturedCard.style.opacity = '1';
                    qotdSidebarPanel.style.transform = 'translateX(0)';
                    qotdFeaturedCard.style.transform = 'translateX(0)';
                }, 100);
            }, 100);
        });


        // donation 
          // Button click handlers
        function handleDonation() {
            // Show donation options
            const donationOptions = `
🇵🇸 PALESTINE EMERGENCY AID:
• $25 - Emergency food package
• $50 - Medical supplies for families
• $100 - Shelter materials
• $250 - Monthly family support

🕌 MOSQUE SUPPORT:
• $30 - Daily maintenance
• $75 - Community programs
• $150 - Facility improvements
• $500 - Major renovations

Choose any amount - every donation matters!
            `;
            alert(donationOptions);
        }

        function handleLearnMore() {
            // Show more information
            const moreInfo = `
OUR IMPACT:

🇵🇸 PALESTINE RELIEF:
• Emergency food & water distribution
• Medical aid and supplies
• Temporary shelter assistance
• Educational support for children

🕌 MOSQUE INITIATIVES:
• Building & renovation projects
• Community center development
• Religious education programs
• Youth and family services

100% of donations go directly to those in need.
All projects are Zakat eligible.
            `;
            alert(moreInfo);
        }

         function logoClick() {
            console.log('Logo clicked');
            alert('Logo clicked! You can customize this action.');
        }

        function linkClick(linkName) {
            console.log(`${linkName} link clicked`);
            // You can add navigation logic here
        }

        function socialClick(platform) {
            console.log(`${platform} social link clicked`);
            // You can add social media navigation logic here
        }

        function submitNewsletter(event) {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            console.log(`Newsletter signup: ${email}`);
            alert(`Thank you for subscribing with: ${email}`);
            event.target.reset();
        }

        // Add smooth scrolling effect
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            document.querySelectorAll('.footer-column').forEach(column => {
                observer.observe(column);
            });
        });

        // Add dynamic hover effects
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.1)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });


          // Filter dropdowns functionality
        const filterDropdowns = document.querySelectorAll('.filter-dropdown');

        filterDropdowns.forEach(dropdown => {
            const button = dropdown.querySelector('.filter-button');
            const options = dropdown.querySelectorAll('.filter-option');

            button.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close other dropdowns
                filterDropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                dropdown.classList.toggle('active');
            });

            options.forEach(option => {
                option.addEventListener('click', () => {
                    const value = option.dataset.value;
                    const text = option.textContent;
                    
                    // Update button text
                    button.querySelector('span').textContent = text;
                    
                    // Close dropdown
                    dropdown.classList.remove('active');
                    
                    // Here you would typically filter the lectures based on the selected value
                    console.log('Selected filter:', value);
                    
                    // You can add your filtering logic here
                    filterLectures(dropdown.id, value);
                });
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            filterDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });

        // Topic tags functionality
        const topicTags = document.querySelectorAll('.topic-tag');

        topicTags.forEach(tag => {
            tag.addEventListener('click', () => {
                // Remove active class from all tags
                topicTags.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tag
                tag.classList.add('active');
                
                // Here you would typically filter lectures based on the selected topic
                const topic = tag.dataset.topic;
                console.log('Selected topic:', topic);
                
                // You can add your filtering logic here
                filterByTopic(topic);
            });
        });

        // Placeholder functions for filtering (you can implement these based on your needs)
        function filterLectures(filterType, value) {
            // Implement your lecture filtering logic here
            console.log(`Filtering ${filterType} by ${value}`);
            // Example: hide/show lecture cards based on the filter
        }

        function filterByTopic(topic) {
            // Implement your topic filtering logic here
            console.log(`Filtering by topic: ${topic}`);
            // Example: hide/show lecture cards based on the topic
        }

        // Placeholder function for video play
        function playVideo(videoId) {
            console.log(`Playing video: ${videoId}`);
            // Implement your video play logic here
        }

        // Search functionality placeholder
        document.getElementById('searchBtn').addEventListener('click', () => {
            console.log('Search button clicked');
            // Implement search functionality
        });

        // Mobile menu functionality placeholder
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            console.log('Mobile menu button clicked');
            // Implement mobile menu toggle
        });

        // Filter functionality
function applyFilters() {
    const scholarFilter = document.getElementById('scholarFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const quoteCards = document.querySelectorAll('.quote-card');
    
    quoteCards.forEach(card => {
        const cardScholar = card.getAttribute('data-scholar');
        const cardCategory = card.getAttribute('data-category');
        
        let showCard = true;
        
        // Check scholar filter
        if (scholarFilter && cardScholar !== scholarFilter) {
            showCard = false;
        }
        
        // Check category filter
        if (categoryFilter && cardCategory !== categoryFilter) {
            showCard = false;
        }
        
        // Show or hide card
        if (showCard) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Social sharing functionality
function shareQuote(platform, element) {
    const quoteCard = element.closest('.quote-card');
    const quoteText = quoteCard.querySelector('.quote-text').textContent;
    const author = quoteCard.querySelector('.author').textContent;
    const fullQuote = `"${quoteText}" ${author}`;
    
    let shareUrl = '';
    
    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullQuote)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(fullQuote)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Reset filters function
function resetFilters() {
    document.getElementById('scholarFilter').value = '';
    document.getElementById('categoryFilter').value = '';
    applyFilters();
}

// Add event listeners for real-time filtering
document.getElementById('scholarFilter').addEventListener('change', applyFilters);
document.getElementById('categoryFilter').addEventListener('change', applyFilters);

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code can go here
    console.log('Islamic Quotes Section loaded successfully');
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        resetFilters();
    }
});

// Add animation on scroll (optional enhancement)
function animateOnScroll() {
    const cards = document.querySelectorAll('.quote-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Uncomment the line below to enable scroll animations
// animateOnScroll();
// about js 
// GSAP Timeline Animation
document.addEventListener('DOMContentLoaded', function() {
    // Create main timeline
    const zuhdMainTimeline = gsap.timeline();
    
    // Header Animation
    zuhdMainTimeline.to('.zuhd-header-section', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Vision Section Animation
    zuhdMainTimeline.to('.zuhd-vision-section .zuhd-section-title', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.3")
    .to('.zuhd-vision-text', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.4");

    // Founders Section Animation
    zuhdMainTimeline.to('.zuhd-founders-section .zuhd-section-title', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.2")
    .to('.zuhd-founder-card', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.4");

    // Timeline Section Animation
    zuhdMainTimeline.to('.zuhd-timeline-section .zuhd-section-title', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.3")
    .to('.zuhd-timeline-line', {
        opacity: 1,
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut"
    }, "-=0.2");

    // Timeline Items Animation
    const zuhdTimelineItems = document.querySelectorAll('.zuhd-timeline-item');
    
    zuhdTimelineItems.forEach((item, index) => {
        const zuhdTimelineDot = item.querySelector('.zuhd-timeline-dot');
        
        zuhdMainTimeline.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, `-=${1.2 - (index * 0.2)}`)
        .to(zuhdTimelineDot, {
            scale: 1,
            duration: 0.4,
            ease: "back.out(2)"
        }, "-=0.3");
    });

    // Scroll-triggered animations for better UX
    gsap.registerPlugin(ScrollTrigger);

    // Enhanced scroll animations
    gsap.utils.toArray('.zuhd-timeline-item').forEach((item, index) => {
        gsap.fromTo(item.querySelector('.zuhd-timeline-content'), {
            scale: 0.8,
            opacity: 0.7
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Founder image hover animation
    const zuhdFounderImage = document.querySelector('.zuhd-founder-image-container');
    if (zuhdFounderImage) {
        zuhdFounderImage.addEventListener('mouseenter', () => {
            gsap.to(zuhdFounderImage, {
                scale: 1.05,
                rotation: 2,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        zuhdFounderImage.addEventListener('mouseleave', () => {
            gsap.to(zuhdFounderImage, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }

    // Timeline dots pulse animation
    const zuhdTimelineDots = document.querySelectorAll('.zuhd-timeline-dot');
    zuhdTimelineDots.forEach((dot, index) => {
        gsap.to(dot, {
            scale: 1.2,
            duration: 0.8,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.2
        });
    });

    // Text reveal animation on scroll
    gsap.utils.toArray('.zuhd-vision-text, .zuhd-founder-description').forEach(text => {
        const zuhdSplitText = text.textContent.split(' ');
        text.innerHTML = zuhdSplitText.map(word => `<span class="zuhd-word">${word}</span>`).join(' ');
        
        gsap.fromTo(text.querySelectorAll('.zuhd-word'), {
            opacity: 0.3,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            scrollTrigger: {
                trigger: text,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Parallax effect for sections
    gsap.utils.toArray('.zuhd-vision-section, .zuhd-founders-section, .zuhd-timeline-section').forEach(section => {
        gsap.to(section, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Loading animation completion callback
    zuhdMainTimeline.eventCallback("onComplete", () => {
        console.log("Zuhd About Us page animations completed!");
        
        // Add a subtle breathing animation to the main title
        gsap.to('.zuhd-main-title', {
            scale: 1.02,
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true
        });
    });
});

// Intersection Observer for additional scroll effects
const zuhdObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('zuhd-in-view');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('.zuhd-vision-section, .zuhd-founders-section, .zuhd-timeline-section').forEach(section => {
    zuhdObserver.observe(section);
});

// zayarat js 

document.addEventListener('DOMContentLoaded', function() {
    console.log('Ziyarat page loaded');
    
    // Initialize all functionality
    initializeNavigation();
    initializeCards();
    initializeMapMarkers();
    initializeScrollAnimations();
    initializeVideoModal();
    initializeAccessibility();
    
    // Add loading completion
    setTimeout(() => {
        document.body.classList.add('ziyarat-loaded');
    }, 100);
});

// Navigation Functionality
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.ziyarat-nav-btn');
    const cards = document.querySelectorAll('.ziyarat-card');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('ziyarat-active'));
            button.classList.add('ziyarat-active');
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Filter cards
            filterCards(category);
            
            console.log(`Filtered by category: ${category}`);
        });
        
        // Add keyboard support
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
}

function filterCards(category) {
    const cards = document.querySelectorAll('.ziyarat-card');
    
    cards.forEach((card, index) => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('ziyarat-hidden', 'ziyarat-filtered');
            
            // Stagger animation for showing cards
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        } else {
            card.classList.add('ziyarat-filtered');
            
            // Hide after animation
            setTimeout(() => {
                card.classList.add('ziyarat-hidden');
            }, 300);
        }
    });
}

// Card Interactions
function initializeCards() {
    const cards = document.querySelectorAll('.ziyarat-card');
    
    cards.forEach(card => {
        // Click handler
        card.addEventListener('click', () => {
            const title = card.querySelector('.ziyarat-card-title').textContent;
            const category = card.dataset.category;
            
            // Add click animation
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 150);
            
            console.log(`Clicked card: ${title} (${category})`);
            
            // You can add navigation to detailed page here
            showCardDetails(card);
        });
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.ziyarat-card-overlay');
            if (overlay) {
                overlay.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.ziyarat-card-overlay');
            if (overlay) {
                overlay.style.transform = '';
            }
        });
        
        // Add tabindex for keyboard navigation
        card.setAttribute('tabindex', '0');
        
        // Keyboard support
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

function showCardDetails(card) {
    const title = card.querySelector('.ziyarat-card-title').textContent;
    const description = card.querySelector('.ziyarat-card-description').textContent;
    
    // Create a simple modal or notification
    const notification = document.createElement('div');
    notification.className = 'ziyarat-notification';
    notification.innerHTML = `
        <div class="ziyarat-notification-content">
            <h3>${title}</h3>
            <p>${description}</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: ziyaratFadeInUp 0.3s ease-out;
    `;
    
    const content = notification.querySelector('.ziyarat-notification-content');
    content.style.cssText = `
        background: var(--off-white);
        padding: 30px;
        border-radius: 15px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        color: var(--deep-green);
    `;
    
    const button = content.querySelector('button');
    button.style.cssText = `
        background: var(--deep-green);
        color: var(--off-white);
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 15px;
    `;
    
    document.body.appendChild(notification);
    
    // Close on click outside
    notification.addEventListener('click', (e) => {
        if (e.target === notification) {
            notification.remove();
        }
    });
}

// Map Markers
function initializeMapMarkers() {
    const markers = document.querySelectorAll('.ziyarat-map-marker');
    
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const location = marker.dataset.location;
            
            // Add click animation
            marker.style.transform = 'scale(1.3)';
            setTimeout(() => {
                marker.style.transform = '';
            }, 300);
            
            // Show location info
            showLocationInfo(location);
            
            console.log(`Clicked location: ${location}`);
        });
        
        // Add keyboard support
        marker.setAttribute('tabindex', '0');
        marker.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                marker.click();
            }
        });
    });
}

function showLocationInfo(location) {
    const locationData = {
        makkah: {
            name: 'Makkah',
            description: 'The holiest city in Islam, home to the Kaaba and Masjid al-Haram.',
            significance: 'Direction of prayer for Muslims worldwide'
        },
        medina: {
            name: 'Medina',
            description: 'The second holiest city in Islam, home to the Prophet\'s Mosque.',
            significance: 'The city where Prophet Muhammad (pbuh) is buried'
        }
    };
    
    const info = locationData[location];
    if (info) {
        // Create info popup
        const popup = document.createElement('div');
        popup.className = 'ziyarat-location-popup';
        popup.innerHTML = `
            <div class="ziyarat-popup-content">
                <h3>${info.name}</h3>
                <p>${info.description}</p>
                <small>${info.significance}</small>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--off-white);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 1001;
            max-width: 300px;
            animation: ziyaratScaleIn 0.3s ease-out;
        `;
        
        const content = popup.querySelector('.ziyarat-popup-content');
        content.style.cssText = `
            color: var(--deep-green);
            text-align: center;
            position: relative;
        `;
        
        const button = content.querySelector('button');
        button.style.cssText = `
            position: absolute;
            top: -10px;
            right: -10px;
            background: var(--deep-green);
            color: var(--off-white);
            border: none;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 14px;
        `;
        
        document.body.appendChild(popup);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (popup.parentElement) {
                popup.remove();
            }
        }, 5000);
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ziyarat-animate-in');
                
                // Special handling for cards
                if (entry.target.classList.contains('ziyarat-card')) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToObserve = document.querySelectorAll(
        '.ziyarat-featured, .ziyarat-card, .ziyarat-map'
    );
    
    elementsToObserve.forEach(element => observer.observe(element));
}

// Video Modal
function initializeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = modal.querySelector('.ziyarat-video');
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideo();
        }
    });
    
    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('ziyarat-show')) {
            closeVideo();
        }
    });
}

function playVideo() {
    const modal = document.getElementById('videoModal');
    const video = modal.querySelector('.ziyarat-video');
    
    // Show modal
    modal.classList.add('ziyarat-show');
    
    // Set video source (placeholder for now)
    video.src = '/placeholder-video.mp4';
    
    // Play video
    video.play().catch(e => {
        console.log('Video play failed:', e);
    });
    
    console.log('Playing Makkah experience video');
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const video = modal.querySelector('.ziyarat-video');
    
    // Hide modal
    modal.classList.remove('ziyarat-show');
    
    // Pause and reset video
    video.pause();
    video.currentTime = 0;
    
    console.log('Video modal closed');
}

// Accessibility
function initializeAccessibility() {
    // Add ARIA labels
    const playBtn = document.querySelector('.ziyarat-play-btn');
    if (playBtn) {
        playBtn.setAttribute('aria-label', 'Play Makkah experience video');
    }
    
    const navButtons = document.querySelectorAll('.ziyarat-nav-btn');
    navButtons.forEach(btn => {
        btn.setAttribute('aria-label', `Filter by ${btn.textContent}`);
    });
    
    const cards = document.querySelectorAll('.ziyarat-card');
    cards.forEach(card => {
        const title = card.querySelector('.ziyarat-card-title').textContent;
        card.setAttribute('aria-label', `Learn more about ${title}`);
    });
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', (e) => {
        // Tab navigation enhancements
        if (e.key === 'Tab') {
            document.body.classList.add('ziyarat-keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('ziyarat-keyboard-navigation');
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
            console.log(`${entry.name}: ${entry.duration}ms`);
        }
    }
});

if ('PerformanceObserver' in window) {
    performanceObserver.observe({ entryTypes: ['measure'] });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Loading completion
window.addEventListener('load', () => {
    console.log('Ziyarat page fully loaded');
    
    // Add subtle animations after load
    setTimeout(() => {
        const mapMarkers = document.querySelectorAll('.ziyarat-map-marker');
        mapMarkers.forEach((marker, index) => {
            setTimeout(() => {
                marker.style.animation = `ziyaratFloat 3s ease-in-out infinite`;
                marker.style.animationDelay = `${index * 0.5}s`;
            }, 2000 + (index * 500));
        });
    }, 1000);
});

// Responsive handling
const handleResize = debounce(() => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Adjust animations for mobile
        const cards = document.querySelectorAll('.ziyarat-card');
        cards.forEach(card => {
            card.style.animationDuration = '0.6s';
        });
    }
}, 250);

window.addEventListener('resize', handleResize);

// Initialize resize check
handleResize();