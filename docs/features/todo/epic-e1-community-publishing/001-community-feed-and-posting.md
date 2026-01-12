# 001 - Community Post Schema & Data Layer

## Objective
Define the canonical `community_posts` storage, Drizzle schema, and data-access helpers so subsequent UI slices can consume consistent APIs.

## Scope
- Create `community_posts` table with columns: `id UUID pk`, `authorId UUID fk -> users.id`, `title text`, `body jsonb` (portable rich text), `category text`, `visibility enum ('regular','announcement')`, `isPinned boolean default false`, `publishedAt timestamptz default now()`, `updatedAt timestamptz`, `deletedAt timestamptz nullable`.
- Add indexes on `publishedAt DESC`, `authorId`, and a partial index for `isPinned` to optimize feed queries.
- Update `src/db/schema.ts`, add migrations under `drizzle/` with forward/backward compatibility.
- Implement `src/data-access/posts.ts` with functions `insertPost`, `updatePostById`, `softDeletePost`, `listPosts({ cursor, limit })` returning pinned posts first.
- Expose TanStack query factory `getCommunityPostsQuery` plus mutation helpers in `src/queries/posts.ts`.
- Seed script placeholder that inserts 3 demo posts for local dev.

## Deliverables
- Migration file that can run via `npm run db:migrate` without touching existing tables.
- Type-safe Drizzle models and Zod schemas for post payloads.
- Unit tests (or Vitest) covering data-access happy path + soft delete.

## Dependencies
- Relies on existing `users` table and auth session context.
- No UI dependencies; routes will be wired in feature 002.

## Acceptance Criteria
- Running migrations creates `community_posts` with specified indexes.
- Calling `listPosts` returns pinned posts ordered by `publishedAt DESC` followed by regular posts.
- Soft-deleted posts are excluded from queries by default.
- Query/mutation helpers are exported and ready for UI consumption.