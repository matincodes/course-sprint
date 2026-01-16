# ThynkCity Cohort Landing Page System

## Overview

A reusable, high-conversion landing page template for cohort-based courses. Built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Reusable Configuration System**: Easily create new cohort pages by adding course data
- **Database Integration**: Applications stored in Supabase
- **Responsive Design**: Mobile-first with sticky CTA on mobile devices
- **Premium Dark Theme**: Using ThynkCity's brand colors
- **Expandable Curriculum**: Interactive accordion for course content
- **Application Form**: Full validation with Supabase integration
- **Success Page**: Professional confirmation page with next steps

## Brand Colors

- **Primary Background**: `#0e1525` (Deep Navy)
- **Secondary Background**: `#000000` (Pure Black)
- **Primary Accent**: `#aa772d` (ThynkCity Bronze/Gold)
- **Text Color**: `#F8FAFC` (Off-White)
- **Card Surface**: `#1A2332` (Lighter Navy)
- **Success/Code**: `#10B981` (Emerald Green)

## Creating a New Cohort Page

### Step 1: Add Course Configuration

Edit `src/config/courses.ts` and add your new course:

```typescript
'data-analytics-sprint': {
  slug: 'data-analytics-sprint',
  title: 'Data Analytics Bootcamp',
  subtitle: '10 Weeks. Real Data. Job Ready.',
  price: 'N40,000',
  monthlyPrice: 'N13,500',
  startDate: 'March 1, 2026',
  duration: '10 Weeks',
  maxStudents: 25,
  whyThisCourse: [
    {
      title: 'Real-World Projects',
      description: 'Work with actual datasets from Nigerian companies',
      icon: 'briefcase',
    },
    // Add 2 more features...
  ],
  curriculum: [
    {
      week: 1,
      title: 'Data Fundamentals',
      topics: [
        'Excel & Google Sheets Mastery',
        'Data Cleaning Techniques',
        'Basic Statistics',
      ],
    },
    // Add weeks 2-10...
  ],
  instructor: {
    name: 'Instructor Name',
    title: 'Lead Data Analyst',
    image: 'https://images.pexels.com/...',
    bio: 'Industry veteran with...',
  },
  outcomes: [
    'Master Excel, SQL, and Python for data analysis',
    'Build interactive dashboards',
    // Add more outcomes...
  ],
  salaryRange: {
    min: 'N200k',
    max: 'N350k',
  },
}
```

### Step 2: Access Your New Page

Your page will automatically be available at:
- `http://localhost:5173/courses/data-analytics-sprint`
- Production: `https://thynkcity.com/courses/data-analytics-sprint`

### Step 3: Test Application Flow

1. Click "Apply Now" button
2. Fill out the application form
3. Submit and verify redirect to `/application-success`
4. Check Supabase to confirm application was stored

## Routes

- `/` - Default landing page (Backend Sprint)
- `/courses/backend-sprint` - Backend Developer cohort
- `/courses/[your-course-slug]` - Any course you configure
- `/application-success` - Post-application confirmation

## Database Schema

Applications are stored in the `cohort_applications` table:

```sql
- id (uuid, primary key)
- full_name (text)
- email (text)
- whatsapp_number (text)
- experience_level (text: Beginner, Intermediate, Pro)
- why_join (text)
- course_slug (text)
- created_at (timestamptz)
- status (text: pending, accepted, rejected)
```

## Available Icons

The system uses Lucide React. Available icon names for `whyThisCourse` features:

- `briefcase` - Professional/Work
- `wallet` - Finance/Payment
- `trophy` - Achievement/Reward
- Add more by importing from `lucide-react` and updating `iconMap` in `WhyThisCourse.tsx`

## Customization Guide

### Changing Colors

Edit components to replace color classes:
- `#0e1525` → `bg-[#0e1525]`
- `#aa772d` → `bg-[#aa772d]`, `text-[#aa772d]`, `border-[#aa772d]`

### Modifying Form Fields

Edit `src/components/ApplicationForm.tsx`:
1. Add new field to `formData` state
2. Add input element in the form
3. Update database migration if adding persistent fields

### Changing Fonts

Current setup:
- **Headings**: Fira Code (monospace)
- **Body**: Inter (sans-serif)

To change:
1. Update Google Fonts link in `index.html`
2. Update `tailwind.config.js` font families
3. Apply new font classes in components

## Component Structure

```
src/
├── components/
│   ├── Hero.tsx                    # Above-the-fold hero section
│   ├── WhyThisCourse.tsx           # 3-column feature grid
│   ├── CurriculumAccordion.tsx     # Expandable week-by-week curriculum
│   ├── InstructorOutcomes.tsx      # Instructor info + outcomes checklist
│   ├── PricingSection.tsx          # Monthly vs One-time pricing
│   ├── ApplicationForm.tsx         # Modal form with Supabase integration
│   └── StickyMobileCTA.tsx         # Fixed bottom CTA on mobile
├── pages/
│   ├── CourseLanding.tsx           # Main landing page orchestrator
│   └── ApplicationSuccess.tsx      # Post-submission confirmation
├── config/
│   └── courses.ts                  # Course data configuration
└── lib/
    └── supabase.ts                 # Supabase client singleton
```

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Viewing Applications

Applications can be viewed in your Supabase dashboard:

1. Go to your Supabase project
2. Navigate to Table Editor
3. Select `cohort_applications` table
4. Filter by `course_slug` to see applications for specific courses

## Next Steps

1. **Payment Integration**: Add Paystack integration for post-acceptance payment
2. **Admin Dashboard**: Build interface to manage applications
3. **Email Notifications**: Set up automated emails for acceptance/rejection
4. **Analytics**: Track conversion rates and user behavior
5. **A/B Testing**: Test different CTAs and pricing displays

## Support

For questions or issues, contact the ThynkCity dev team.
