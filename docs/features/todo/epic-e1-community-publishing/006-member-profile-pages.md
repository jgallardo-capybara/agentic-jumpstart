# 006 - Comment Schema & Query Layer

## Objective
Introduce the `community_comments` storage and data-access helpers so replies can attach to posts.

## Scope
- Create `community_comments` table: `id UUID pk`, `postId fk -> community_posts.id`, `parentCommentId nullable fk self`, `authorId fk -> users.id`, `body text`, `depth smallint default 0`, `createdAt`, `updatedAt`, `deletedAt`.
- Add indexes on `postId, createdAt ASC` and `(postId, parentCommentId)` for threading lookups.
- Drizzle schema + migration with cascading delete that soft-deletes replies when parent removed (retain placeholder flag `isDeleted`).
- Data-access file `src/data-access/comments.ts` with functions `listComments(postId, cursor)`, `insertComment`, `updateComment`, `softDeleteComment`.
- Query factories in `src/queries/comments.ts` for fetching per post and invalidating caches.

## Engineering Notes
- Limit depth to 2 by enforcing via constraint or data-access check.
- Return flattened list with `parentCommentId` for UI to group later.

## Dependencies
- Posts schema (001) must exist.
- Comments rely on auth user context for authorId.

## Acceptance Criteria
- Migrations create table/indexes without affecting existing data.
- Listing comments returns deterministic chronological order.
- Soft-deleted comments still return placeholder shape (flag), enabling UI to show "Comment removed" message.