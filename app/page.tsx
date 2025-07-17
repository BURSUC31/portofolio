'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section>
      <div className="mb-8">
        <a
          href="https://github.com/BURSUC31"
          target="_blank"
          rel="noopener noreferrer"
          className="group float-right ml-6 mb-6"
        >
          <Image
            alt="Profile photo of Dimitrie Tomulesei"
            width={180}
            height={180}
            className="rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-2 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-110 border-4 border-blue-200 dark:border-blue-700 hover:border-blue-400 dark:hover:border-blue-500 ring-2 ring-blue-100 dark:ring-blue-800 hover:ring-4 hover:ring-blue-200 dark:hover:ring-blue-600 aspect-square object-cover"
            src="/profile.png"
            priority
          />
        </a>
      </div>
      <h1 className="mb-4 text-3xl font-bold">Dimitrie Tomulesei</h1>
      <p className="mb-8 text-xl text-neutral-700 dark:text-neutral-300">
        Full Stack Web Developer
      </p>
      <div className="prose prose-neutral dark:prose-invert space-y-4">
        <p>
          A passionate Software Engineer specialized in Web Development, focused
          on building APIs and web applications using JavaScript and its
          ecosystem.
        </p>
        <div>
          <h2 className="text-xl font-semibold mb-2">Connect with me</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:tomuleseidimitrie@gmail.com"
              className="hover:underline"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/dimitrie-tomulesei"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/BURSUC31"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-2">Key Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <p className="mt-6">
          Explore my <Link href="/projects">projects</Link> or view my full{' '}
          <Link href="/cv">CV</Link>.
        </p>
        <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 rounded-xl border-2 border-blue-200 dark:border-blue-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-5xl">👋</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Hiring? Let&apos;s Connect!
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-8 text-lg max-w-md mx-auto leading-relaxed">
              Discover my{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                3+ years
              </span>{' '}
              of experience, technical expertise, and passion for creating
              exceptional web solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/cv"
                className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 rounded-full shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 border-2 border-blue-400 ring-2 ring-blue-300/50 dark:ring-blue-500/50 hover:ring-4 hover:ring-blue-200/60 dark:hover:ring-blue-400/60 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:rounded-full before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 overflow-hidden no-underline"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  <span className="text-lg group-hover:animate-bounce">📄</span>
                  <span className="tracking-wide">View Complete CV</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:animate-pulse"></div>
              </Link>
              <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                <span className="flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-950/30 rounded-full border border-green-200 dark:border-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-medium text-green-700 dark:text-green-400">
                    Quick Read
                  </span>
                </span>
                <span className="text-neutral-300 dark:text-neutral-600">
                  •
                </span>
                <span className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full border border-blue-200 dark:border-blue-800">
                  <span className="text-blue-500">📱</span>
                  <span className="font-medium text-blue-700 dark:text-blue-400">
                    Mobile Friendly
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-8 text-sm">
              <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-full border border-green-200 dark:border-green-800 shadow-sm">
                <span className="relative flex w-3 h-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="font-semibold text-green-700 dark:text-green-400">
                  Available for hire
                </span>
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-full border border-blue-200 dark:border-blue-800 shadow-sm">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
                <span className="font-semibold text-blue-700 dark:text-blue-400">
                  Open to remote work
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
