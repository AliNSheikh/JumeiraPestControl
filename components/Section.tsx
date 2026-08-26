import { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  className = ""
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="mb-9 max-w-3xl">
            {eyebrow && <p className="text-sm font-bold uppercase tracking-wider text-aqua">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-black tracking-normal text-navy sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
