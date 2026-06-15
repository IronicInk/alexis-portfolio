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
            nextTitle: 'Storm Center 5 — Wind Icon',
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
            eyebrow: 'UX/UI Design — 2025',
            title: 'Storm Center 5 — Wind Icon Component',
            deck: 'Designing a dynamic wind speed and direction component for KUBRA\'s Storm Center 5 outage map — giving users real-time environmental context to understand why outages are occurring and whether public safety events are in effect.',
            banner: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2000&q=85',
            role: 'UX/UI Designer',
            timeline: '6 weeks · 2025',
            tools: 'Figma',
            client: 'KUBRA',
            team: '1 Designer, 1 Engineer, 1 Director, 1 Product Manager',
            platform: 'Mobile &amp; Web',
            next: 'upup',
            nextTitle: 'Up &amp; Up',
            problem: `<p class="case-lede">Storm Center 5's outage map showed users <em>where</em> power was out — but gave them no way to understand <em>why</em>.</p>
<p>During high-wind events, wildfires, and other weather-driven incidents, users were left to interpret outage clusters in isolation with no environmental context. For a product used during active emergencies, this gap was significant: users couldn't tell whether an outage was routine maintenance or part of a larger public safety situation. A dedicated wind speed and direction component was identified as a critical missing piece — one that could surface the environmental conditions driving outages and help users make informed decisions during potentially life-affecting events.</p>`,
            research: `<p class="case-lede">No existing component addressed this use case, so the team started from scratch — researching how other products had visualized real-time wind data before defining the approach.</p>
<ol class="insights">
    <li>
        <span class="insights__num">i.</span>
        <div>
            <h3>Existing solutions set the benchmark.</h3>
            <p>The team audited weather applications, public safety dashboards, and industrial monitoring tools to understand established conventions for wind visualization. This research surfaced a range of approaches — from simple directional arrows to animated radial indicators — and informed the criteria for what would work in the Storm Center context.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">ii.</span>
        <div>
            <h3>The component had to work equally well on mobile and web.</h3>
            <p>Storm Center 5 users split across mobile and desktop — often accessing the map during an active weather event, sometimes from a phone in the field. The component could not be a desktop-only experience. Every design decision was evaluated against both platforms simultaneously.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iii.</span>
        <div>
            <h3>Communicating severity clearly was the primary design challenge.</h3>
            <p>The component needed to do more than display data — it had to convey urgency at a glance. Multiple icon treatments were explored and put through feedback loops with the Director and Product Manager to find the visual language that felt immediately meaningful in an emergency context.</p>
        </div>
    </li>
</ol>`,
            solutionBody: `<p class="case-lede">A dynamic radial icon where a circular ring fills clockwise as wind speed increases — inspired by a vehicle's speedometer, where an advancing dial intuitively communicates rising intensity without requiring any data literacy from the user.</p>`,
            features: `<div class="features__item">
    <h3>Radial wind speed indicator</h3>
    <p>The ring fills progressively as wind speed climbs, giving users an immediate visual read on severity. Minimum and maximum thresholds are fully configurable per deployment, allowing the component to adapt to regional conditions and utility-specific alert levels.</p>
</div>
<div class="features__item">
    <h3>Directional wind arrow</h3>
    <p>A directional indicator rotates to show real-time wind direction, helping users understand the path of a weather event and anticipate where conditions — and outages — may spread next.</p>
</div>
<div class="features__item">
    <h3>Extensible public safety indicators</h3>
    <p>The component architecture was designed to go beyond wind. Fire risk, humidity, and other environmental conditions can be surfaced using the same visual system — giving the outage map meaningful, expandable context for a wide range of public safety scenarios.</p>
</div>`,
            resultsLede: `<p class="case-lede">The component shipped production-ready across both platforms — and its architecture opened the door to a broader set of public safety features than originally scoped.</p>`,
            results: `<div class="results__item"><span class="results__num">2</span><p>Platforms — mobile and web — served by a single, unified component with no platform-specific compromises</p></div>
<div class="results__item"><span class="results__num">4+</span><p>Public safety indicators supported by the extensible component architecture, including wind, fire risk, and humidity</p></div>
<div class="results__item"><span class="results__num">1</span><p>Configurable radial dial covering custom min/max wind speed thresholds per deployment</p></div>`
        },
        mythicaltracker: {
            eyebrow: 'Design & Development — 2026',
            title: 'Mythical Tracker',
            deck: 'A mobile-first PWA for tracking Magic: The Gathering tokens by commander — designed, built, and published to the Google Play Store entirely from scratch using vanilla HTML, CSS, and JavaScript. Every mechanic, from summoning sickness pools to per-commander state isolation, was engineered around real gameplay.',
            banner: 'https://ironicink.github.io/Goblin-Tracker/screenshot2.jpg',
            role: 'Designer &amp; Developer',
            timeline: '2026',
            tools: 'HTML / CSS / JS · PWABuilder · GitHub Pages',
            client: 'Ironic Ink Designs LLC',
            team: 'Solo project',
            platform: 'Android (Google Play) &amp; Web (PWA)',
            next: 'eatxplore',
            nextTitle: 'ASU Events Page',
            problem: `<p class="case-lede">Magic: The Gathering players managing large token armies have no purpose-built tool — they rely on dice that roll away, sticky notes that get lost, and generic notes apps that can't model how tokens actually work.</p>
<p>The core problem isn't just counting — it's tracking the <strong>lifecycle</strong> of every token. Creatures that enter play can't attack or tap until the following turn (summoning sickness). Cards with haste bypass this rule entirely. Board wipes destroy everything at once. Commanders like Krenko generate exponentially growing token counts with a single tap. No existing app modeled any of this — players were left doing the math in their heads mid-game, mid-combat, under pressure.</p>`,
            research: `<p class="case-lede">Playtesting sessions and tester feedback across multiple builds surfaced three design problems that kept reshaping the product.</p>
<ol class="insights">
    <li>
        <span class="insights__num">i.</span>
        <div>
            <h3>Two pools weren't enough — tokens needed a third state.</h3>
            <p>Early builds tracked Ready and Sick. But haste cards invalidated the entire model — a creature with haste enters play already able to act. The solution was a three-pool system: <strong>Ready</strong>, <strong>Sick</strong>, and <strong>⚡ Hasted</strong>. Toggling haste collapses the view to a single full-width pool, then gracefully redistributes tokens when turned off.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">ii.</span>
        <div>
            <h3>Token counts were bleeding between commanders.</h3>
            <p>Players switching between commanders mid-session found their previous counts carrying over — a fundamental state bug that made multi-commander sessions unusable. The fix introduced per-commander state isolation: each commander slot saves and restores its own pools, custom tokens, turn count, and haste state independently.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iii.</span>
        <div>
            <h3>A prominent New Game button was causing accidental resets.</h3>
            <p>Testers repeatedly hit the header-level New Game button by accident mid-game — wiping progress they meant to keep. The button was moved into the hamburger menu as a clearly labeled danger action, requiring deliberate intent to trigger.</p>
        </div>
    </li>
</ol>`,
            solutionBody: `<p class="case-lede">A fully offline Progressive Web App built in vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies — published on the Google Play Store via PWABuilder.</p>`,
            features: `<div class="features__item">
    <h3>Per-commander state isolation</h3>
    <p>Each of the six built-in commanders (plus a custom slot) maintains its own independent game state — pools, tokens, turn counter, haste mode, and attack/defense values. Switching commanders saves the current session and restores the next one exactly where it was left.</p>
</div>
<div class="features__item">
    <h3>Three-pool haste system</h3>
    <p>Ready, Sick, and Hasted pools model the full token lifecycle. Haste mode collapses into a single full-width counter that displays the total across all pools. Toggling haste off moves newly hasted tokens to Sick while leaving pre-existing Ready tokens untouched — matching the actual rules of the game.</p>
</div>
<div class="features__item">
    <h3>Offline-first PWA</h3>
    <p>A service worker caches all assets on first load — the app works with no internet connection, installs to the home screen like a native app, and is distributed on the Google Play Store via PWABuilder wrapping the GitHub Pages deployment.</p>
</div>`,
            resultsLede: `<p class="case-lede">Shipped from first commit to Google Play Store internal testing, with a live public web version available immediately after each push to GitHub.</p>`,
            results: `<div class="results__item"><span class="results__num">6+</span><p>Commanders supported with full per-session state isolation and a custom commander builder</p></div>
<div class="results__item"><span class="results__num">100%</span><p>Offline — service worker caches all assets on first load, no internet required after install</p></div>
<div class="results__item"><span class="results__num">2</span><p>Distribution channels — Google Play Store (Android) and installable PWA via GitHub Pages</p></div>`
        },
        upup: {
            eyebrow: 'UI Design — 2026',
            title: 'MyHQ+ &amp; EZ-PAY+ — Color Label Behavior',
            deck: 'A living Figma document that lets clients visualize exactly how their branding color choices apply across MyHQ+ and EZ-PAY+ — replacing opaque token documentation with an interactive reference they can explore and update themselves, in real time.',
            banner: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=2000&q=85',
            role: 'UI Visual Designer',
            timeline: '2 weeks · 2026',
            tools: 'Figma',
            client: 'KUBRA',
            team: '1 UI Designer, 1 PM, 2 Engineers',
            platform: 'Software',
            next: 'mythicaltracker',
            nextTitle: 'Mythical Tracker',
            problem: `<p class="case-lede">Clients were making branding color decisions without being able to see what those choices would actually look like once applied to the software.</p>
<p>The existing method — sharing color token documentation — was too abstract for non-technical clients. Token names like <strong>primary-500</strong> or <strong>surface-interactive</strong> meant little without seeing them mapped to real UI components. Clients couldn't anticipate how a color decision made in isolation would ripple across buttons, labels, navigation, and status indicators throughout the product. The result was a slow, high-friction review process that required designer involvement for every question — and still sometimes led to post-implementation revisions when the final output didn't match expectations.</p>`,
            research: `<p class="case-lede">Finding the right solution meant first understanding why existing approaches fell short. Three directions were evaluated before landing on the final approach.</p>
<ol class="insights">
    <li>
        <span class="insights__num">i.</span>
        <div>
            <h3>AI-driven tools were too complex to hand off.</h3>
            <p>Figma Make was explored as a way to automate color previews, but the setup required too much technical knowledge for clients to maintain independently. Any time a client needed to update a token, they would have needed designer support — which recreated the exact bottleneck the tool was meant to solve.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">ii.</span>
        <div>
            <h3>Static presentation docs solved the wrong problem.</h3>
            <p>A slide-based documentation approach would have been thorough but passive — clients could read about where colors applied but couldn't see the impact of their own choices. A lengthy document also risked not being read at all, leaving the core problem unsolved.</p>
        </div>
    </li>
    <li>
        <span class="insights__num">iii.</span>
        <div>
            <h3>Simplicity and interactivity had to coexist.</h3>
            <p>Any solution that was too complex would go unused. The product owner and PM helped define the constraint clearly: the file had to be something a client could open, understand, and act on without training — while still providing enough context to make confident color decisions.</p>
        </div>
    </li>
</ol>`,
            solutionBody: `<p class="case-lede">A Figma file built around the product's actual color token system — clients update token values once and watch the changes cascade across every affected component in real time, across three products, within a single focused document.</p>`,
            features: `<div class="features__item">
    <h3>Live token-driven previews</h3>
    <p>The file is wired to the product's real color tokens. When a client updates a value, every component that references that token — buttons, labels, status indicators, navigation — updates instantly. No guesswork, no waiting for a designer to mock it up.</p>
</div>
<div class="features__item">
    <h3>Three products, one file</h3>
    <p>MyHQ+, EZ-PAY+, and a third affected product are all documented within a single Figma file — scoped to roughly three pages to keep it approachable. Clients get complete coverage without navigating multiple documents or managing version inconsistencies between them.</p>
</div>
<div class="features__item">
    <h3>Built-in usage guide</h3>
    <p>A dedicated guide page explains where each color label applies, how to update tokens, and what to expect when colors are implemented in production — giving clients both the interactive tool and the context to use it confidently.</p>
</div>`,
            resultsLede: `<p class="case-lede">The Figma document replaced a process that required designer involvement for every color question with one clients could navigate independently.</p>`,
            results: `<div class="results__item"><span class="results__num">3</span><p>Products documented within a single, client-ready Figma file</p></div>
<div class="results__item"><span class="results__num">~3</span><p>Pages — intentionally scoped to stay approachable and immediately usable</p></div>
<div class="results__item"><span class="results__num">0</span><p>Design tools or technical knowledge required for clients to explore their color choices</p></div>`
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
