# 016 - Member Updates Feed

## Objective
Allow members to publish short "What I'm building" updates that appear on their profile and optionally in a global feed.

## Scope
- Create `member_updates` table: `id UUID`, `authorId`, `title`, `body`, `mediaUrl`, `visibility enum('public','connections')`, `pinned boolean`, `createdAt`, `updatedAt`.
- Add CRUD mutations + queries to create, list (by author), update, delete updates with pagination.
- Provide mini composer component on profile owner view plus list UI rendering cards with timestamp and optional media thumbnail.
- Enable owner to pin one update, showing it at top of Projects tab.
- Optionally expose `/updates` route showing all public updates sorted newest-first (read-only for now).

## Dependencies
- Requires profile schema (014) to reference user metadata and profile page (015) for display surface.

## Acceptance Criteria
- Profile owners can add/edit/delete updates; operations respect optimistic UI.
- Updates persist in DB and appear to visitors based on visibility rules.
- Only one pinned update allowed at a time; toggling updates UI immediately.
