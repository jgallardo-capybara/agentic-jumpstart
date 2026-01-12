# 012 - Classroom Learner View & Progress Tracking

## Objective
Expose the `/classroom` page where students can browse newest modules first, view content blocks, and mark progress per item.

## Scope
- Build TanStack route `/classroom` with loader fetching modules via feature 011 queries.
- UI:
  - Accordion list showing module title, published date, summary, completion badge.
  - Inside each module render ordered items with icon per type, CTA buttons ("Watch", "Download"), optional embedded video player using iframe/responsive container.
- Implement `user_module_progress` table with columns `id`, `userId`, `itemId`, `completedAt`, `notes` (nullable) and create mutation hooks to toggle completion.
- Show progress bar percentage per module and overall completion summary at top.
- Persist expansion state in URL hash (e.g., `#week-5`).

## UX Notes
- Provide skeleton state while modules load and friendly empty state if none published yet.
- Mark newly published modules with "New" pill for 7 days.
- Completion checkbox uses optimistic update with toast fallback on error.

## Dependencies
- Requires schema + queries from feature 011 and authenticated user context.

## Acceptance Criteria
- `/classroom` lists modules in descending order with functioning accordion UI.
- Students can toggle completion on an item; state persists on reload and updates progress percentages.
- Access to attachments/videos works for each item type.