import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Link from 'next/link';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { PinkThemeButton } from '@/components/PinkThemeButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dimitrie Tomulesei',
  description:
    'A passionate Software Engineer specialized in Web Development...',
};

const isProd = process.env.NODE_ENV === 'production';

const getProdHref = (path: string) => {
  if (!isProd || path === '/') {
    return path;
  }
  return `${path}/index.html`;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={['light', 'dark', 'pink']}
        >
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[624px] w-full">
            <nav className="lg:mb-16 mb-12 py-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center">
                  <Link
                    href={getProdHref('/')}
                    className="text-3xl font-semibold"
                  >
                    Dimitrie Tomulesei
                  </Link>
                </div>
                <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
                  <Link
                    href={getProdHref('/cv')}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-blue-400 ring-2 ring-blue-300 dark:ring-blue-500"
                  >
                    📄 CV
                  </Link>
                  <Link
                    href={getProdHref('/projects')}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
                  >
                    Projects
                  </Link>
                  <Link
                    href={getProdHref('/photos')}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
                  >
                    Photos
                  </Link>
                  <div className="flex items-center gap-2">
                    <ThemeSwitch />
                    <PinkThemeButton />
                  </div>
                </div>
              </div>
            </nav>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
