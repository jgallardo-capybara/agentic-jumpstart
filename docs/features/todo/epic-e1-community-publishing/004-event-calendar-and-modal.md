# 004 - Post Editing, Moderation & Pinning

## Objective
Allow members to edit or delete their own posts while giving admins tools to pin announcements and moderate content.

## Scope
- Add API/mutations for `updatePostById` and `softDeletePost` (leveraging feature 001 data layer).
- Implement `PostActionsMenu` (three-dot menu) showing `Edit`, `Delete` for authors, plus `Pin/Unpin`, `Mark as Announcement`, `Remove` for admins.
- Build edit dialog that loads existing post into composer modal (reuse component) and submits updates with optimistic cache sync.
- Enforce authorization checks server-side (Better Auth session) and return 403 for non-owners.
- When admin pins a post, ensure feed query invalidates and pinned list caches reorder accordingly.
- Add audit columns `pinnedAt`, `pinnedBy` to schema (migration) for transparency.

## UI / UX Notes
- Actions menu accessible via keyboard, with destructive actions requiring confirmation dialog (ShadCN AlertDialog).
- Pinned posts show icon + "Pinned" label; announcements display tinted border.
- Show toast confirmations for each action.

## Dependencies
- Requires feed UI (002) and composer (003) for editing experiences.
- Admin flag derived from session/roles.

## Acceptance Criteria
- Authors can edit body/title and see updates reflected immediately.
- Soft-deleted posts disappear from feed without removing DB row.
- Admin pin/unpin updates all clients after refetch and persists across reloads.
- Unauthorized attempts respond with proper error messaging.