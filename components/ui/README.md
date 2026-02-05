# UI Components

Premium UI components for the Nutritionist Vladimir website, following Phase 3 design polish.

## Components

### SkeletonLoader
Loading state component with multiple variants.

**Usage:**
```tsx
import { SkeletonLoader } from '@/components/ui';

// Card skeleton
<SkeletonLoader variant="card" count={3} />

// Text skeleton
<SkeletonLoader variant="text" count={5} />

// Circle skeleton (avatar)
<SkeletonLoader variant="circle" />

// Image skeleton
<SkeletonLoader variant="image" />
```

**Props:**
- `variant`: 'card' | 'text' | 'circle' | 'image' (default: 'card')
- `count`: number (default: 1)
- `className`: string (optional)

---

### EmptyState
Empty state component for when there's no content to display.

**Usage:**
```tsx
import { EmptyState } from '@/components/ui';

<EmptyState 
  icon="inbox"
  title="No testimonials yet"
  description="We're collecting testimonials from our clients. Check back soon!"
  action={{
    label: "Book Consultation",
    href: "/booking"
  }}
/>
```

**Props:**
- `icon`: 'inbox' | 'alert' | 'search' (default: 'inbox')
- `title`: string (required)
- `description`: string (required)
- `action`: { label: string, href?: string, onClick?: () => void } (optional)

---

### ErrorState
Error/warning/success state component with ARIA-live regions.

**Usage:**
```tsx
import { ErrorState } from '@/components/ui';

<ErrorState 
  type="error"
  title="Booking Failed"
  message="We couldn't process your booking. Please try again or contact us directly."
  showIcon={true}
  action={{
    label: "Try Again",
    onClick: () => handleRetry()
  }}
/>
```

**Props:**
- `type`: 'error' | 'warning' | 'success' | 'info' (default: 'error')
- `title`: string (required)
- `message`: string (required)
- `showIcon`: boolean (default: true)
- `action`: { label: string, onClick: () => void } (optional)

---

## Design Principles

### Accessibility
- All components include proper ARIA attributes
- Focus states follow WCAG 2.2 AA guidelines
- Keyboard navigation fully supported
- Screen reader friendly

### Dark Mode
- All components support dark mode
- Colors adjust automatically via CSS variables
- Shadows remain visible in dark mode
- Contrast ratios meet WCAG AA standards

### Animations
- Smooth, purposeful animations using design tokens
- Respects `prefers-reduced-motion`
- Uses `cubic-bezier(0.16, 1, 0.3, 1)` easing
- Follows Phase 3 micro-interaction guidelines

### Typography
- Uses design system tokens
- Consistent spacing and hierarchy
- Responsive font sizes
- Proper semantic HTML

---

## Implementation Examples

### Testimonials Page with Loading State
```tsx
'use client';
import { useState, useEffect } from 'react';
import { SkeletonLoader, EmptyState } from '@/components/ui';

export default function TestimonialsPage() {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials...
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkeletonLoader variant="card" count={4} />
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <EmptyState 
        icon="inbox"
        title="No testimonials yet"
        description="We're collecting feedback from our clients."
        action={{
          label: "Book Consultation",
          href: "/booking"
        }}
      />
    );
  }

  return (
    <div>
      {/* Render testimonials */}
    </div>
  );
}
```

### Booking Form with Error State
```tsx
'use client';
import { useState } from 'react';
import { ErrorState } from '@/components/ui';

export default function BookingForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Submit form...
    } catch (err) {
      setError('Failed to book consultation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <ErrorState 
          type="error"
          title="Booking Failed"
          message={error}
          action={{
            label: "Try Again",
            onClick: () => setError(null)
          }}
        />
      )}
      
      {/* Form fields */}
    </form>
  );
}
```

---

## Design Tokens Used

These components use the following design tokens from `globals.css`:

- **Spacing:** `--space-xs` through `--space-3xl`
- **Radius:** `--radius-sm` through `--radius-2xl`
- **Transitions:** `--transition-fast`, `--transition-base`, `--transition-slow`
- **Easing:** `--easing-smooth`
- **Colors:** All `--color-*` variables
- **Shadows:** `--shadow-soft` through `--shadow-xl`

---

## Testing Checklist

- [ ] Components render correctly in light mode
- [ ] Components render correctly in dark mode
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Screen readers announce content properly
- [ ] Focus states are visible
- [ ] Hover states feel responsive
- [ ] Mobile touch targets are 44x44px minimum
- [ ] Text meets WCAG AA contrast ratios
- [ ] Components are responsive across breakpoints

---

**Phase 3 — Premium UI/UX Polish**  
*Design Philosophy: Simplicity is the architecture of trust.*
