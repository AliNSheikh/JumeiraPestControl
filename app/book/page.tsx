import { Suspense } from "react";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/Section";

function BookingPageContent({ searchParams }: { searchParams: { service?: string } }) {
  return (
    <>
      <section className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-wider text-lime">Book a service</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black sm:text-5xl">Request a free JPC Dubai quote.</h1>
        </div>
      </section>
      <Section className="bg-mist">
        <LeadForm selectedService={searchParams.service} />
      </Section>
    </>
  );
}

export default function BookPage({ searchParams }: { searchParams: { service?: string } }) {
  return (
    <Suspense>
      <BookingPageContent searchParams={searchParams} />
    </Suspense>
  );
}
