# TODO:

- [ ] Create 'projects' and 'cases' pages, like Posts Page
- [ ] Which logo should we use? One is darker (witth text "美域佳华"), one's color looks better yet the bg is not perfectly deleted.
- [ ] Create a form and show the email resender, submission record.
- [ ] AnimatedTitle disappears in mobile mode!!!
- [ ] 提供的图片没有背景，在黑色主题下文字看不清！！！
- [ ] Homepage 我希望图片都能占满整个屏幕的宽度（留白部分写文字），目前的图片尺寸太小了不好看，

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
