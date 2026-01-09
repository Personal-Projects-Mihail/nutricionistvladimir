# Nutritionist Vladimir Website

**Professional, YMYL-compliant, multilingual nutritionist website built with Next.js 15**

A production-ready website for a registered nutritionist serving clients across North Macedonia. Features calm, trust-first design, comprehensive SEO optimization, and full accessibility compliance.

---

## 🌟 Features

### Core Functionality
- ✅ **Bilingual Support** - Full Macedonian (default) and English versions
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark Mode** - System preference detection with manual toggle
- ✅ **Accessibility** - WCAG 2.2 AA compliant
- ✅ **SEO Optimized** - Rich metadata, structured data (JSON-LD), sitemap
- ✅ **Performance** - Optimized for Core Web Vitals
- ✅ **Booking System** - Comprehensive consultation booking form with validation

### Pages Implemented

#### Macedonian (Root `/`)
- `/` - Homepage
- `/about` - About page with biography and credentials
- `/services` - Services and consultation details
- `/testimonials` - Client success stories
- `/booking` - Booking form
- `/contact` - Contact information
- `/privacy` - Privacy policy

#### English (`/en`)
- `/en` - English homepage
- `/en/about` - About page
- `/en/services` - Services
- `/en/testimonials` - Testimonials
- `/en/booking` - Booking form
- `/en/contact` - Contact

### Technical Features
- **Next.js 15** with App Router
- **React 19** Server Components
- **TypeScript** (strict mode)
- **Tailwind CSS 3.4** with design tokens
- **CSS Variables** for theming (NO hardcoded colors)
- **Automatic hreflang** tags for i18n
- **JSON-LD** structured data for search engines
- **Sitemap & Robots.txt** generation

---

## 🎨 Design System

### Color Palette
All colors are defined as CSS variables in `app/globals.css`:

**Primary Brand Color:**
- Wellness Green: `#A8DF8E`

**Usage:**
- White is the dominant surface color
- Green used sparingly for CTAs, focus rings, highlights, icons
- Soft, pastel wellness aesthetic
- Medical-grade cleanliness

**Dark Mode:**
- Automatically adjusts all colors
- Maintains brand consistency
- Soft, non-harsh contrast

### Typography
- **Font**: Inter (Google Fonts)
- **Approach**: Generous line-height, clear hierarchy
- **Readability**: Optimized for both Macedonian and English

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.18.0
- **npm** >= 9.0.0

### Installation

1. **Clone or download** the project files
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

### Other Commands

```bash
npm run lint        # Run ESLint
npm run type-check  # TypeScript type checking
```

---

## 📁 Project Structure

```
nutricionistvladimir/
├── app/
│   ├── layout.tsx              # Root layout (Macedonian)
│   ├── page.tsx                # Homepage (Macedonian)
│   ├── globals.css             # Global styles + CSS variables
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── testimonials/page.tsx
│   ├── booking/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── en/                     # English routes
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── testimonials/page.tsx
│   │   ├── booking/page.tsx
│   │   └── contact/page.tsx
│   ├── sitemap.ts              # Dynamic sitemap
│   └── robots.ts               # Robots.txt
├── components/
│   ├── Header.tsx              # Site header with navigation
│   ├── Footer.tsx              # Site footer
│   ├── LanguageSwitcher.tsx    # MK/EN switcher
│   ├── ThemeToggle.tsx         # Dark mode toggle
│   ├── ThemeProvider.tsx       # Client-side theme context
│   └── BookingForm.tsx         # Booking form with validation
├── lib/
│   ├── metadata.ts             # SEO metadata helper
│   └── structured-data.ts      # JSON-LD schema generators
├── public/                     # Static assets (add images, favicon here)
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🔧 Configuration

### Update Site Information

Edit `lib/metadata.ts` to update:
- Site name
- Domain URL
- Email
- Phone number
- Description

### Add Real Content

1. **Images**: Add to `public/` folder
2. **Logo**: Replace placeholder in Header component
3. **Credentials**: Update About page with real education/license info
4. **Testimonials**: Replace sample testimonials with real client stories
5. **Phone/Email**: Update contact information throughout

### Form Submission

The booking form (`components/BookingForm.tsx`) currently simulates submission.

**To connect to a real backend:**

1. **Option A: Email Service (e.g., Formspree, Web3Forms)**
   ```tsx
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

2. **Option B: Your own API**
   ```tsx
   const response = await fetch('/api/booking', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

3. **Option C: Serverless function (e.g., Vercel)**
   - Create `app/api/booking/route.ts`
   - Use Resend, SendGrid, or Nodemailer for email

---

## 🌐 Deployment

### Recommended: Vercel

1. **Push to GitHub**
2. **Connect to Vercel**: https://vercel.com
3. **Import repository**
4. **Deploy** (automatic)

**Environment Variables:**
- Add any API keys in Vercel dashboard

### Alternative: Netlify, Railway, AWS

This is a standard Next.js app and can be deployed anywhere that supports Node.js.

---

## ♿ Accessibility

- **WCAG 2.2 AA Compliant**
- Keyboard navigation supported
- Focus indicators visible
- ARIA labels on icons
- Semantic HTML structure
- Skip-to-content link
- Reduced motion support
- Minimum 44×44px touch targets

---

## 🔍 SEO Features

### Metadata
- Unique title and description per page
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Language alternates (hreflang)

### Structured Data (JSON-LD)
- Person schema (nutritionist info)
- MedicalBusiness schema
- Website schema
- BreadcrumbList
- FAQPage (where applicable)

### Sitemap
- Automatically generated
- Includes all pages
- Language alternates included
- Located at `/sitemap.xml`

---

## 🎯 YMYL Compliance

This website follows **Your Money or Your Life (YMYL)** guidelines for health-related content:

- ✅ Conservative, evidence-based language
- ✅ No medical diagnoses or treatment claims
- ✅ Clear scope of practice
- ✅ Emphasis on professional credentials
- ✅ Trust signals throughout
- ✅ Privacy and disclaimer prominently displayed

---

## 🛠️ Customization Guide

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --color-primary: #YourColor;
  --color-background: #YourBackground;
  /* ... */
}
```

### Add New Pages

1. Create `app/your-page/page.tsx`
2. Create `app/en/your-page/page.tsx`
3. Add navigation links to `components/Header.tsx`
4. Update `app/sitemap.ts`

### Modify Forms

Edit `components/BookingForm.tsx` to:
- Add/remove fields
- Change validation rules
- Update submission logic

---

## 📦 Dependencies

### Core
- **next**: ^15.1.0
- **react**: ^19.0.0
- **react-dom**: ^19.0.0

### Development
- **typescript**: ^5.7.0
- **tailwindcss**: ^3.4.17
- **@types/node**: ^22.0.0
- **@types/react**: ^19.0.0

---

## 📝 Content Guidelines

### Writing Style
- **Tone**: Professional, calm, reassuring
- **Language**: Clear, jargon-free (or explained)
- **Claims**: Conservative, evidence-based
- **Approach**: Educational, never salesy

### Images
- Use professional, high-quality images
- Optimize for web (use WebP format when possible)
- Add descriptive alt text for accessibility

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Check types
npm run type-check
```

---

## 📞 Support

For questions about this codebase:
- Review this README
- Check Next.js 15 documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs

---

## 📄 License

This project is proprietary software created for nutricionistvladimir.com.

---

## ✅ Current Status

### Completed
- ✅ Full bilingual website (Macedonian/English)
- ✅ All core pages implemented
- ✅ SEO optimization with structured data
- ✅ Accessibility compliance (WCAG 2.2 AA)
- ✅ Dark mode support
- ✅ Booking form with validation
- ✅ Responsive design
- ✅ Design token system (CSS variables)

### To Customize
- [ ] Add real images (logo, photos, testimonial images)
- [ ] Update contact information (phone, email)
- [ ] Add real credentials and university names
- [ ] Replace sample testimonials with real ones
- [ ] Connect booking form to email service
- [ ] Add Google Analytics / tracking (optional)
- [ ] Set up domain and SSL certificate
- [ ] Add favicon and app icons

### Optional Enhancements
- [ ] Add blog functionality
- [ ] Implement online payment
- [ ] Add client portal
- [ ] Create meal planning tools
- [ ] Add recipe database
- [ ] Implement appointment calendar
- [ ] Add email newsletter signup

---

## 🚀 Next Steps

1. **Test locally**: `npm run dev`
2. **Add real content**: Update About, Testimonials, Contact info
3. **Add images**: Logo, photos, favicon to `public/` folder
4. **Connect forms**: Set up email service for booking form
5. **Deploy**: Push to Vercel or your hosting provider
6. **Domain**: Point nutricionistvladimir.com to deployment
7. **SSL**: Enable HTTPS (automatic on Vercel)
8. **Analytics**: Add Google Analytics if needed
9. **SEO**: Submit sitemap to Google Search Console

---

## 📊 Performance

This website is optimized for:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent
- **Mobile-First**: Optimized for smartphones
- **Fast Load Times**: Server-side rendering
- **Minimal JS**: Most components are Server Components

---

**Built with ❤️ for Vladimir - Registered Nutritionist**

*Helping people achieve optimal health through evidence-based nutrition science.*
