import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const rl = createInterface({ input, output });
const slugify = (text) => text.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const quote = (value) => JSON.stringify(value);

try {
  const type = (await rl.question('Content type (project/blog/update): ')).trim().toLowerCase();
  if (!['project', 'blog', 'update'].includes(type)) throw new Error('Use project, blog or update.');
  const title = (await rl.question('Title: ')).trim();
  const suggested = slugify(title);
  const slug = (await rl.question(`Slug [${suggested}]: `)).trim() || suggested;
  const summary = (await rl.question('Summary: ')).trim();
  const today = new Date().toISOString().slice(0,10);
  let content = '---\n';
  let folder = type;

  if (type === 'project') {
    const category = (await rl.question('Category: ')).trim() || 'Portfolio';
    const period = (await rl.question(`Period [${new Date().getFullYear()}]: `)).trim() || String(new Date().getFullYear());
    content += `title: ${quote(title)}\nsummary: ${quote(summary)}\ncategory: ${quote(category)}\nperiod: ${quote(period)}\nstatus: "completed"\nfeatured: false\nimage: "/images/brand/og-default.png"\nimageAlt: ${quote(title)}\ntools: []\noutcomes: []\nlinks: []\norder: 99\n---\n\n## Context\n\n## Approach\n\n## Outcomes\n`;
  } else if (type === 'blog') {
    const category = (await rl.question('Category: ')).trim() || 'Insights';
    content += `title: ${quote(title)}\ndescription: ${quote(summary)}\npubDate: ${today}\ncategory: ${quote(category)}\ntags: []\nimage: "/images/brand/og-default.png"\nimageAlt: ${quote(title)}\ndraft: true\nfeatured: false\n---\n\nWrite the article here.\n`;
  } else {
    folder = 'updates';
    const url = (await rl.question('Original URL (optional): ')).trim();
    content += `title: ${quote(title)}\nsummary: ${quote(summary)}\ndate: ${today}\nplatform: "LinkedIn"\n${url ? `url: ${quote(url)}\n` : ''}featured: false\n---\n`;
  }

  const directory = path.join('src', 'content', folder);
  await mkdir(directory, { recursive: true });
  const file = path.join(directory, `${slug}.md`);
  await writeFile(file, content, { flag: 'wx' });
  console.log(`Created ${file}`);
} finally {
  rl.close();
}
