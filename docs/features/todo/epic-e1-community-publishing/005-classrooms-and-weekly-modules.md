# 005 - Post Attachments & Media Uploads

## Objective
Let members attach images, short videos, or documents to community posts with upload progress and inline rendering.

## Scope
- Create `community_post_attachments` table with columns: `id UUID`, `postId`, `type enum('image','video','doc')`, `url`, `thumbnailUrl`, `fileName`, `fileSize`, `mimeType`, `orderIndex`.
- Build server function `createCommunityUpload` that returns presigned PUT URL + final CDN URL, reusing existing R2 helper patterns.
- In composer (feature 003), add dropzone/file picker supporting up to 4 attachments per post and 25 MB per item.
- Display attachment chips with thumbnail/filename and remove button before publish.
- Update post create/edit mutations to accept attachments payload and persist records inside transaction.
- In feed (002) render attachments: responsive image grid, HTML5 video with controls, document link with icon.

## UX Notes
- Show upload progress bars per file; disable Publish until all uploads resolve.
- Reject unsupported MIME types with inline error.
- Provide fallback placeholder if attachment fails to load.

## Dependencies
- Requires data layer (001) and composer (003) to exist.
- Shares storage credentials already configured for songs/uploads.

## Acceptance Criteria
- Users can attach files, see progress, and publish once complete.
- Attachments persist and render correctly in feed and after page reload.
- Failed uploads display error and do not leave orphaned records.