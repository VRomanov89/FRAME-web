# FRAME Website

A modern, clean, and minimalistic website for the FRAME newsletter project, inspired by the elegant design of Consut. Built with Next.js, React, and Tailwind CSS.

## About FRAME

FRAME (Foundation for Reliability, Automation, Manufacturing & Excellence) is a weekly publication and professional community exploring the challenges and opportunities in modern manufacturing. We offer in-depth operational insights, strategic thinking, and real-world stories for engineers, plant managers, and manufacturing leaders.

## Features

- **Modern Design**: Clean, minimalistic design with elegant typography and high contrast sections
- **Responsive**: Fully responsive across desktop and mobile devices
- **Newsletter Integration**: Beehiiv embed for newsletter subscription
- **Content Management**: Structured pages for newsletter issues, team information, and legal pages
- **Performance**: Optimized for fast loading and smooth user experience
- **SEO Ready**: Proper metadata and structured content for search engines

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Newsletter**: Beehiiv integration
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frame-website
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

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
frame-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── newsletter/        # Newsletter page
│   ├── team/              # Team page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── NewsletterEmbed.tsx # Beehiiv newsletter embed
│   └── LatestIssue.tsx    # Latest newsletter issue display
├── public/                # Static assets
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Configuration

### Beehiiv Integration

To integrate with your Beehiiv newsletter:

1. Update the `publicationId` in `components/NewsletterEmbed.tsx`
2. Replace the placeholder publication ID with your actual Beehiiv publication ID
3. Customize the embed theme and styling as needed

### Customization

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Modify font settings in `tailwind.config.js` and `app/globals.css`
- **Content**: Update text content in the respective page components
- **Styling**: Customize component styles using Tailwind CSS classes

## Pages

### Homepage (`/`)
- Hero section with FRAME branding
- Introduction and mission statement
- Feature highlights
- Long-form project description
- Latest newsletter issue
- Newsletter subscription CTA

### About (`/about`)
- Detailed mission and vision
- Key topics covered
- Approach and methodology
- Call-to-action for subscription

### Newsletter (`/newsletter`)
- Latest featured issue
- Archive of all issues
- Newsletter subscription form
- Issue previews with excerpts

### Team (`/team`)
- Founder profile (Vladimir Romanov)
- Professional background and expertise
- Contact information and social links

### Legal Pages
- **Privacy Policy** (`/privacy`): Data collection and usage policies
- **Terms of Service** (`/terms`): Website usage terms and conditions

## Design System

### Colors
- **Primary Blue**: `#0066FF` (frame-blue)
- **Gray Scale**: 50-900 range for text and backgrounds
- **White/Black**: For high contrast sections

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-900)
- **Body Text**: Regular weight (400)
- **Large Text**: 18px+ for readability

### Spacing
- **Section Padding**: 80px (desktop) / 40px (mobile)
- **Container Max Width**: 1280px
- **Grid Gaps**: 8px, 16px, 24px, 32px

### Components
- **Buttons**: Primary (blue) and Secondary (outline) styles
- **Cards**: Rounded corners with subtle shadows
- **Navigation**: Sticky header with mobile menu
- **Forms**: Clean, accessible input styles

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Configure environment variables if needed

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy from Git repository

### Static Export
```bash
npm run build
npm run export
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to FRAME. All rights reserved.

## Contact

- **Email**: hello@frame.news
- **Website**: [frame.news](https://frame.news)
- **LinkedIn**: [Vladimir Romanov](https://linkedin.com/in/vladromanov/)
- **Twitter**: [@VladRomanovEng](https://twitter.com/VladRomanovEng)

## Roadmap

- [ ] RSS feed integration for newsletter issues
- [ ] Search functionality
- [ ] User authentication and profiles
- [ ] Community discussion features
- [ ] Analytics and performance monitoring
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) features 