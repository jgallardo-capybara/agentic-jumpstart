# 008 - Event Schema & Query Layer

## Objective
Create the persistence layer for events so the calendar UI can consume consistent data.

## Scope
- Add `community_events` table with columns: `id UUID pk`, `title`, `description`, `startAt`, `endAt`, `timezone`, `locationType enum('zoom','youtube','in-person','custom')`, `linkUrl`, `ctaLabel`, `coverImageUrl`, `createdBy`, `updatedAt`, `isCancelled boolean default false`.
- Optional table `event_reminders` for future notifications (store `eventId`, `minutesBefore`).
- Define Drizzle schema + migration and ensure timezone aware columns.
- Implement data-access functions `insertEvent`, `updateEvent`, `listUpcomingEvents({ start, end })`, `getEventById`.
- Expose TanStack queries/mutations under `src/queries/events.ts` with input validators.

## Engineering Notes
- Add composite index on `(startAt, endAt)` for calendar range lookups.
- Ensure `startAt < endAt` via check constraint or validation.
- Populate seed data for local dev (e.g., two upcoming sessions).

## Dependencies
- None beyond existing auth + DB connection.
- Calendar UI (009) relies on these queries.

## Acceptance Criteria
- Migration runs cleanly and tables appear in Drizzle studio.
- `listUpcomingEvents` accepts optional range filter and returns deterministic order.
- Mutations enforce permission guard (admin only) via server handler stubs.