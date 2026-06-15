// --- GEOLOCATION PASSPORT MODULE DATA MATRIX (24 STATIONS) ---
const globalCountries = [
    { name: "India", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80", phrase: "Explore Heritage Node" },
    { name: "Japan", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80", phrase: "Discover Neon Architecture" },
    { name: "France", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80", phrase: "Examine Continental Hub" },
    { name: "Switzerland", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=400&q=80", phrase: "Mountain Transit Matrix" },
    { name: "Italy", img: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&w=400&q=80", phrase: "Classic Mediterranean Hub" },
    { name: "United Kingdom", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaNKnu5ZefSeY_Xeg1ug7iM4ws6zZR22opg&s", phrase: "Historic Empire Node" },
    { name: "United States", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80", phrase: "Transcontinental Grid" },
    { name: "Canada", img: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=400&q=80", phrase: "Northern Logistics Path" },
    { name: "Australia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzKxrJ7LxFs9eUFZtDw2cbAM6yygRforD1RQ&s", phrase: "Oceanic Vector Nodes" },
    { name: "New Zealand", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=400&q=80", phrase: "South Pacific Matrix" },
    { name: "Singapore", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80", phrase: "Hyper-Efficient Terminal" },
    { name: "Thailand", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5fP-TGB5cpBzMhpEjCLKcdNmrZ7vYR7AGA&s", phrase: "Southeast Asia Routing" },
    { name: "South Korea", img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=400&q=80", phrase: "Technological Hub Node" },
    { name: "United Arab Emirates", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80", phrase: "Desert Logistics Center" },
    { name: "South Africa", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=400&q=80", phrase: "Southern Cape Network" },
    { name: "Egypt", img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=400&q=80", phrase: "Nile Corridor Terminal" },
    { name: "Brazil", img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=400&q=80", phrase: "Amazon Basin Gateway" },
    { name: "Mexico", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCaf9PHuMohX1iIF7oZMJ2RpbRpp-gdrx-A&s", phrase: "Mesoamerica Logistics" },
    { name: "Spain", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=400&q=80", phrase: "Iberian Peninsula Matrix" },
    { name: "Germany", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80", phrase: "Central European Hub" },
    { name: "Netherlands", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80", phrase: "Lowlands Gateway Node" },
    { name: "Norway", img: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=400&q=80", phrase: "Fjord Network Terminal" },
    { name: "Iceland", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80", phrase: "Geothermal Matrix Hub" },
    { name: "Greece", img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80", phrase: "Aegean Logistics Path" }
];
// --- FOOLPROOF INITIALIZATION WITH WELCOME DESCRIPTOR CHIPS ---
document.addEventListener("DOMContentLoaded", () => {
    const text = "Discover your next adventure instantly...";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            const el = document.getElementById("typewriter");
            if (el) el.innerHTML += text.charAt(i);
            i++; setTimeout(typeWriter, 40);
        }
    }
    setTimeout(typeWriter, 400);
    setTimeout(() => {
        const intro = document.getElementById('intro-screen');
        if (intro) intro.style.display = 'none';
        const app = document.getElementById('app-content');
        if (app) app.classList.remove('hidden');
    }, 2400); // Revealed cleanly after splash loops finish
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

function loadContinentDial() {
    clearActiveViewports();
    document.getElementById('dial-section').classList.remove('hidden');
    const matrix = document.getElementById('rotary-carousel');
    matrix.innerHTML = '';
    globalCountries.forEach(node => {
        matrix.innerHTML += `
            <div class="country-card-item" onclick="selectCountryNode('${node.name}')">
                <img src="${node.img}" alt="${node.name}">
                <div class="country-info-cover">
                    <h3>${node.name}</h3>
                </div>
            </div>`;
    });
}

function selectCountryNode(targetCountry) {
    document.getElementById('route-destination').value = targetCountry;
    triggerTransition('flight');
}

function triggerTransition(mode) {
    const overlay = document.getElementById('transition-overlay');
    const asset = document.getElementById('travel-asset');
    overlay.classList.remove('hidden');
    overlay.classList.remove('smoke-active');
    asset.style.animation = 'none';
    void asset.offsetWidth;
    overlay.classList.add('smoke-active');

    if (mode === 'flight') {
        asset.className = "fa-solid fa-plane";
        asset.style.animation = "planeFlyDiagonal 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    } else if (mode === 'train' || mode === 'bus' || mode === 'cab') {
        asset.className = `fa-solid fa-${mode === 'cab' ? 'taxi' : mode}`;
        asset.style.animation = "landDriveStraight 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    } else {
        asset.className = mode === 'hotel' ? "fa-solid fa-hotel" : "fa-solid fa-utensils";
        asset.style.animation = "landDriveStraight 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards";
    }

    setTimeout(() => { renderDashboardData(mode); }, 1000);
    setTimeout(() => { overlay.classList.remove('smoke-active'); overlay.classList.add('hidden'); }, 2400);
}

// --- DYNAMIC INVENTORY LISTINGS PANEL ENGINE ---
function renderDashboardData(mode) {
    clearActiveViewports();
    closeInteractivePanel();
    document.getElementById('booking-dashboard').classList.remove('hidden');
    
    const grid = document.getElementById('results-grid');
    const paramControls = document.getElementById('dynamic-contextual-controls');
    const bannerTitle = document.getElementById('category-banner-title');
    const selectedCountry = document.getElementById('route-destination').value;
    
    const tabs = document.querySelectorAll('.horizontal-modality-nav button');
    tabs.forEach(t => t.classList.remove('active-tab'));
    const targetedTab = document.getElementById(`nav-${mode}`);
    if(targetedTab) targetedTab.classList.add('active-tab');

    grid.innerHTML = '';
    paramControls.innerHTML = '';
    bannerTitle.innerText = `Top Verified Real-Time Results Matrix for ${selectedCountry}`;

    switch(mode) {
        case 'flight':
            paramControls.innerHTML = `<div class="inline-control-card"><span class="field-label"><i class="fa fa-chair"></i> Class Setup</span><select class="embedded-select"><option>Economy Window</option><option>Premium Economy</option><option>Business Elite</option></select></div>`;
            grid.innerHTML = `
                <div class="ss-card"><div class="ribbon status-fastest">Skyscanner Cheapest Match</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=150&q=80" alt="Flight">
                <div class="ss-info-wrapper"><span class="item-meta-title">IndiGo Airways <small>6E-242</small></span><p class="flight-schedule"><b>06:15</b> LKO → <b>09:40</b> COK <span class="duration-tag">(3h 25m Direct)</span></p><p class="sub-guarantee"><i class="fa fa-circle-check" style="color:#10b981;"></i> Seating Blueprint Allocation Live</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹7,430</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'IndiGo 6E-242')">Choose Seats</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-recommended">Skyscanner Best Rated</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=150&q=80" alt="Flight">
                <div class="ss-info-wrapper"><span class="item-meta-title">Air India Express <small>IX-1070</small></span><p class="flight-schedule"><b>23:30</b> LKO → <b>02:30</b> BLR <span class="duration-tag">(3h 00m Non-stop)</span></p><p class="sub-guarantee"><i class="fa fa-mug-hot" style="color:#6366f1;"></i> Complimentary Onboard Catering Bundled</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹10,666</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'Air India IX-1070')">Choose Seats</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=150&q=80" alt="Flight">
                <div class="ss-info-wrapper"><span class="item-meta-title">Akasa Air <small>QP-1526</small></span><p class="flight-schedule"><b>19:55</b> LKO → <b>23:00</b> DEL <span class="duration-tag">(3h 05m)</span></p><p class="sub-guarantee"><i class="fa fa-bolt" style="color:#eab308;"></i> Super Fast Airport Check-In Eligible</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹10,508</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'Akasa Air QP-1526')">Choose Seats</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-discount">Flat 15% OFF</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1483450388369-9ed95738483c?auto=format&fit=crop&w=150&q=80" alt="Flight">
                <div class="ss-info-wrapper"><span class="item-meta-title">SpiceJet Airliner <small>SG-328</small></span><p class="flight-schedule"><b>12:10</b> LKO → <b>14:25</b> BOM <span class="duration-tag">(2h 15m)</span></p><p class="sub-guarantee"><i class="fa fa-ticket" style="color:#ef4444;"></i> Zero Modification Fees Protocol Active</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹8,190</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'SpiceJet SG-328')">Choose Seats</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRGdz1RO8d2IP9Kj-DuLDW7C0C1Atbmo2TQ&s" alt="Flight">
                <div class="ss-info-wrapper"><span class="item-meta-title">Vistara Premium <small>UK-815</small></span><p class="flight-schedule"><b>08:30</b> LKO → <b>10:45</b> DEL <span class="duration-tag">(2h 15m Layout)</span></p><p class="sub-guarantee"><i class="fa fa-crown" style="color:#eab308;"></i> Luxury Lounge Entry Pass Included</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹12,400</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'Vistara UK-815')">Choose Seats</button></div></div></div>`;
            break;

        case 'train':
            paramControls.innerHTML = `<div class="inline-control-card"><span class="field-label"><i class="fa fa-subway"></i> Tier Preference</span><select class="embedded-select"><option>AC 3 Tier (3A)</option><option>AC 2 Tier (2A)</option><option>Executive 1st Class (1A)</option></select></div>`;
            grid.innerHTML = `
                <div class="ss-card"><div class="ribbon status-recommended">ConfirmTkt Confirmed Option</div><div class="ss-card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehJ6KN58P32y2BZ7GX9X6Zm8K1Hv_Ds8WpQ&s" alt="Train">
                <div class="ss-info-wrapper"><span class="item-meta-title">Gomti Express <small>(12419)</small></span><p class="flight-schedule"><b>05:45</b> LKO → <b>15:00</b> NDLS <span class="duration-tag">(9h 15m Intercity)</span></p><p class="sub-guarantee"><i class="fa fa-shield" style="color:#6366f1;"></i> 2x Alternate Refund Scheme Eligible</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹650</h2><button class="ss-orange-cta" onclick="openInteractivePanel('berth-picker', 'Gomti Express')">Book Ticket</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-fastest">Superfast Express Tier</div><div class="ss-card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKepjfYN-VQN3h0M_V6Ef1uQH-ODJ4U3e2Q&s" alt="Train">
                <div class="ss-info-wrapper"><span class="item-meta-title">Rajdhani Express <small>(12430)</small></span><p class="flight-schedule"><b>16:55</b> LKO → <b>22:10</b> NDLS <span class="duration-tag">(5h 15m Premium)</span></p><p class="sub-guarantee"><i class="fa fa-utensils" style="color:#10b981;"></i> Fully Integrated Pantry & Catering Access</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹1,650</h2><button class="ss-orange-cta" onclick="openInteractivePanel('berth-picker', 'Rajdhani Express')">Book Ticket</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=150&q=80" alt="Train">
                <div class="ss-info-wrapper"><span class="item-meta-title">Shramik Shatabdi <small>(12003)</small></span><p class="flight-schedule"><b>15:35</b> LKO → <b>22:15</b> NDLS <span class="duration-tag">(6h 40m Chair Car)</span></p><p class="sub-guarantee"><i class="fa fa-circle-check" style="color:#475569;"></i> High On-Time Performance Record</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹945</h2><button class="ss-orange-cta" onclick="openInteractivePanel('berth-picker', 'Shatabdi Express')">Book Ticket</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=150&q=80" alt="Train">
                <div class="ss-info-wrapper"><span class="item-meta-title">Tejas Semi-HighSpeed <small>(82501)</small></span><p class="flight-schedule"><b>06:10</b> LKO → <b>12:25</b> NDLS <span class="duration-tag">(6h 15m Business Pack)</span></p><p class="sub-guarantee"><i class="fa fa-clock" style="color:#eab308;"></i> Late-Running Reimbursement Policy Active</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹1,240</h2><button class="ss-orange-cta" onclick="openInteractivePanel('berth-picker', 'Tejas Express')">Book Ticket</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-discount">Garib Rath Tier</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?auto=format&fit=crop&w=150&q=80" alt="Train">
                <div class="ss-info-wrapper"><span class="item-meta-title">Lucknow Mail Special <small>(12229)</small></span><p class="flight-schedule"><b>22:00</b> LKO → <b>06:45</b> NDLS <span class="duration-tag">(8h 45m Overnight)</span></p><p class="sub-guarantee"><i class="fa fa-bed" style="color:#64748b;"></i> Clean Bedding Linen Verified Sets</p></div>
                <div class="ss-price-action"><h2>₹480</h2><button class="ss-orange-cta" onclick="openInteractivePanel('berth-picker', 'Lucknow Mail')">Book Ticket</button></div></div></div>`;
            break;

        case 'bus':
            paramControls.innerHTML = `<div class="inline-control-card"><span class="field-label"><i class="fa fa-bus"></i> Bus Type</span><select class="embedded-select"><option>A/C Sleeper (2+1)</option><option>Bharat Benz Luxury Seater</option></select></div>`;
            grid.innerHTML = `
                <div class="ss-card"><div class="ribbon status-discount">redBus Deal: 30% Off</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=150&q=80" alt="Bus">
                <div class="ss-info-wrapper"><span class="item-meta-title">UPSRTC Shatabdi Volvo</span><p class="flight-schedule">Multi-Axle Semi-Sleeper A/C Environment.</p><p class="sub-guarantee"><i class="fa fa-bolt" style="color:#ef4444;"></i> Code: YATRIKBUS Active</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹1,180</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'Shatabdi Bus')">Select Deck</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-fastest">Top Rated Partner</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=150&q=80" alt="Bus">
                <div class="ss-info-wrapper"><span class="item-meta-title">IntrCity SmartBus Premium</span><p class="flight-schedule">Full Sleeper (2+1) Layout with Individual LCD Terminals.</p><p class="sub-guarantee"><i class="fa fa-wifi" style="color:#10b981;"></i> High Speed Onboard Wi-Fi Allocated</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹1,450</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'IntrCity SmartBus')">Select Deck</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGc2MlBFXzFXIHUagTBagz1ESZax6-8I37hw&s" alt="Bus">
                <div class="ss-info-wrapper"><span class="item-meta-title">Zingbus Luxury Cruiser</span><p class="flight-schedule">Premium Seat Setup. Free Mineral Water + Blankets.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹1,050</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'Zingbus Cruiser')">Select Deck</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9cJXJkgsWcld0RNWRj9kVf3vuQHmhAQ26w&s" alt="Bus">
                <div class="ss-info-wrapper"><span class="item-meta-title">VRL Travels Liner</span><p class="flight-schedule">Direct Intercity Route Matrix Alignment. Multi-drive shifts.</p><p class="sub-guarantee"><i class="fa fa-shield" style="color:#6366f1;"></i> GPS Real-time Terminal Tracking Enabled</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹1,250</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'VRL Travels')">Select Deck</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-recommended">Safe Express Guard</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=150&q=80" alt="Bus">
                <div class="ss-info-wrapper"><span class="item-meta-title">Royal Safari Executive</span><p class="flight-schedule">Plush calf-rests and adjustable air-vent clusters.</p><p class="sub-guarantee"><i class="fa fa-circle-check" style="color:#10b981;"></i> Regular CCTV Cabin Inspections Active</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹1,600</h2><button class="ss-orange-cta" onclick="openInteractivePanel('seat-map', 'Royal Safari')">Select Deck</button></div></div></div>`;
            break;

        case 'cab':
            paramControls.innerHTML = `<div class="inline-control-card"><span class="field-label"><i class="fa fa-taxi"></i> Fleet Range</span><select class="embedded-select"><option>Micro Hatchback</option><option>Sedan Elite</option><option>SUV Cruiser</option></select></div>`;
            grid.innerHTML = `
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=150&q=80" alt="Cab">
                <div class="ss-info-wrapper"><span class="item-meta-title">Uber Sedan Premium</span><p class="flight-schedule">Localized urban route acceleration profile matching nodes.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹340 <small>Est.</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('cab-calc', 'Uber Sedan', 120, 80, 140)">Confirm Ride</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-fastest">Uber Go Cheapest</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=150&q=80" alt="Cab">
                <div class="ss-info-wrapper"><span class="item-meta-title">Uber Go Micro</span><p class="flight-schedule">Hatchback model optimized for swift point-to-point lane transits.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹210 <small>Est.</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('cab-calc', 'Uber Go Micro', 90, 40, 80)">Confirm Ride</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=150&q=80" alt="Cab">
                <div class="ss-info-wrapper"><span class="item-meta-title">Uber SUV Intercity Cruiser</span><p class="flight-schedule">Spacious 6-Seater SUV tier for family airport transit parameters.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹680 <small>Est.</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('cab-calc', 'Uber SUV Intercity', 250, 150, 280)">Confirm Ride</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-recommended">Ola Premium Partner</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=150&q=80" alt="Cab">
                <div class="ss-info-wrapper"><span class="item-meta-title">Ola Prime Play Luxury</span><p class="flight-schedule">In-cab media entertainment console screen active layers.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹410 <small>Est.</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('cab-calc', 'Ola Prime Play', 150, 90, 170)">Confirm Ride</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=150&q=80" alt="Bike">
                <div class="ss-info-wrapper"><span class="item-meta-title">Rapido Bike Transit</span><p class="flight-schedule">Super swift single lane matrix filtering.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹85 <small>Est.</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('cab-calc', 'Rapido Bike', 40, 15, 30)">Confirm Ride</button></div></div></div>`;
            break;

        case 'hotel':
            paramControls.innerHTML = `<div class="inline-control-card"><span class="field-label"><i class="fa fa-hotel"></i> Star Rating</span><select class="embedded-select"><option>3 Star Standard</option><option>4 Star Deluxe</option><option>5 Star Luxury Elite</option></select></div>`;
            grid.innerHTML = `
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=150&q=80" alt="Hotel">
                <div class="ss-info-wrapper"><span class="item-meta-title">Yatrik Grand Horizon Palace</span><p class="flight-schedule">Booking.com Verified Premium Hub. Free Lounge Access Included.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹4,200 <small>/night</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Grand Horizon Deluxe Suite')">Book Stay</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-fastest">Genius Tier Offer</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=150&q=80" alt="Hotel">
                <div class="ss-info-wrapper"><span class="item-meta-title">The Radisson Blu Resort</span><p class="flight-schedule">Infinity pool alignment + standard continental brunch parameters included.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹6,800 <small>/night</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Radisson Blu Superior Room')">Book Stay</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=150&q=80" alt="Hotel">
                <div class="ss-info-wrapper"><span class="item-meta-title">Hyatt Regency Corporate Space</span><p class="flight-schedule">5-Star Business Node. Highly optimized workspaces with fast fiber lines.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹8,500 <small>/night</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Hyatt Regency Executive Suite')">Book Stay</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-recommended">Top Budget Stay</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=150&q=80" alt="Hotel">
                <div class="ss-info-wrapper"><span class="item-meta-title">Ginger Business Inn</span><p class="flight-schedule">Compact smart layout setups matching transit travelers perfectly.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹2,100 <small>/night</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Ginger Smart Room')">Book Stay</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEyvn_WRx8RvZsCbb57RCqX4-hYNURMaCeQ&s" alt="Hotel">
                <div class="ss-info-wrapper"><span class="item-meta-title">The Taj Mahal Heritage Suite</span><p class="flight-schedule">Palatial royal architecture. Full signature wellness spa accessibility.</p></div>
                <div class="ss-price-action"><h2 class="item-price">₹18,500 <small>/night</small></h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Taj Royal Palace Room')">Book Stay</button></div></div></div>`;
            break;

        case 'restaurant':
            paramControls.innerHTML = `<div class="inline-control-card"><span class="field-label"><i class="fa fa-utensils"></i> Cuisine Range</span><select class="embedded-select"><option>North Indian Classic</option><option>Continental Fine Dine</option><option>Pan Asian Blend</option></select></div>`;
            grid.innerHTML = `
                <div class="ss-card"><div class="ribbon status-discount">EazyDiner Prime Node</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=150&q=80" alt="Restaurant">
                <div class="ss-info-wrapper"><span class="item-meta-title">Barbeque Nation Buffet</span><p class="flight-schedule">Riverside Corridor Terminal. Elite Live Table-Grill Interface.</p></div>
                <div class="ss-price-action"><h2 class="item-price">25% OFF</h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Barbeque Nation Table Matrix')">Reserve Table</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=150&q=80" alt="Restaurant">
                <div class="ss-info-wrapper"><span class="item-meta-title">Garden Grille & Bar <small style="color:#eab308;">★ 4.5</small></span><p class="flight-schedule">Hilton Hospitality Suite. Authentic Pan-Asian luxury menu curation.</p></div>
                <div class="ss-price-action"><h2 class="item-price">10% OFF</h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Hilton Garden Grille Table')">Reserve Table</button></div></div></div>
                
                <div class="ss-card"><div class="ribbon status-recommended">Critic Choice Winner</div><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80" alt="Restaurant">
                <div class="ss-info-wrapper"><span class="item-meta-title">Oudhyana Fine Dining Hub</span><p class="flight-schedule">Taj Hotel Corridor. Iconic royal Mughlai kitchen presentation maps.</p></div>
                <div class="ss-price-action"><h2 class="item-price">No Fees</h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Oudhyana Taj Premium Table')">Reserve Table</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=150&q=80" alt="Restaurant">
                <div class="ss-info-wrapper"><span class="item-meta-title">Falaksnuma Rooftop Lounge</span><p class="flight-schedule">Hotel Clark Avadh corridor. Panoramic city views with open-air layout structures.</p></div>
                <div class="ss-price-action"><h2 class="item-price">15% OFF</h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Falaksnuma Terrace Slot')">Reserve Table</button></div></div></div>
                
                <div class="ss-card"><div class="ss-card-body">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=150&q=80" alt="Restaurant">
                <div class="ss-info-wrapper"><span class="item-meta-title">The Urban Terrace Cafe</span><p class="flight-schedule">Gomti Nagar business circle. Youth-centric premium continental kitchen matrix.</p></div>
                <div class="ss-price-action"><h2 class="item-price">20% OFF</h2><button class="ss-orange-cta" onclick="openInteractivePanel('message-window', 'Urban Terrace Booth')">Reserve Table</button></div></div></div>`;
            break;
    }
}

function openInteractivePanel(type, targetLabel) {
    const panel = document.getElementById('interactive-panel');
    const content = document.getElementById('panel-dynamic-content');
    panel.classList.remove('hidden');
    document.getElementById('panel-title').innerText = targetLabel;
    
    if(type === 'seat-map') {
        content.innerHTML = `<div class="interactive-seat-grid-container"><div class="seat-node" onclick="toggleSeat(this)">1A</div><div class="seat-node occupied">1B</div></div><button class="panel-execution-btn" onclick="executeFinalAllocation('${targetLabel}')">Confirm Slot</button>`;
    } else {
        content.innerHTML = `<button class="panel-execution-btn" onclick="executeFinalAllocation('${targetLabel}')">Finalize Allocation Securely</button>`;
    }
}

function closeInteractivePanel() { document.getElementById('interactive-panel').classList.add('hidden'); }
function toggleSeat(element) { element.classList.toggle('selected-active'); }
function executeFinalAllocation(name) { alert(`Success! Request [${name}] completed.`); closeInteractivePanel(); }
function executeSearchQuery() { alert("Recalculating network nodes..."); }
function togglePopupDropdown(id) { document.getElementById(id).classList.toggle('hidden'); }
function selectLoc(type, value) { document.getElementById(`route-${type}`).value = value; togglePopupDropdown(`${type}-popup-box`); }
function toggleSidebar() { const sb = document.getElementById('sidebar'); sb.style.left = sb.style.left === '0px' ? '-260px' : '0px'; }
function toggleProfileDropdown() { document.getElementById('profile-dropdown').classList.toggle('hidden'); }
function openLoginModal() { document.getElementById('auth-modal').classList.remove('hidden'); }
function closeLoginModal() { document.getElementById('auth-modal').classList.add('hidden'); }
function handleFormSubmission(e) { event.preventDefault(); closeLoginModal(); document.getElementById('header-login-btn').classList.add('hidden'); document.getElementById('profile-trigger').classList.remove('hidden'); }
function mockGoogleSSO() { alert("Handshake connection logged via OpenID account services."); handleFormSubmission(); }

// --- HIGH-CONVERSION ABOUT US LAYOUT RENDER ---
function showAboutPage() {
    toggleSidebar(); 
    clearActiveViewports();
    const target = document.getElementById('static-page-viewport');
    target.classList.remove('hidden');
    
    target.innerHTML = `
        <div class="center-box" style="text-align:left; max-width:800px; padding:50px;">
            <div style="display:flex; align-items:center; gap:15px; margin-bottom:25px;">
                <img src="yatrik-logo.png" alt="Yatrik Brand" style="width:60px; height:60px; object-fit:contain;">
                <h2 style="font-size:2rem; font-weight:800; color:#0f172a;">About YATRIK Engine</h2>
            </div>
            <p style="line-height:1.8; color:#475569; margin-bottom:20px; font-size:1.05rem;">
                YATRIK is a next-generation decentralized travel optimization architecture designed to map real-time logistics parameters instantly across cross-platform endpoints. By aggregating premium network data hooks from networks like Skyscanner, redBus, Uber, and Booking.com, we provide travel architects a unified portal to manage their global passports seamlessly.
            </p>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:20px; margin-top:30px;">
                <div style="background:#f8fafc; padding:20px; border-radius:8px; border:1px solid #e2e8f0;">
                    <h4 style="color:#ff6f2e; font-weight:700; margin-bottom:5px;">24 Nodes</h4>
                    <p style="font-size:0.85rem; color:#64748b;">Global country matrices linked directly via core servers.</p>
                </div>
                <div style="background:#f8fafc; padding:20px; border-radius:8px; border:1px solid #e2e8f0;">
                    <h4 style="color:#1a73e8; font-weight:700; margin-bottom:5px;">Real-Time Sync</h4>
                    <p style="font-size:0.85rem; color:#64748b;">Asynchronous data pipelines running at sub-second speeds.</p>
                </div>
            </div>
            <button class="back-home-btn" style="margin-top:40px; width:100%; justify-content:center;" onclick="showHomeView()">
                <i class="fa fa-arrow-left"></i> Return to Map Dashboard
            </button>
        </div>`;
}

// --- INTERACTIVE SYSTEM FORMS (FEEDBACK & REPORT COMPONENT) ---
function showFormPage(type) {
    toggleSidebar(); 
    clearActiveViewports();
    const target = document.getElementById('static-page-viewport');
    target.classList.remove('hidden');
    
    const isFeedback = (type === 'feedback');
    const titleText = isFeedback ? 'Share Your Experience' : 'Infrastructure Disruption Report';
    const subText = isFeedback ? 'Help us fine-tune the cross-platform search matrix algorithms.' : 'Report network sync failures or inaccurate endpoint pricing matrices.';
    const placeholderText = isFeedback ? 'What would make your journey search experience better? Describe in detail...' : 'Please describe the bug, broken links, or mismatched pricing values encountered...';
    
    target.innerHTML = `
        <div class="center-box" style="text-align:left; max-width:650px; padding:45px;">
            <h2 style="font-size:1.7rem; font-weight:800; color:#0f172a; margin-bottom:6px;">${titleText}</h2>
            <p style="font-size:0.9rem; color:#64748b; margin-bottom:30px;">${subText}</p>
            <form onsubmit="handleFormSubmissionEntry(event, '${type}')" style="display:flex; flex-direction:column; gap:20px;">
                <div class="premium-field-wrap" style="margin-bottom:0;">
                    <label style="font-size:0.85rem; font-weight:700; color:#334155;">User Identity Passport</label>
                    <input type="text" value="Tanzee (YT-2026)" readonly style="background:#f1f5f9; color:#64748b; cursor:not-allowed; border:1px solid #cbd5e1; padding:11px; border-radius:8px; width:100%;">
                </div>
                <div class="premium-field-wrap" style="margin-bottom:0;">
                    <label style="font-size:0.85rem; font-weight:700; color:#334155;">${isFeedback ? 'Rate System Performance' : 'Failure Urgency Tier'}</label>
                    <select class="embedded-select" style="border:1px solid #cbd5e1; padding:11px; border-radius:8px; background:#fff; width:100%; font-weight:600; color:#1e293b;">
                        ${isFeedback ? `
                            <option>★ ★ ★ ★ ★ (Excellent Efficiency Node)</option>
                            <option>★ ★ ★ ★ ☆ (Highly Functional)</option>
                            <option>★ ★ ★ ☆ ☆ (Average Runtime Parameters)</option>
                        ` : `
                            <option>Priority 1: Critical System Disruption</option>
                            <option>Priority 2: Minor Pricing Inaccuracy Mismatch</option>
                            <option>Priority 3: Cosmetic Layout Glitch</option>
                        `}
                    </select>
                </div>
                <div class="premium-field-wrap" style="margin-bottom:0;">
                    <label style="font-size:0.85rem; font-weight:700; color:#334155;">Detailed Data Log String</label>
                    <textarea required placeholder="${placeholderText}" style="width:100%; height:140px; padding:14px; border-radius:8px; border:1px solid #cbd5e1; font-family:inherit; font-size:0.95rem; outline:none; resize:none;"></textarea>
                </div>
                <div style="display:flex; gap:15px; margin-top:10px;">
                    <button type="button" class="back-home-btn" style="flex:1; justify-content:center; padding:12px;" onclick="showHomeView()">Cancel</button>
                    <button type="submit" class="primary-orange-search-btn" style="flex:1; justify-content:center; margin-left:0; padding:12px; border-radius:8px;">Submit Data Log</button>
                </div>
            </form>
        </div>`;
}

function handleFormSubmissionEntry(event, type) {
    event.preventDefault();
    alert(`Success! Your operational data token for [${type.toUpperCase()}] has been dispatched securely to the Yatrik infrastructure database.`);
    showHomeView();
}