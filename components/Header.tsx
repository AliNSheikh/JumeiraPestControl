"use client";

import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { contact, services, socialLinks } from "@/lib/site";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 py-2 text-xs font-medium sm:justify-between sm:px-6 lg:px-8">
          <a className="flex items-center gap-1.5 hover:text-lime" href={contact.phoneHref}><Phone size={14} />{contact.phoneDisplay}</a>
          <a className="hidden items-center gap-1.5 hover:text-lime sm:flex" href={`mailto:${contact.email}`}><Mail size={14} />{contact.email}</a>
          <span className="hidden items-center gap-1.5 md:flex"><Clock size={14} />{contact.hours}</span>
          <span className="hidden items-center gap-1.5 lg:flex"><MapPin size={14} />Dubai, UAE</span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link className="text-sm font-bold text-ink hover:text-aqua" href={item.href} key={item.href}>{item.label}</Link>
          ))}
          <div className="group relative">
            <button className="text-sm font-bold text-ink hover:text-aqua">All Services</button>
            <div className="invisible absolute right-0 top-7 grid w-72 gap-1 rounded-md bg-white p-3 opacity-0 shadow-soft ring-1 ring-slate-100 transition group-hover:visible group-hover:opacity-100">
              {services.slice(0, 7).map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-md px-3 py-2 text-sm font-semibold text-ink hover:bg-mist">
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.phoneHref} className="rounded-md border border-aqua px-4 py-2 text-sm font-black text-aqua hover:bg-mist">Call</a>
          <Link href="/book" className="rounded-md bg-aqua px-5 py-2.5 text-sm font-black text-white shadow-soft hover:bg-navy">Book a Service</Link>
        </div>
        <button className="rounded-md border border-slate-200 p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-navy/40 lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto flex h-full w-[min(92vw,390px)] flex-col bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <Logo />
              <button className="rounded-md border border-slate-200 p-2" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            </div>
            <nav className="mt-8 grid gap-2">
              {nav.map((item) => (
                <Link onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-base font-bold text-ink hover:bg-mist" href={item.href} key={item.href}>{item.label}</Link>
              ))}
              {services.map((service) => (
                <Link onClick={() => setOpen(false)} key={service.slug} href={`/services/${service.slug}`} className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-mist">
                  {service.title}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="rounded-md bg-mist px-3 py-2 text-sm font-bold text-ink">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-auto grid grid-cols-2 gap-3">
              <a className="rounded-md bg-navy px-4 py-3 text-center text-sm font-black text-white" href={contact.phoneHref}>Call</a>
              <a className="rounded-md bg-lime px-4 py-3 text-center text-sm font-black text-navy" href={contact.whatsappHref}>WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
