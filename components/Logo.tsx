import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="JPC Dubai home">
      <span className="grid h-12 w-12 place-items-center rounded-md bg-white shadow-soft ring-1 ring-slate-200">
        <span className="text-xl font-black tracking-normal text-navy">
          J<span className="text-aqua">P</span><span className="text-lime">C</span>
        </span>
      </span>
      <span className="leading-tight">
        <span className="block text-base font-black text-navy">JPC Dubai</span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-aqua">Pest / Cleaning / FM</span>
      </span>
    </Link>
  );
}
