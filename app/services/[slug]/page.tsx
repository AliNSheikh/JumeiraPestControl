import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/Section";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  return {
    title: service ? `${service.title} Dubai | JPC Dubai` : "Service | JPC Dubai",
    description: service?.summary
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();
  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src={service.image} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-lime"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / {service.title}</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_420px]">
            <div>
              <span className="inline-grid h-14 w-14 place-items-center rounded-md bg-white text-aqua"><Icon /></span>
              <h1 className="mt-5 text-4xl font-black sm:text-5xl">{service.title} in Dubai</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{service.summary}</p>
            </div>
            <div className="rounded-md bg-white p-5 text-ink shadow-soft">
              <p className="text-sm font-black uppercase tracking-wider text-aqua">Pricing indicator</p>
              <p className="mt-2 text-3xl font-black text-navy">{service.price}</p>
              <Link href={`/book?service=${encodeURIComponent(service.title)}`} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-lime px-5 py-3 text-sm font-black text-navy">Book this service <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white" eyebrow="Problems solved" title="Common issues this service addresses">
        <div className="grid gap-4 md:grid-cols-3">
          {service.issues.map((issue) => (
            <div key={issue} className="flex gap-3 rounded-md border border-slate-200 p-5">
              <CheckCircle2 className="shrink-0 text-lime" />
              <p className="font-bold text-ink">{issue}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-mist" eyebrow="Methodology" title="A clear treatment process">
        <div className="grid gap-4 md:grid-cols-4">
          {service.method.map((step, index) => (
            <div key={step} className="rounded-md bg-white p-5 shadow-soft">
              <span className="text-sm font-black text-aqua">Step {index + 1}</span>
              <p className="mt-3 font-bold leading-6 text-ink">{step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Packages" title="Transparent starting points">
        <div className="overflow-hidden rounded-md ring-1 ring-slate-200">
          <table className="w-full border-collapse bg-white text-left text-sm">
            <thead className="bg-navy text-white">
              <tr><th className="p-4">Package</th><th className="p-4">Price</th><th className="p-4">Includes</th></tr>
            </thead>
            <tbody>
              {service.packages.map((row) => (
                <tr key={row.name} className="border-t border-slate-200">
                  <td className="p-4 font-black text-navy">{row.name}</td>
                  <td className="p-4 font-bold text-aqua">{row.price}</td>
                  <td className="p-4 text-slate-600">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-mist" eyebrow="Service request" title={`Book ${service.title}`}>
        <LeadForm selectedService={service.title} />
      </Section>

      <Section className="bg-white" eyebrow="Related services" title="You may also need">
        <div className="grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className="rounded-md border border-slate-200 p-5 font-black text-navy hover:border-aqua hover:text-aqua">{item.title}</Link>
          ))}
        </div>
      </Section>
    </>
  );
}
