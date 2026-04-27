THIS FILE IS VISUAL REFERENCE ONLY.
DO NOT COPY STRUCTURE OR LOGIC. USE ONLY FOR STYLE.

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>TECH_ARCHITECT // EE + CS Portfolio</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-secondary-fixed": "#2c0051",
                        "error": "#ffb4ab",
                        "on-error": "#690005",
                        "tertiary-container": "#00f7a6",
                        "surface-variant": "#353436",
                        "on-background": "#e5e2e3",
                        "on-tertiary-container": "#006c46",
                        "inverse-surface": "#e5e2e3",
                        "secondary": "#dcb8ff",
                        "secondary-fixed-dim": "#dcb8ff",
                        "primary": "#dbfcff",
                        "surface-container": "#201f20",
                        "on-secondary-fixed-variant": "#6700b5",
                        "on-error-container": "#ffdad6",
                        "on-primary-fixed": "#002022",
                        "surface": "#131314",
                        "error-container": "#93000a",
                        "secondary-container": "#7701d0",
                        "on-tertiary": "#003822",
                        "primary-container": "#00f0ff",
                        "primary-fixed-dim": "#00dbe9",
                        "on-primary-fixed-variant": "#004f54",
                        "on-secondary-container": "#dcb7ff",
                        "inverse-on-surface": "#313031",
                        "outline": "#849495",
                        "tertiary-fixed-dim": "#00e297",
                        "on-tertiary-fixed": "#002112",
                        "on-tertiary-fixed-variant": "#005234",
                        "surface-container-high": "#2a2a2b",
                        "secondary-fixed": "#efdbff",
                        "tertiary-fixed": "#4dffb2",
                        "on-surface": "#e5e2e3",
                        "surface-dim": "#131314",
                        "tertiary": "#d7ffe5",
                        "on-primary-container": "#006970",
                        "on-primary": "#00363a",
                        "surface-tint": "#00dbe9",
                        "surface-container-highest": "#353436",
                        "on-surface-variant": "#b9cacb",
                        "primary-fixed": "#7df4ff",
                        "outline-variant": "#3b494b",
                        "surface-container-low": "#1c1b1c",
                        "surface-container-lowest": "#0e0e0f",
                        "on-secondary": "#480081",
                        "surface-bright": "#3a393a",
                        "background": "#131314",
                        "inverse-primary": "#006970"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "lg": "2.5rem",
                        "xl": "4rem",
                        "unit": "4px",
                        "gutter": "1.5rem",
                        "margin": "2rem",
                        "sm": "1rem",
                        "md": "1.5rem",
                        "xs": "0.5rem"
                    },
                    "fontFamily": {
                        "body-md": ["Inter"],
                        "caption": ["Inter"],
                        "mono-label": ["monospace"],
                        "body-lg": ["Inter"],
                        "h2": ["Space Grotesk"],
                        "display": ["Space Grotesk"],
                        "h1": ["Space Grotesk"]
                    },
                    "fontSize": {
                        "body-md": ["16px", {"lineHeight": "1.5", "letterSpacing": "0em", "fontWeight": "400"}],
                        "caption": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "500"}],
                        "mono-label": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "0em", "fontWeight": "400"}],
                        "h2": ["32px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                        "display": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
                        "h1": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}]
                    }
                }
            }
        }
    </script>
<style>
        .grid-bg {
            background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 40px 40px;
        }
        .glass-panel {
            background: rgba(18, 18, 20, 0.7);
            backdrop-filter: blur(12px);
            border: 0.5px solid rgba(255, 255, 255, 0.1);
        }
        .neon-border {
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
            border: 1px solid rgba(0, 240, 255, 0.4);
        }
        .neon-border:hover {
            box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
            border-color: rgba(0, 240, 255, 0.8);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_0_20px_rgba(0,240,255,0.15)]">
<div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between font-['Space_Grotesk'] tracking-tight">
<div class="text-xl font-bold text-cyan-400 tracking-tighter">TECH_ARCHITECT</div>
<div class="hidden md:flex items-center space-x-8">
<a class="text-cyan-400 border-b-2 border-cyan-400 pb-1" href="#projects">Projects</a>
<a class="text-slate-400 font-medium hover:text-cyan-300 transition-colors" href="#stack">Stack</a>
<a class="text-slate-400 font-medium hover:text-cyan-300 transition-colors" href="#experience">Experience</a>
<a class="text-slate-400 font-medium hover:text-cyan-300 transition-colors" href="#contact">Contact</a>
</div>
<button class="bg-primary-container text-on-primary-container px-6 py-2 rounded font-bold hover:opacity-90 active:scale-95 transition-all duration-300">Resume</button>
</div>
</nav>
<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
<div class="absolute inset-0 grid-bg opacity-40"></div>
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
<div class="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
<span class="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse"></span>
<span class="text-mono-label font-mono-label text-[10px] uppercase tracking-widest text-on-surface-variant">System Status: Operational</span>
</div>
<h1 class="font-display text-display leading-tight mb-6 bg-gradient-to-r from-primary via-primary-fixed to-secondary-fixed-dim bg-clip-text text-transparent">
                Building intelligent systems at the intersection of hardware and software
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
                Specializing in IoT architecture, embedded AI, and robust full-stack systems. Bridging the gap between physical sensors and digital logic.
            </p>
<div class="flex flex-col md:flex-row items-center justify-center gap-4">
<a class="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded neon-border transition-all duration-300" href="#projects">View Projects</a>
<a class="w-full md:w-auto px-8 py-4 bg-transparent border border-white/20 text-on-background font-bold rounded hover:bg-white/5 transition-all duration-300" href="#contact">Get In Touch</a>
</div>
</div>
<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span class="text-mono-label text-[10px] uppercase tracking-[0.3em]">Scroll to initialize</span>
<span class="material-symbols-outlined text-primary animate-bounce">expand_more</span>
</div>
</section>
<!-- About Section -->
<section class="py-24 relative" id="about">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div class="relative">
<div class="aspect-square rounded-lg overflow-hidden border border-white/10">
<img alt="Technical setup" class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" data-alt="Close-up of high-end circuit board and server rack with glowing blue and purple LEDs in a dark tech environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACwVKejCfUHrU0heLFT5QNcjrvR-H3-3ebgAZXaVB_7ao-tyPSQnHLwOocf90Xq2Qd7LNgZ9aP4fiA8vNxgI6nXYKt3hcFuqr0ALvRQ8FTlLjHsdXlNLquSdTkmK2IecWnIho_BgTT4z0AcJgI0LE338Excb6QCUGs3S9L2A1nLhSXEUtJNcwSS22XUhUIMOnvv3TvDNFwDIp-AoSaCYMzP5GyKtsz4TnCsH3CGJg9PsbfP4f4h9G5dWJJ-RF3C63scrg3-tZPStsj"/>
</div>
<div class="absolute -bottom-6 -right-6 p-6 glass-panel rounded-lg hidden md:block">
<div class="text-h2 font-h2 text-primary">04+</div>
<div class="text-mono-label uppercase text-[10px] text-on-surface-variant">Years of Hacking</div>
</div>
</div>
<div>
<h2 class="font-h1 text-h1 mb-6 text-primary">The "Builder" Identity</h2>
<p class="text-body-lg text-on-surface-variant mb-6">
                        I don't just write code; I engineer systems. My approach combines the rigorous precision of Electrical Engineering with the scalable logic of Computer Science.
                    </p>
<p class="text-body-md text-on-surface-variant/80 mb-8">
                        Whether it's optimizing a real-time kernel for an ESP32 or architecting a distributed simulation engine, I thrive in the complexity of "deep-tech" environments where every microsecond and milliwatt counts.
                    </p>
<div class="grid grid-cols-2 gap-4">
<div class="p-4 border border-white/10 rounded hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-tertiary mb-2">memory</span>
<h4 class="font-bold text-sm mb-1">Embedded Systems</h4>
<p class="text-xs text-on-surface-variant/70">Custom firmware and PCB design.</p>
</div>
<div class="p-4 border border-white/10 rounded hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-secondary mb-2">database</span>
<h4 class="font-bold text-sm mb-1">Distributed Systems</h4>
<p class="text-xs text-on-surface-variant/70">Scalable backend architectures.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Projects Section -->
<section class="py-24 bg-surface-container-lowest" id="projects">
<div class="max-w-7xl mx-auto px-6">
<div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span class="text-mono-label text-primary uppercase tracking-widest text-xs mb-2 block">System Registry</span>
<h2 class="font-h1 text-h1">Featured Projects</h2>
</div>
<div class="h-px flex-1 bg-white/10 hidden md:block mx-10 mb-4"></div>
<p class="text-on-surface-variant max-w-xs">A selection of end-to-end engineered solutions across the stack.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
<!-- Project 1 -->
<div class="group glass-panel rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500">
<div class="aspect-video relative overflow-hidden">
<img alt="Smart Garden" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" data-alt="Macro view of a futuristic indoor hydroponics setup with neon blue lighting and automated mechanical arms" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQXtBekxAGSdM4paZ-ZgX-AHxDOhUUHcj9j2cwaNyK0YnB3Z7S3AtYSByIsgEOK2T_5B-J8NTWCBsZw22NCfB0JZC_0H6F9lM7iUpkSCvvelNfO9Q7kiWA_MkioWZFHjRbW9lioW0aGvBoNiCnzGWtW0PXrFehYw77qqH0J4-d44eO5vb4_6CrFRV2S-otdIvaBuettBLiz3ePIt_5KcXpiTvigQtcFHCAb9AwyT9WVVLkQ9BWjDNpSm1HIvwRQulcxsOQwpC-8Ok5"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
<div class="absolute bottom-6 left-6 right-6">
<div class="flex gap-2 mb-3">
<span class="px-2 py-1 bg-tertiary/10 border border-tertiary/20 text-tertiary rounded text-[10px] font-mono-label uppercase">Hardware</span>
<span class="px-2 py-1 bg-primary/10 border border-primary/20 text-primary rounded text-[10px] font-mono-label uppercase">Computer Vision</span>
</div>
<h3 class="text-h2 font-h2 text-white group-hover:text-primary transition-colors">Smart Garden IoT</h3>
</div>
</div>
<div class="p-8">
<p class="text-on-surface-variant mb-6 leading-relaxed">
                            A fully autonomous hydroponic growth system. Integrates Arduino and ESP32 for sensor telemetry, OpenCV for plant health analysis, and a Flask-based control dashboard for remote automation.
                        </p>
<div class="flex flex-wrap gap-2 mb-8">
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">C++</span>
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">Python</span>
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">TensorFlow</span>
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">React</span>
</div>
<a class="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all" href="#">
                            Explore System <span class="material-symbols-outlined text-sm">terminal</span>
</a>
</div>
</div>
<!-- Project 2 -->
<div class="group glass-panel rounded-xl overflow-hidden hover:border-secondary/50 transition-all duration-500">
<div class="aspect-video relative overflow-hidden">
<img alt="QHSS City" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" data-alt="Abstract visualization of a digital city with glowing data streams and interconnected nodes in a dark void" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RKD8PQnmwapin2v6D8kIrDUViZ7yp5vFTuo7u_tDBXLjsmZRV3-9aEqqozR5yeqdWdRfvYzZ6FMr52pJsDDVn-ieYob8kZ_r_zT3Px_aQoBdG7ifws_UC_JMqdZHJV7TfTSuJRry8EvXib3aDiD76_vWv_BZ11XKn0Xc_KHMwO9-e6xVbgPKCrTm3xhsvktHyA5unOoU0BGdY1m_QLFa_52tFAqRSI0Uu8XWuOAZW45Bh4NnrBTgVCSGkAxf2QAXFKqT0n11lnkb"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
<div class="absolute bottom-6 left-6 right-6">
<div class="flex gap-2 mb-3">
<span class="px-2 py-1 bg-secondary/10 border border-secondary/20 text-secondary rounded text-[10px] font-mono-label uppercase">Backend</span>
<span class="px-2 py-1 bg-primary/10 border border-primary/20 text-primary rounded text-[10px] font-mono-label uppercase">Real-time</span>
</div>
<h3 class="text-h2 font-h2 text-white group-hover:text-secondary transition-colors">QHSS City Engine</h3>
</div>
</div>
<div class="p-8">
<p class="text-on-surface-variant mb-6 leading-relaxed">
                            Multiplayer simulation engine featuring a high-frequency JS simulation loop. Utilizes Firebase for real-time state syncing and includes a custom "Algorithm Mode" API for user-submitted logic.
                        </p>
<div class="flex flex-wrap gap-2 mb-8">
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">TypeScript</span>
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">Firebase</span>
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">Node.js</span>
<span class="text-[10px] font-mono-label border border-white/10 px-2 py-1 rounded text-on-surface-variant">Redis</span>
</div>
<a class="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all" href="#">
                            Inspect Engine <span class="material-symbols-outlined text-sm">hub</span>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- Experience & Skills -->
<section class="py-24 relative overflow-hidden" id="stack">
<div class="max-w-7xl mx-auto px-6">
<div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
<!-- Skills Column -->
<div class="lg:col-span-1">
<h2 class="font-h1 text-h1 mb-12">Tech Stack</h2>
<div class="space-y-8">
<div>
<h4 class="text-mono-label uppercase text-[10px] text-primary tracking-widest mb-4">Hardware &amp; Firmware</h4>
<div class="space-y-4">
<div class="space-y-1">
<div class="flex justify-between text-xs mb-1">
<span>PCB Design (KiCad)</span>
<span class="text-on-surface-variant">90%</span>
</div>
<div class="h-1 bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[90%]"></div>
</div>
</div>
<div class="space-y-1">
<div class="flex justify-between text-xs mb-1">
<span>Embedded C/C++</span>
<span class="text-on-surface-variant">95%</span>
</div>
<div class="h-1 bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[95%]"></div>
</div>
</div>
</div>
</div>
<div>
<h4 class="text-mono-label uppercase text-[10px] text-secondary tracking-widest mb-4">Software Architecture</h4>
<div class="space-y-4">
<div class="space-y-1">
<div class="flex justify-between text-xs mb-1">
<span>Distributed Systems</span>
<span class="text-on-surface-variant">85%</span>
</div>
<div class="h-1 bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[85%]"></div>
</div>
</div>
<div class="space-y-1">
<div class="flex justify-between text-xs mb-1">
<span>AI &amp; Neural Networks</span>
<span class="text-on-surface-variant">80%</span>
</div>
<div class="h-1 bg-white/5 rounded-full overflow-hidden">
<div class="h-full bg-secondary w-[80%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Experience Column -->
<div class="lg:col-span-2">
<h2 class="font-h1 text-h1 mb-12">Timeline</h2>
<div class="space-y-12 relative">
<div class="absolute left-0 top-2 bottom-2 w-px bg-white/10 ml-[11px]"></div>
<!-- Experience Item -->
<div class="relative pl-12">
<div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
<div class="w-2 h-2 rounded-full bg-primary"></div>
</div>
<span class="text-mono-label text-[10px] text-on-surface-variant mb-1 block">2023 — PRESENT</span>
<h3 class="text-h2 font-h2 text-white">Embedded Systems Research Assistant</h3>
<p class="text-on-surface-variant text-body-md mt-2">Developing low-power mesh networking protocols for environmental monitoring sensors.</p>
</div>
<div class="relative pl-12">
<div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-white/20 flex items-center justify-center">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-mono-label text-[10px] text-on-surface-variant mb-1 block">2022 — 2023</span>
<h3 class="text-h2 font-h2 text-white">Full-Stack Intern // TechCorp</h3>
<p class="text-on-surface-variant text-body-md mt-2">Built microservices for high-traffic real-time data pipelines using Go and Kafka.</p>
</div>
<div class="relative pl-12">
<div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-white/20 flex items-center justify-center">
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="text-mono-label text-[10px] text-on-surface-variant mb-1 block">2021 — 2022</span>
<h3 class="text-h2 font-h2 text-white">Undergraduate Robotics Lead</h3>
<p class="text-on-surface-variant text-body-md mt-2">Led a team of 12 in designing an autonomous maze-solving robot using LiDAR sensors.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Contact Section -->
<section class="py-24 bg-surface-container" id="contact">
<div class="max-w-3xl mx-auto px-6 text-center">
<h2 class="font-h1 text-h1 mb-8">I'm always building—let's create something impactful.</h2>
<div class="glass-panel p-8 rounded-xl mb-12">
<form class="space-y-6 text-left">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="space-y-2">
<label class="text-mono-label text-[10px] uppercase text-on-surface-variant tracking-wider">Name</label>
<input class="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 transition-all text-body-md py-2" placeholder="Input user_name" type="text"/>
</div>
<div class="space-y-2">
<label class="text-mono-label text-[10px] uppercase text-on-surface-variant tracking-wider">Email</label>
<input class="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 transition-all text-body-md py-2" placeholder="user@domain.com" type="email"/>
</div>
</div>
<div class="space-y-2">
<label class="text-mono-label text-[10px] uppercase text-on-surface-variant tracking-wider">Message</label>
<textarea class="w-full bg-transparent border-0 border-b border-white/20 focus:border-primary focus:ring-0 transition-all text-body-md py-2 resize-none" placeholder="Enter transmission payload..." rows="4"></textarea>
</div>
<button class="w-full bg-primary text-on-primary font-bold py-4 rounded hover:opacity-90 transition-opacity" type="submit">SEND TRANSMISSION</button>
</form>
</div>
<div class="flex justify-center space-x-6">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">code</span>
</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">groups</span>
</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">mail</span>
</a>
</div>
</div>
</section>
<!-- Footer -->
<footer class="w-full border-t border-white/10 bg-slate-950">
<div class="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] font-light">
<div class="text-slate-200 font-black mb-6 md:mb-0">TECH_ARCHITECT</div>
<div class="text-slate-500 mb-6 md:mb-0">© 2024 SYSTEM_ARCHITECT // PRECISION ENGINEERED</div>
<div class="flex space-x-8">
<a class="text-slate-500 hover:text-cyan-400 transition-colors opacity-80 hover:opacity-100" href="#">GitHub</a>
<a class="text-slate-500 hover:text-cyan-400 transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
<a class="text-slate-500 hover:text-cyan-400 transition-colors opacity-80 hover:opacity-100" href="#">Terminal</a>
</div>
</div>
</footer>
</body></html>