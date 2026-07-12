# LinkedIn-to-Website Workflow

Personal LinkedIn activity cannot be relied upon as an unrestricted public feed. The launch workflow therefore uses mirrored content entries.

## Post-first workflow

1. Publish on LinkedIn.
2. Copy the public post URL.
3. Open the website Content Studio.
4. Select **Professional / LinkedIn update**.
5. Add the title, summary, date, link and optional image.
6. Download the Markdown file.
7. Add it to `src/content/updates/`.
8. Commit and push. GitHub Pages redeploys automatically.

## Website-first workflow for articles

1. Draft the full article in `src/content/blog/` with `draft: true`.
2. Preview locally.
3. Change to `draft: false` and publish.
4. Use the blog page's LinkedIn share button.
5. Write a shorter LinkedIn introduction that links back to the website article.
6. Mirror the LinkedIn post in `src/content/updates/`.

This workflow keeps the website as the permanent source of the full article and uses LinkedIn for distribution.
