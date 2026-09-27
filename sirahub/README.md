# SiraHub

### Turn Your Skills Into Opportunities.

SiraHub is an Ethiopian student skill-to-opportunity platform built with Next.js and JavaScript. It helps university and college students turn their academic knowledge and technical skills into verifiable practical evidence, build professional portfolios, discover internships and junior jobs, and connect with companies.

> Don't just say you have a skill. Show what you can build.

## Overview

Many students have technical skills but struggle to demonstrate those skills to employers. SiraHub focuses on proof of skill rather than simply listing skills on a CV.

The platform allows students to:

* Build professional skill profiles
* Complete practical skill challenges
* Verify demonstrated skills
* Add projects and evidence to their portfolios
* Discover internships and junior jobs
* Apply for opportunities
* Track applications
* Connect with companies

Companies can use SiraHub to:

* Post internships and junior jobs
* Create practical skill challenges
* Discover students with verified skills
* Search candidates by skills and university
* Match candidates with opportunities

Universities can use the platform to:

* Monitor students seeking opportunities
* Track internships and placements
* Identify career-support needs
* Monitor popular skills and skill gaps
* Connect students with companies

## Core Experience

SiraHub follows a simple career-development journey:

```text
LEARN
   ↓
PRACTICE
   ↓
COMPLETE CHALLENGE
   ↓
VERIFY SKILL
   ↓
BUILD PORTFOLIO
   ↓
MATCH WITH OPPORTUNITIES
   ↓
APPLY
   ↓
GET EXPERIENCE
```

The goal is to make demonstrated skills more visible than simple claims.

For example:

```text
React
  ↓
Completed React Challenge
  ↓
Skill Verification
  ↓
GitHub Project
  ↓
Live Demo
  ↓
Portfolio Evidence
  ↓
Company Skill Match
```

## Target Users

SiraHub is designed for:

1. University and college students in Ethiopia
2. Recent graduates
3. Companies looking for interns and junior talent
4. University career offices

## Main Features

### Student Dashboard

Students can access:

* Dashboard
* Profile
* Skills
* Skill Challenges
* Projects
* Opportunities
* Applications
* Saved Opportunities
* Certificates
* Settings

The dashboard provides an overview of:

* Verified skills
* Completed challenges
* Applications
* Matched opportunities
* Career progress
* Recommended opportunities
* Portfolio strength

### Student Profile

Students can create a professional public portfolio containing:

* Profile information
* University and department
* Skills
* Verified skills
* Projects
* Education
* Certificates
* Languages
* Experience
* Completed challenges

Projects can include:

* Project image
* Description
* Technologies
* GitHub repository
* Live demo

### Skill Verification

SiraHub focuses on proving practical ability.

Students can complete challenges that demonstrate specific skills.

Each challenge can include:

* Difficulty
* Estimated completion time
* Skills tested
* Requirements
* GitHub repository
* Live demo
* Screenshots
* Explanation

Successful challenges can result in verified skills that appear on the student's profile.

### Skill Challenges

Example challenge:

**React Responsive Product Card**

Skills tested:

* React
* CSS
* Responsive Design

Requirements include:

* Responsive design
* Reusable components
* Proper component structure
* Clean CSS
* Functional interaction

### Opportunities

Students can search for:

* Internships
* Junior jobs
* Remote opportunities
* On-site opportunities
* Hybrid opportunities

Opportunities can be filtered by:

* Location
* Skills
* Duration
* Company
* Opportunity type

Each opportunity can display a skill-match percentage between the student's verified skills and the opportunity requirements.

### Application Tracking

Students can track applications through stages such as:

```text
Applied
   ↓
Under Review
   ↓
Shortlisted
   ↓
Interview
   ↓
Decision
```

Application statuses include:

* Submitted
* Under Review
* Shortlisted
* Interview
* Accepted
* Rejected

### Company Dashboard

Companies have a dedicated dashboard for:

* Opportunities
* Applications
* Candidates
* Skill Matches
* Challenges
* Company Profile
* Settings

Companies can discover students based on demonstrated and verified skills.

### Candidate Discovery

Companies can search students by:

* Skill
* University
* Department
* Year
* Location
* Availability
* Verified skills
* Projects

### University Career Office

University career offices can monitor:

* Total students
* Students seeking opportunities
* Active internships
* Applications
* Internship placements
* Students needing career support

The dashboard can also provide information about:

* Student applications
* Internship placements
* Popular skills
* Opportunity demand
* Skill gaps

### Global Search

Users can search across:

* Students
* Opportunities
* Companies
* Projects
* Skills

### Notifications

SiraHub can provide notifications for:

* New matching opportunities
* Challenge results
* Application updates
* Interview invitations
* New company challenges
* Skill verification

## Technology Stack

### Frontend

* Next.js
* React
* JavaScript
* JSX
* Tailwind CSS

### Architecture

* Next.js App Router
* Reusable React components
* Responsive layouts
* Server Components where appropriate
* Client Components where interactivity is required
* API-ready architecture
* Authentication-ready architecture
* Database-ready architecture

### Important Requirement

This project uses JavaScript only.

The project does not use:

* TypeScript
* `.ts` files
* `.tsx` files
* TypeScript interfaces
* TypeScript types

Use:

```text
.js
.jsx
.css
```

## Project Structure

```text
sira-hub/
├── app/
│   ├── page.js
│   ├── opportunities/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   ├── challenges/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   ├── dashboard/
│   │   └── page.js
│   ├── profile/
│   │   └── page.js
│   ├── skills/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── applications/
│   │   └── page.js
│   ├── companies/
│   │   └── page.js
│   ├── company/
│   │   └── page.js
│   ├── university/
│   │   └── page.js
│   └── search/
│       └── page.js
│
├── components/
│   └── ui/
│       ├── navbar/
│       ├── sidebar/
│       ├── dashboard/
│       ├── opportunities/
│       ├── challenges/
│       ├── profile/
│       ├── skills/
│       ├── applications/
│       └── companies/
│
├── public/
├── styles/
├── package.json
└── README.md
```

## Reusable Components

The application is designed around reusable components such as:

* Navbar
* Sidebar
* BottomNavigation
* Button
* Input
* Card
* Badge
* Modal
* ProgressBar
* OpportunityCard
* SkillCard
* ChallengeCard
* StudentCard
* ApplicationCard
* NotificationPanel

## Design System

SiraHub is designed to feel like a modern Ethiopian technology startup.

### Colors

* Primary - Professional Green
* Dark - Navy / Charcoal
* Background - White / Very Light Gray
* Accent - Ethiopian-inspired Gold
* Danger - Red
* Success - Green
* Warning - Gold / Orange

### Design Principles

* Modern
* Professional
* Trustworthy
* Youthful
* Welcoming
* Clean
* Minimal
* Mobile-first
* SaaS-inspired
* Accessible

The interface uses rounded cards, rounded buttons, subtle shadows, spacious layouts, strong typography, and clear visual hierarchy.

Gradients and animations are intentionally kept minimal.

## Ethiopian Context

SiraHub is designed specifically with the Ethiopian education and employment environment in mind.

Example universities include:

* Mekelle University
* Addis Ababa University
* Bahir Dar University
* Hawassa University
* Adama Science and Technology University
* University of Gondar
* Jimma University

Example locations include:

* Addis Ababa
* Mekelle
* Bahir Dar
* Hawassa
* Adama
* Dire Dawa
* Gondar
* Jimma

Compensation is represented using Ethiopian Birr (ETB).

Fictional companies and opportunities should be clearly treated as demo data and should not imply real partnerships.

## Responsive Design

SiraHub is designed for desktop, tablet, and mobile devices.

The mobile experience includes:

* Bottom navigation
* Collapsible filters
* Mobile cards
* Touch-friendly buttons
* Responsive dashboards
* Mobile forms
* Mobile profiles
* Mobile opportunity cards

Student mobile navigation includes:

```text
Home
Opportunities
Challenges
Applications
Profile
```

## Brand

**Name:** SiraHub

**Tagline:**

> Turn Your Skills Into Opportunities.

**Primary CTA:**

> Build Your Skill Profile

**Secondary CTA:**

> Explore Opportunities

## Product Differentiator

SiraHub is not simply another job board or CV platform.

Its central differentiator is **proof of skill**.

A traditional CV might say:

```text
I know React.
```

SiraHub allows a student to demonstrate:

```text
React
↓
Completed Challenge
↓
Verification
↓
GitHub Project
↓
Live Demo
↓
Portfolio Evidence
↓
Company Skill Match
```

This gives students a way to show employers what they can actually build.

## Future Vision

SiraHub aims to create a stronger connection between:

```text
Students
     ↕
Universities
     ↕
Companies
```

The platform can help students move from learning to practical experience while giving companies better ways to identify emerging Ethiopian talent.

## Getting Started

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd sira-hub
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser at:

```text
http://localhost:3000
```

## Development Principles

When developing SiraHub:

* Use JavaScript only
* Use `.js` and `.jsx` files
* Follow the Next.js App Router structure
* Build reusable components
* Keep the interface responsive
* Prioritize accessibility
* Use realistic Ethiopian examples
* Keep the UI clean and professional
* Focus on proof of practical skills
* Avoid unnecessary animations and visual complexity
* Do not create TypeScript files

## Final Product Experience

A student should immediately understand:

* What SiraHub is
* Why they need a profile
* How they can prove their skills
* How they can build a portfolio
* How they can find opportunities
* How companies can discover them

Companies should understand:

* How to post opportunities
* How to create skill challenges
* How to discover students
* How verified skills work
* How to evaluate candidates

Universities should understand:

* How to monitor students
* How to connect students with companies
* How to track internships
* How to monitor placements
* Where students need career support

## Core SiraHub Journey

```text
LEARN
  ↓
PRACTICE
  ↓
BUILD
  ↓
VERIFY
  ↓
SHOW
  ↓
MATCH
  ↓
APPLY
  ↓
EXPERIENCE
```

## License

This project is developed as a student/full-stack software development project. Licensing can be added when the project is prepared for public distribution.

---

### SiraHub

**Turn Your Skills Into Opportunities.**

**Don't just say you have a skill. Show what you can build.**

