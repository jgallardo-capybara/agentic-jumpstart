# 022 - Account Settings & Profile Editing

## Objective
Allow members to manage their profile details, skills, privacy preferences, and account security from a dedicated settings area.

## Scope
- Route group `/settings` with tabs: `Profile`, `Skills & Interests`, `Contact Preferences`, `Security`.
- Profile tab: form for display name, username (uses feature 014 validation), bio, headline, timezone, avatar upload (R2 with cropper), cover image, pronouns.
- Skills tab: multi-select combo box for tagging skills + experience level chips stored in `skills jsonb`.
- Contact tab: toggles for `showEmail`, `showSocials`, `allowMessages`, plus inputs for website, socials, phone.
- Security tab: change password stub (Better Auth integration), "Sign out of all devices" button, view last login info.
- Include "What I'm building" composer (feature 016) inline for convenience.
- All sections use React Hook Form + TanStack mutations with optimistic UI, success toasts, and disabled state while saving.

## Dependencies
- Requires profile schema (014) and updates model (016) to persist data.

## Acceptance Criteria
- Users can update any field; changes reflect on profile page immediately after refresh.
- Avatar/cover uploads show preview before save and clean up failed uploads.
- Privacy toggles immediately hide/show contact info on profile when toggled.
