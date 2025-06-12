import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Container from "./Container";

interface ProjectLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  githubLink: string;
}

export default function ProjectLayout({
  title,
  description,
  children,
  githubLink,
}: ProjectLayoutProps) {
  return (
    <Container>
      <div className="mt-40 max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/#projects" passHref>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{description}</p>
          <Link href={githubLink} target="_blank" passHref>
            <Button>View on GitHub</Button>
          </Link>
        </div>
        <div className="prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </Container>
  );
} 