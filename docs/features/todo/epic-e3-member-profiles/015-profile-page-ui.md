# 015 - Member Profile Page UI

## Objective
Render `/members/:username` pages that showcase profile info, skills, contact buttons, and activity highlights.

## Scope
- TanStack route with loader fetching profile via feature 014 helper and returning 404 when missing.
- Layout sections:
  - Cover area with gradient + avatar overlapping card, showing name, headline, timezone, availability badge.
  - Action bar with buttons: `Message`, `Copy Email`, `Follow` placeholder.
  - Tabs: `Overview`, `Projects`, `Activity`. Overview shows bio, skills chips, contact cards (respect visibility). Projects tab surfaces "What I'm building" posts (feature 016). Activity lists recent posts/comments (reuse queries).
- Include stats row (posts count, lessons completed, join date) fed by aggregated data.
- Responsive design: stack sections on mobile, keep tabs accessible.

## UX Notes
- Show skeleton placeholders while loader resolves.
- Display locked-state component if profile is private.
- Provide fallback avatar/cover when missing.

## Dependencies
- Requires profile schema (014) and upcoming member updates feed (016) for Projects tab.

## Acceptance Criteria
- Visiting `/members/:username` renders accurate profile and respects privacy flags.
- CTA buttons trigger relevant actions (message drawer placeholder, copy email success toast).
- Tabs switch content without additional network requests (data preloaded).