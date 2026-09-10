import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { baseLocale } from '@/paraglide/runtime.js';
import { getLocalPosts, mergePosts } from '@/content/posts';

const STATIC_PAGES: { path: string; title: string; description: string }[] = [
  {
    path: '',
    title: 'Home',
    description: 'Play Narinig Mo Ba? free in your browser',
  },
  {
    path: '/play',
    title: 'Play',
    description: 'Fullscreen browser play view',
  },
  {
    path: '/how-to-play-narinig-mo-ba',
    title: 'How to Play',
    description: 'Controls, store routine, and beginner tips',
  },
  {
    path: '/narinig-mo-ba-walkthrough',
    title: 'Walkthrough',
    description: 'Spoiler-light store and story guide',
  },
  {
    path: '/narinig-mo-ba-ending',
    title: 'Ending Explained',
    description: 'Spoilers, clues, and confirmed story context',
  },
  {
    path: '/narinig-mo-ba-story',
    title: 'Story & Themes',
    description: 'Premise, setting, and creator context',
  },
  {
    path: '/narinig-mo-ba-mobile',
    title: 'Mobile Status',
    description: 'Android, iPhone, and touchscreen status',
  },
  {
    path: '/narinig-mo-ba-download',
    title: 'Download Guide',
    description: 'Windows, Mac, Linux, and browser download guide',
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Updates and notes about Narinig Mo Ba?',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy policy',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service',
    description: 'Terms of service',
  },
];

export const Route = createFileRoute('/llms-full.txt')({
  server: {
    handlers: {
      GET: async () => {
        const { app_url, app_name, app_description } = envConfigs;

        const lines: string[] = [
          `# ${app_name}`,
          '',
          `> ${app_description}`,
          '',
          '## Pages',
          '',
          ...STATIC_PAGES.map(
            (p) => `- [${p.title}](${app_url}${p.path}): ${p.description}`
          ),
        ];

        let posts = getLocalPosts(baseLocale);
        try {
          const { listPublishedArticles, findPublishedBySlug } =
            await import('@/modules/posts/service');
          const rows = await listPublishedArticles().catch(() => []);
          const dbPosts = rows.map((row) => ({
            slug: row.slug,
            title: row.title || row.slug,
            description: row.description || '',
            createdAt: new Date(row.createdAt).toISOString(),
            source: 'db' as const,
          }));
          posts = mergePosts(dbPosts, posts);

          if (posts.length > 0) {
            lines.push('', '## Blog Posts', '');

            for (const post of posts) {
              lines.push(`### ${post.title}`, '');
              lines.push(`URL: ${app_url}/blog/${post.slug}`);
              if (post.description)
                lines.push(`Description: ${post.description}`);
              lines.push('');

              if (post.source === 'db') {
                const detail = await findPublishedBySlug(post.slug).catch(
                  () => null
                );
                if (detail?.content) {
                  lines.push(detail.content, '');
                }
              }

              lines.push('---', '');
            }
          }
        } catch {
          // Database unreachable — list local posts without content.
          if (posts.length > 0) {
            lines.push('', '## Blog Posts', '');
            for (const post of posts) {
              lines.push(`### ${post.title}`, '');
              lines.push(`URL: ${app_url}/blog/${post.slug}`);
              if (post.description)
                lines.push(`Description: ${post.description}`);
              lines.push('', '---', '');
            }
          }
        }

        lines.push('');

        return new Response(lines.join('\n'), {
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        });
      },
    },
  },
});
