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
            nextTitle: 'ASU Rankings Page',
            problem: `<p class="case-lede">ASU's events platform was managing over 5,000 annual events through an interface that had fallen behind both its users and its own design system.</p>
<p>The site struggled on every front: the UI had drifted from the university's updated design standards, event browsing was cluttered and disorganized, and the filter system contained persistent bugs that broke event tagging and discovery. For a platform at the scale of Arizona State University, this friction wasn't just inconvenient — it was actively suppressing event discovery, new submissions, and meaningful campus engagement.</p>`,
            research: `<p class="case-lede">User interviews and behavioral analysis revealed three critical breakdowns driving poor engagement across the platform.</p>
<ol class="insights">
    <li>
        <span class="insights__num">i.</span>
        <div>
            <h3>Users couldn't navigate the platform — or add events to it.</h3>
            <p>A significant portion of students and staff didn't know how to use the site, submit new events, or organize them effectively. The interface offered no clear wayfinding or guidance.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">ii.</span>
        <div>
            <h3>Search was unreliable and eroded user trust.</h3>
            <p>Users frequently abandoned searches mid-flow. Inconsistent results made endless scrolling feel more dependable than querying directly.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iii.</span>
        <div>
            <h3>Broken filters were hiding the events people needed.</h3>
            <p>The existing filter components had bugs that prevented proper event tagging — relevant events simply didn't surface, and users had no way of knowing what they were missing.</p>
        </div>
    </li>
</ol>`,
            solutionBody: `<p class="case-lede">A structured design process — from user journey mapping to component-level execution — delivered in close collaboration with the engineering team.</p>`,
            features: `<div class="features__item">
    <h3>User journey mapping</h3>
    <p>Mapped the complete user flow from landing to event registration, identifying every friction point and opportunity for a clearer, more intuitive experience.</p>
</div>
<div class="features__item">
    <h3>Card &amp; list view system</h3>
    <p>Designed a flexible card component for event browsing with a toggle between card and list views — giving users full control over how they scan and discover events.</p>
</div>
<div class="features__item">
    <h3>Design system alignment</h3>
    <p>Every component was built to spec within ASU's updated design system, ensuring consistency across the platform and a clean handoff to engineering for implementation.</p>
</div>`,
            resultsLede: `<p class="case-lede">The redesign launched at the end of 2023 to an overwhelmingly positive reception across the ASU community.</p>`,
            results: `<div class="results__item"><span class="results__num">88%</span><p>User approval of the redesigned experience</p></div>
<div class="results__item"><span class="results__num">5×</span><p>Reduction in event overlap and interface clutter</p></div>
<div class="results__item"><span class="results__num">3×</span><p>Increase in platform traffic post-launch</p></div>`
        },
        norden: {
            eyebrow: 'UX/UI Design — 2023',
            title: 'ASU Rankings Page',
            deck: 'A complete redesign of Arizona State University\'s rankings page — rebuilding its card components from the ground up to authentically celebrate over a decade of breakthrough achievements, including ASU\'s sustained #1 ranking in innovation.',
            banner: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=2000&q=85',
            role: 'Senior UX/UI Designer',
            timeline: '4 weeks · 2023',
            tools: 'Adobe XD',
            client: 'Arizona State University',
            team: 'Solo project',
            platform: 'Website &amp; Mobile',
            next: 'mirror',
            nextTitle: 'KHQ Side Panel Update',
            problem: `<p class="case-lede">ASU's rankings page relied on aging card components that had become a source of friction rather than institutional pride.</p>
<p>Cards depended on complex hover animations to reveal key information — a pattern that broke entirely on touch devices and caused desktop users to lose context whenever the cursor drifted. Each card held minimal content, leaving major achievements undersold. With 20+ cards crowding a single page and no visual hierarchy to guide the eye, users struggled to identify landmarks like ASU's decade-long <strong>#1 Innovation ranking</strong> among the noise. The component had also accumulated inconsistencies that made it difficult to scale or maintain.</p>`,
            research: `<p class="case-lede">Usability testing and interviews with students, faculty, and prospective families surfaced three consistent pain points with the existing card interface.</p>
<ol class="insights">
    <li>
        <span class="insights__num">i.</span>
        <div>
            <h3>Hover-dependent cards created friction on every device.</h3>
            <p>Users frequently lost information when accidentally mousing off a card. On touch devices, the hover-only interaction left mobile visitors completely locked out of the card content.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">ii.</span>
        <div>
            <h3>Information density overwhelmed without visual hierarchy.</h3>
            <p>With 20+ uniformly styled cards on one page, users couldn't distinguish landmark achievements from minor recognitions. ASU's ten-year #1 Innovation streak registered with no more prominence than a single-year regional award.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iii.</span>
        <div>
            <h3>The design failed to reflect institutional prestige.</h3>
            <p>Users described the page as cluttered and outdated. The repetitive visual treatment made every row look identical, undermining the significance of the achievements being highlighted.</p>
        </div>
    </li>
</ol>`,
            solutionBody: `<p class="case-lede">A click-first interaction model paired with an alternating brand color palette and tighter content hierarchy — designed around how users actually want to explore achievements.</p>`,
            features: `<div class="features__item">
    <h3>Click-to-expand interaction</h3>
    <p>Replaced brittle hover states with a deliberate click/tap action, giving users full control over when information appears and making every card fully accessible on touch devices.</p>
</div>
<div class="features__item">
    <h3>Alternating brand color palette</h3>
    <p>Cards cycle through ASU's primary brand colors, ensuring no two rows look identical across 20+ achievements while reinforcing institutional identity throughout the scroll.</p>
</div>
<div class="features__item">
    <h3>Focused content per card</h3>
    <p>Each card was edited down to its single most compelling data point, reducing cognitive load and letting individual achievements land with the weight they actually deserve.</p>
</div>`,
            resultsLede: `<p class="case-lede">Post-launch usability testing showed measurable improvement across every metric the team tracked.</p>`,
            results: `<div class="results__item"><span class="results__num">45%</span><p>Faster task completion when locating a specific ranking</p></div>
<div class="results__item"><span class="results__num">63%</span><p>Of testers rated the updated navigation as significantly easier to use</p></div>
<div class="results__item"><span class="results__num">20+</span><p>Achievement cards displayed with no two rows appearing visually identical</p></div>`
        },
        mirror: {
            eyebrow: 'UX/UI Design — 2026',
            title: 'KHQ Side Panel Update',
            deck: 'Applying modern design standards to KUBRA\'s KHQ side panel through structured research and usability testing — replacing a non-standard toggle pattern with a validated, accessible approach that works equally well for users, designers, and engineers.',
            banner: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=85',
            role: 'UI / Visual Designer',
            timeline: '6 weeks · 2026',
            tools: 'Figma',
            client: 'KUBRA',
            team: 'Visual Designer, UX Researcher, Director, PM, Developer',
            platform: 'Desktop Web Software',
            next: 'cookfresh',
            nextTitle: 'Cook Fresh',
            problem: `<p class="case-lede">KHQ's side panel used a non-standard toggle button positioned between the panel's inner and outer boundaries — an unusual pattern that created compounding problems across design, development, and usability.</p>
<p>For users, the button's placement was unintuitive and inconsistent with established UI conventions, making the panel difficult to discover and interact with confidently. For engineering, the in-between positioning required complex logic to maintain correct toggle behavior as the panel changed state — a persistent maintenance burden. For the design system, the atypical placement made it nearly impossible to define repeatable patterns around the component, blocking meaningful system-level work downstream. All three problems pointed to the same root cause: a toggle that didn't belong where it was.</p>`,
            research: `<p class="case-lede">The goal was to validate the best approach for modernizing the panel through lightweight testing with internal participants — identifying which interaction patterns, icon styles, and copy choices best matched user expectations.</p>
<ol class="insights">
    <li>
        <span class="insights__num">i.</span>
        <div>
            <h3>Most users understood icon-based controls without instruction.</h3>
            <p>17 KUBRA participants completed a structured prototype test covering icon comprehension, discoverability, and copy clarity. <strong>59% correctly interpreted the modernized icon-based design</strong> with no prompting — a strong signal that the new direction aligned with mental models already in place.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">ii.</span>
        <div>
            <h3>Show/hide labeling outperformed every alternative tested.</h3>
            <p>Participants chose between four copy approaches for the panel toggle. <strong>34% selected show/hide</strong> — the highest preference of any option — confirming it as the clearest way to communicate the panel's open and closed states.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iii.</span>
        <div>
            <h3>Users strongly preferred a minimal icon style.</h3>
            <p>When shown multiple icon treatments, <strong>70% of participants chose the minimal icon variant</strong> over more complex alternatives — providing direct, data-backed justification for the production design direction.</p>
        </div>
    </li>
</ol>`,
            solutionBody: `<p class="case-lede">A research-validated redesign of the panel toggle — repositioned to a conventional location, built around a minimal icon system, and documented as a reusable pattern that serves both the design system and engineering.</p>`,
            features: `<div class="features__item">
    <h3>Repositioned panel toggle</h3>
    <p>Moved from its ambiguous in-between position to the panel's conventional leading edge — aligning with enterprise UI standards, eliminating backend state-management complexity, and giving the component a predictable, system-ready footprint.</p>
</div>
<div class="features__item">
    <h3>Minimal icon system</h3>
    <p>Selected through direct participant testing, the minimal icon set communicates panel actions clearly without visual noise. With 70% of testers choosing this style over alternatives, the decision was grounded in real preference data rather than assumption.</p>
</div>
<div class="features__item">
    <h3>Validated copy and labeling</h3>
    <p>Show/hide language — the top-performing option across all four alternatives tested — was adopted as the panel standard, reducing ambiguity and eliminating the need for additional user guidance at the interaction point.</p>
</div>`,
            resultsLede: `<p class="case-lede">Research testing with 17 KUBRA participants validated the design direction across icon comprehension, interaction preference, and copy clarity.</p>`,
            results: `<div class="results__item"><span class="results__num">59%</span><p>Of participants understood the modernized icon interface without any instruction</p></div>
<div class="results__item"><span class="results__num">70%</span><p>Chose the minimal icon variant, directly informing the final production design</p></div>
<div class="results__item"><span class="results__num">34%</span><p>Preferred show/hide labeling over all three alternative copy approaches tested</p></div>`
        },
        cookfresh: {
            eyebrow: 'UI Design — 2026',
            title: 'Config HQ — IVR Instances',
            deck: 'A UI design initiative to improve IVR+ configuration management within ConfigHQ — centralizing workspace-level settings, establishing proper placement for transfer configurations, and introducing instance-level maintenance controls for better operational oversight.',
            banner: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=2000&q=85',
            role: 'UI Designer',
            timeline: '2026',
            tools: 'Figma',
            client: 'KUBRA',
            team: 'UI Designer, UX Researcher, PM, Developer',
            platform: 'Desktop Web Software',
            next: 'rei',
            nextTitle: 'REI Backpack Finder',
            problem: `<p class="case-lede">IVR+ configuration within ConfigHQ had grown fragmented — settings, transfer rules, and instance controls were scattered across the system with no clear ownership or hierarchy.</p>
<p>Four specific gaps were driving the problem:</p>
<ol class="insights" style="list-style:none;padding:0;margin:var(--s-4) 0 0;display:flex;flex-direction:column;gap:var(--s-3);">
    <li style="display:grid;grid-template-columns:40px 1fr;gap:var(--s-2);padding-top:var(--s-3);border-top:1px solid var(--color-line);">
        <span class="insights__num">1.</span>
        <div><strong>General settings</strong> — language defaults and messaging were managed at the instance level, forcing repetitive configuration across every IVR instance instead of once at the workspace.</div>
    </li>
    <li style="display:grid;grid-template-columns:40px 1fr;gap:var(--s-2);padding-top:var(--s-3);border-top:1px solid var(--color-line);">
        <span class="insights__num">2.</span>
        <div><strong>Transfer configurations</strong> — transfer-in and transfer-out rules had no defined home, creating inconsistency in how call routing was set up and audited.</div>
    </li>
    <li style="display:grid;grid-template-columns:40px 1fr;gap:var(--s-2);padding-top:var(--s-3);border-top:1px solid var(--color-line);">
        <span class="insights__num">3.</span>
        <div><strong>Maintenance mode</strong> — no instance-level control existed for planned downtime, leaving no way to gracefully disable authentication and payment flows when an IVR went offline.</div>
    </li>
    <li style="display:grid;grid-template-columns:40px 1fr;gap:var(--s-2);padding-top:var(--s-3);border-top:1px solid var(--color-line);">
        <span class="insights__num">4.</span>
        <div><strong>Phone number provisioning</strong> — there was no dedicated section for managing phone numbers or IVR availability, making operational control inconsistent and difficult to audit.</div>
    </li>
</ol>`,
            research: `<p class="case-lede">Rather than traditional usability testing, this project was driven by configuration analysis — mapping where settings lived, where they belonged, and what was missing entirely. Four key areas were defined.</p>
<ol class="insights">
    <li>
        <span class="insights__num">i.</span>
        <div>
            <h3>Workspace-level general settings</h3>
            <p>Established a default language selector (English, Spanish, French) with support for localized welcome and goodbye messages. The client contact number was moved from instance-level transfer-out configuration up to the workspace, centralizing elements shared across all instances and reducing per-instance setup overhead.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">ii.</span>
        <div>
            <h3>Transfer-in configuration</h3>
            <p>Designed to accept multiple call center phone numbers used for IVR call recognition — allowing the system to correctly identify calls transferred from client call centers and preventing phone numbers from being incorrectly associated with accounts.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iii.</span>
        <div>
            <h3>Placement decision: workspace vs. instance</h3>
            <p>A key design question was whether transfer configurations belonged at the workspace or instance level. The deciding factors: workspace snapshots support portable configurations while instance settings are non-portable. Transfer-in and transfer-out configurations were placed at the workspace level to support portability and consistent auditing.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iv.</span>
        <div>
            <h3>Instance-level maintenance mode</h3>
            <p>Introduced a maintenance mode toggle at the instance level. When enabled, it disables authentication and payment flows while the IVR is offline and surfaces a biller-specific maintenance message — giving operations teams a controlled, user-facing way to handle planned downtime.</p>
        </div>
    </li>
</ol>`,
            solutionBody: `<p class="case-lede">A restructured configuration architecture across three surfaces — workspace settings, transfer configuration, and instance controls — giving administrators a logical, auditable system for managing IVR environments.</p>`,
            features: `<div class="features__item">
    <h3>Workspace general settings</h3>
    <p>Centralized language defaults, localized messaging, and the client contact number at the workspace level — eliminating repeated configuration across instances and establishing a single source of truth for shared settings.</p>
</div>
<div class="features__item">
    <h3>Transfer configuration panel</h3>
    <p>Designed a dedicated workspace-level panel for transfer-in and transfer-out rules, supporting multiple call center numbers with clear labeling to prevent misassociation and improve routing auditability.</p>
</div>
<div class="features__item">
    <h3>Instance maintenance mode</h3>
    <p>Added a maintenance toggle at the instance level that gracefully disables payment and authentication flows, surfaces a configurable biller message, and gives operations teams deliberate control over IVR availability.</p>
</div>`,
            resultsLede: `<p class="case-lede">The redesigned configuration structure resolved longstanding operational pain points and established a foundation for scalable IVR management within ConfigHQ.</p>`,
            results: `<div class="results__item"><span class="results__num">4</span><p>Configuration domains restructured with clear workspace vs. instance ownership</p></div>
<div class="results__item"><span class="results__num">3</span><p>Languages supported with centralized localization at the workspace level</p></div>
<div class="results__item"><span class="results__num">1</span><p>Unified maintenance mode giving operations full control over instance availability</p></div>`
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
