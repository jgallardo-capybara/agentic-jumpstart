# 014 - Member Profile Schema & Privacy Flags

## Objective
Extend the `users` table to capture public-facing profile data, skills, and privacy controls needed for member pages.

## Scope
- Add columns to `users` (or companion `user_profiles` table): `username` (unique, lowercase), `bio`, `headline`, `skills jsonb[]`, `timezone`, `contactEmail`, `website`, `socialLinks jsonb`, `avatarUrl`, `coverImageUrl`, `pronouns`, `availabilityStatus enum('open','busy','offline')`.
- Introduce `profile_visibility` JSON storing booleans for `showEmail`, `showSocials`, `allowMessages`.
- Migration ensures backfill default values and unique index on `username`.
- Create data-access helpers `getProfileByUsername`, `updateProfile`, `listSkills`.
- Validate usernames (slug, 3-24 chars) with server check for uniqueness.

## Dependencies
- None beyond existing auth; editing UI arrives later (feature 022) and viewing UI in 015.

## Acceptance Criteria
- Migrations succeed and new columns appear with sensible defaults for existing users.
- Attempting to insert duplicate username fails with clear error.
- Data-access helpers return aggregated profile object ready for UI consumption.
