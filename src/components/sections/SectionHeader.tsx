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
    <div className="mb-8 space-y-3">
      {eyebrow ? (
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-sand-300/80">
          {eyebrow}
        </p>
      ) : null}
      <div className="space-y-2">
        <h2 className="text-3xl font-display font-semibold tracking-tight text-sand-50 md:text-4xl">
          {title}
        </h2>
        {children ? <div className="text-sm text-sand-200/80">{children}</div> : null}
      </div>
    </div>
  );
}
