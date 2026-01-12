# 019 - Messaging UI & Realtime Experience

## Objective
Deliver the user-facing messaging surfaces (drawer + `/messages` page) with realtime updates and read receipts.

## Scope
- Build `/messages` route with split-pane layout: thread list (left) + active conversation (right). On mobile, use stacked routes (list then detail).
- Implement floating "Message" drawer that can open from profile/directory quick actions, preloading or creating a thread.
- Conversation view supports infinite scroll upward, grouping messages by day, showing avatar + timestamp, and read receipt indicators.
- Composer includes multiline input, emoji picker, attachment button (reuse uploads), and typing indicator broadcast.
- Wire websocket/Pusher/Supabase channel to receive `messageCreated` + `typing` events, updating UI in real time.
- Manage unread counts per thread and update header badge (feeds into notifications later).

## Dependencies
- Requires messaging schema + services (018) and minimal member directory/profile actions.

## Acceptance Criteria
- Users can start a chat, send/receive messages instantly across two browser sessions.
- Drawer flow opens targeted conversation with recipient preselected.
- Read receipts update when other participant opens the thread.
- Offline fallback gracefully degrades to polling with info banner.
