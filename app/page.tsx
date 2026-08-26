import { ArrowRight, BadgeCheck, Clock, Leaf, Phone, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { contact, reviews, services } from "@/lib/site";

const stats = [
  ["1978", "Serving Dubai since"],
  ["24/7", "Emergency response"],
  ["4.9/5", "Modeled Google rating"],
  ["100%", "Service follow-up focus"]
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-25">
          <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=80" alt="Dubai skyline" fill priority className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-md bg-white/10 px-3 py-2 text-sm font-bold text-lime ring-1 ring-white/15">Dubai Municipality-aware pest control, cleaning and FM services</p>
            <h1 className="mt-6 text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">JPC Dubai service teams for pest-free, clean and compliant properties.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Book certified technicians for homes, offices, restaurants, warehouses, villas and facilities across Dubai with same-day response options.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book" className="inline-flex items-center gap-2 rounded-md bg-lime px-5 py-3 text-sm font-black text-navy shadow-soft">Request Free Quote <ArrowRight size={18} /></Link>
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-navy"><Phone size={18} />Call Now</a>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-bold sm:grid-cols-3">
              {["Licensed technicians", "Satisfaction follow-up", "24/7 emergency response"].map((badge) => (
                <span key={badge} className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-3 ring-1 ring-white/15"><BadgeCheck className="text-lime" size={18} />{badge}</span>
              ))}
            </div>
          </div>
          <LeadForm compact />
        </div>
      </section>

      <Section className="bg-white" eyebrow="Service directory" title="Specialist teams for Dubai homes, businesses and facilities">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </Section>

      <Section className="bg-mist" eyebrow="Why choose JPC" title="Professional standards with fast local response">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [ShieldCheck, "Municipality aware", "Service methods aligned with Dubai expectations."],
            [Leaf, "Eco-conscious options", "Targeted products and practical prevention advice."],
            [Users, "Certified experts", "Trained field teams for residential and commercial jobs."],
            [Clock, "Same-day service", "Rapid dispatch for urgent pest and hygiene issues."]
          ].map(([Icon, title, text]) => (
            <div key={String(title)} className="rounded-md bg-white p-6 shadow-soft">
              <Icon className="text-aqua" />
              <h3 className="mt-4 text-lg font-black text-navy">{String(title)}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{String(text)}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Request a Quote", "Site Inspection", "Customized Treatment", "Quality Follow-up"].map((step, index) => (
            <div key={step} className="rounded-md border border-aqua/20 bg-white p-5">
              <span className="text-sm font-black text-aqua">0{index + 1}</span>
              <h3 className="mt-2 font-black text-navy">{step}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white" eyebrow="Verified-style feedback" title="Modeled from JPC Dubai public Google Business presence">
        <div id="reviews" className="grid gap-5 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-md bg-navy p-7 text-white">
            <div className="flex items-center gap-2 text-gold">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} fill="currentColor" />)}
            </div>
            <h3 className="mt-4 text-4xl font-black">4.9 / 5</h3>
            <p className="mt-2 text-slate-300">Representative review module ready to connect to Google Places or a moderated review API.</p>
            <a href={contact.googleBusinessUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-md bg-lime px-4 py-3 text-sm font-black text-navy">View all reviews on Google</a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((review) => (
              <article key={review.name} className="rounded-md bg-white p-5 shadow-soft ring-1 ring-slate-100">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-black text-navy">{review.name}</h3>
                  <span className="text-xs font-bold text-slate-500">{review.date}</span>
                </div>
                <div className="mt-2 flex text-gold">{Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{review.text}</p>
                <p className="mt-3 text-xs font-black uppercase tracking-wider text-aqua">Verified customer style</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-aqua px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-black">Need urgent pest control in Dubai?</h2>
            <p className="mt-1 text-white/90">Call dispatch now for immediate guidance and booking.</p>
          </div>
          <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-navy"><Phone size={18} />{contact.phoneDisplay}</a>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-md border border-slate-200 p-5 text-center">
              <p className="text-3xl font-black text-navy">{value}</p>
              <p className="mt-1 text-sm font-bold text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
