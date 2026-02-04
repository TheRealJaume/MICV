import { ReactNode } from "react";

export default function SectionHeader({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 space-y-4">
      {eyebrow ? (
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-primary/60" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-muted-foreground">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {children ? <div className="text-sm text-muted-foreground">{children}</div> : null}
      </div>
    </div>
  );
}
