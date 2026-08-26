"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceCategory, services } from "@/lib/site";

const tabs: Array<"All" | ServiceCategory> = ["All", "Pest Control", "Cleaning", "Commercial"];

export default function ServicesPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");
  const visible = useMemo(() => active === "All" ? services : services.filter((service) => service.category === active), [active]);

  return (
    <>
      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-wider text-lime">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">Pest control, cleaning, sanitization and maintenance support across Dubai.</h1>
        </div>
      </section>
      <Section className="bg-mist">
        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-md px-4 py-2 text-sm font-black ${active === tab ? "bg-aqua text-white" : "bg-white text-ink ring-1 ring-slate-200"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visible.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </Section>
    </>
  );
}
