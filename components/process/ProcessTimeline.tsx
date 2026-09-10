import { ProcessStep } from "./ProcessStep";

export type ProcessStepData = { title: string; description: string };

export function ProcessTimeline({
  steps,
  tone = "light",
  horizontal = false,
}: {
  steps: ProcessStepData[];
  tone?: "light" | "dark";
  horizontal?: boolean;
}) {
  return (
    <div className={horizontal ? "flex flex-col gap-10 md:flex-row md:gap-6" : "flex flex-col"}>
      {steps.map((step, i) => (
        <ProcessStep
          key={step.title}
          index={i + 1}
          title={step.title}
          description={step.description}
          isLast={i === steps.length - 1}
          tone={tone}
          horizontal={horizontal}
        />
      ))}
    </div>
  );
}
