# 017 - Member Directory & Skill Search

## Objective
Ship the `/members` directory with robust filtering so learners can discover peers by name, skill, or cohort.

## Scope
- Build TanStack route `/members` with loader returning initial page of members plus filter metadata (skills list, cohorts).
- UI includes search input with debounce, filter popover for skills (multi-select), availability toggle, and sort dropdown (A-Z, Recently Active, Newest Members).
- Cards display avatar, name, headline, skills chips, timezone, and quick actions (`View Profile`, `Message`).
- Implement backend search query leveraging Postgres `tsvector` or JSON containment on `skills`; add indexes to support queries.
- Support pagination/infinite scroll with maintainable query params (`?q=react&skills=aws,ai`).
-
## Dependencies
- Needs profile schema (014) and profile page (015) to link cards.
- Messaging entry point (feature 019) will hook into quick action but can be stubbed for now.

## Acceptance Criteria
- Directory loads within acceptable time (<400ms) and filters results accurately.
- URL reflects active filters for shareable search results.
- Empty states communicate when no members match criteria and offer clear reset action.
