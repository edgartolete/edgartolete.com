import { Container } from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

export function Skills() {
  return (
    <Container className="pt-20 pb-12" id="skills">
      <h2 className="font-bold text-center text-3xl mb-6">Skills Overview</h2>
      <Accordion type="multiple">
        <AccordionItem value="leadership">
          <AccordionTrigger>
            <AccordionTitle>Leadership</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gather and clarify project requirements from clients.</li>
              <li>
                Collaborate with cross-functional teams to brainstorm and define
                new product features.
              </li>
              <li>
                Manage tasks using Jira and splitting it into Epics, User Story,
                and Sub-Tasks.
              </li>
              <li>
                Facilitate team whiteboarding sessions to brainstorm and refine
                new product features.
              </li>
              <li>
                Create sequence diagrams to clarify feature workflows and system
                interactions.
              </li>
              <li>
                Interview and evaluate frontend candidates, assessing technical
                skills, problem-solving ability, and cultural fit.
              </li>
              <li>
                Mentor junior developers to improve their workflow, deepen
                project understanding, and navigate complex codebases
                effectively.
              </li>
              <li>
                Assess member’s skills and delegated tasks to balance project
                needs and personal growth.
              </li>
              <li>
                Collaborate on version control with Git, branching strategies,
                and pull requests.
              </li>
              <li>
                Review merge requests to ensure code quality, readability,
                maintainability, and adherence to established architecture and
                coding standards.
              </li>
              <li>
                Resolve merge conflicts, rebasing, and maintain codebase
                integrity using Git.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="frontend">
          <AccordionTrigger>
            <AccordionTitle>Frontend Development</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Build responsive and accessible user interfaces with
                ReactJS/NextJS and TypeScript.
              </li>
              <li>
                Audit and improve frontend performance (LCP, FID, CLS) using
                Lighthouse, PageSpeed Insights, Bundle Analyzer, and real-user
                metrics.
              </li>
              <li>Integrate APIs via REST and handle asynchronous data.</li>
              <li>
                Manage application state with Jotai, Zustand, or React Context /
                Hooks.
              </li>
              <li>
                Optimize performance: code splitting, lazy loading, memoization.
              </li>
              <li>Apply UI Frameworks: Material UI, Ant Design, Mantine UI.</li>
              <li>
                Apply CSS frameworks and utilities: Tailwind CSS, SCSS, or
                styled-components.
              </li>
              <li>
                Write unit and integration tests using Vitest and Playwright.
              </li>
              <li>
                Ensure cross-browser compatibility and mobile responsiveness.
              </li>
              <li>
                Debug frontend code using Chrome DevTools, React DevTools, and
                Git bisect.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="backend">
          <AccordionTrigger>
            <AccordionTitle>Backend Development</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Design and implement scalable APIs using Cloudflare Workers or
                Node.js.
              </li>
              <li>
                Implement authentication (email + OAuth) and role-based access
                control with Better-Auth library.
              </li>
              <li>
                Handle CRUD operations, database migrations, and schema design
                with Drizzle ORM library.
              </li>
              {/*
              <li>
                Build real-time systems using WebSockets and background workers
                for high-throughput tasks.
              </li>
              <li>
                Integrate caching, job queues, and offline-first strategies for
                reliability and performance.
              </li>
              <li>
                Implement secure secret management with Google Secrets Manager,
                AWS Secrets Manager, or SSM Parameter Store.
              </li>
              <li>
                Integrate AI using OpenAI API, embeddings, for chatbots, content
                generation, or intelligent workflows.
              </li>
              <li>
                Ensure code quality, maintainability, and adherence to backend
                architecture standards.
              </li>
               */}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="testing">
          <AccordionTrigger>
            <AccordionTitle>Testing</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Write unit tests for frontend and backend code using Vitest.
              </li>
              <li>
                Perform end-to-end testing of user flows using Playwright.
              </li>
              {/*<li>
                Conduct performance testing using Grafana k6, including load,
                spike, stress, and Endurance/Soak tests.
              </li> */}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="deployment">
          <AccordionTrigger>
            <AccordionTitle>Deployment</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Containerize web applications using Docker.</li>
              <li>
                Deploy and orchestrate multiple services with Docker Compose.
              </li>
              <li>
                Configure environment variables, networking, and volumes for
                multi-service applications.
              </li>
              <li>Optimize container images for performance and size.</li>
              <li>
                Implement CI/CD pipelines for automated build, test, and
                deployment processes using GitHub Actions or GitLab CI.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="monitoring">
          <AccordionTrigger>
            <AccordionTitle>Monitoring & Observability</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              {/*<li>
                Setup resource performance monitoring using Prometheus and
                Grafana.
              </li> */}
              <li>Setup Axiom integration to monitor logs.</li>
              <li>Setup Sentry integration to monitor errors.</li>
              <li>Setup PostHog integration for user analytics.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="speed-optimization">
          <AccordionTrigger>
            <AccordionTitle>Speed Optimization</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Implement edge network caching using Cloudflare CDN/Cache API.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="security-optimization">
          <AccordionTrigger>
            <AccordionTitle>Security Optimization</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Implement DNS-layer firewall for DDoS attack and bot traffic.
              </li>
              <li>
                Integrate Captcha protection using Google reCAPTCHA or
                Cloudflare Turnstile.
              </li>
              {/*<li>
                Secret management using Google Secrets, AWS Secrets Manager, or
                AWS Systems Manager Parameter Store.
              </li> */}
            </ul>
          </AccordionContent>
        </AccordionItem>
        {/*<AccordionItem value="payment-integration">
          <AccordionTrigger>
            <AccordionTitle>Payment Integration</AccordionTitle>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stripe for global payments.</li>
              <li>Xendit for Asian countries.</li>
              <li>PayMongo for Philippines.</li>
            </ul>
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
    </Container>
  );
}

function AccordionTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-bold text-lg">
      {children}
    </h3>
  );
}
