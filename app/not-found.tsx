import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="light" className="flex min-h-[70vh] items-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-6 text-center">
        <span className="font-display text-6xl text-gold-deep">404</span>
        <h1 className="font-display text-3xl font-medium tracking-tight">Page not found</h1>
        <p className="text-ink/65">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </Section>
  );
}
