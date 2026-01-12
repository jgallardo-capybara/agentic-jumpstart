# 023 - Home / Landing Page Refresh

## Objective
Refresh the existing landing page content (copy, imagery, CTAs) to tell the platform story, highlight core capabilities, and reinforce brand identity without changing the underlying layout or component structure.

## Scope
- Update hero section copy (headline, subcopy, CTA labels) to clearly state the value proposition for rebuilding Skool-style communities with TanStack Start.
- Swap hero illustration/media with a new on-brand asset (static image or looping video) while keeping the same component slot dimensions.
- Revise the feature highlight cards to map directly to the four capability pillars: Community Feed, Events & Calendar, Classroom Modules, Member Collaboration.
- Add short testimonials or stat callouts in the existing trust strip component (text-only for now) to convey credibility.
- Ensure footer/about blurbs mention integrations (Better Auth, Stripe, R2) and emphasize the "full-stack campus" narrative.
- No layout/CSS changes; purely content updates using current components, ensuring responsive behavior is unchanged.

## Content Requirements
- Brand voice: confident, supportive, action-oriented ("Ship your campus", "Guide your cohort").
- Messaging hierarchy: (1) Promise, (2) Capabilities overview, (3) Proof (stats/testimonials), (4) CTA.
- CTAs: primary "Enter the Campus" (auth flow) and secondary "Explore the Platform" (community route).
- Provide copy doc in Notion/Markdown and paste final text directly into relevant component props.

## Dependencies
- Existing landing page components must already render (no structural rework required).
- Asset hosting via R2 or static `/public` folder for new hero image.

## Acceptance Criteria
- Hero, feature rows, testimonial strip, and footer copy updated with new messaging while layout remains identical.
- Brand asset renders correctly on retina + mobile without layout shifts.
- CTAs route to existing pages (`/sign-in` or `/community`) with correct text labels.
- Content passes basic proofreading (typos, grammar) and matches approved brand voice.
