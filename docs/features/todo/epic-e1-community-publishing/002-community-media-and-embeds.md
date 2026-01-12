# 002 - Community Feed Route & List UI

## Objective
Build the `/community` page scaffolding that renders a paginated feed of posts using the data layer from feature 001.

## Scope
- Add TanStack Router file `src/routes/community/index.tsx` with loader that prefetches `getCommunityPostsQuery` for the first page.
- Implement feed list component that groups posts by date, renders author avatar/name, timestamp, and truncated body.
- Include pinned badge + announcement tag styles per design reference; pinned items stay at top.
- Support cursor-based pagination using "Load more" button (virtualized infinite scroll in future feature).
- Provide skeleton state (reusing `SongGridSkeleton` pattern) and friendly empty state CTA when no posts exist.

## UI / UX Notes
- Layout should mirror screenshot: composer placeholder card at top (actual composer delivered in feature 003) followed by feed cards.
- Ensure responsive padding for mobile vs desktop widths.
- Accessibility: headings for each date group, focus states for cards.

## Engineering Notes
- Reuse `PostCard` component under `src/components/community/PostCard.tsx` for testability.
- Use TanStack Query `useInfiniteQuery` hook with SSR hydration.
- Add basic formatting helpers (e.g., `formatRelativeTime`).

## Dependencies
- Requires data-access + query helpers from feature 001.
- Auth already configured; anonymized users should be redirected to login.

## Acceptance Criteria
- Visiting `/community` as authenticated user shows posts from newest to oldest with pinned items first.
- Pagination fetches subsequent pages without full refresh.
- Empty state appears when database has zero posts.