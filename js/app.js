/* =========================================================
   Assod Hotel — Application Script
   Frontend-only. Dummy data shaped for future REST API swap.
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     Dummy data (replace with fetch('/api/...') later)
     --------------------------------------------------------- */
  const AssodData = {
    hotel: {
      name: "Assod Hotel",
      location: "Hargeisa, Somaliland",
      address: "Principal Road, Hargeisa, Somaliland",
      email: "casood31@gmail.com",
      phones: [
        { label: "Telesom", number: "+252 523101" },
        { label: "Somtel", number: "+252 301111" },
      ],
      frontDesk: "Open 24 Hours",
      social: {
        facebook: "https://facebook.com",
      },
      map: {
        lat: 9.562741,
        lng: 44.046787,
        link: "https://www.bing.com/maps?q=ASSOD+HOTEL&cp=9.562741~44.046787&lvl=15&ss=ypid.YNABA3767EC2CADBE3",
        embedBase:
          "https://www.bing.com/maps/embed?cp=9.562741~44.046787&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
      },
    },

    stats: [
      { label: "Luxury Rooms", value: 48, suffix: "+" },
      { label: "Happy Guests", value: 12000, suffix: "+" },
      { label: "Professional Staff", value: 85, suffix: "+" },
      { label: "Years Experience", value: 15, suffix: "+" },
    ],

    rooms: [
      {
        id: "luxury",
        name: "Luxury Room",
        price: 95,
        capacity: 2,
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
        description:
          "Elegant furnishings, premium bedding, and city views for a refined stay in the heart of Hargeisa.",
        features: ["King Bed", "City View", "Free WiFi", "Smart TV", "Mini Bar"],
      },
      {
        id: "standard",
        name: "Standard Room",
        price: 65,
        capacity: 2,
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
        description:
          "Comfortable and thoughtfully designed rooms with everything you need for a restful overnight stay.",
        features: ["Queen Bed", "Work Desk", "Free WiFi", "Air Conditioning", "En-suite Bath"],
      },
      {
        id: "family",
        name: "Family Room",
        price: 120,
        capacity: 4,
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
        description:
          "Spacious layout ideal for families, with separate sleeping areas and thoughtful amenities for all ages.",
        features: ["2 Queen Beds", "Family Seating", "Free WiFi", "Kids Amenities", "Room Service"],
      },
      {
        id: "suite",
        name: "Executive Suite",
        price: 180,
        capacity: 3,
        rating: 5.0,
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        description:
          "Our signature suite with a living lounge, premium finishes, and elevated hospitality for discerning guests.",
        features: ["King Bed", "Living Lounge", "Butler Service", "Premium Toiletries", "Panoramic View"],
      },
    ],

    features: [
      { icon: "🛏️", title: "Luxury Rooms", text: "Thoughtfully designed spaces with premium comfort." },
      { icon: "🛎️", title: "24/7 Reception", text: "Round-the-clock support for every guest need." },
      { icon: "📶", title: "Free WiFi", text: "High-speed internet across rooms and public areas." },
      { icon: "🍽️", title: "Restaurant", text: "Traditional Somali flavors and international cuisine." },
      { icon: "🏛️", title: "Conference Hall", text: "Professional venues for meetings and events." },
      { icon: "✈️", title: "Airport Pickup", text: "Reliable transfers to and from the airport." },
      { icon: "🧴", title: "Room Service", text: "In-room dining whenever you prefer." },
      { icon: "🅿️", title: "Parking", text: "Secure on-site parking for hotel guests." },
      { icon: "👨‍👩‍👧", title: "Family Friendly", text: "Warm hospitality designed for every traveler." },
    ],

    services: [
      {
        id: "restaurant",
        title: "Restaurant",
        icon: "🍽️",
        text: "Enjoy refined dining at Assod Restaurant with traditional Somali flavors and international favorites in an elegant setting.",
        details: [
          "Breakfast: 6:30 AM – 10:30 AM",
          "Lunch: 12:00 PM – 3:00 PM",
          "Dinner: 6:00 PM – 10:30 PM",
        ],
        image: "assets/outdoor-cafeteria.png",
        link: "restaurant.html",
      },
      {
        id: "room-service",
        title: "24/7 Room Service",
        icon: "🛎️",
        text: "Order meals and refreshments to your room at any hour — attentive service whenever you need it.",
        details: ["Available 24 hours a day", "In-room dining on request"],
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
        link: "menu.html",
      },
      {
        id: "fitness",
        title: "Fitness Center (Gym)",
        icon: "🏋️",
        text: "Stay active during your stay in our modern fitness center equipped for cardio and strength training.",
        details: ["Open daily for hotel guests", "Cardio & strength equipment"],
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
        link: "contact.html",
      },
      {
        id: "banquet",
        title: "Banquet & Conference Hall",
        icon: "🏛️",
        text: "Host weddings, banquets, and large conferences in a spacious hall designed for memorable occasions.",
        details: ["Capacity: 200 Guests", "Ideal for events & conferences"],
        image: "assets/conference-hall.png",
        link: "contact.html",
      },
      {
        id: "meeting-rooms",
        title: "Meeting Rooms",
        icon: "💼",
        text: "Nine private meeting rooms tailored for board meetings, workshops, and focused business sessions.",
        details: ["9 meeting rooms available", "Capacity: 7–13 people each"],
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        link: "contact.html",
      },
      {
        id: "barbershop",
        title: "Barbershop",
        icon: "✂️",
        text: "Refresh your look with professional grooming services available on-site at Assod Hotel.",
        details: ["On-site grooming service", "Ask reception for appointments"],
        image:
          "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80",
        link: "contact.html",
      },
      {
        id: "laundry",
        title: "Laundry Service",
        icon: "👔",
        text: "Professional laundry and pressing services to keep your wardrobe fresh throughout your stay.",
        details: ["Same-day options available", "Arrange via front desk"],
        image:
          "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1200&q=80",
        link: "contact.html",
      },
    ],

    restaurant: {
      intro:
        "Assod Restaurant brings together traditional Somali hospitality and international favorites in a warm, elegant setting.",
      meals: [
        {
          title: "Breakfast",
          text: "Fresh juices, eggs, pastries, and Somali morning classics to start your day.",
          image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
        },
        {
          title: "Lunch",
          text: "Balanced plates featuring grilled meats, salads, and seasonal specialties.",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
        },
        {
          title: "Dinner",
          text: "An evening menu of signature dishes in a refined dining atmosphere.",
          image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80",
        },
        {
          title: "Coffee & Juices",
          text: "Specialty coffee, fresh juices, and light bites throughout the day.",
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
        },
      ],
      cuisine: [
        { title: "Traditional Food", text: "Authentic regional flavors prepared with care." },
        { title: "International Food", text: "Familiar global dishes for every palate." },
        { title: "Fresh Juices", text: "Pressed daily from seasonal fruits." },
        { title: "Coffee Service", text: "Rich blends for meetings and quiet mornings." },
      ],
    },

    testimonials: [
      {
        name: "Amina Yusuf",
        role: "Business Traveler",
        rating: 5,
        quote:
          "Assod Hotel made my stay in Hargeisa effortless. The rooms are spotless, the staff is attentive, and the location on Principal Road is perfect.",
        photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Daniel Okello",
        role: "Family Guest",
        rating: 5,
        quote:
          "We booked a family room and felt genuinely welcomed. Breakfast was excellent and the front desk helped with every detail.",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Sara Mohamed",
        role: "Event Organizer",
        rating: 5,
        quote:
          "Our conference ran smoothly thanks to Assod’s professional team and well-equipped hall. Highly recommended for corporate stays.",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      },
    ],

    gallery: [
      {
        id: 1,
        category: "hotel",
        title: "Hotel Exterior",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
        wide: true,
      },
      {
        id: 2,
        category: "rooms",
        title: "Luxury Suite",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 3,
        category: "restaurant",
        title: "Outdoor Cafeteria",
        image: "assets/outdoor-cafeteria.png",
        wide: true,
      },
      {
        id: 4,
        category: "reception",
        title: "Reception Lounge",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 5,
        category: "rooms",
        title: "Executive Bedroom",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
        tall: true,
      },
      {
        id: 6,
        category: "conference",
        title: "Conference Hall",
        image: "assets/conference-hall.png",
      },
      {
        id: 7,
        category: "garden",
        title: "Garden Courtyard",
        image: "assets/outdoor-cafeteria.png",
      },
      {
        id: 8,
        category: "restaurant",
        title: "Breakfast Spread",
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: 9,
        category: "hotel",
        title: "Evening Ambience",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80",
        wide: true,
      },
    ],

    about: {
      story:
        "Assod Hotel stands on Principal Road in Hargeisa as a modern address for travelers who value comfort, warmth, and reliable service. From leisure guests to business visitors, we welcome every stay with genuine Somali hospitality.",
      mission:
        "To deliver refined comfort and attentive service that make every guest feel at home in Hargeisa.",
      vision:
        "To be Somaliland’s most trusted luxury hotel — known for elegance, consistency, and heartfelt hospitality.",
      values: [
        { title: "Excellence", text: "High standards in rooms, dining, and guest care." },
        { title: "Integrity", text: "Honest service and transparent communication." },
        { title: "Hospitality", text: "Warm welcomes rooted in local culture." },
        { title: "Comfort", text: "Spaces designed for rest, focus, and celebration." },
      ],
      why: [
        "Prime location on Principal Road, Hargeisa",
        "Well-appointed rooms for every traveler",
        "On-site restaurant and event facilities",
        "24-hour front desk and guest support",
        "Airport transfer and concierge assistance",
        "Consistent luxury at accessible rates",
      ],
    },
  };

  window.AssodData = AssodData;

  /* ---------------------------------------------------------
     Utilities
     --------------------------------------------------------- */
  const qs = (sel, root = document) => root.querySelector(sel);
  const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];

  const pageName = () => {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    return file === "" ? "index.html" : file;
  };

  const stars = (n) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));

  /* ---------------------------------------------------------
     Dark mode
     --------------------------------------------------------- */
  function initDarkMode() {
    const saved = localStorage.getItem("assod-theme");
    if (saved === "dark") document.documentElement.classList.add("dark");

    qsa("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        const mode = document.documentElement.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("assod-theme", mode);
        syncThemeIcons();
      });
    });
    syncThemeIcons();
  }

  function syncThemeIcons() {
    const dark = document.documentElement.classList.contains("dark");
    qsa("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      btn.innerHTML = dark ? "☀️" : "🌙";
    });
  }

  /* ---------------------------------------------------------
     Sticky navbar + active link
     --------------------------------------------------------- */
  function initNavbar() {
    const header = qs("[data-site-header]");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
      header.classList.toggle("is-transparent", window.scrollY <= 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const current = pageName();
    qsa("[data-nav-link]").forEach((link) => {
      const href = (link.getAttribute("href") || "").toLowerCase();
      const isMenuSection =
        (current === "menu.html" || current === "menu-category.html") && href === "menu.html";
      if (
        href === current ||
        isMenuSection ||
        (current === "index.html" && href.endsWith("index.html"))
      ) {
        link.classList.add("is-active");
      }
    });
  }

  /* ---------------------------------------------------------
     Mobile menu
     --------------------------------------------------------- */
  function initMobileMenu() {
    const menu = qs("[data-mobile-menu]");
    const openBtns = qsa("[data-menu-open]");
    const closeBtns = qsa("[data-menu-close]");
    if (!menu) return;

    const open = () => {
      menu.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      menu.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    openBtns.forEach((b) => b.addEventListener("click", open));
    closeBtns.forEach((b) => b.addEventListener("click", close));
    menu.addEventListener("click", (e) => {
      if (e.target === menu) close();
    });
  }

  /* ---------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------- */
  function initReveal() {
    const items = qsa(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------
     Animated counters
     --------------------------------------------------------- */
  function initCounters() {
    const counters = qsa("[data-counter]");
    if (!counters.length) return;

    const animate = (el) => {
      const target = Number(el.dataset.counter || 0);
      const suffix = el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString() + suffix;
      };
      requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(animate);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------
     Testimonials slider
     --------------------------------------------------------- */
  function initTestimonials() {
    const root = qs("[data-testimonials]");
    if (!root) return;

    const track = qs("[data-testimonial-track]", root);
    const dotsWrap = qs("[data-testimonial-dots]", root);
    const slides = AssodData.testimonials;
    let index = 0;
    let timer;

    track.innerHTML = slides
      .map(
        (t) => `
      <article class="testimonial-slide">
        <div class="card p-8 md:p-10">
          <div class="rating mb-4 text-lg">${stars(t.rating)}</div>
          <p class="text-lg md:text-xl leading-relaxed mb-8" style="color:var(--text)">“${t.quote}”</p>
          <div class="flex items-center gap-4">
            <img src="${t.photo}" alt="${t.name}" class="w-14 h-14 rounded-full object-cover" loading="lazy" />
            <div>
              <div class="font-bold">${t.name}</div>
              <div class="text-sm" style="color:var(--text-muted)">${t.role}</div>
            </div>
          </div>
        </div>
      </article>`
      )
      .join("");

    dotsWrap.innerHTML = slides
      .map(
        (_, i) =>
          `<button type="button" class="w-2.5 h-2.5 rounded-full transition" data-dot="${i}" aria-label="Go to review ${i + 1}"></button>`
      )
      .join("");

    const paint = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
      qsa("[data-dot]", dotsWrap).forEach((dot, i) => {
        dot.style.background = i === index ? "#0B7A3E" : "rgba(11,122,62,0.25)";
      });
    };

    const go = (i) => {
      index = (i + slides.length) % slides.length;
      paint();
    };

    dotsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-dot]");
      if (!btn) return;
      go(Number(btn.dataset.dot));
      restart();
    });

    qs("[data-testimonial-prev]", root)?.addEventListener("click", () => {
      go(index - 1);
      restart();
    });
    qs("[data-testimonial-next]", root)?.addEventListener("click", () => {
      go(index + 1);
      restart();
    });

    const restart = () => {
      clearInterval(timer);
      timer = setInterval(() => go(index + 1), 5500);
    };

    paint();
    restart();
  }

  /* ---------------------------------------------------------
     Dynamic room cards
     --------------------------------------------------------- */
  function initRoomCards() {
    const grids = qsa("[data-rooms-grid]");
    if (!grids.length) return;

    const detailed = (room) => `
      <article class="card reveal">
        <div class="relative overflow-hidden h-56">
          <img src="${room.image}" alt="${room.name}" class="w-full h-full object-cover" loading="lazy" />
          <div class="absolute top-4 left-4 glass text-white text-xs font-bold px-3 py-1 rounded-full">${room.capacity} Guests</div>
        </div>
        <div class="p-6">
          <div class="flex items-start justify-between gap-3 mb-2">
            <h3 class="font-display text-xl font-semibold">${room.name}</h3>
            <div class="rating text-sm">${stars(room.rating)}</div>
          </div>
          <div class="price-tag mb-3">$${room.price} <span>/ night</span></div>
          <p class="text-sm mb-4" style="color:var(--text-muted)">${room.description}</p>
          <ul class="flex flex-wrap gap-2 mb-6">
            ${room.features
              .map(
                (f) =>
                  `<li class="text-xs font-semibold px-2.5 py-1 rounded-full" style="background:rgba(11,122,62,0.08);color:var(--brand-green)">${f}</li>`
              )
              .join("")}
          </ul>
          <a href="booking.html?room=${room.id}" class="btn btn-primary w-full">Book Now</a>
        </div>
      </article>`;

    grids.forEach((grid) => {
      const limit = Number(grid.dataset.limit || AssodData.rooms.length);
      grid.innerHTML = AssodData.rooms.slice(0, limit).map(detailed).join("");
    });
  }

  /* ---------------------------------------------------------
     Features / services renderers
     --------------------------------------------------------- */
  function initFeaturesGrid() {
    const grid = qs("[data-features-grid]");
    if (!grid) return;
    grid.innerHTML = AssodData.features
      .map(
        (f, i) => `
      <article class="card p-6 reveal reveal-delay-${(i % 3) + 1}">
        <div class="feature-icon mb-4">${f.icon}</div>
        <h3 class="font-bold text-lg mb-2">${f.title}</h3>
        <p class="text-sm" style="color:var(--text-muted)">${f.text}</p>
      </article>`
      )
      .join("");
  }

  function renderServiceCard(s, i, options = {}) {
    const details = (s.details || [])
      .map(
        (d) =>
          `<li class="service-detail-item"><span class="service-detail-dot"></span>${d}</li>`
      )
      .join("");

    return `
      <article class="service-card reveal reveal-delay-${(i % 3) + 1}">
        <div class="service-card-media">
          <img src="${s.image}" alt="${s.title}" loading="lazy" />
          <div class="service-card-icon" aria-hidden="true">${s.icon || "✦"}</div>
        </div>
        <div class="service-card-body">
          <h3 class="service-card-title">${s.title}</h3>
          <p class="service-card-text">${s.text}</p>
          ${details ? `<ul class="service-details">${details}</ul>` : ""}
          <a href="${s.link || "contact.html"}" class="btn btn-outline-dark !py-2.5 !px-4 text-sm mt-auto self-start">Learn More</a>
        </div>
      </article>`;
  }

  function initServicesGrid() {
    const grids = qsa("[data-services-grid]");
    if (!grids.length) return;

    grids.forEach((grid) => {
      const limit = Number(grid.dataset.limit || AssodData.services.length);
      grid.innerHTML = AssodData.services
        .slice(0, limit)
        .map((s, i) => renderServiceCard(s, i))
        .join("");
    });
  }

  function initRestaurantMeals() {
    const grid = qs("[data-restaurant-meals]");
    if (!grid) return;
    grid.innerHTML = AssodData.restaurant.meals
      .map(
        (m) => `
      <article class="card reveal">
        <div class="h-52 overflow-hidden">
          <img src="${m.image}" alt="${m.title}" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="p-6">
          <h3 class="font-display text-xl font-semibold mb-2">${m.title}</h3>
          <p class="text-sm" style="color:var(--text-muted)">${m.text}</p>
        </div>
      </article>`
      )
      .join("");
  }

  function initStats() {
    const grid = qs("[data-stats-grid]");
    if (!grid) return;
    grid.innerHTML = AssodData.stats
      .map(
        (s) => `
      <div class="stat-card reveal">
        <div class="stat-number" data-counter="${s.value}" data-suffix="${s.suffix}">0</div>
        <div class="mt-2 font-semibold" style="color:var(--text-muted)">${s.label}</div>
      </div>`
      )
      .join("");
  }

  function initHomeGallery() {
    const grid = qs("[data-home-gallery]");
    if (!grid) return;
    grid.innerHTML = AssodData.gallery
      .slice(0, 6)
      .map(
        (g) => `
      <button type="button" class="gallery-item ${g.wide ? "wide" : ""} ${g.tall ? "tall" : ""} reveal"
        data-lightbox-src="${g.image}" data-lightbox-alt="${g.title}">
        <img src="${g.image}" alt="${g.title}" loading="lazy" />
        <span class="gallery-caption">${g.title}</span>
      </button>`
      )
      .join("");
  }

  function initRestaurantPreview() {
    const grid = qs("[data-restaurant-preview]");
    if (!grid) return;
    grid.innerHTML = AssodData.restaurant.meals
      .slice(0, 3)
      .map(
        (m) => `
      <article class="card reveal">
        <div class="h-52 overflow-hidden">
          <img src="${m.image}" alt="${m.title}" class="w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="p-6">
          <h3 class="font-display text-xl font-semibold mb-2">${m.title}</h3>
          <p class="text-sm mb-5" style="color:var(--text-muted)">${m.text}</p>
          <a href="restaurant.html" class="btn btn-outline-dark">Learn More</a>
        </div>
      </article>`
      )
      .join("");
  }

  /* ---------------------------------------------------------
     Gallery page + lightbox
     --------------------------------------------------------- */
  function initGalleryPage() {
    const grid = qs("[data-gallery-page]");
    if (!grid) return;

    const filters = qsa("[data-filter]");
    let active = "all";

    const render = () => {
      const items =
        active === "all"
          ? AssodData.gallery
          : AssodData.gallery.filter((g) => g.category === active);

      grid.innerHTML = items
        .map(
          (g) => `
        <button type="button" class="gallery-item ${g.wide ? "wide" : ""} ${g.tall ? "tall" : ""} reveal is-visible"
          data-lightbox-src="${g.image}" data-lightbox-alt="${g.title}">
          <img src="${g.image}" alt="${g.title}" loading="lazy" />
          <span class="gallery-caption">${g.title}</span>
        </button>`
        )
        .join("");
    };

    filters.forEach((btn) => {
      btn.addEventListener("click", () => {
        active = btn.dataset.filter;
        filters.forEach((b) => b.classList.toggle("is-active", b === btn));
        render();
      });
    });

    render();
  }

  function initLightbox() {
    let box = qs("[data-lightbox]");
    if (!box) {
      box = document.createElement("div");
      box.className = "lightbox";
      box.setAttribute("data-lightbox", "");
      box.innerHTML = `
        <button type="button" class="lightbox-close" data-lightbox-close aria-label="Close">×</button>
        <img src="" alt="" data-lightbox-image />`;
      document.body.appendChild(box);
    }

    const img = qs("[data-lightbox-image]", box);
    const open = (src, alt) => {
      img.src = src;
      img.alt = alt || "Assod Hotel gallery image";
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
    };

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-lightbox-src]");
      if (trigger) {
        open(trigger.dataset.lightboxSrc, trigger.dataset.lightboxAlt);
      }
      if (e.target.matches("[data-lightbox-close]") || e.target === box) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ---------------------------------------------------------
     Booking + contact forms
     --------------------------------------------------------- */
  function showSuccessModal(title, message) {
    let backdrop = qs("[data-success-modal]");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop";
      backdrop.setAttribute("data-success-modal", "");
      backdrop.innerHTML = `
        <div class="modal-card" role="dialog" aria-modal="true">
          <div class="success-icon">✓</div>
          <h3 class="font-display text-2xl font-semibold mb-2" data-success-title>Success</h3>
          <p class="mb-6" style="color:var(--text-muted)" data-success-message></p>
          <button type="button" class="btn btn-primary w-full" data-success-close>Close</button>
        </div>`;
      document.body.appendChild(backdrop);
    }

    qs("[data-success-title]", backdrop).textContent = title;
    qs("[data-success-message]", backdrop).textContent = message;
    backdrop.classList.add("is-open");

    const close = () => backdrop.classList.remove("is-open");
    qs("[data-success-close]", backdrop).onclick = close;
    backdrop.onclick = (e) => {
      if (e.target === backdrop) close();
    };
  }

  function setError(input, message) {
    input.classList.add("is-invalid");
    const err = input.parentElement.querySelector(".form-error");
    if (err) err.textContent = message || "";
  }

  function clearError(input) {
    input.classList.remove("is-invalid");
    const err = input.parentElement.querySelector(".form-error");
    if (err) err.textContent = "";
  }

  function initBookingForm() {
    const form = qs("[data-booking-form]");
    if (!form) return;

    const roomSelect = qs("#roomType", form);
    AssodData.rooms.forEach((r) => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = `${r.name} — $${r.price}/night`;
      roomSelect.appendChild(opt);
    });

    const today = new Date().toISOString().split("T")[0];
    const checkIn = qs("#checkIn", form);
    const checkOut = qs("#checkOut", form);
    if (checkIn) checkIn.min = today;
    if (checkOut) checkOut.min = today;
    checkIn?.addEventListener("change", () => {
      if (checkIn.value) checkOut.min = checkIn.value;
    });

    const params = new URLSearchParams(location.search);
    const preselect = params.get("room");
    if (preselect) roomSelect.value = preselect;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = {
        fullName: qs("#fullName", form),
        phone: qs("#phone", form),
        email: qs("#email", form),
        checkIn: qs("#checkIn", form),
        checkOut: qs("#checkOut", form),
        guests: qs("#guests", form),
        roomType: qs("#roomType", form),
        requests: qs("#requests", form),
      };

      Object.values(fields).forEach(clearError);
      let valid = true;

      if (!fields.fullName.value.trim() || fields.fullName.value.trim().length < 3) {
        setError(fields.fullName, "Please enter your full name.");
        valid = false;
      }
      if (!/^[+\d\s()-]{7,}$/.test(fields.phone.value.trim())) {
        setError(fields.phone, "Enter a valid phone number.");
        valid = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value.trim())) {
        setError(fields.email, "Enter a valid email address.");
        valid = false;
      }
      if (!fields.checkIn.value) {
        setError(fields.checkIn, "Select check-in date.");
        valid = false;
      }
      if (!fields.checkOut.value) {
        setError(fields.checkOut, "Select check-out date.");
        valid = false;
      }
      if (fields.checkIn.value && fields.checkOut.value && fields.checkOut.value <= fields.checkIn.value) {
        setError(fields.checkOut, "Check-out must be after check-in.");
        valid = false;
      }
      if (!fields.guests.value || Number(fields.guests.value) < 1) {
        setError(fields.guests, "Select number of guests.");
        valid = false;
      }
      if (!fields.roomType.value) {
        setError(fields.roomType, "Choose a room type.");
        valid = false;
      }

      if (!valid) return;

      /* Future: POST to /api/bookings */
      const payload = {
        fullName: fields.fullName.value.trim(),
        phone: fields.phone.value.trim(),
        email: fields.email.value.trim(),
        checkIn: fields.checkIn.value,
        checkOut: fields.checkOut.value,
        guests: Number(fields.guests.value),
        roomType: fields.roomType.value,
        requests: fields.requests.value.trim(),
      };
      console.info("Booking payload (frontend only):", payload);

      form.reset();
      if (preselect) roomSelect.value = preselect;
      showSuccessModal(
        "Booking Request Received",
        "Thank you. Our reservations team will confirm your stay shortly via phone or email."
      );
    });
  }

  function initContactForm() {
    const form = qs("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = qs("#contactName", form);
      const email = qs("#contactEmail", form);
      const phone = qs("#contactPhone", form);
      const message = qs("#contactMessage", form);
      [name, email, phone, message].forEach(clearError);
      let valid = true;

      if (!name.value.trim()) {
        setError(name, "Name is required.");
        valid = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setError(email, "Valid email is required.");
        valid = false;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        setError(message, "Please write a short message.");
        valid = false;
      }
      if (!valid) return;

      console.info("Contact payload (frontend only):", {
        name: name.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        message: message.value.trim(),
      });

      form.reset();
      showSuccessModal(
        "Message Sent",
        "Thank you for contacting Assod Hotel. We will get back to you soon."
      );
    });
  }

  /* ---------------------------------------------------------
     Back to top
     --------------------------------------------------------- */
  function initBackToTop() {
    let btn = qs("[data-back-to-top]");
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "back-to-top";
      btn.setAttribute("data-back-to-top", "");
      btn.setAttribute("aria-label", "Back to top");
      btn.innerHTML = "↑";
      document.body.appendChild(btn);
    }

    window.addEventListener(
      "scroll",
      () => {
        btn.classList.toggle("is-visible", window.scrollY > 500);
      },
      { passive: true }
    );

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------------------------------------------------
     Year stamp
     --------------------------------------------------------- */
  function initYear() {
    qsa("[data-year]").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ---------------------------------------------------------
     Bing Maps embeds (Assod Hotel location)
     --------------------------------------------------------- */
  function initMaps() {
    const map = AssodData.hotel.map;
    if (!map) return;

    qsa("[data-map-embed]").forEach((el) => {
      const height = el.dataset.mapHeight || "220";
      const showLink = el.dataset.mapLink !== "false";
      const variant = el.dataset.mapVariant || "";
      const classes = ["map-embed", variant === "footer" ? "is-footer" : "", variant === "large" ? "is-large" : ""]
        .filter(Boolean)
        .join(" ");

      el.innerHTML = `
        <div class="${classes}" style="min-height:${height}px">
          <iframe
            title="Assod Hotel location on Bing Maps"
            src="${map.embedBase}&h=${height}&w=800"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
        ${
          showLink
            ? `<a class="map-embed-link${variant === "footer" ? " !text-white/85" : ""}" href="${map.link}" target="_blank" rel="noopener">Open in Bing Maps ↗</a>`
            : ""
        }`;
    });
  }

  /* ---------------------------------------------------------
     Restaurant Menu page (data from js/menu-data.js)
     --------------------------------------------------------- */
  function formatMoney(value) {
    const n = Number(value);
    return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(1)}`;
  }

  function escapeAttr(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/'/g, "&#39;");
  }

  function formatItemPriceDisplay(item) {
    if (item.prices) {
      return Object.entries(item.prices)
        .map(
          ([size, price]) =>
            `<span>${size} <strong>${formatMoney(price)}</strong></span>`
        )
        .join("");
    }
    return formatMoney(item.price);
  }

  function getMenuItemImage(item, category) {
    if (window.AssodMenuImages && typeof window.AssodMenuImages.resolve === "function") {
      return window.AssodMenuImages.resolve(item, category);
    }
    const images = (window.AssodMenu && window.AssodMenu.images) || {};
    if (item.image) return item.image;
    if (item.imageKey && images[item.imageKey]) return images[item.imageKey];
    if (category && category.image) return category.image;
    return images.default || "assets/menu/Outdoor_Cafeteria.jpeg";
  }

  function renderFoodCard(item, category) {
    const image = getMenuItemImage(item, category);
    const priceHtml = item.prices
      ? `<div class="menu-price-sizes">${formatItemPriceDisplay(item)}</div>`
      : `<div class="menu-price">${formatItemPriceDisplay(item)}</div>`;
    const orderLabel = item.prices
      ? `${item.name} (from ${formatMoney(Object.values(item.prices)[0])})`
      : `${item.name} (${formatMoney(item.price)})`;

    return `
      <article class="menu-item-card">
        <div class="menu-card-media">
          <span class="menu-card-badge">${category.name}</span>
          <img src="${image}" alt="${escapeAttr(item.name)}" loading="lazy" />
        </div>
        <div class="menu-card-body">
          <h3 class="menu-card-title">${item.name}</h3>
          <p class="menu-card-desc">${item.description || "A carefully prepared Assod Hotel specialty."}</p>
          <div class="menu-card-footer">
            ${priceHtml}
            <button
              type="button"
              class="btn btn-primary !py-2.5 !px-4 text-sm menu-order-btn"
              data-order-item="${escapeAttr(item.name)}"
              data-order-label="${escapeAttr(orderLabel)}"
            >Order Now</button>
          </div>
        </div>
      </article>`;
  }

  function bindOrderButtons(root) {
    root.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-order-item]");
      if (!btn) return;
      const label = btn.dataset.orderLabel || btn.dataset.orderItem;
      console.info("Order request (frontend only):", label);
      showSuccessModal(
        "Order Received",
        `Thank you! Your request for “${btn.dataset.orderItem}” has been noted. Please speak with our restaurant team to confirm your order.`
      );
    });
  }

  /* Main Menu page — category cards only */
  function initMenuPage() {
    const root = qs("[data-menu-page]");
    if (!root || !window.AssodMenu) return;

    const listEl = qs("[data-menu-categories]", root);
    const searchEl = qs("[data-menu-category-search]", root);
    const countEl = qs("[data-menu-category-count]", root);
    if (!listEl) return;

    let query = "";

    const render = () => {
      const categories = AssodMenu.categories.filter((c) => {
        if (!query) return true;
        return `${c.name} ${c.description}`.toLowerCase().includes(query);
      });

      if (!categories.length) {
        listEl.innerHTML = `<div class="menu-empty">No categories match your search.</div>`;
      } else {
        listEl.innerHTML = categories
          .map(
            (c, i) => `
          <a href="menu-category.html?cat=${encodeURIComponent(c.id)}" class="menu-cat-card reveal is-visible reveal-delay-${(i % 3) + 1}">
            <div class="menu-cat-media">
              <img src="${c.image}" alt="${escapeAttr(c.name)}" loading="lazy" />
            </div>
            <div class="menu-cat-body">
              <div class="menu-cat-meta">
                <span class="menu-cat-count">${c.items.length} item${c.items.length === 1 ? "" : "s"}</span>
              </div>
              <h3 class="menu-cat-title">${c.name}</h3>
              <p class="menu-cat-desc">${c.description}</p>
              <span class="btn btn-primary !py-2.5 !px-4 text-sm self-start mt-auto">View Menu</span>
            </div>
          </a>`
          )
          .join("");
      }

      if (countEl) {
        countEl.textContent = `${categories.length} categor${categories.length === 1 ? "y" : "ies"}`;
      }
    };

    searchEl?.addEventListener("input", () => {
      query = searchEl.value.trim().toLowerCase();
      render();
    });

    render();
  }

  /* Category detail page — food cards for one category */
  function initMenuCategoryPage() {
    const root = qs("[data-menu-category-page]");
    if (!root || !window.AssodMenu) return;

    const params = new URLSearchParams(location.search);
    const catId = params.get("cat") || "";
    const category = AssodMenu.categories.find((c) => c.id === catId);

    const titleEl = qs("[data-cat-title]", root);
    const descEl = qs("[data-cat-desc]", root);
    const countEl = qs("[data-cat-count]", root);
    const heroEl = qs("[data-cat-hero]", root);
    const listEl = qs("[data-cat-items]", root);
    const searchEl = qs("[data-cat-search]", root);
    const crumbEl = qs("[data-cat-crumb]", root);

    if (!category) {
      if (titleEl) titleEl.textContent = "Category Not Found";
      if (descEl) descEl.textContent = "Please return to the menu and choose a category.";
      if (listEl) {
        listEl.innerHTML = `<div class="menu-empty"><p class="mb-4">This menu category could not be found.</p><a href="menu.html" class="btn btn-primary">Back to Menu</a></div>`;
      }
      document.title = "Menu | Assod Hotel";
      return;
    }

    document.title = `${category.name} Menu | Assod Hotel`;
    if (crumbEl) crumbEl.textContent = category.name;
    if (titleEl) titleEl.textContent = category.name;
    if (descEl) descEl.textContent = category.description;
    if (heroEl) heroEl.style.backgroundImage = `url('${category.image}')`;

    let query = "";

    const render = () => {
      const items = category.items.filter((item) => {
        if (!query) return true;
        return `${item.name} ${item.description || ""}`.toLowerCase().includes(query);
      });

      if (countEl) {
        countEl.textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;
      }

      if (!items.length) {
        listEl.innerHTML = `<div class="menu-empty">No dishes match your search in ${category.name}.</div>`;
        return;
      }

      listEl.innerHTML = `<div class="menu-cards-grid">${items
        .map((item) => renderFoodCard(item, category))
        .join("")}</div>`;
    };

    searchEl?.addEventListener("input", () => {
      query = searchEl.value.trim().toLowerCase();
      render();
    });

    bindOrderButtons(listEl);
    render();
  }

  /* ---------------------------------------------------------
     Boot
     --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    initNavbar();
    initMobileMenu();
    initStats();
    initFeaturesGrid();
    initRoomCards();
    initServicesGrid();
    initRestaurantMeals();
    initRestaurantPreview();
    initHomeGallery();
    initGalleryPage();
    initTestimonials();
    initLightbox();
    initBookingForm();
    initContactForm();
    initMenuPage();
    initMenuCategoryPage();
    initMaps();
    initReveal();
    initCounters();
    initBackToTop();
    initYear();
  });
})();
