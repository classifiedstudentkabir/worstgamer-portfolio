// Database containing copy and sections for each edition
const editionData = {
  pro: {
    heroBadgeText: "Available for New Projects",
    heroHeadline: `I Create Videos That <span class="text-primary" style="font-style: italic;">Hold Attention</span> &amp; Drive Results`,
    heroDescription: "Cinematic storytelling meets high-retention editing. I transform raw footage into professional narratives that resonate with global audiences.",
    heroPrimaryCta: "View Work",
    heroSecondaryCta: "Hire Me",
    partnersLabel: "Professional Editing Suite &amp; Tools",
    portfolioBadge: "Selected Works",
    portfolioTitle: "Precision in Every Frame",
    bentoMainTitle: "The Urban Explorer Docu-Series",
    bentoMainDesc: "How I achieved 1.2M views through rhythmic editing and visual pacing.",
    bentoC2Badge: "Talking Head Editing",
    bentoC3Badge: "Brand Commercials",
    stat1Val: "500+",
    stat1Label: "Videos Delivered",
    stat2Val: "12M+",
    stat2Label: "Total Views",
    stat3Val: "15+",
    stat3Label: "Active Clients",
    stat4Val: "99%",
    stat4Label: "Satisfaction",
    servicesBadge: "Specialized Services",
    servicesTitle: "Built for Impact",
    service1Title: "Talking Head Editing",
    service1Desc: "Optimized for LinkedIn, YouTube, and X. I focus on pacing, jump-cut precision, and narrative flow to keep viewers hooked from the first frame.",
    service1Bullets: ["Dynamic Captions", "Multi-cam Syncing", "Engagement Hooks"],
    service2Title: "Commercial Motion",
    service2Desc: "High-end product videos and brand commercials. I blend 2D motion graphics with high-quality sound design for a premium finish.",
    service2Bullets: ["Color Grading", "Custom Motion GFx", "Sound Mastery"],
    service3Title: "Viral Short Form",
    service3Desc: "TikTok, Reels, and Shorts designed for the algorithm. Aggressive pacing and visual retention techniques to boost reach.",
    service3Bullets: ["9:16 Optimization", "Trending Styles", "Fast Turnaround"],
    aboutBadge: "About the Creator",
    aboutTitle: "Mastering the Art of the Cut",
    aboutTextContent: `
      <p>I believe every piece of content is a chance to tell a story that matters. With over 8 years in the cutting room, I've collaborated with industry leaders to refine their digital presence through cinematic precision.</p>
      <p>My approach isn't just about making things look "cool"—it's about understanding viewer psychology. I analyze retention graphs, study platform trends, and apply classic filmmaking principles to modern digital formats.</p>
      <p>Based in New York, working globally. I help creators turn complex ideas into digestible, high-impact video assets.</p>
    `,
    aboutStat1Val: "08+",
    aboutStat1Label: "Years Exp.",
    aboutStat2Val: "NY",
    aboutStat2Label: "Location",
    processBadge: "The Pipeline",
    processTitle: "From Raw to Refined",
    processStep1Title: "Strategy &amp; Vision",
    processStep1Desc: "We align on your goals, target audience, and visual style before the first frame is cut.",
    processStep2Title: "The Craft",
    processStep2Desc: "Intensive editing, color grading, and sound design. This is where the magic happens.",
    processStep3Title: "Final Delivery",
    processStep3Desc: "Seamless revision cycles and final delivery in all required platform formats.",
    testimonialQuote: `"Studio Noir transformed our brand's video content. The level of detail and cinematic pacing resulted in a 40% increase in retention. Truly a master of the craft."`,
    testimonialAuthor: "Alex Sterling",
    testimonialTitle: "CEO, Sterling Digital",
    contactHeading: `Let’s Create Something <span class="text-gradient">Cinematic</span>`,
    contactSubheading: "Ready to elevate your content? Fill out the form or reach out directly via email for high-priority projects.",
    formLabelName: "Full Name",
    formLabelEmail: "Email Address",
    formLabelType: "Project Type",
    formOptions: ["YouTube High-Retention", "Commercial / Brand Video", "Short Form Content", "Documentary Style"],
    formLabelDetails: "Project Details",
    formSubmitBtn: "Send Message",
    footerCopyright: "© 2024 STUDIO NOIR. ALL RIGHTS RESERVED.",
    activeShowcaseId: "showcase-pro"
  },
  creator: {
    heroBadgeText: "Inspiring Audiences Everywhere",
    heroHeadline: `I Build Authentic Connections Through <span class="text-primary" style="font-style: italic;">Human</span> Video Editing`,
    heroDescription: "I believe editing is visual empathy. I help personal brands and visual creators translate their unique story and values into rhythmic, high-retention video assets.",
    heroPrimaryCta: "Watch Reels",
    heroSecondaryCta: "Connect",
    partnersLabel: "Creative Software &amp; Toolkit",
    portfolioBadge: "Creator Portfolio",
    portfolioTitle: "Editing with Empathy &amp; Focus",
    bentoMainTitle: "Scaling Personal Brands via Reels",
    bentoMainDesc: "How consistent rhythmic visual storytelling grew a creator network by 450k followers.",
    bentoC2Badge: "Storytelling Style",
    bentoC3Badge: "Creator Aesthetics",
    stat1Val: "500+",
    stat1Label: "Videos Delivered",
    stat2Val: "12M+",
    stat2Label: "Total Views",
    stat3Val: "15+",
    stat3Label: "Active Clients",
    stat4Val: "99%",
    stat4Label: "Satisfaction",
    servicesBadge: "Creative Services",
    servicesTitle: "Built for Creators",
    service1Title: "Brand Documentaries",
    service1Desc: "Deep dive video profiles that establish trust. High-fidelity editing focused on authenticity, pacing, and emotional resonance.",
    service1Bullets: ["Subject Interview Cuts", "Visual Pacing &amp; Rhythm", "Soundtrack Layering"],
    service2Title: "Social Growth Pack",
    service2Desc: "High-retention shorts, reels, and TikTok edits tailored to platform algorithms while preserving your core voice.",
    service2Bullets: ["Dynamic Captioning", "Pattern Interrupts", "Interactive Overlay Graphics"],
    service3Title: "Vlog Cinematic Polish",
    service3Desc: "Turning raw vlog footage into cinematic journeys. We add style, grading, and structural hooks that keep viewers coming back.",
    service3Bullets: ["Color Grading Presets", "Sound FX Design", "Narrative Structuring"],
    aboutBadge: "Your Creative Partner",
    aboutTitle: "Connecting with Your Audience",
    aboutTextContent: `
      <p>I believe editing is about human psychology. It is about when to breathe, when to hold, and when to speed up to mimic the natural rhythm of human conversation.</p>
      <p>With 8 years of personal brand editing, I have developed editing systems that emphasize personality over generic flashing graphics. My style is transparent yet powerful, ensuring the creator always shines.</p>
      <p>Working out of my Brooklyn workspace, serving visionaries globally. Let's make content that builds your legacy.</p>
    `,
    aboutStat1Val: "08+",
    aboutStat1Label: "Years Exp.",
    aboutStat2Val: "BK",
    aboutStat2Label: "Workspace",
    processBadge: "The Workflow",
    processTitle: "Vision to Rhythmic Edit",
    processStep1Title: "Vision Alignment",
    processStep1Desc: "We jump on a call to unpack your story, tone of voice, and visual benchmarks.",
    processStep2Title: "Creative Edit",
    processStep2Desc: "Transforming raw footage into a rhythmic narrative with matching overlays and grading.",
    processStep3Title: "Refined Launch",
    processStep3Desc: "Final pacing reviews and delivery, ready to inspire and connect with your audience.",
    testimonialQuote: `"The human-centered pacing of their editing changed everything. Our audience does not just watch our videos; they feel connected to our mission. Essential partner."`,
    testimonialAuthor: "Sarah Vance",
    testimonialTitle: "Founder, Creator Labs",
    contactHeading: `Let's Build Something <span class="text-gradient">Authentic</span>`,
    contactSubheading: "Ready to share your vision? I'd love to hear about what you're building and help you tell your story.",
    formLabelName: "Your Name",
    formLabelEmail: "Your Email",
    formLabelType: "What can I help with?",
    formOptions: ["Story-Driven Editing", "Brand Video / Visual Identity", "Creator Content (Short Form)", "A New Idea!"],
    formLabelDetails: "Your Vision",
    formSubmitBtn: "Connect With Me",
    footerCopyright: "© 2024 STUDIO NOIR. BUILT FOR CREATORS.",
    activeShowcaseId: "showcase-creator"
  },
  fresher: {
    heroBadgeText: "Inspiring Creators Worldwide",
    heroHeadline: `Your Journey to Cinematic <span class="text-primary" style="font-style: italic;">Excellence</span> Starts Here`,
    heroDescription: "Every great creator started with a single frame. I'm here to help you bridge the gap between your vision and professional reality with editing that honors your unique voice.",
    heroPrimaryCta: "See What's Possible",
    heroSecondaryCta: "Let's Chat",
    partnersLabel: "Editing Software &amp; Tools I Master",
    portfolioBadge: "Creative Potential",
    portfolioTitle: "Showcasing Your Best Work",
    bentoMainTitle: "Finding Your Narrative",
    bentoMainDesc: "I help you find the rhythm in your footage that speaks to your audience. It's about more than just cuts; it's about your story's soul.",
    bentoC2Badge: "Creative Potential",
    bentoC3Badge: "Creative Potential",
    stat1Val: "500+",
    stat1Label: "Stories Told",
    stat2Val: "12M+",
    stat2Label: "Lives Touched",
    stat3Val: "15+",
    stat3Label: "Partnerships",
    stat4Val: "99%",
    stat4Label: "Happy Clients",
    servicesBadge: "Creative Services",
    servicesTitle: "Find Your Voice",
    service1Title: "Finding Your Narrative",
    service1Desc: "I help you find the rhythm in your footage that speaks to your audience. It's about more than just cuts; it's about your story's soul.",
    service1Bullets: ["Modern Captions", "Seamless Syncing", "Emotional Hooks"],
    service2Title: "Polishing Your Identity",
    service2Desc: "Professional grading and motion that doesn't feel manufactured. We'll build a look that feels authentically yours.",
    service2Bullets: ["Natural Grading", "Elegant Motion", "Immersive Sound"],
    service3Title: "Growing Your Community",
    service3Desc: "Turn your ideas into scroll-stopping shorts. We focus on hooks that matter to your viewers and keep them coming back.",
    service3Bullets: ["Vertical Layouts", "Fresh Aesthetics", "Quick Turnaround"],
    aboutBadge: "Your Creative Partner",
    aboutTitle: "Growing Together, Shot by Shot",
    aboutTextContent: `
      <p>I remember the mixed excitement and nerves of that first edit—the drive to make something meaningful. That's why I'm not just an editor; I'm here to be a mentor and partner in your growth.</p>
      <p>Today, I help emerging creators find their footing in the industry. Whether you're mastering your first series or refining your brand, we'll navigate the creative journey together.</p>
      <p>My mission is to provide the professional polish you need while ensuring your original creative spark remains at the heart of every frame.</p>
    `,
    aboutStat1Val: "08+",
    aboutStat1Label: "Years Exp.",
    aboutStat2Val: "NY",
    aboutStat2Label: "Working Globally",
    processBadge: "Our Journey",
    processTitle: "From Vision to Reality",
    processStep1Title: "Discovery",
    processStep1Desc: "We chat about your dreams, your audience, and the feeling you want to create.",
    processStep2Title: "The Craft",
    processStep2Desc: "Thoughtful editing and sound design to bring your story to life with heart and precision.",
    processStep3Title: "Celebration",
    processStep3Desc: "A seamless delivery of your project, ready to inspire and connect with your viewers.",
    testimonialQuote: `"I help you find the rhythm in your footage that speaks to your audience. It's about more than just cuts; it's about your story's soul."`,
    testimonialAuthor: "Alex Sterling",
    testimonialTitle: "Founder, Sterling Digital",
    contactHeading: `Let’s Create Together <span class="text-gradient">Inspiration</span>`,
    contactSubheading: "Ready to share your vision? I'd love to hear about what you're building and help you tell your story.",
    formLabelName: "Your Name",
    formLabelEmail: "Your Email",
    formLabelType: "What can I help with?",
    formOptions: ["Story-Driven Editing", "Brand Video / Visual Identity", "Creator Content (Short Form)", "A New Idea!"],
    formLabelDetails: "Your Vision",
    formSubmitBtn: "Connect With Me",
    footerCopyright: "© 2024 STUDIO NOIR. BUILT FOR CREATORS.",
    activeShowcaseId: "showcase-creator"
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
    
    card.addEventListener('click', () => {
      playSound('camera');
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
  
  // Format YouTube embeds safely
  let embedUrl = videoUrl;
  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || videoUrl.includes('embed/')) {
    if (!videoUrl.includes('embed/')) {
      const videoId = videoUrl.split('v=')[1] || videoUrl.split('/').pop();
      embedUrl = `https://www.youtube.com/embed/${videoId}`;
    }
  }
  
  videoPlayerContainer.innerHTML = `
    <iframe 
      src="${embedUrl}?autoplay=1&mute=0&rel=0" 
      title="Video player" 
      allow="autoplay; encrypted-media; fullscreen" 
      allowfullscreen>
    </iframe>
  `;
  
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
    stat1Val: document.getElementById('stat-1-val'),
    stat1Label: document.getElementById('stat-1-label'),
    stat2Val: document.getElementById('stat-2-val'),
    stat2Label: document.getElementById('stat-2-label'),
    stat3Val: document.getElementById('stat-3-val'),
    stat3Label: document.getElementById('stat-3-label'),
    stat4Val: document.getElementById('stat-4-val'),
    stat4Label: document.getElementById('stat-4-label'),
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
    
    if (elements.stat1Val) elements.stat1Val.textContent = data.stat1Val;
    if (elements.stat1Label) elements.stat1Label.textContent = data.stat1Label;
    if (elements.stat2Val) elements.stat2Val.textContent = data.stat2Val;
    if (elements.stat2Label) elements.stat2Label.textContent = data.stat2Label;
    if (elements.stat3Val) elements.stat3Val.textContent = data.stat3Val;
    if (elements.stat3Label) elements.stat3Label.textContent = data.stat3Label;
    if (elements.stat4Val) elements.stat4Val.textContent = data.stat4Val;
    if (elements.stat4Label) elements.stat4Label.textContent = data.stat4Label;

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
      btnText.textContent = (editionKey === 'pro') ? 'Play Preview' : 'Watch Story';
    });

    const aboutImg = document.getElementById('about-img');
    if (aboutImg) {
      // In emerging creator mode, load the friendly smiling portrait, else load the focused dim-lit editor desk
      aboutImg.src = (editionKey === 'fresher') 
        ? "https://lh3.googleusercontent.com/aida/ADBb0uh9ka8AH35201XuHzS8Jz9JdmhfgZqQj0f2_q1KXTdGOJz5b-zMITfuYtasIMKuMx0bAPGD_bBLq_hImkEw12XrecXWEBkXUq-zcsuVZbUWJSmHCtNxQQR223yFSoRhzI66w1Voo0JXLQRQoJGT2f6XafKDHiOjryFQIjKHcG7rEPkXaEX9Mm7RwkZyBuH3PiERFmDmKNz5KVigEoBQOO2ckF_5Uo0da3fpBGtzqeMV9SR2_Qr9oxQpvPY"
        : "https://lh3.googleusercontent.com/aida-public/AB6AXuBxKYwg9dtrxohyGRw_AjIRK5w7Pb-oebhlQAB9Xw1PVfwFG_TF1mfJlSI6DP4PgHdbR6tGdKhv8JlW5zd8_072aq7-t_DuT-8CpNUsTgFFkF6FJoooN6nZgXRnv9hU-MSJXycF0_bKyF7xENj27xd2arel2KNWG-iC2hg3KGiKeQ9u3A9irS-ZlQsmrR6vrbR10aD0GCoj1uuptv2urCrkOC4TAJwP69ziFg1RxE9Wa2ojhqQRjoVcm9MhwFPmtZzAtXAWnjrceJCY";
    }

    // Dynamic show/hide Hire Me Button in Nav depending on screen spacing
    const navHireBtn = document.getElementById('nav-hire-btn');
    if (navHireBtn) {
      navHireBtn.style.display = (editionKey === 'pro') ? 'block' : 'none';
    }
    const mobileHireBtn = document.getElementById('mobile-hire-btn');
    if (mobileHireBtn) {
      mobileHireBtn.style.display = (editionKey === 'pro') ? 'block' : 'none';
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

// Page Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Populate the default Pro edition selector values
  const selectEl = document.getElementById('form-input-type');
  if (selectEl) {
    selectEl.innerHTML = editionData.pro.formOptions.map(opt => `<option value="${opt}">${opt}</option>`).join('');
  }
  
  setupScrollReveal();
  setupModalTriggers();
  setupCardTilts();
  setupMagneticButtons();
});
