import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Separator className="mb-6 bg-white/10" />
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-sand-300 md:flex-row md:items-center">
          <p>© 2026 Jaume Fabregat Marqués · CV digital</p>
          <p>Diseño y desarrollo centrado en producto, IA y liderazgo técnico.</p>
        </div>
      </div>
    </footer>
  );
}
