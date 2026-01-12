# 007 - Comment UI & Admin Answer Highlight

## Objective
Surface threaded replies beneath each post with inline composer, editing controls, and the ability for admins to mark answers.

## Scope
- Render comment list under each post card using data from feature 006 with lazy loading (show first 5, expand to view all).
- Provide inline reply composer that appears when user clicks "Reply"; support multiline text, `Cmd+Enter` submit.
- Add per-comment action menu: `Edit`, `Delete` (owner), `Mark as answer` (admin on top-level comments), `Copy link`.
- Show nested replies indented with connector lines up to depth 2; beyond that, collapse.
- Display badges for admins/staff and "Answer" pill on marked comment plus summary indicator on post card ("1 answer").
- Optimistically update counts and collapse reply composer after submit.

## UX Notes
- Keep thread collapsed by default for long posts; show "View X replies" toggle with counts.
- Loading skeleton for replies triggered on demand to reduce initial payload.
- Soft-deleted comments show placeholder "Comment removed" with italics.

## Dependencies
- Requires comments schema + API (006) and feed UI (002).
- Notifications (future) will hook into these actions but not part of this story.

## Acceptance Criteria
- Users can add, edit, delete replies with immediate UI feedback.
- Admins can mark/unmark answers; indicator persists across reload.
- Reply counts stay accurate when new comments arrive or are removed.