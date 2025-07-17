const projects = [
  {
    name: 'Comrade Buyer',
    description:
      'API for collective buying with Stripe integration and promotional deals',
    href: 'https://github.com/BURSUC31/comrade-buyer',
  },
  {
    name: 'NestJS Task Service',
    description: 'Task management service built with NestJS and TypeORM',
    href: 'https://github.com/BURSUC31/nestJS-task-svc',
  },
  {
    name: 'Terraform Infrastructure',
    description: 'Infrastructure as Code configuration using Terraform',
    href: 'https://github.com/BURSUC31/terraform-config',
  },
  {
    name: 'Browser Extension',
    description: 'Content filtering browser extension built with JavaScript',
    href: 'https://github.com/BURSUC31/Extension-to-block-porn-rows-in-browse-',
  },
  {
    name: 'Trading Bot',
    description: 'Automated trading bot with JavaScript algorithms',
    href: 'https://github.com/BURSUC31/trading-bot',
  },
  {
    name: 'API Gateway',
    description: 'Microservices API gateway for service orchestration',
    href: 'https://github.com/BURSUC31/gateway',
  },
  {
    name: 'React Authentication',
    description: 'React contact manager with authentication system',
    href: 'https://github.com/BURSUC31/react-auth',
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold text-center md:text-left">
        Projects
      </h1>
      <p className="mb-8 text-neutral-700 dark:text-neutral-300 text-center md:text-left">
        Here are some of the projects I&apos;ve worked on. My work often
        involves skills like JavaScript, TypeScript, Node.js, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.name}
            className="block p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href={project.href}
          >
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              {project.name}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
