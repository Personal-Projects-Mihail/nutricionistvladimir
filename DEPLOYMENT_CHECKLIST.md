# 🚀 Deployment Checklist

Use this checklist before deploying to production.

---

## ✅ Pre-Deployment Checklist

### 1. Content Updates
- [ ] Replace all placeholder text with real content
- [ ] Add real logo to `public/logo.png`
- [ ] Add favicon to `public/favicon.ico`
- [ ] Add profile photos/images to `public/images/`
- [ ] Update nutritionist name if not "Vladimir"
- [ ] Add real university name in About page
- [ ] Add real credentials and qualifications
- [ ] Replace sample testimonials with real ones (with client permission)
- [ ] Update phone number throughout site
- [ ] Verify email address is correct
- [ ] Add real business address if applicable

### 2. Configuration
- [ ] Update `lib/metadata.ts` with correct:
  - Domain name
  - Email
  - Phone
  - Description
  - Author name
- [ ] Update `app/sitemap.ts` with production domain
- [ ] Update `app/robots.ts` with production domain

### 3. Forms
- [ ] Connect `BookingForm` to real backend/email service
- [ ] Test form submission
- [ ] Verify email delivery works
- [ ] Test form validation
- [ ] Check all required fields
- [ ] Test on mobile devices

### 4. SEO
- [ ] Verify all page titles are unique
- [ ] Check meta descriptions (50-160 characters)
- [ ] Test structured data with Google Rich Results Test
- [ ] Verify hreflang tags are correct
- [ ] Check canonical URLs
- [ ] Test sitemap.xml loads correctly

### 5. Images
- [ ] Optimize all images (use WebP if possible)
- [ ] Add descriptive alt text to all images
- [ ] Ensure images are appropriately sized
- [ ] Test images load on all pages
- [ ] Check image quality on retina displays

### 6. Testing
- [ ] Test all pages in Macedonian
- [ ] Test all pages in English
- [ ] Test language switcher
- [ ] Test dark mode toggle
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile (iOS)
- [ ] Test on mobile (Android)
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Test all internal links work
- [ ] Test all external links work

### 7. Performance
- [ ] Run Lighthouse audit (target 95+ all categories)
- [ ] Check Core Web Vitals
- [ ] Test loading speed on 3G connection
- [ ] Verify images are lazy-loaded
- [ ] Check bundle size is reasonable

### 8. Accessibility
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Verify all images have alt text
- [ ] Check color contrast ratios
- [ ] Test focus indicators are visible
- [ ] Verify form labels are correct
- [ ] Test skip-to-content link

### 9. Legal
- [ ] Review Privacy Policy
- [ ] Add Terms of Service if needed
- [ ] Verify GDPR compliance
- [ ] Check consent checkboxes work
- [ ] Ensure disclaimers are visible
- [ ] Review YMYL compliance

### 10. Analytics (Optional)
- [ ] Add Google Analytics if desired
- [ ] Set up Google Search Console
- [ ] Add Facebook Pixel if needed
- [ ] Configure conversion tracking

---

## 🌐 Deployment Steps

### Deploy to Vercel (Recommended)

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   ```bash
   # Create repo on GitHub first
   git remote add origin https://github.com/yourusername/nutritionist-vladimir.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

4. **Configure Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add `nutricionistvladimir.com`
   - Follow DNS configuration instructions
   - Wait for DNS propagation (can take up to 48 hours)

5. **Enable HTTPS**
   - Vercel automatically provisions SSL certificate
   - Verify HTTPS works

---

## 🔒 Environment Variables

If using any API keys or secrets:

1. In Vercel dashboard → Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_FORM_ENDPOINT` (if using form service)
   - `EMAIL_API_KEY` (if sending emails)
   - etc.

---

## 📊 Post-Deployment Checklist

### Immediate (Day 1)
- [ ] Verify site loads at production domain
- [ ] Test HTTPS works
- [ ] Check all pages load correctly
- [ ] Test forms submit successfully
- [ ] Verify emails are received
- [ ] Test language switcher
- [ ] Test on mobile devices

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check for any 404 errors
- [ ] Monitor form submissions
- [ ] Check analytics (if configured)

### Month 1
- [ ] Review Google Search Console insights
- [ ] Check page indexing status
- [ ] Monitor Core Web Vitals
- [ ] Review any crawl errors
- [ ] Analyze user behavior (if analytics enabled)

---

## 🐛 Troubleshooting

### Site Not Loading
- Check DNS configuration
- Verify domain is connected in Vercel
- Check build logs for errors

### Forms Not Working
- Verify API endpoint is correct
- Check environment variables
- Test form validation
- Check browser console for errors

### SEO Issues
- Verify sitemap is accessible
- Check robots.txt is correct
- Test structured data with Google tool
- Ensure canonical URLs are set

### Performance Issues
- Check Lighthouse report
- Optimize images
- Review bundle size
- Check for console errors

---

## 📞 Getting Help

### Next.js Issues
- Documentation: https://nextjs.org/docs
- Discord: https://nextjs.org/discord

### Vercel Issues
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

### Domain Issues
- Contact your domain registrar
- Check DNS propagation: https://dnschecker.org

---

## ✅ Final Pre-Launch Checklist

Before announcing your website:

- [ ] All pages tested and working
- [ ] Forms submit successfully
- [ ] Content is accurate and complete
- [ ] Images are high quality
- [ ] Contact information is correct
- [ ] Legal pages are in place
- [ ] SEO is optimized
- [ ] Analytics configured (optional)
- [ ] Mobile experience tested
- [ ] Site is fast and responsive
- [ ] No console errors
- [ ] Dark mode works properly

---

**When all boxes are checked, you're ready to launch! 🎉**

Good luck with your nutritionist website!
