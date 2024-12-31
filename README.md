# TODO:

- [ ] Create 'projects' and 'cases' pages, like Posts Page (or just add metadata('Related PAges' and 'Categories') for Pages? )
- [ ] Which logo should we use? One is darker (witth text "美域佳华"), one's color looks better yet the bg is not perfectly deleted. 暂定为天蓝色。
- [x] Create a form and show the email resender, submission record.
- [x] AnimatedTitle disappears in mobile mode!!!
- [ ] Theme selector shows layout mess in mobile mode!!!
- [x] 提供的图片没有背景，在黑色主题下文字看不清！！！ 和王艳沟通，让 潘总 zhangfeng 帮忙改 (changed the ImageMedia ‘style’, )
- [ ] Need a better method to change the bg of ImageMedia programmatically
- [ ] Homepage 我希望图片都能占满整个屏幕的宽度（留白部分写文字），目前的图片尺寸太小了不好看。

# Install Shadcn Sidebar

1. Modify `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.mjs",
    "css": "src/app/(frontend)/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/utilities"
  }
}
```

2. Modify `tailwind.config.mjs`
   Comment this part:

```typescript
typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      }),
```

3. https://ui.shadcn.com/docs/components/sidebar#installation

# Github Workflow

[Github-Workflow.md](./Github-Workflow.md)

# Next.js Immigration Website

A modern immigration consulting website built with Next.js 14, Payload CMS, and Supabase. Features server-side rendering, dynamic content management, and responsive design.

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **CMS**: Payload CMS
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend API
- **Deployment**: Vercel

## Key Features

- Server-side rendering
- Dynamic content management
- Responsive design
- Dark/Light theme support
- Email form submission
- SEO optimization
- Sitemap generation

## Important: Database Connection

### Supabase Connection Setup

When deploying to Vercel, you must use Supabase's Connection Pooler instead of Direct Connection. This is because:

1. Vercel's environment prioritizes IPv6
2. Supabase's Direct Connection may have IPv6 compatibility issues
3. Connection Pooler enforces IPv4 and provides better stability

#### Connection String Format:

❌ Don't use Direct Connection in production
DATABASE_URI=postgresql://postgres:password@db.xxx.supabase.co:5432/postgres

✅ Use Connection Pooler instead
DATABASE_URI=postgresql://postgres.xxx:password@aws-0-us-west-1.pooler.supabase.com:6543/postgres

To find your Connection Pooler URL:

1. Go to Supabase Dashboard
2. Project Settings > Database
3. Connection Pooling section
4. Copy the Connection string

This setup ensures:

- IPv6/IPv4 compatibility
- Better connection management
- Improved stability
- Automatic connection handling
