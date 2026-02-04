# UI Upgrade Notes

## Principles
- Hierarchy: clear H1/H2/H3 scale with short lead text and consistent spacing.
- Rhythm: predictable vertical spacing per section and consistent max widths.
- Contrast: readable text in Light/Dark using tokenized surfaces and muted text.
- Density: avoid clutter; prefer grouped cards and concise summaries.
- Consistency: repeat card, badge, and callout patterns across sections.

## Components To Standardize
- `Card`: subtle border, elevated shadow, hover lift.
- `SectionHeader`: eyebrow + title + optional lead text.
- `Badge/Tag`: compact, consistent radius and subtle borders.
- `TimelineItem`: left border + dot + role/company/period.
- `Stat`: small label + big number (for Home quick stats).
- `CTA`: primary/secondary button group with icon support.

## Palette & Tokens
- Base tokens: `--background`, `--foreground`, `--card`, `--muted`, `--border`, `--primary`, `--secondary`.
- Light mode uses warm neutrals and clear contrast.
- Dark mode uses deep ink surfaces with softened highlights.
- Background gradients defined via `--page-gradient`.

Example usage:
- Page surface: `bg-background text-foreground`
- Card surface: `bg-card border-border/60 shadow-glow`
- Muted text: `text-muted-foreground`

## Icon Usage
- Use lucide icons consistently at 16–20px.
- Use in highlights, stats, and section callouts.
- Avoid icon overload in dense lists.

## Micro-interactions
- Cards: `transition-transform` + `hover:-translate-y-1`.
- Buttons: subtle hover brightness and focus rings.
- Links: underline on hover with smooth transition.
