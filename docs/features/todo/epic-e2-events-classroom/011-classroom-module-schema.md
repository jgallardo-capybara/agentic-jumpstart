# 011 - Classroom Module Schema & Queries

## Objective
Model classroom weeks/modules and their learning items so both admins and students can consume structured curriculum data.

## Scope
- Create tables:
  - `classroom_modules`: `id UUID`, `title` (e.g., "Week 5"), `summary`, `orderIndex` (higher = newer), `publishedAt`, `isPublished`, `coverImageUrl`, `createdBy`, `updatedAt`.
  - `classroom_items`: `id UUID`, `moduleId`, `type enum('video','task','pdf','link','image')`, `title`, `description`, `resourceUrl`, `durationMinutes`, `orderIndex`, `metadata jsonb`.
- Add optional `classroom_item_assets` table if file uploads needed (stores R2 URLs).
- Define Drizzle schema + migrations with cascading deletes.
- Implement data-access helpers `listModules({ includeDrafts })`, `getModuleWithItems(moduleId)`, and `reorderModuleItems`.
- Expose TanStack queries/mutations in `src/queries/classroom.ts` for listing modules and updating order.

## Engineering Notes
- Enforce descending chronological order by default (orderIndex higher = newer) and create composite index `(orderIndex DESC, publishedAt DESC)`.
- Provide Zod schemas for module/item payloads shared between admin + student flows.

## Dependencies
- None beyond existing auth/storage; admin UI arrives in feature 013.

## Acceptance Criteria
- Migrations run cleanly and tables appear with expected columns.
- `listModules` returns modules sorted newest-first with nested items when requested.
- Updating order persists new indexes and is reflected in subsequent queries.