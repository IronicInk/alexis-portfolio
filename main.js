(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nav = document.getElementById('nav');

    /* =============================================================
       ROTATING WORD — Hayden-style
       ============================================================= */
    const rotatorEl = document.getElementById('rotator');
    const words = ['interfaces', 'systems', 'experiences', 'products', 'brands'];
    let wordIdx = 0;

    function rotateWord() {
        if (prefersReducedMotion || !rotatorEl) return;
        rotatorEl.classList.add('is-out');
        setTimeout(() => {
            wordIdx = (wordIdx + 1) % words.length;
            rotatorEl.textContent = words[wordIdx];
            rotatorEl.classList.remove('is-out');
        }, 360);
    }
    if (rotatorEl && !prefersReducedMotion) {
        setInterval(rotateWord, 2400);
    }

    /* =============================================================
       PROJECT DATA
       ============================================================= */
    const projects = {
        eatxplore: {
            eyebrow: 'UX/UI Design — 2023',
            title: 'ASU Events Page',
            deck: 'A full redesign of Arizona State University\'s live events platform — modernizing the interface, implementing a scalable design system, and rethinking how 5,000+ annual events are discovered and organized. <a class="case__link" href="https://asuevents.asu.edu/" target="_blank" rel="noopener">View live site →</a>',
            banner: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=85',
            role: 'Senior UX/UI Designer',
            timeline: '12 weeks · Oct–Dec 2023',
            tools: 'Adobe XD',
            client: 'Arizona State University',
            team: '1 PM, 3 Engineers, 1 Director, 1 Designer',
            platform: 'Website',
            next: 'norden',
            nextTitle: 'Norden Banking'
        },
        norden: {
            eyebrow: 'Case Study — 2024',
            title: 'Norden Banking',
            deck: "Reimagining a Nordic challenger bank's mobile app around clarity, calm, and quiet confidence — for people who'd rather not think about money more than they have to.",
            banner: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=2000&q=85',
            role: 'Lead Visual Designer',
            timeline: '20 weeks · Aug–Dec 2024',
            tools: 'Figma, Principle, Origami',
            client: 'Norden Bank',
            team: '2 PMs, 4 Engineers, 2 Designers',
            platform: 'iOS &amp; Android',
            next: 'mirror',
            nextTitle: 'Mirror Mirror'
        },
        mirror: {
            eyebrow: 'Concept — 2024',
            title: 'Mirror Mirror',
            deck: 'Using AI to cultivate mindfulness in personal finance — a calmer way to look at your money without the judgement of a budgeting app.',
            banner: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=85',
            role: 'UX Designer &amp; Researcher',
            timeline: '10 weeks · 2024',
            tools: 'Figma, Miro, OpenAI',
            client: 'Self-initiated',
            team: 'Solo project',
            platform: 'Mobile concept',
            next: 'cookfresh',
            nextTitle: 'Cook Fresh'
        },
        cookfresh: {
            eyebrow: 'Case Study — 2023',
            title: 'Cook Fresh',
            deck: 'A smart cooking assistant that reduces food waste by suggesting recipes from what is already in your kitchen.',
            banner: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=2000&q=85',
            role: 'VUI Designer',
            timeline: '12 weeks · 2023',
            tools: 'Figma, Voiceflow',
            client: 'Whirlpool Lab',
            team: '1 PM, 3 Engineers, 1 Designer',
            platform: 'Voice + Display',
            next: 'rei',
            nextTitle: 'REI Backpack Finder'
        },
        rei: {
            eyebrow: 'Case Study — 2023',
            title: 'REI Backpack Finder',
            deck: 'Helping novice backpackers find the right pack without the analysis paralysis of 200+ technical SKUs.',
            banner: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2000&q=85',
            role: 'UX/UI Designer',
            timeline: '8 weeks · 2023',
            tools: 'Figma, Maze',
            client: 'REI Co-op',
            team: '1 PM, 2 Engineers, 1 Designer',
            platform: 'Web &amp; Mobile',
            next: 'upup',
            nextTitle: 'Up &amp; Up'
        },
        upup: {
            eyebrow: 'Side Project — 2022',
            title: 'Up &amp; Up',
            deck: 'A collective breathing game for stress relief — slowing down a roomful of strangers, one inhale at a time.',
            banner: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=2000&q=85',
            role: 'UX &amp; Motion Designer',
            timeline: '6 weeks · 2022',
            tools: 'Figma, After Effects',
            client: 'Self-initiated',
            team: 'Solo project',
            platform: 'Web',
            next: 'eatxplore',
            nextTitle: 'Eatxplore'
        }
    };

    /* =============================================================
       NAVIGATION (page swap + anchor scroll)
       ============================================================= */
    function navigate(target, opts = {}) {
        const { anchor, project } = opts;
        if (target === 'project' && project && projects[project]) {
            const p = projects[project];
            document.querySelectorAll('[data-field]').forEach(el => {
                const key = el.dataset.field;
                if (key === 'banner') el.src = p.banner;
                else if (p[key] !== undefined) el.innerHTML = p[key];
            });
            const nextBtn = document.getElementById('next-project-btn');
            const nextTitle = document.getElementById('next-project-title');
            if (nextBtn && p.next) {
                nextBtn.dataset.project = p.next;
                nextTitle.textContent = p.nextTitle;
            }
        }
        document.querySelectorAll('.page').forEach(pg => {
            pg.classList.toggle('is-active', pg.dataset.page === target);
        });
        if (anchor) {
            requestAnimationFrame(() => {
                const el = document.getElementById(anchor);
                if (el) {
                    const navHeight = nav ? nav.offsetHeight : 0;
                    const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                }
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }
    }

    document.addEventListener('click', (e) => {
        const target = e.target.closest('[data-nav]');
        if (!target) return;
        e.preventDefault();
        navigate(target.dataset.nav, {
            anchor: target.dataset.anchor,
            project: target.dataset.project
        });
    });

    document.querySelectorAll('[data-anchor]:not([data-nav])').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const el = document.getElementById(btn.dataset.anchor);
            if (!el) return;
            const navHeight = nav ? nav.offsetHeight : 0;
            const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
            window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        });
    });

    /* =============================================================
       STICKY NAV
       ============================================================= */
    if (nav) {
        let ticking = false;
        const update = () => {
            nav.classList.toggle('is-scrolled', window.scrollY > 24);
            ticking = false;
        };
        window.addEventListener('scroll', () => {
            if (!ticking) { requestAnimationFrame(update); ticking = true; }
        }, { passive: true });
        update();
    }

    /* =============================================================
       VIEW TOGGLE — swap list/card layouts
       ============================================================= */
    const toggleBtns = document.querySelectorAll('.view-toggle__btn');
    const cardContainers = document.querySelectorAll('.cards');

    function setView(view) {
        cardContainers.forEach(c => c.setAttribute('data-view', view));
        toggleBtns.forEach(b => {
            const active = b.dataset.view === view;
            b.classList.toggle('is-active', active);
            b.setAttribute('aria-selected', active ? 'true' : 'false');
        });
    }

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => setView(btn.dataset.view));
    });

    /* =============================================================
       CONTACT FORM — basic client-side validation + success state
       Note: hook this up to a real backend (Formspree, Netlify Forms,
       or your own endpoint) by setting the form's `action` attribute
       and removing the e.preventDefault() below.
       ============================================================= */
    const contactForm = document.getElementById('contact-form');
    const contactMsg = document.getElementById('contact-form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation: check required fields
            const required = contactForm.querySelectorAll('[required]');
            let valid = true;
            required.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderBottomColor = '#c45a2a';
                    valid = false;
                } else {
                    field.style.borderBottomColor = '';
                }
            });

            // Validate email shape
            const email = contactForm.querySelector('#cf-email');
            if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.style.borderBottomColor = '#c45a2a';
                valid = false;
            }

            if (!valid) return;

            // Show success state (placeholder — replace with real submission)
            if (contactMsg) {
                contactMsg.classList.add('is-visible');
            }
            contactForm.reset();

            // Hide message after 5s
            setTimeout(() => {
                if (contactMsg) contactMsg.classList.remove('is-visible');
            }, 5000);
        });

        // Clear error state on input
        contactForm.querySelectorAll('.contact-form__input').forEach(field => {
            field.addEventListener('input', () => {
                field.style.borderBottomColor = '';
            });
        });
    }

})();
