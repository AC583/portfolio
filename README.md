# Portfolio Website

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, minimal design inspired by top tech companies
- **Dark Mode**: Default dark theme with optional light mode toggle
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Sections**: Hero, About, Projects, Experience, and Contact sections

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Navigation.tsx
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

- Update personal information in the components
- Modify colors and styling in `tailwind.config.js`
- Add or remove sections as needed
- Replace placeholder project data with your actual projects

## Deployment

The project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

For Vercel deployment:
```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).