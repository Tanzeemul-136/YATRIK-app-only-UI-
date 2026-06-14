// --- INTRO SEQUENCE TAG TYPEWRITER ---
document.addEventListener("DOMContentLoaded", () => {
    const text = "Discover your next adventure instantly...";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++; setTimeout(typeWriter, 40);
        }
    }
    setTimeout(typeWriter, 400);
    setTimeout(() => {
        document.getElementById('intro-screen').style.display = 'none';
        document.getElementById('app-content').classList.remove('hidden');
    }, 3200);
});

function clearActiveViewports() {
    document.getElementById('destination-selector').classList.add('hidden');
    document.getElementById('dial-section').classList.add('hidden');
    document.getElementById('booking-dashboard').classList.add('hidden');
    document.getElementById('static-page-viewport').classList.add('hidden');
}

function showHomeView() {
    clearActiveViewports();
    document.getElementById('destination-selector').classList.remove('hidden');
}

// --- RE-ENGINEERED SYMMETRICAL TRANSITION CANVAS (2.5 Sec Cycle) ---
function triggerTransition(mode) {
    const overlay = document.getElementById('transition-overlay');
    const asset = document.getElementById('travel-asset');
    
    // Clear styles to kill animation freezing
    overlay.classList.remove('hidden');
    overlay.classList.remove('smoke-active');
    asset.style.animation = 'none';
    
    // Force layout engine reflow
    void asset.offsetWidth; 
    
    // Engages smoke buildup curtains
    overlay.classList.add('smoke-active');

    // Route distinct transformation vectors based on configuration types
    if (mode === 'flight') {
        asset.className = "fa-solid fa-plane";
        asset.style.animation = "planeFlyDiagonal 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    } else if (mode === 'train') {
        asset.className = "fa-solid fa-train";
        asset.style.animation = "landDriveStraight 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    } else if (mode === 'bus') {
        asset.className = "fa-solid fa-bus";
        asset.style.animation = "landDriveStraight 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    } else if (mode === 'cab') {
        asset.className = "fa-solid fa-taxi";
        asset.style.animation = "landDriveStraight 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    } else {
        asset.className = "fa-solid fa-hotel";
        asset.style.animation = "landDriveStraight 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    }

    // Midpoint data swap behind full coverage mask 
    setTimeout(() => {
        renderDashboardData(mode);
    }, 1000);

    // Completely pull curtains open and reset system state gracefully
    setTimeout(() => {
        overlay.classList.remove('smoke-active');
        overlay.classList.add('hidden');
    }, 2400);
}

// --- VISUAL GRID RENDER PIPELINE ---
function renderDashboardData(mode) {
    clearActiveViewports();
    const dashboard = document.getElementById('booking-dashboard');
    const grid = document.getElementById('results-grid');
    dashboard.classList.remove('hidden');
    grid.innerHTML = '';

    if (mode === 'cab') {
        grid.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80" alt="Bike">
                <h3>Rapido Bike</h3>
                <p style="color:#64748b; margin:5px 0;">Best pricing aggregator match found.</p>
                <h2 style="color:#1a73e8;">₹75</h2>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=400&q=80" alt="Cab">
                <h3>Uber Premier</h3>
                <p style="color:#64748b; margin:5px 0;">Top-rated corporate sedans.</p>
                <h2>₹210</h2>
            </div>`;
    } else if (mode === 'train') {
        grid.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1515165504668-782d4baf0167?auto=format&fit=crop&w=400&q=80" alt="Train">
                <h3>Rajdhani Express (12430)</h3>
                <p style="color:#64748b; margin:5px 0;">Catering & superfast express logistics.</p>
                <h2 style="color:#1a73e8;">₹1,650</h2>
            </div>`;
    } else if (mode === 'bus') {
        grid.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80" alt="Bus">
                <h3>Intercity Volvo Scania</h3>
                <p style="color:#64748b; margin:5px 0;">Multi-axle semi-sleeper luxury transit.</p>
                <h2 style="color:#1a73e8;">₹1,200</h2>
            </div>`;
    } else {
        grid.innerHTML = `
            <div class="card">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80" alt="Hotel">
                <h3>Yatrik Grand Palace Suite</h3>
                <p style="color:#64748b; margin:5px 0;">Verified service allocation.</p>
                <h2 style="color:#1a73e8;">₹3,400</h2>
            </div>`;
    }
}

// --- PORTAL CONFIG INTERFACES ---
function loadContinentDial() {
    clearActiveViewports();
    document.getElementById('dial-section').classList.remove('hidden');
    const carousel = document.getElementById('rotary-carousel');
    carousel.innerHTML = `
        <div class="country-card" onclick="unlockMainInterface()"><h3>India</h3><p>Configure parameters</p></div>
        <div class="country-card" onclick="unlockMainInterface()"><h3>Japan</h3><p>Configure parameters</p></div>
        <div class="country-card" onclick="unlockMainInterface()"><h3>France</h3><p>Configure parameters</p></div>`;
}

function unlockMainInterface() {
    document.getElementById('booking-nav').classList.remove('hidden');
    triggerTransition('flight');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.left = sidebar.style.left === '0px' ? '-260px' : '0px';
}
function showLocationOptions() { document.getElementById('location-popup-box').classList.toggle('hidden'); }
function selectLoc(val) { document.getElementById('route-display').value = val; showLocationOptions(); }
function toggleProfileDropdown() { document.getElementById('profile-dropdown').classList.toggle('hidden'); }

// --- AUTH METRIC SECURITY INTERFACES ---
function openLoginModal() { document.getElementById('auth-modal').classList.remove('hidden'); }
function switchAuthMode(target) {
    if (target === 'signup') {
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('signup-container').classList.remove('hidden');
    } else {
        document.getElementById('signup-container').classList.add('hidden');
        document.getElementById('login-container').classList.remove('hidden');
    }
}
function mockLoginSuccess() {
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('header-login-btn').classList.add('hidden');
    document.getElementById('profile-trigger').classList.remove('hidden');
}

// --- STATIC PAGES FRAMEWORK ---
function showAboutPage() {
    toggleSidebar(); clearActiveViewports();
    const target = document.getElementById('static-page-viewport');
    target.classList.remove('hidden');
    target.innerHTML = `<div class="center-box" style="text-align:left;"><h2>About YATRIK Engine</h2><p style="margin-top:15px; line-height:1.7; color:#475569;">YATRIK maps cross-platform parameters instantly matching real-time user metrics accurately.</p></div>`;
}
function showFormPage(type) {
    toggleSidebar(); clearActiveViewports();
    const target = document.getElementById('static-page-viewport');
    target.classList.remove('hidden');
    target.innerHTML = `<div class="center-box" style="text-align:left;"><h2>Submit ${type.toUpperCase()}</h2><textarea style="width:100%; height:120px; padding:12px; margin-top:15px; border-radius:6px; border:1px solid #ccc; font-family:inherit;"></textarea><button class="oval-login-btn" style="margin-top:15px;" onclick="alert('Logged!')">Submit Data</button></div>`;
}
function showContactPage() {
    toggleSidebar(); clearActiveViewports();
    const target = document.getElementById('static-page-viewport');
    target.classList.remove('hidden');
    target.innerHTML = `<div class="center-box"><h2>Contact Core Logistics</h2><p style="margin-top:15px; font-weight:700; color:#1a73e8; font-size:1.2rem;">support@yatrik.travel</p></div>`;
}