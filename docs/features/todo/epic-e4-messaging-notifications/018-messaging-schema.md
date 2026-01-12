# 018 - Direct Messaging Schema & Delivery Service

## Objective
Lay the backend foundation for private chats, including thread/message tables and delivery endpoints.

## Scope
- Add tables:
  - `chat_threads`: `id UUID`, `participantIds UUID[]`, `lastMessageAt`, `createdAt`, `updatedAt`, `lastMessagePreview`, `isMutedPerUser jsonb`.
  - `chat_messages`: `id UUID`, `threadId`, `senderId`, `body text`, `attachments jsonb`, `sentAt`, `readBy UUID[]`, `deletedAt`.
- Create indexes on `participantIds` (GIN) and `threadId + sentAt` for history queries.
- Implement service functions: `upsertThread(participants)`, `createMessage`, `listThreads(userId, cursor)`, `listMessages(threadId, cursor)`, `markRead`.
- Expose server actions (TanStack Start functions) with auth guards plus Zod validation.
- Integrate websocket or Pusher channel stub that emits `messageCreated` events (actual realtime wiring happens in feature 019).

## Dependencies
- Requires user profiles (014) for display names but otherwise standalone.

## Acceptance Criteria
- Migrations execute successfully and indexes exist.
- Creating a message automatically updates `chat_threads.lastMessageAt` within a transaction.
- Service functions covered by unit tests to ensure permissions (only participants can read/write).
