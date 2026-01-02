import { Container } from "@/components/container";
import {
  Docker,
  Flutter,
  NextjsIcon,
  Nodejs,
  Postgresql,
  React,
  Tailwindcss,
  Typescript,
} from "./svgs";

export function Stack() {
  return (
    <Container className="py-10" id="stack">
      <h2 className="font-bold text-center text-3xl mb-12">Primary Tech Stack</h2>
      <TechStack />
    </Container>
  );
}

function TechStack() {
  const size = 40;
  const stackList = [
    {
      name: "Typescript",
      icon: <Typescript width={size} height={size} />,
      sub: "Programming Language",
    },
    {
      name: "TailwindCSS",
      icon: <Tailwindcss width={size} height={size} />,
      sub: "CSS Utility Framework",
    },
    {
      name: "React",
      icon: <React width={size} height={size} />,
      sub: "Frontend Library",
    },

    // {
    //   name: "Vue",
    // },

    {
      name: "NextJS",
      icon: <NextjsIcon width={size} height={size} />,
      sub: "Frontend framework",
    },

    // {
    //   name: "Nuxt",
    // },
    //
    {
      name: "NodeJS",
      icon: <Nodejs width={size} height={size} />,
      sub: "JavaScript Runtime",
    },

    {
      name: "PostgreSQL",
      icon: <Postgresql width={size} height={size} />,
      sub: "SQL Database",
    },

    {
      name: "Docker",
      icon: <Docker width={size} height={size} />,
      sub: "Container Application",
    },

    {
      name: "Flutter",
      icon: <Flutter width={size} height={size} />,
      sub: "Mobile UI Framework",
    },
    // {
    //   name: "AWS",
    //   icon: <AwsLight width={size} height={size} />,
    //   sub: "Cloud Platform",
    // },
    // {
    //   name: "Echo",
    // },
    //
    // {
    //   name: "Axum",
    // },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-auto">
        {stackList.map((s) => (
          <StackCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}

type StackT = {
  name: string;
  icon: React.ReactNode;
  sub: string;
};

function StackCard({ icon, name, sub }: StackT) {
  return (
    <div className="flex gap-2 p-2 border border-gray-500 rounded">
      <div> {icon}</div>
      <div>
        <div>{name}</div>
        <div className="text-xs text-gray-500">{sub}</div>
      </div>
    </div>
  );
}
