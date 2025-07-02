export default function CVPage() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Dimitrie Tomulesei</h1>
        <p className="text-xl text-neutral-700 dark:text-neutral-300">
          Full Stack Web Developer
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          <a
            href="mailto:tomuleseidimitrie@gmail.com"
            className="hover:underline"
          >
            tomuleseidimitrie@gmail.com
          </a>
          <span>+40 749929896</span>
          <span>Iasi, Romania</span>
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
      </header>
      <section>
        <h2 className="mb-4 text-2xl font-semibold border-b pb-2">About Me</h2>
        <p className="text-neutral-800 dark:text-neutral-200">
          A passionate Software Engineer specialized in Web Development, focused
          on building APIs and web applications using JavaScript and its
          ecosystem.
        </p>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold border-b pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Full Stack Web Developer - Wiley (Publishing)
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
              2022 - Present
            </p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>
                Worked as a T shaped developer, especially on backend using
                TypeScript to create APIs and new functionality that was
                requested by the stakeholders gaining business logic.
              </li>
              <li>
                Worked on frontend with React, backend (NestJs, ExpressJs,
                Graphql), CI/CD (Github Actions) and infrastructure management
                (Docker, AWS, Kubernetes).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              NodeJS Developer - Ezlo Innovation (IoT)
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
              2021 - 2022
            </p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>
                Integrated Metrics, an event-based library, to collect and
                analyze data on requests sent to and from a Cassandra Database,
                utilizing JavaScript events.
              </li>
              <li>
                Developed software (APIs) using NodeJS to enable smooth
                communication between a cloud platform and different IoT
                devices.
              </li>
              <li>
                Gained valuable insights in understanding of the product; first
                time working in a team of developers.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold border-b pb-2">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">
              Faculty of Electrical, Energy, and Applied Informatics
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              College (2019 - 2021)
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Stefan cel Mare National College, Mathematics-Informatics
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              High School (2016 - 2019)
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold border-b pb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            JavaScript
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            TypeScript
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            Node.js
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            Express.js
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            PostgreSQL
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            Terraform
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            AWS
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            React
          </span>
          <span className="bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-md text-sm">
            GraphQL
          </span>
        </div>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold border-b pb-2">Languages</h2>
        <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
          <li>English</li>
          <li>Romanian</li>
        </ul>
      </section>
    </section>
  );
}
