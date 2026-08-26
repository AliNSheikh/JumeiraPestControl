import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/Section";
import { contact, dubaiAreas, services, socialLinks } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-wider text-lime">Contact JPC Dubai</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">Dispatch, quotations and customer support.</h1>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 rounded-md bg-lime px-4 py-3 text-sm font-black text-navy" href={contact.phoneHref}><Phone size={18} />{contact.phoneDisplay}</a>
            <a className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-black text-navy" href={contact.whatsappHref}>WhatsApp</a>
            <a className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-3 text-sm font-black text-white" href={contact.googleBusinessUrl} target="_blank" rel="noreferrer"><MapPin size={18} />Google Maps & Reviews</a>
          </div>
        </div>
      </section>

      <Section className="bg-mist">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <LeadForm />
          <aside className="space-y-5">
            <div className="rounded-md bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-navy">Business info</h2>
              <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                <p className="flex gap-3"><MapPin className="shrink-0 text-aqua" />{contact.address}</p>
                <p className="flex gap-3"><Phone className="shrink-0 text-aqua" /><a href={contact.phoneHref}>{contact.phoneDisplay}</a></p>
                <p className="flex gap-3"><Mail className="shrink-0 text-aqua" /><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                <p className="font-semibold text-ink">{contact.hours}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-md bg-mist px-3 py-2 text-xs font-black text-navy">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-md bg-white shadow-soft">
              <iframe title="JPC Dubai map" src={contact.mapEmbedUrl} className="h-80 w-full border-0" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Site directory" title="Find the right JPC Dubai page">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md border border-slate-200 p-5">
            <h3 className="font-black text-navy">Company</h3>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-600">
              <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/book">Book a Service</Link>
            </div>
          </div>
          <div className="rounded-md border border-slate-200 p-5 md:col-span-2">
            <h3 className="font-black text-navy">Service verticals</h3>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-600 sm:grid-cols-2">
              {services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}
            </div>
          </div>
          <div className="rounded-md border border-slate-200 p-5 md:col-span-3">
            <h3 className="font-black text-navy">Operating areas</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{dubaiAreas.join(" / ")}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
