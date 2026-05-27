// Database containing copy and sections for each edition
const editionData = {
  shorts: {
    heroBadgeText: "Open for Reels & TikTok Edits",
    heroHeadline: `High-Retention Vertical Videos That <span class="text-primary" style="font-style: italic;">Stop the Scroll</span>`,
    heroDescription: "Based in Kharghar, Navi Mumbai, I edit viral short-form content for creators and brands globally. I focus on retention, hook optimization, and clean typography to keep viewers engaged.",
    heroPrimaryCta: "View Reels",
    heroSecondaryCta: "Hire Me",
    partnersLabel: "Editing Software & Assets",
    portfolioBadge: "Reels Portfolio",
    portfolioTitle: "Engineered for the Algorithm",
    bentoMainTitle: "Short-Form Growth Case",
    bentoMainDesc: "Rhythmic cuts, clean subtitles, sound effects, and zoom-in transitions to double view-through rates.",
    bentoC2Badge: "Fast Paced",
    bentoC3Badge: "Sound Design",
    servicesBadge: "Vertical Editing Services",
    servicesTitle: "Designed for Reach",
    service1Title: "Instagram Reels",
    service1Desc: "High-tempo edits with custom kinetic subtitles, emoji animations, and pattern interrupts to maximize daily viewership.",
    service1Bullets: ["Kinetic Subtitles", "Sound FX & Swooshes", "Color Correction"],
    service2Title: "YouTube Shorts",
    service2Desc: "Optimization for the first 3 seconds (the hook). High-impact visual cues to prevent users from swiping away.",
    service2Bullets: ["Visual Hooks", "Subtle Text Zooms", "Smooth Transitions"],
    service3Title: "TikTok Content",
    service3Desc: "Adapting to daily trending styles and formats. Highly engaging storytelling cuts that spark comments and shares.",
    service3Bullets: ["Trending Pacing", "Comment Prompts", "Seamless Loops"],
    aboutBadge: "The Editor",
    aboutTitle: "Driven by Passion & Rhythm",
    aboutTextContent: `
      <p>I am a passionate video editor based in Kharghar, Navi Mumbai, India, bringing fresh energy and modern styling to short-form video.</p>
      <p>I study the social media algorithms and understand what keeps viewers watching from start to finish. I work remotely with creators globally to scale their social reach.</p>
    `,
    aboutStat1Val: "03+",
    aboutStat1Label: "Years Exp.",
    aboutStat2Val: "IND",
    aboutStat2Label: "Location",
    processBadge: "The Workflow",
    processTitle: "Simple Remote Process",
    processStep1Title: "1. Send Footage",
    processStep1Desc: "Drop your raw files into Google Drive or Frame.io with a brief description.",
    processStep2Title: "2. Rhythmic Editing",
    processStep2Desc: "I script the highlights, add dynamic subtitles, sound effects, and color grading.",
    processStep3Title: "3. Fast Delivery",
    processStep3Desc: "Get your print-ready video within 24-48 hours, with up to 3 revision rounds.",
    testimonialQuote: `"Tahhs is incredibly fast and creative. He took my raw talking-head footage and turned it into three engaging Reels that got over 50k views. Highly recommended for shorts!"`,
    testimonialAuthor: "Rohan Sharma",
    testimonialTitle: "Tech Content Creator",
    contactHeading: `Ready to Go <span class="text-gradient">Viral?</span>`,
    contactSubheading: "Let’s discuss your next campaign or project. Based in Kharghar, working with creators worldwide.",
    formLabelName: "Full Name",
    formLabelEmail: "Email Address",
    formLabelType: "Project Type",
    formOptions: ["Short Form Reel", "TikTok Series", "YouTube Short"],
    formLabelDetails: "Project Details",
    formSubmitBtn: "Let's Edit Your Reels",
    footerCopyright: "© 2026 TAHHS_EDITS. CRAFTED IN KHARGHAR, INDIA.",
    activeShowcaseId: "showcase-pro"
  },
  youtube: {
    heroBadgeText: "Long-Form Specialist",
    heroHeadline: `Engaging YouTube Videos That <span class="text-primary" style="font-style: italic;">Build Audiences</span>`,
    heroDescription: "Editing talking head vlogs, tutorial reviews, and documentary-style videos. I ensure your audience stays hooked for the full 10+ minutes.",
    heroPrimaryCta: "Watch Vlogs",
    heroSecondaryCta: "Hire Me",
    partnersLabel: "Editing Software & Assets",
    portfolioBadge: "YouTube Portfolio",
    portfolioTitle: "Vlogs & Talking Head",
    bentoMainTitle: "Docu-Style Pacing",
    bentoMainDesc: "Blending background music, B-rolls, and clear audio enhancements to tell compelling stories.",
    bentoC2Badge: "A-Roll Cleanups",
    bentoC3Badge: "B-Roll Overlay",
    servicesBadge: "Long-Form Services",
    servicesTitle: "Built for Retention",
    service1Title: "Vlog Editing",
    service1Desc: "Smoothing out transitions, organizing narrative flow, color grading, and integrating soundscapes to make your vlogs cinematic.",
    service1Bullets: ["Cinematic Color Grade", "Ambient Sound Design", "Dynamic Text Titles"],
    service2Title: "Talking Head & Tutorials",
    service2Desc: "Trimming dead space, cleaning background noise, and adding relevant B-roll and zooms to keep educational content lively.",
    service2Bullets: ["Audio Noise Cleanup", "Screen Recording Sync", "Lower Thirds"],
    service3Title: "Documentary Style",
    service3Desc: "Rhythmic storytelling with maps, news clippings, graphics, and heavy archival overlays for deep-dive topics.",
    service3Bullets: ["Storyboarding Assistance", "Graphic Overlay Maps", "Sound FX Mix"],
    aboutBadge: "The Editor",
    aboutTitle: "Mastering Long-Form Engagement",
    aboutTextContent: `
      <p>Long-form editing requires a deep understanding of pacing and viewer fatigue. Based in Kharghar, Navi Mumbai, I structure vlogs and tutorials to retain attention through music transitions, graphic inserts, and narrative storytelling.</p>
      <p>I make sure your content remains high-quality from start to finish, keeping viewer retention high for the algorithm.</p>
    `,
    aboutStat1Val: "03+",
    aboutStat1Label: "Years Exp.",
    aboutStat2Val: "IND",
    aboutStat2Label: "Location",
    processBadge: "The Pipeline",
    processTitle: "From Raw to Refined",
    processStep1Title: "1. Story & Style",
    processStep1Desc: "We define the pacing, music taste, and overall narrative structure of your video.",
    processStep2Title: "2. The Rough Cut",
    processStep2Desc: "I assemble the timeline, clean up audio, and insert B-rolls and graphics.",
    processStep3Title: "3. Final Polish",
    processStep3Desc: "Sound design, final color correction, and exporting in high-resolution 4K.",
    testimonialQuote: `"Tahhs completely understood my vlog's vibe. He structured the timeline perfectly and kept the audience engaged for the entire 12 minutes. Best freelance editor I've worked with!"`,
    testimonialAuthor: "Anjali Mehta",
    testimonialTitle: "Travel Blogger",
    contactHeading: `Elevate Your <span class="text-gradient">Channel</span>`,
    contactSubheading: "Let’s collaborate on a long-term editing schedule for your YouTube channel.",
    formLabelName: "Your Name",
    formLabelEmail: "Your Email",
    formLabelType: "Video Type Needed",
    formOptions: ["YouTube Vlog", "Educational Video", "Docu-series"],
    formLabelDetails: "Your Channel & Details",
    formSubmitBtn: "Start Editing YouTube",
    footerCopyright: "© 2026 TAHHS_EDITS. CRAFTED IN KHARGHAR, INDIA.",
    activeShowcaseId: "showcase-creator"
  },
  promos: {
    heroBadgeText: "Commercial & Event Promos",
    heroHeadline: `Cinematic Promo Videos That <span class="text-primary" style="font-style: italic;">Convert Viewers</span>`,
    heroDescription: "Freelance editor from Kharghar, Navi Mumbai, editing high-energy event recaps, corporate promos, and product ads that leave an impression.",
    heroPrimaryCta: "Watch Promos",
    heroSecondaryCta: "Book a Promo",
    partnersLabel: "Editing Software & Assets",
    portfolioBadge: "Promo Portfolio",
    portfolioTitle: "Impactful Promos",
    bentoMainTitle: "High-Energy Ads",
    bentoMainDesc: "Combining sound design, visual overlays, and beat-matched cuts for modern commercial aesthetic.",
    bentoC2Badge: "Ad Strategy",
    bentoC3Badge: "Visual Effects",
    servicesBadge: "Promo Services",
    servicesTitle: "High Impact Edits",
    service1Title: "Event Highlight Recaps",
    service1Desc: "Dynamic pacing, beat-matching cuts, and speed ramps that bring the energy of your live event to life.",
    service1Bullets: ["Beat-Sync Cuts", "Speed Ramping", "Logo Overlay Animations"],
    service2Title: "Product Ads",
    service2Desc: "Premium product commercials with smooth transitions, modern typography, and color grading that highlight quality.",
    service2Bullets: ["Product Color Pop", "Text Title Overlays", "Cinematic Grading"],
    service3Title: "Business Promos",
    service3Desc: "High-quality introductory videos for startups and local businesses to showcase their services and team.",
    service3Bullets: ["Corporate Audio Mix", "Subtitle Integration", "CTA End Screen"],
    aboutBadge: "The Editor",
    aboutTitle: "Cinematic Pacing for Brands",
    aboutTextContent: `
      <p>Every brand and event has a unique rhythm. Working from Kharghar, I mix modern visual transitions with premium sound design to create promo videos that grab attention immediately.</p>
      <p>Whether you need a product ad or an event highlights reel, I make sure it looks high-production and fits your brand guidelines.</p>
    `,
    aboutStat1Val: "03+",
    aboutStat1Label: "Years Exp.",
    aboutStat2Val: "IND",
    aboutStat2Label: "Location",
    processBadge: "The Pipeline",
    processTitle: "The Promo Pipeline",
    processStep1Title: "1. Creative Brief",
    processStep1Desc: "We define the goal, visual style, and target call to action of the promo.",
    processStep2Title: "2. Dynamic Cut",
    processStep2Desc: "I sync the video to the soundtrack, add typography, SFX, and color styling.",
    processStep3Title: "3. Launch Ready",
    processStep3Desc: "Final delivery in optimal formats for social ads, website backgrounds, or presentations.",
    testimonialQuote: `"We hired Tahhs for our cafe's launch highlights video in Navi Mumbai. The video was edited beautifully, synchronized perfectly to the music, and delivered within 2 days!"`,
    testimonialAuthor: "Kabir Patil",
    testimonialTitle: "Co-Founder, Brew & Bite Cafe",
    contactHeading: `Create a <span class="text-gradient">Cinematic Promo</span>`,
    contactSubheading: "Let’s build an impactful promo video for your business or next event.",
    formLabelName: "Your Name",
    formLabelEmail: "Your Email",
    formLabelType: "Video Type Needed",
    formOptions: ["Event Highlight Reel", "Product Ad Video", "Business Promo"],
    formLabelDetails: "Tell me about your footage",
    formSubmitBtn: "Start Editing Promos",
    footerCopyright: "© 2026 TAHHS_EDITS. CRAFTED IN KHARGHAR, INDIA.",
    activeShowcaseId: "showcase-pro"
  }
};

// Web Audio API Sound Synthesizer
let audioCtx = null;
let soundEnabled = false;

function playSound(type) {
  if (!soundEnabled) return;
  
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  const now = audioCtx.currentTime;
  
  if (type === 'click') {
    // Subtle tick sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);
    
    gainNode.gain.setValueAtTime(0.04, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
    
    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'camera') {
    // Camera shutter snapshot sound
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(250, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.08);
    
    // Noise/scratch buffer to simulate mechanical click
    const bufferSize = audioCtx.sampleRate * 0.08;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = buffer;
    
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.015, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    
    noiseSource.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    
    gainNode.gain.setValueAtTime(0.03, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    
    osc.start(now);
    noiseSource.start(now);
    
    osc.stop(now + 0.08);
    noiseSource.stop(now + 0.08);
  } else if (type === 'swish') {
    // Low pass filter sweeps for transitions
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.exponentialRampToValueAtTime(1500, now + 0.3);
    
    const noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate * 0.3, audioCtx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = Math.random() * 2 - 1;
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = noiseBuffer;
    
    noise.connect(filter);
    filter.connect(gainNode);
    
    gainNode.gain.setValueAtTime(0.01, now);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
    
    noise.start(now);
    noise.stop(now + 0.3);
  }
}

// Custom Cursor Glow Tracker
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  cursorGlow.style.opacity = '1';
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseleave', () => {
  cursorGlow.style.opacity = '0';
});

// Magnetic Buttons Hover Coordinates
const setupMagneticButtons = () => {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  magneticBtns.forEach(btn => {
    // Prevent duplicate event handlers
    if (btn.dataset.magneticSetup) return;
    btn.dataset.magneticSetup = 'true';

    btn.addEventListener('mousemove', (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
    
    btn.addEventListener('click', () => {
      playSound('click');
    });
  });
};

// 3D Bento Card Tilt Interaction
const setupCardTilts = () => {
  const cards = document.querySelectorAll('.bento-card');
  cards.forEach(card => {
    if (card.dataset.tiltSetup) return;
    card.dataset.tiltSetup = 'true';

    const inner = card.querySelector('.bento-card-inner');
    
    card.addEventListener('mousemove', (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 18;
      const rotateY = (centerX - x) / 18;
      
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
    
    card.addEventListener('click', (e) => {
      playSound('camera');
      const playBtn = card.querySelector('[data-video]');
      if (playBtn && e.target !== playBtn && !playBtn.contains(e.target)) {
        e.stopPropagation();
        openVideoModal(playBtn.getAttribute('data-video'));
      }
    });
  });
};

// Shoot Cards Full-Click Usability
const setupShootCardClicks = () => {
  const shootCards = document.querySelectorAll('.shoot-card');
  shootCards.forEach(card => {
    if (card.dataset.clickSetup) return;
    card.dataset.clickSetup = 'true';
    
    card.addEventListener('click', (e) => {
      const playBtn = card.querySelector('[data-video]');
      if (playBtn && e.target !== playBtn && !playBtn.contains(e.target)) {
        e.stopPropagation();
        openVideoModal(playBtn.getAttribute('data-video'));
      }
    });
  });
};

// Scroll Reveal Animations
const setupScrollReveal = () => {
  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// Lightbox Video Player Modal Setup
const videoModal = document.getElementById('video-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const videoPlayerContainer = document.getElementById('video-player-container');

const openVideoModal = (videoUrl) => {
  playSound('camera');
  
  let contentHtml = '';
  
  // Check if it's a direct web video file
  if (videoUrl.endsWith('.mp4') || videoUrl.endsWith('.webm') || videoUrl.endsWith('.ogg') || videoUrl.includes('sample/')) {
    contentHtml = `
      <video 
        src="${videoUrl}" 
        autoplay 
        controls 
        playsinline 
        style="width: 100%; height: 100%; object-fit: contain; background: #000; border: none; display: block;">
      </video>
    `;
  } else {
    // Format YouTube embeds safely
    let embedUrl = videoUrl;
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || videoUrl.includes('embed/')) {
      if (!videoUrl.includes('embed/')) {
        const videoId = videoUrl.split('v=')[1] || videoUrl.split('/').pop();
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }
    }
    contentHtml = `
      <iframe 
        src="${embedUrl}?autoplay=1&mute=0&rel=0" 
        title="Video player" 
        allow="autoplay; encrypted-media; fullscreen" 
        allowfullscreen>
      </iframe>
    `;
  }
  
  videoPlayerContainer.innerHTML = contentHtml;
  
  videoModal.classList.add('active');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
};

const closeVideoModal = () => {
  playSound('click');
  videoModal.classList.remove('active');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = ''; // Unlock background scrolling
  
  // Wipe iframe to stop sound playing
  setTimeout(() => {
    videoPlayerContainer.innerHTML = '';
  }, 400);
};

// Hook Modal Triggers
const setupModalTriggers = () => {
  document.querySelectorAll('[data-video]').forEach(btn => {
    if (btn.dataset.videoSetup) return;
    btn.dataset.videoSetup = 'true';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openVideoModal(btn.getAttribute('data-video'));
    });
  });
};

modalCloseBtn.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    closeVideoModal();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('active')) {
    closeVideoModal();
  }
});

// Sound Toggle Setup
const soundToggleBtn = document.getElementById('sound-toggle-btn');
const soundIcon = document.getElementById('sound-icon');
soundToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundIcon.textContent = 'volume_up';
    soundToggleBtn.style.borderColor = 'var(--primary)';
    soundToggleBtn.style.color = '#fff';
    // Synthesize test beep immediately to confirm audio context is active
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    playSound('click');
  } else {
    soundIcon.textContent = 'volume_off';
    soundToggleBtn.style.borderColor = '';
    soundToggleBtn.style.color = '';
  }
});

// Smooth Edition Switcher Animation
const switchEdition = (editionKey) => {
  const data = editionData[editionKey];
  if (!data) return;
  
  playSound('swish');
  
  // Select all dynamic content elements
  const elements = {
    heroBadgeText: document.getElementById('hero-badge-text'),
    heroHeadline: document.getElementById('hero-headline'),
    heroDescription: document.getElementById('hero-description'),
    heroPrimaryCta: document.getElementById('hero-primary-cta'),
    heroSecondaryCta: document.getElementById('hero-secondary-cta'),
    partnersLabel: document.getElementById('partners-label'),
    portfolioBadge: document.getElementById('portfolio-badge'),
    portfolioTitle: document.getElementById('portfolio-title'),
    bentoMainTitle: document.getElementById('bento-main-title'),
    bentoMainDesc: document.getElementById('bento-main-desc'),
    bentoC2Badge: document.getElementById('bento-c2-badge'),
    bentoC3Badge: document.getElementById('bento-c3-badge'),
    servicesBadge: document.getElementById('services-badge'),
    servicesTitle: document.getElementById('services-title'),
    service1Title: document.getElementById('service-1-title'),
    service1Desc: document.getElementById('service-1-desc'),
    service2Title: document.getElementById('service-2-title'),
    service2Desc: document.getElementById('service-2-desc'),
    service3Title: document.getElementById('service-3-title'),
    service3Desc: document.getElementById('service-3-desc'),
    aboutBadge: document.getElementById('about-badge'),
    aboutTitle: document.getElementById('about-title'),
    aboutTextContent: document.getElementById('about-text-content'),
    aboutStat1Val: document.getElementById('about-stat-1-val'),
    aboutStat1Label: document.getElementById('about-stat-1-label'),
    aboutStat2Val: document.getElementById('about-stat-2-val'),
    aboutStat2Label: document.getElementById('about-stat-2-label'),
    processBadge: document.getElementById('process-badge'),
    processTitle: document.getElementById('process-title'),
    processStep1Title: document.getElementById('process-step-1-title'),
    processStep1Desc: document.getElementById('process-step-1-desc'),
    processStep2Title: document.getElementById('process-step-2-title'),
    processStep2Desc: document.getElementById('process-step-2-desc'),
    processStep3Title: document.getElementById('process-step-3-title'),
    processStep3Desc: document.getElementById('process-step-3-desc'),
    testimonialQuote: document.getElementById('testimonial-quote'),
    testimonialAuthor: document.getElementById('testimonial-author'),
    testimonialTitle: document.getElementById('testimonial-title'),
    contactHeading: document.getElementById('contact-heading'),
    contactSubheading: document.getElementById('contact-subheading'),
    formLabelName: document.getElementById('form-label-name'),
    formLabelEmail: document.getElementById('form-label-email'),
    formLabelType: document.getElementById('form-label-type'),
    formLabelDetails: document.getElementById('form-label-details'),
    formSubmitBtn: document.getElementById('form-submit-btn'),
    footerCopyright: document.getElementById('footer-copyright')
  };

  // Add transition/fadeout class to elements
  Object.values(elements).forEach(el => {
    if (el) {
      el.classList.add('fade-transition');
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
    }
  });
  
  // Transition the dynamic centerpiece showcase containers
  const showcasePro = document.getElementById('showcase-pro');
  const showcaseCreator = document.getElementById('showcase-creator');
  
  showcasePro.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  showcaseCreator.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  
  showcasePro.style.opacity = '0';
  showcaseCreator.style.opacity = '0';
  showcasePro.style.transform = 'translateY(20px)';
  showcaseCreator.style.transform = 'translateY(20px)';

  // Wait for fade-out, then swap data
  setTimeout(() => {
    // 1. Text Swaps
    if (elements.heroBadgeText) elements.heroBadgeText.textContent = data.heroBadgeText;
    if (elements.heroHeadline) elements.heroHeadline.innerHTML = data.heroHeadline;
    if (elements.heroDescription) elements.heroDescription.textContent = data.heroDescription;
    if (elements.heroPrimaryCta) elements.heroPrimaryCta.textContent = data.heroPrimaryCta;
    if (elements.heroSecondaryCta) elements.heroSecondaryCta.textContent = data.heroSecondaryCta;
    if (elements.partnersLabel) elements.partnersLabel.textContent = data.partnersLabel;
    if (elements.portfolioBadge) elements.portfolioBadge.textContent = data.portfolioBadge;
    if (elements.portfolioTitle) elements.portfolioTitle.textContent = data.portfolioTitle;
    if (elements.bentoMainTitle) elements.bentoMainTitle.textContent = data.bentoMainTitle;
    if (elements.bentoMainDesc) elements.bentoMainDesc.textContent = data.bentoMainDesc;
    if (elements.bentoC2Badge) elements.bentoC2Badge.textContent = data.bentoC2Badge;
    if (elements.bentoC3Badge) elements.bentoC3Badge.textContent = data.bentoC3Badge;
    

    if (elements.servicesBadge) elements.servicesBadge.textContent = data.servicesBadge;
    if (elements.servicesTitle) elements.servicesTitle.textContent = data.servicesTitle;
    if (elements.service1Title) elements.service1Title.textContent = data.service1Title;
    if (elements.service1Desc) elements.service1Desc.textContent = data.service1Desc;
    if (elements.service2Title) elements.service2Title.textContent = data.service2Title;
    if (elements.service2Desc) elements.service2Desc.textContent = data.service2Desc;
    if (elements.service3Title) elements.service3Title.textContent = data.service3Title;
    if (elements.service3Desc) elements.service3Desc.textContent = data.service3Desc;

    // Update service bullet lists
    const updateBullets = (id, list) => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = list.map(item => `<li>${item}</li>`).join('');
      }
    };
    updateBullets('service-1-bullets', data.service1Bullets);
    updateBullets('service-2-bullets', data.service2Bullets);
    updateBullets('service-3-bullets', data.service3Bullets);

    if (elements.aboutBadge) elements.aboutBadge.textContent = data.aboutBadge;
    if (elements.aboutTitle) elements.aboutTitle.textContent = data.aboutTitle;
    if (elements.aboutTextContent) elements.aboutTextContent.innerHTML = data.aboutTextContent;
    if (elements.aboutStat1Val) elements.aboutStat1Val.textContent = data.aboutStat1Val;
    if (elements.aboutStat1Label) elements.aboutStat1Label.textContent = data.aboutStat1Label;
    if (elements.aboutStat2Val) elements.aboutStat2Val.textContent = data.aboutStat2Val;
    if (elements.aboutStat2Label) elements.aboutStat2Label.textContent = data.aboutStat2Label;

    if (elements.processBadge) elements.processBadge.textContent = data.processBadge;
    if (elements.processTitle) elements.processTitle.textContent = data.processTitle;
    if (elements.processStep1Title) elements.processStep1Title.textContent = data.processStep1Title;
    if (elements.processStep1Desc) elements.processStep1Desc.textContent = data.processStep1Desc;
    if (elements.processStep2Title) elements.processStep2Title.textContent = data.processStep2Title;
    if (elements.processStep2Desc) elements.processStep2Desc.textContent = data.processStep2Desc;
    if (elements.processStep3Title) elements.processStep3Title.textContent = data.processStep3Title;
    if (elements.processStep3Desc) elements.processStep3Desc.textContent = data.processStep3Desc;

    if (elements.testimonialQuote) elements.testimonialQuote.textContent = data.testimonialQuote;
    if (elements.testimonialAuthor) elements.testimonialAuthor.textContent = data.testimonialAuthor;
    if (elements.testimonialTitle) elements.testimonialTitle.textContent = data.testimonialTitle;

    if (elements.contactHeading) elements.contactHeading.innerHTML = data.contactHeading;
    if (elements.contactSubheading) elements.contactSubheading.textContent = data.contactSubheading;
    if (elements.formLabelName) elements.formLabelName.textContent = data.formLabelName;
    if (elements.formLabelEmail) elements.formLabelEmail.textContent = data.formLabelEmail;
    if (elements.formLabelType) elements.formLabelType.textContent = data.formLabelType;
    if (elements.formLabelDetails) elements.formLabelDetails.textContent = data.formLabelDetails;
    if (elements.formSubmitBtn) elements.formSubmitBtn.textContent = data.formSubmitBtn;
    
    // Repopulate form select options
    const selectEl = document.getElementById('form-input-type');
    if (selectEl) {
      selectEl.innerHTML = data.formOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('');
    }

    if (elements.footerCopyright) elements.footerCopyright.textContent = data.footerCopyright;

    // Toggle Dynamic Showcase Viewports
    showcasePro.classList.remove('active');
    showcaseCreator.classList.remove('active');
    
    if (data.activeShowcaseId === 'showcase-pro') {
      showcasePro.classList.add('active');
    } else {
      showcaseCreator.classList.add('active');
    }
    
    // Swap images / play previews depending on edition
    const shootBtnsText = document.querySelectorAll('.btn-text-play');
    shootBtnsText.forEach(btnText => {
      btnText.textContent = (editionKey === 'youtube') ? 'Watch Story' : 'Play Preview';
    });

    const aboutImg = document.getElementById('about-img');
    if (aboutImg) {
      aboutImg.src = "./img/1000018279.jpg";
    }

    // Keep Hire Me Buttons visible
    const navHireBtn = document.getElementById('nav-hire-btn');
    if (navHireBtn) {
      navHireBtn.style.display = 'block';
    }
    const mobileHireBtn = document.getElementById('mobile-hire-btn');
    if (mobileHireBtn) {
      mobileHireBtn.style.display = 'block';
    }

    // Fade-in dynamic containers
    setTimeout(() => {
      showcasePro.style.opacity = '1';
      showcaseCreator.style.opacity = '1';
      showcasePro.style.transform = 'translateY(0)';
      showcaseCreator.style.transform = 'translateY(0)';
    }, 50);

    // Fade-in texts
    Object.values(elements).forEach(el => {
      if (el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });

    // Resetup dynamic triggers & tilts
    setupModalTriggers();
    setupMagneticButtons();
    setupCardTilts();
    setupShootCardClicks();

  }, 400);
};

// Hook Edition Buttons Click Listeners
const editionSelectorBtns = document.querySelectorAll('.edition-btn');
editionSelectorBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const targetEdition = btn.getAttribute('data-edition');
    
    // Set active class on all buttons matching targetEdition, and remove from others
    editionSelectorBtns.forEach(b => {
      if (b.getAttribute('data-edition') === targetEdition) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });
    
    switchEdition(targetEdition);
  });
});

// Mobile Nav Toggle Drawer
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  playSound('click');
  const isOpen = mobileMenu.classList.contains('active');
  if (isOpen) {
    mobileMenu.classList.remove('active');
    menuBtn.textContent = 'menu';
  } else {
    mobileMenu.classList.add('active');
    menuBtn.textContent = 'close';
  }
});

// Hide mobile menu on link clicks
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuBtn.textContent = 'menu';
  });
});

// Close Mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('active') && !mobileMenu.contains(e.target) && e.target !== menuBtn) {
    mobileMenu.classList.remove('active');
    menuBtn.textContent = 'menu';
  }
});

// Background atmosphere tracking micro-interaction (Hero section glow shifts slightly)
document.addEventListener('mousemove', (e) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const glow = document.querySelector('.hero-glow');
  if (glow) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.04;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.04;
    glow.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  }
});

// Real-Time Contact Form Submission Handler via FormSubmit AJAX API
const setupFormSubmission = () => {
  const form = document.getElementById('portfolio-form');
  if (!form) return;

  // Status message container element
  let statusEl = document.getElementById('form-status');
  if (!statusEl) {
    statusEl = document.createElement('div');
    statusEl.id = 'form-status';
    statusEl.style.marginTop = '16px';
    statusEl.style.padding = '12px';
    statusEl.style.borderRadius = '8px';
    statusEl.style.fontSize = '14px';
    statusEl.style.display = 'none';
    statusEl.style.textAlign = 'center';
    statusEl.style.fontWeight = '500';
    statusEl.style.transition = 'all 0.3s ease';
    form.appendChild(statusEl);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    playSound('click');

    const submitBtn = document.getElementById('form-submit-btn');
    const originalBtnText = submitBtn.textContent;

    // Set loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    submitBtn.style.opacity = '0.7';

    statusEl.style.display = 'none';
    statusEl.className = '';

    const formData = new FormData(form);
    
    // Add custom subject header dynamically
    const selectedType = document.getElementById('form-input-type').value;
    formData.append('_subject', `New Project Inquiry: ${selectedType}`);
    
    // Uses FormSubmit AJAX Endpoint (sends messages directly to your email)
    const email = 'tahhs.edits@gmail.com';
    const endpoint = `https://formsubmit.co/ajax/${email}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok && result.success === 'true') {
        playSound('camera');
        
        statusEl.style.display = 'block';
        statusEl.style.background = 'rgba(77, 238, 144, 0.1)';
        statusEl.style.border = '1px solid rgba(77, 238, 144, 0.3)';
        statusEl.style.color = '#4eed90';
        statusEl.textContent = 'Inquiry sent successfully! I will get back to you shortly.';
        
        form.reset();
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      statusEl.style.display = 'block';
      statusEl.style.background = 'rgba(255, 77, 77, 0.1)';
      statusEl.style.border = '1px solid rgba(255, 77, 77, 0.3)';
      statusEl.style.color = '#ff4d4d';
      statusEl.textContent = 'Failed to send message. Please try reaching out directly via email.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
      submitBtn.style.opacity = '';
    }
  });
};

// Page Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Populate the default Shorts edition selector values
  const selectEl = document.getElementById('form-input-type');
  if (selectEl) {
    selectEl.innerHTML = editionData.shorts.formOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('');
  }
  
  setupScrollReveal();
  setupModalTriggers();
  setupCardTilts();
  setupMagneticButtons();
  setupShootCardClicks();
  setupFormSubmission();
});
