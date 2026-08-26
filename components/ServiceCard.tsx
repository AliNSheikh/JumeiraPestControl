import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group overflow-hidden rounded-md bg-white shadow-soft ring-1 ring-slate-100">
      <div className="relative h-52">
        <Image src={service.image} alt={`${service.title} in Dubai`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-mist text-aqua"><Icon size={21} /></span>
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-lime">{service.category}</p>
            <h3 className="text-xl font-black text-navy">{service.title}</h3>
          </div>
        </div>
        <p className="min-h-16 text-sm leading-6 text-slate-600">{service.summary}</p>
        <ul className="mt-4 grid gap-2">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-sm font-semibold text-ink"><Check size={16} className="text-lime" />{benefit}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-md bg-mist px-3 py-2 text-sm font-black text-navy">{service.price}</span>
          <Link className="inline-flex items-center gap-1 text-sm font-black text-aqua hover:text-navy" href={`/services/${service.slug}`}>
            Book this service <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
