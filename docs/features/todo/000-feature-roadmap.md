# 000 - Feature Roadmap

## Objective
Provide a release plan that sequences all Skool-style capabilities into bite-sized stories that ship value daily while respecting dependencies.

## Epic Overview

### E1 — Community Publishing & Engagement (001-007)
**Capability Goal**: Stand up the community feed, posting workflow, attachments, moderation, and threaded replies so members and admins can collaborate.

**Features**
- 001 — Community post schema & data layer
- 002 — Community feed route & list UI
- 003 — Post composer & publish flow
- 004 — Post editing, moderation & pinning
- 005 — Post attachments & media uploads
- 006 — Comment schema & query layer
- 007 — Comment UI & admin answer highlight

### E2 — Events & Classroom Delivery (008-013)
**Capability Goal**: Schedule live sessions and distribute curriculum through weekly modules that learners can follow chronologically.

**Features**
- 008 — Event schema & query layer
- 009 — Calendar page & event modal
- 010 — Event admin console & publishing flow
- 011 — Classroom module schema & queries
- 012 — Classroom learner view & progress tracking
- 013 — Classroom module authoring UI

### E3 — Member Profiles & Discovery (014-017)
**Capability Goal**: Enrich member data, publish public profile pages, and make it easy to discover peers via a searchable directory.

**Features**
- 014 — Member profile schema & privacy flags
- 015 — Member profile page UI
- 016 — Member updates feed
- 017 — Member directory & skill search

### E4 — Messaging & Notifications (018-021)
**Capability Goal**: Enable real-time 1:1 conversations and surface cross-app alerts with granular preferences.

**Features**
- 018 — Direct messaging schema & delivery service
- 019 — Messaging UI & realtime experience
- 020 — Notification schema & fan-out workers
- 021 — Notification center UI & preferences

### E5 — Account Settings & Preferences (022)
**Capability Goal**: Provide a comprehensive settings area where members can manage identity, skills, privacy, and security.

**Features**
- 022 — Account settings & profile editing

## Build Principles
- Favor vertical slices (data layer + UI) that can be demonstrated independently.
- Keep schemas backward-compatible and additive to unblock parallel work.
- Share primitives (uploaders, loaders, query hooks) across stories to reduce rework.

## Success Metrics
- Weekly active posters/comments (E1 health).
- Event attendance rate and classroom completion percentage (E2).
- Profile completeness + directory searches per user (E3).
- Message delivery latency and notification open rate (E4).
- Settings save success rate and profile edit adoption (E5).