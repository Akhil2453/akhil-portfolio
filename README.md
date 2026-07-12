# Akhil Arun Menon — Personal Brand Website

Production-ready personal portfolio built with Astro, TypeScript and local Markdown content collections.

## Positioning

The website presents Akhil Arun Menon across five connected areas:

- Academic programme strategy and Design Engineering education
- EdTech operations, curriculum development and faculty preparation
- Robotics, IoT, embedded systems and makerspace practice
- Data visualisation using Power BI, Excel, Python and SQL
- Teaching, writing, speaking and professional collaboration

## Technology

- Astro 7
- TypeScript
- Markdown content collections
- GitHub Actions
- GitHub Pages
- FormSubmit contact handling
- Utterances blog comments
- Conditional Google Analytics 4

## Local setup

```bash
npm install
npm run dev
```

Open the URL displayed by Astro. The default local base path is `/akhil-portfolio` because that is the recommended GitHub repository name.

## Production validation

```bash
npm run check
npm run build
npm run preview
```

The supplied project has already passed `astro check` and a production build.

## Recommended GitHub repository

Create a public repository:

```text
Akhil2453/akhil-portfolio
```

Then initialise and push:

```bash
git init
git add .
git commit -m "Launch personal portfolio"
git branch -M main
git remote add origin https://github.com/Akhil2453/akhil-portfolio.git
git push -u origin main
```

In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Push to `main` or run the deployment workflow manually.
4. The initial URL will be `https://akhil2453.github.io/akhil-portfolio/`.

The Astro configuration reads the repository name during GitHub Actions deployment, so it continues to work if the repository is renamed. Update the Utterances repository value and hard-coded documentation links if you rename it.

## Google Analytics

Create a repository variable:

```text
PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
```

Location: **Settings → Secrets and variables → Actions → Variables**.

Analytics is not loaded when the variable is empty.

## Contact form activation

The website uses FormSubmit for the contact and subscription forms.

1. Deploy the site.
2. Submit a test enquiry.
3. Open the activation email sent to `akhil.menon94@gmail.com`.
4. Activate the endpoint.
5. Submit another test and confirm the automatic acknowledgement.

## Blog comments

Comments use Utterances and GitHub Issues.

1. Install the Utterances GitHub App for `Akhil2453/akhil-portfolio`.
2. Confirm that Issues are enabled for the repository.
3. Publish a blog article and submit one test comment.

The current configuration uses the page pathname to create or locate the related issue and applies the `blog-comment` label.

## Updating content

### Projects

Add Markdown files to:

```text
src/content/projects/
```

### Blog articles

Add Markdown files to:

```text
src/content/blog/
```

Use `draft: true` while writing. Drafts appear during local development but are excluded from production builds.

### Professional and LinkedIn updates

Add Markdown files to:

```text
src/content/updates/
```

Paste the original LinkedIn post URL into the `url` property. The website then displays a summary and links to the original post.

### Content Studio

Open `/studio/` locally or on the deployed website. The browser-based utility generates valid Markdown for projects, articles and updates. It does not upload or store data. Download the generated file and place it in the corresponding content folder.

## Images

Place new images in:

```text
public/images/uploads/
```

Recommended formats:

- WebP for photographs
- SVG for diagrams and icons
- 1600 × 1000 px for project covers
- 1200 × 630 px for social-sharing images

Do not publish student photographs without documented consent. Confidential institutional documents and client information should remain excluded.

## Power BI embeds

The Data Visualisation pages already contain responsive embed areas. After publishing a report through an approved Power BI embed method, replace the placeholder panel with an iframe and ensure the report is authorised for public or intended-audience access.

Do not commit `.pbix` files or confidential datasets to this public repository.

## Custom domain: akhilmenon.in

After purchasing and configuring the domain:

1. Add a `public/CNAME` file containing `akhilmenon.in`.
2. Set the GitHub Actions environment values:
   - `SITE_URL=https://akhilmenon.in`
   - `CUSTOM_DOMAIN=true`
3. Configure the DNS records required by GitHub Pages.
4. Update `public/robots.txt` with the custom-domain sitemap URL.
5. Update the canonical production URL in any third-party form settings.

## Copyright

All website source, text, images and portfolio content are copyright Akhil Arun Menon unless otherwise stated. No reuse or redistribution is permitted without written permission.
