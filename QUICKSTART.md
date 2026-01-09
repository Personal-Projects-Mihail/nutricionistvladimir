# 🚀 Quick Start Guide

## Get Up and Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

---

## ✅ You're Ready!

You should now see the Macedonian homepage. Click "EN" in the header to switch to English.

---

## 📝 Next: Customize Your Site

### 1. Update Contact Information
- Open `lib/metadata.ts`
- Change email, phone, and other details

### 2. Add Your Images
- Add logo to `public/logo.png`
- Add favicon to `public/favicon.ico`
- Add photos to `public/images/`

### 3. Update About Page
- Edit `app/about/page.tsx` (Macedonian)
- Edit `app/en/about/page.tsx` (English)
- Add your real credentials, education, experience

### 4. Replace Sample Testimonials
- Edit `app/testimonials/page.tsx` (Macedonian)
- Edit `app/en/testimonials/page.tsx` (English)
- Use real client testimonials (with permission)

### 5. Connect Booking Form
- Open `components/BookingForm.tsx`
- Replace simulated submission with real backend
- Options: Formspree, Web3Forms, or your own API

---

## 🌐 Deploy to Production

### Option A: Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! You'll get a live URL

### Option B: Netlify
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site"
4. Connect to GitHub repo
5. Deploy

---

## 🆘 Need Help?

- **Read full documentation**: See `README.md`
- **Check Next.js docs**: https://nextjs.org/docs
- **Tailwind CSS docs**: https://tailwindcss.com/docs

---

## 🎨 Color System

Colors are defined in `app/globals.css`:
```css
--color-primary: #A8DF8E  /* Wellness green */
--color-background: #FFFFFF  /* White */
```

**Never hardcode colors in components!** Always use CSS variables.

---

## 📱 Test Responsiveness

Open browser dev tools (F12) and test:
- Mobile (375px)
- Tablet (768px)
- Desktop (1920px)

---

## ✨ Features Included

- ✅ Bilingual (Macedonian + English)
- ✅ Dark mode
- ✅ SEO optimized
- ✅ Accessible (WCAG 2.2 AA)
- ✅ Booking form with validation
- ✅ Responsive design
- ✅ JSON-LD structured data

---

**That's it! You're ready to build an amazing nutritionist website.** 🎉
