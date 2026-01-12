# 021 - Notification Center UI & Preferences

## Objective
Expose notifications in the UI via header bell dropdown, unread counts, and a settings surface for managing preferences.

## Scope
- Add bell icon to global header showing badge with unread count sourced from TanStack query hitting `/api/notifications/unread` (feature 020).
- Clicking bell opens popover listing recent notifications (virtualized list) with icon, title, preview, relative time, and CTA button.
- Provide actions: mark single notification as read, "Mark all as read", "View all" linking to `/notifications` archive page.
- Implement `/settings/notifications` section where users toggle per-type preferences (messages, replies, lessons, events) with description + channel badges.
- Show real-time toast when new notification arrives while dropdown closed.
- Ensure keyboard accessibility and focus trapping within popover.

## Dependencies
- Requires notification schema + services (020) and messaging/comments events producing data.

## Acceptance Criteria
- Bell icon count updates in real time when new notifications are generated.
- Selecting an item navigates to linked page and marks entry as read both in UI and DB.
- Preference toggles persist and immediately affect subsequent notifications.
