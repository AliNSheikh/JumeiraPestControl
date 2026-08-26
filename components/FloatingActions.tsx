import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:right-6">
      <a href={contact.whatsappHref} className="grid h-14 w-14 place-items-center rounded-full bg-lime text-navy shadow-soft" aria-label="Chat with JPC Dubai on WhatsApp">
        <MessageCircle />
      </a>
      <a href={contact.phoneHref} className="grid h-14 w-14 place-items-center rounded-full bg-aqua text-white shadow-soft" aria-label="Call JPC Dubai">
        <Phone />
      </a>
    </div>
  );
}
