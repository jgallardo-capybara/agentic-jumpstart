# 009 - Calendar Page & Event Modal

## Objective
Deliver the `/calendar` page allowing members to browse events in month/week views and open detail modals.

## Scope
- Implement route `src/routes/calendar/index.tsx` with loader that prefetches events for current month via `listUpcomingEvents` (feature 008).
- Build calendar grid using headless `@tanstack/react-calendar` or custom component with ability to toggle month/week.
- Render event chips within day cells, color-coded by `locationType`; limit to 3 chips with "+X more" overflow.
- Clicking an event opens ShadCN Dialog showing title, description, start/end times localized to viewer, timezone badge, CTA button ("Join Zoom", etc.).
- Provide filters for "All Events", "Live Session", "Assignments" (category derived from metadata) and a toggle to show past events.
- Responsive layout: agenda list on mobile, grid on desktop.

## UX Notes
- Display "Add to Calendar" button that generates ICS link (actual generation optional stub) and copy-to-clipboard for join link.
- Modal includes admin avatar + "Hosted by" info.
- Loading skeleton for initial calendar and shimmer for modal.

## Dependencies
- Requires event schema + queries (008).
- Auth gating optional; anonymous viewers redirected to sign-in.

## Acceptance Criteria
- `/calendar` loads with current month, showing events from DB.
- Clicking chip opens modal with correct info and accessible focus trap.
- Filters update event list without full page reload.