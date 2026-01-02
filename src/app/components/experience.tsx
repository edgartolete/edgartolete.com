import { Container } from "@/components/container";

export function Experience() {
  return (
    <Container className="py-20" id="experience">
      <h2 className="font-bold text-center text-3xl mb-12">
        Relevant Career History
      </h2>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">May 2024 - July 2025</time>
            <div className="text-lg font-black mb-1">
              VtimeTech Consulting{" "}
              <span className="font-normal"> — Team Lead</span>
            </div>
            Led multiple projects by setting priorities, mentoring junior
            developers, and reporting progress directly to investors. Actively
            contributed to frontend development using React.js and Next.js,
            implementing new application features and resolving bugs. Delivered
            translation and localization support along with other website
            enhancements to improve usability and market reach.
          </div>
          <hr className="bg-gray-600" />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">February 2023 - April 2024</time>
            <div className="text-lg font-black mb-1">
              Volenday Groups{" "}
              <span className="font-normal"> — Junior Software Engineer</span>
            </div>
            Led client stand-up meetings and progress reporting in a Business
            Analyst role, creating and managing Jira tickets while leading two
            concurrent projects. Actively contributed to team brainstorming
            sessions to resolve issues and define new features. On the
            development side, contributed to building and enhancing multiple
            applications—including a Catalog Admin Dashboard, Data Publication
            App, and B2B Catalog App—using React.js, Next.js, and Flutter, and
            led the migration of a website from Ant Design to Material UI.
            Collaborated on implementing a proof of concept integrating OpenAI’s
            GPT and assisted in debugging backend API issues using Express.js
            (Node.js).
          </div>
          <hr className="bg-gray-600" />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">
              October 2021 - January 2023
            </time>
            <div className="text-lg font-black mb-1">
              Freelance{" "}
              <span className="font-normal">
                — Web Developer / Virtual Assistant
              </span>
            </div>
            Took on freelance side projects through Upwork, working with clients
            on small to mid-sized tasks such as website updates, feature
            enhancements, bug fixes, and general technical support. Delivered
            solutions based on client requirements while managing timelines,
            communication, and revisions independently.
          </div>
          <hr className="bg-gray-600" />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">
              September 2020 - September 2021
            </time>
            <div className="text-lg font-black mb-1">
              Infinity Web Solutions{" "}
              <span className="font-normal">
                — Web Developer
              </span>
            </div>
            Leveraged WordPress and Shopify to design and build e-commerce
            websites, customizing themes and templates to align with clients’
            branding and business requirements. Extended platform functionality
            through the integration and configuration of third-party plugins and
            packages to enhance performance, usability, and overall user
            experience.
          </div>
          <hr className="bg-gray-600" />
        </li>
      </ul>
    </Container>
  );
}
