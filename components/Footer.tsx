import Link from "next/link";
import { contact, dubaiAreas, services, socialLinks } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="[&_span_span:first-child]:text-white"><Logo /></div>
          <p className="mt-5 text-sm leading-7 text-slate-300">JPC Dubai provides pest control, cleaning, sanitization, and facility support services across Dubai with trained teams and municipality-aware practices.</p>
          <a className="mt-5 inline-flex rounded-md bg-lime px-4 py-2 text-sm font-black text-navy" href={contact.whatsappHref}>Chat on WhatsApp</a>
          <div className="mt-4 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-md border border-white/15 px-3 py-2 text-xs font-bold text-slate-200 hover:text-lime">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Blog", "/blog"],
              ["Contact Us", "/contact"],
              ["Book a Service", "/book"]
            ].map(([label, href]) => (
              <Link href={href} key={label} className="hover:text-lime">{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Services</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            {services.slice(0, 7).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-lime">{service.title}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black">Contact</h3>
          <div className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            <p>{contact.address}</p>
            <p>{contact.hours}</p>
            <a className="block hover:text-lime" href={contact.phoneHref}>{contact.phoneDisplay}</a>
            <a className="block hover:text-lime" href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>Copyright {new Date().getFullYear()} JPC Dubai. All rights reserved.</span>
          <span>Areas: {dubaiAreas.slice(0, 6).join(", ")} and more.</span>
        </div>
      </div>
    </footer>
  );
}
