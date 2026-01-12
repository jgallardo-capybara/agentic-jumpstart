# 013 - Classroom Module Authoring UI

## Objective
Provide admins with a drag-and-drop interface to create modules, add content blocks, and publish them to students.

## Scope
- Route `/classroom/admin` (or nested) visible only to admins with table of modules showing status, last updated, and action buttons.
- "Create/Edit Module" drawer form capturing title, summary, hero image (R2 upload), publish toggle, and order index.
- Content builder section using DnD kit to add/reorder blocks (video, task, pdf, link, image). Each block exposes fields relevant to its type plus optional attachment upload.
- Autosave draft every few seconds; explicit Publish button pushes module live by setting `isPublished` + `publishedAt`.
- Support cloning an existing module/week to accelerate authoring.
- Validate inputs per block type (e.g., `resourceUrl` required for video/link, file upload for PDF).

## Engineering Notes
- Reuse Draggable primitives from playlist UI for consistent behavior.
- Use TanStack mutations from feature 011 for create/update/reorder operations.
- Add optimistic reorder updates and handle conflict resolution via `updatedAt` check.

## Dependencies
- Schema + queries from feature 011.
- Storage helpers for uploading assets referenced in module items.

## Acceptance Criteria
- Admins can create a new module with multiple blocks, publish it, and see it appear on `/classroom` after refresh.
- Reordering blocks updates order both in admin UI and student view.
- Draft modules remain hidden from students until published toggle is switched.