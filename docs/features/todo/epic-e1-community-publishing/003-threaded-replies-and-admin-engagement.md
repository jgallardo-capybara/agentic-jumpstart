# 003 - Post Composer & Publish Flow

## Objective
Enable authenticated members to create community posts with validation, optimistic updates, and toast feedback.

## Scope
- Build `CommunityComposer` component shown at top of `/community` page that expands from a single-line placeholder into a full editor when focused.
- Inputs: `title` (optional), `body` (required rich-text-lite), `category` select (General, Interview, Health) stored as string.
- Integrate React Hook Form with Zod schema (`body` min 10 chars) and show inline errors.
- On submit, call TanStack mutation that hits `insertPost` (feature 001) and optimistically append to feed list.
- Disable submit until dirty + valid; show progress spinner while mutation in flight.
- Provide success toast "Post published" and error toast with retry.
- Basic admin permission check to show "Mark as announcement" toggle (persist to `visibility`).

## UI / UX Notes
- Use ShadCN `Card`, `Textarea`, `Select`, `Button` components; match screenshot placeholder copy "Write something".
- Collapsed state shows avatar + input; expanded state reveals category select + action buttons.
- Keyboard shortcut `Cmd+Enter` submits form.

## Engineering Notes
- Reuse `useSession` for author data; block unauthenticated use with CTA to login.
- After success, reset form and collapse composer.
- Write unit test for mutation hook to ensure optimistic cache update.

## Dependencies
- Requires feed route (002) to host composer and data layer (001) for backend writes.

## Acceptance Criteria
- Composer renders for authenticated users and allows publishing valid posts.
- New post appears instantly in list and persists after refresh.
- Validation prevents empty body and surfaces helpful error states.