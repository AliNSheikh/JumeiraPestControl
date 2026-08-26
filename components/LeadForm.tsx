"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarDays, CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { dubaiAreas, services } from "@/lib/site";
import { LeadFormData, leadSchema } from "@/lib/validation";

export function LeadForm({ selectedService, compact = false }: { selectedService?: string; compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
    defaultValues: {
      service: selectedService || services[0].title,
      area: dubaiAreas[0],
      phone: "+9715"
    }
  });

  async function onSubmit(data: LeadFormData) {
    const directWebhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL;
    const response = await fetch(directWebhook || "/api/lead", {
      method: "POST",
      mode: directWebhook ? "no-cors" : "cors",
      headers: directWebhook ? undefined : { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!directWebhook && !response.ok) throw new Error("Lead request failed");
    setSent(true);
    reset({ service: selectedService || services[0].title, area: dubaiAreas[0], phone: "+9715" });
  }

  const field = "w-full rounded-md border border-slate-200 bg-white px-3 py-3 text-sm text-ink outline-none ring-aqua/25 transition focus:border-aqua focus:ring-4";
  const label = "text-sm font-bold text-ink";

  return (
    <div className="relative overflow-hidden rounded-md bg-white p-5 shadow-soft ring-1 ring-slate-100 sm:p-6">
      {sent && (
        <div className="absolute inset-0 z-10 grid place-items-center bg-white/95 p-6 text-center">
          <div>
            <CheckCircle2 className="mx-auto h-12 w-12 text-lime" />
            <h3 className="mt-4 text-2xl font-black text-navy">Request received</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">JPC Dubai can now connect this lead to email, CRM, or webhook delivery through the configured API route.</p>
            <button className="mt-5 rounded-md bg-navy px-4 py-2 text-sm font-black text-white" onClick={() => setSent(false)}>Send another request</button>
          </div>
        </div>
      )}
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-md bg-mist text-aqua"><CalendarDays /></span>
        <div>
          <h3 className="text-xl font-black text-navy">{compact ? "Quick Quote" : "Request a Free Quote"}</h3>
          <p className="text-sm text-slate-600">Validated Dubai service request form.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={`grid gap-4 ${compact ? "lg:grid-cols-4" : "sm:grid-cols-2"}`}>
        <div>
          <label className={label} htmlFor="fullName">Full name</label>
          <input id="fullName" className={field} {...register("fullName")} placeholder="Your name" />
          {errors.fullName && <p className="mt-1 text-xs font-semibold text-red-600">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" className={field} {...register("phone")} placeholder="+9715XXXXXXXX" />
          {errors.phone && <p className="mt-1 text-xs font-semibold text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" type="email" className={field} {...register("email")} placeholder="name@example.com" />
          {errors.email && <p className="mt-1 text-xs font-semibold text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="service">Service type</label>
          <select id="service" className={field} {...register("service")}>
            {services.map((service) => <option key={service.slug}>{service.title}</option>)}
          </select>
          {errors.service && <p className="mt-1 text-xs font-semibold text-red-600">{errors.service.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="area">Dubai area</label>
          <select id="area" className={field} {...register("area")}>
            {dubaiAreas.map((area) => <option key={area}>{area}</option>)}
          </select>
          {errors.area && <p className="mt-1 text-xs font-semibold text-red-600">{errors.area.message}</p>}
        </div>
        <div>
          <label className={label} htmlFor="preferredDate">Preferred date</label>
          <input id="preferredDate" type="date" className={field} {...register("preferredDate")} />
        </div>
        {!compact && (
          <>
            <div>
              <label className={label} htmlFor="preferredTime">Time slot</label>
              <input id="preferredTime" type="time" className={field} {...register("preferredTime")} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="notes">Specific problem / notes</label>
              <textarea id="notes" className={`${field} min-h-28`} {...register("notes")} placeholder="Tell us what you are seeing, property type, or urgency." />
              {errors.notes && <p className="mt-1 text-xs font-semibold text-red-600">{errors.notes.message}</p>}
            </div>
          </>
        )}
        <button disabled={isSubmitting} className="inline-flex items-center justify-center gap-2 rounded-md bg-aqua px-5 py-3 text-sm font-black text-white shadow-soft hover:bg-navy disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
          {isSubmitting ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </div>
  );
}
