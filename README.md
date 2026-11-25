# 📚 Annamalai University — FEAT Library Digital Portal & Virtual Tour

An authentic, fully responsive web portal, photographic archive, and interactive video walkthrough ecosystem designed for the **Faculty of Engineering & Technology (FEAT) Library** at **Annamalai University**, Tamil Nadu, India.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![FontAwesome](https://img.shields.io/badge/Font_Awesome_6-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive_Design-Mobile_Ready-22c55e?style=for-the-badge)

---

## 🏛️ Project Overview

The **FEAT Library Portal** serves as the central digital front-door for engineering students, faculty, and research scholars of Annamalai University. Built with modern web standards and zero external runtime framework dependencies, this portal provides instant access to previous semester question papers, high-definition facility photographic archives, dedicated video walkthroughs, staff directory profiles, and operational hours.

---

## 🌟 Key Features

### 1. 🌐 Unified Responsive Navigation & Theme Engine
- **Cross-Page Consistency**: Unified navigation header across `index.html`, `gallery.html`, and `virtual-tour.html`.
- **Mobile Off-Canvas Drawer**: Smooth slide-in navigation drawer for mobile and tablet devices with backdrop blur, scroll locking, and accessible keyboard (<kbd>Esc</kbd>) dismiss.
- **Dark / Light Theme Engine**: System-aware theme toggle that instantly switches between obsidian dark and clean academic light themes, persisted across sessions via `localStorage`.

### 2. 📖 Previous Semester Question Paper (QP) Archive
- Quick access portal allowing engineering scholars across departments (CSE, IT, ECE, EEE, Mechanical, Civil, Chemical, etc.) to access question paper repositories.
- Categorized by department, degree level (B.E., M.E., Ph.D.), and semester.

### 3. 👥 Tiered Staff Directory & Interactive Profiles
- **Executive Leadership Distinction**: **Dr. J. Sasikala** (*Professor & Library In-Charge*) highlighted in a centered top position with an elevated leadership badge and gold-accented styling.
- **Architectural Separation**: Gradient divider line and centered badge (`Library Staff & Technical Team`) separating administration leadership from operational teams.
- **3 × 2 Structured Grid**: 6 dedicated library technical assistants and section officers arranged in a balanced grid.
- **Interactive Profile Modals**: Clicking any staff card triggers a lightbox popup showing full-resolution photography, official designations, departmental division, office locations, and direct contact options.

### 4. 📸 High-Definition Photographic Archive (`gallery.html`)
- **19 Authentic High-Resolution Photographs** capturing scholars' reading halls, high-speed digital research computing labs, book stacks, circulation hubs, and entrance turnstiles.
- **Category Filter Pills**: Instant real-time filtering without page reloads.
- **Full-Screen 4K Lightbox**: Includes smooth previous/next navigation, touch swipe support for mobile devices, keyboard shortcuts (<kbd>←</kbd> / <kbd>→</kbd> / <kbd>Esc</kbd>), photo count indicator, and one-click HD image download.

### 5. 🎥 Dedicated Virtual Video Tour System (`virtual-tour.html`)
- **5 Comprehensive HD Walkthroughs**:
  1. *Full Library Virtual Tour* — Complete walkthrough of all halls and wings.
  2. *Main Entrance & Circulation Hub* — Smart gate check-in, barcode registry, and book circulation desks.
  3. *E-Journals & Internet Computing Lab* — High-speed LAN research stations and digital terminals.
  4. *Journals, Back Volumes & Book Stacks* — 100,000+ volume engineering stacks and archives.
  5. *Donated Books & RO Water Facility* — Student book donation bay and student amenities.
- **Synchronized Video Controls**: Global playback speed switcher (0.5x, 1x, 1.25x, 1.5x, 2x), intelligent auto-pause (pauses other videos when one begins playing), loop toggling, direct anchor link sharing, and theater focus modal.

### 6. 📱 Mobile Touch & Viewport Optimization
- **Zero Horizontal Overflow**: Carefully audited padding, typography clamp functions, and fluid containers ensuring zero horizontal scrolling down to 320px screens.
- **Portrait Ratio Preservation**: Staff and creator photo containers use proportional `aspect-ratio: 3 / 3.8` with `object-fit: cover` and `object-position: center top` to prevent facial cropping on mobile screens.

---

## 🗂️ Project Directory Structure

```text
libraryfeat/
├── index.html                   # Main landing portal (Hero, QP Access, Staffs, Overview, Contact)
├── gallery.html                 # 19-Photo High-Definition interactive gallery archive & lightbox
├── virtual-tour.html            # 5-Video Interactive virtual walkthrough system & theater mode
├── README.md                    # Project documentation and developer reference
├── .gitignore                   # Git ignore patterns
│
├── images/                      # Fallback video posters and auxiliary images
│   ├── poster-full-library.jpg
│   ├── poster-enter-hall.jpg
│   ├── poster-internal-lab.jpg
│   ├── poster-journals-volumes.jpg
│   └── poster-donote-water.jpg
│
├── new image/                   # Production assets & high-resolution media
│   ├── logo.png                 # Annamalai University official crest
│   ├── shafeeq.png              # Developer photo
│   ├── mukesh.jpg               # Developer photo
│   ├── dharunkumar.jpeg         # Developer photo
│   ├── aswinraj.png             # Developer photo
│   │
│   ├── staff image/             # Staff high-resolution portrait photographs
│   │   ├── Dr. J. Sasikala.jpeg
│   │   ├── Mr. K. Ganeshan.png
│   │   ├── Mrs. M. Revathi.png
│   │   ├── Dr. S. Krishnakumar.png
│   │   ├── Mrs. C. Thilagavathi.png
│   │   ├── Mrs. S. Bhuvaneswari.png
│   │   └── Mr. K. Shyamsundar.png
│   │
│   └── web/
│       ├── full/                # 19 High-Res photographs for gallery lightbox
│       └── thumbs/              # Compressed thumbnails for fast load times
│
└── video/                       # Authentic MP4 video walkthrough documentation
    ├── full library.mp4
    ├── enter hall video.mp4
    ├── internal lab.mp4
    ├── journals & back volumes.mp4
    ├── donote book and water plant.mp4
    └── library-tour.mp4
```

---

## 🚀 Getting Started & Local Development

This project requires **no build step, package manager, or compilation toolchain**. It runs immediately in any modern web browser.

### Option 1: Direct File Opening
Double click `index.html` (or right-click and choose **Open with Google Chrome / Microsoft Edge / Firefox**).

### Option 2: Local HTTP Server (Recommended)
For full HTML5 video streaming and seamless cross-page hash routing, run a lightweight local HTTP server:

#### Using Python (Built-in)
```bash
# Python 3
python -m http.server 8000
```
Then visit: `http://localhost:8000`

#### Using Node.js (npx serve or http-server)
```bash
npx serve .
# or
npx http-server -p 8000
```

#### Using VS Code Live Server
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🎨 Design System & Color Palette

The user interface uses CSS custom properties (`var(--...)`) mapped to dynamic light and dark mode palettes:

| Token | Dark Theme (Default) | Light Theme | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-main` | `#080c16` | `#f8fafc` | Base page background |
| `--bg-nav` | `rgba(11, 15, 25, 0.85)` | `rgba(255, 255, 255, 0.88)` | Sticky frosted glass header |
| `--primary` | `#38bdf8` (Cyan Blue) | `#0284c7` (Deep Azure) | Brand accents, buttons, active states |
| `--accent-gold` | `#f59e0b` (Amber Gold) | `#d97706` (Warm Ochre) | Leadership badges, highlights |
| `--accent-green` | `#10b981` (Emerald) | `#059669` (Forest Green) | Success indicators, verified badges |
| `--card-bg` | `rgba(15, 23, 42, 0.75)` | `#ffffff` | Content and facility cards |
| `--card-border` | `rgba(255, 255, 255, 0.08)` | `rgba(0, 0, 0, 0.08)` | Card borders and dividers |
| `--text-main` | `#f1f5f9` | `#0f172a` | Primary headings and text |
| `--text-muted` | `#94a3b8` | `#64748b` | Subtitles, descriptions, captions |

---

## 💻 Tech Stack & Web Standards

- **Core**: Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Styling**: Modern CSS3 (CSS Grid, Flexbox, CSS Custom Properties, Backdrop Filters, Keyframe Animations)
- **Typography**: 
  - `Space Grotesk` (Headings, Branding & Numbers)
  - `Plus Jakarta Sans` (Body Copy, Metadata & UI Elements)
- **Icons**: [Font Awesome 6 Free CDN](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)
- **Storage**: Browser `localStorage` for theme preference persistence.

---

## 👨‍💻 Development Team & Credits

Developed with dedication for the **Faculty of Engineering & Technology (FEAT) Library**, Annamalai University (Batch 2021 – 2025):

- **Shafeeq Ahamed** — *Lead Frontend Architect & UI/UX Developer*
- **Mukesh** — *Digital Media Asset Curator & Video Production*
- **Dharunkumar** — *Systems Architecture & Database Integration*
- **Aswinraj** — *Asset Acquisition & Photography Documentation*

**Special Acknowledgement**:
- **Dr. J. Sasikala** (*Professor & Library In-Charge*) and the dedicated library administrative & technical staff of Annamalai University for operational leadership, archives, and support.

---

## 📜 License & Copyright

© 2026 **Faculty of Engineering & Technology (FEAT) Library**, Annamalai University.  
All photographic assets, architectural documentation, and video walkthroughs are authentic university media. Distributed for academic and student facilitation purposes.
