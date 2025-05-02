import { Container } from "@/components/container";

export default function BlogsLayout({children}: {children: React.ReactNode}) {
  return (
    <Container className="pt-36">
      {children}
    </Container>
  );
}
