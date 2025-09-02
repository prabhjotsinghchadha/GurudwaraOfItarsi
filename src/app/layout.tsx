import '@/styles/globals.css';

import { Metadata } from 'next';
// import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';
import { ReactNode, Suspense } from 'react';

import { MainProvider } from '@/components/providers/MainProvider';
import { MainLayout } from '@/components/templates/MainLayout';

import { cn } from '@/lib/utils';

import SiteFooter from '../components/organisms/site-footer';
import { SiteHeader } from '../components/organisms/site-header';

const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });

export const metadata: Metadata = {
  title: 'Home page | Nextjs boilerplate',
  description:
    '🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={cn(inter.variable, 'font-primary')} suppressHydrationWarning>
        <MainProvider>
          <MainLayout>
            <Suspense fallback={<div className="px-4 py-2">Loading header…</div>}>
              <SiteHeader />
            </Suspense>
            <main>{children}</main>
            <SiteFooter />
            {/* <Analytics /> */}
          </MainLayout>
        </MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
