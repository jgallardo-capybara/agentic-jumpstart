# 010 - Event Admin Console & Publishing Flow

## Objective
Give admins the ability to create, edit, duplicate, and cancel events from a dedicated management surface.

## Scope
- Add `/calendar/admin` route gated by admin flag, listing events in table view with filters (upcoming, past, draft).
- Build form (ShadCN Form + RHF) for creating/editing events with fields matching schema (title, description, start/end, timezone, link, cover image upload, category).
- Support draft state by adding `status enum('draft','published','cancelled')` to `community_events` table via migration.
- Provide quick actions: duplicate event, cancel (sets status + `isCancelled`), publish/unpublish toggles.
- Validate times, ensure start < end, and prevent overlapping events with same link/time (warning toast).
- Integrate file upload for optional cover image via existing R2 helpers.

## UX Notes
- Table shows status badges, start time, host, join link icon.
- Use modal or drawer for form; include unsaved-change guard.
- Show success/error toasts and disable buttons while saving.

## Dependencies
- Requires event schema & queries (008) and calendar route (009) to reflect changes.
- Admin detection from Better Auth roles/claims.

## Acceptance Criteria
- Admins can create/edit events and see updates instantly on `/calendar` after refresh.
- Draft events remain hidden from members until published.
- Cancelling an event updates status and surfaces banner on event modal.