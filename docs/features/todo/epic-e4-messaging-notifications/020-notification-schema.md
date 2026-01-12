# 020 - Notification Schema & Fan-out Workers

## Objective
Create the backend pipeline for generating and storing notifications from key product events.

## Scope
- Add `notifications` table: `id UUID`, `userId`, `type enum('message','post','reply','lesson','event')`, `title`, `body`, `link`, `payload jsonb`, `readAt`, `createdAt`.
- Optional `notification_preferences` table storing per-user settings (`userId`, `type`, `channel`, `isEnabled`).
- Implement service `createNotification({ type, actorId, targetId, payload })` that inserts rows for all relevant recipients.
- Build fan-out handlers/hooks:
  - On new message (feature 019) notify the other participant if not active.
  - On post reply (feature 007) notify post author.
  - On new classroom module (013) notify all members (batched worker).
  - On upcoming event (008/010) schedule reminder 1 hour prior (stub queue).
- Provide cron/queue worker script (e.g., using `workflows/queue.ts`) to process bulk notifications.

## Dependencies
- Requires upstream features emitting events but can rely on dummy triggers for testing.

## Acceptance Criteria
- Notifications table stores entries for simulated events and can be queried per user.
- Preferences opt-out prevents creation for disabled types.
- Worker script documented with command to run locally.
