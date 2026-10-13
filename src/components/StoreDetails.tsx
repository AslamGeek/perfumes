import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  ExternalLink,
  Edit3,
  CheckCircle2,
  Info,
} from "lucide-react";
import { ShopConfig, getGeneralEnquiryUrl } from "../data/config";

interface StoreDetailsProps {
  config: ShopConfig;
  onOpenDemoCustomizer: () => void;
}

export const StoreDetails: React.FC<StoreDetailsProps> = ({
  config,
  onOpenDemoCustomizer,
}) => {
  return (
    <section id="contact-section" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notice for the Business Owner */}
        <div className="mb-12 p-4 sm:p-5 bg-[#FAF8F4] border-l-4 border-[#B99A61] border-y border-r border-[#E8DFD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#B99A61] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#171614]">
                Demonstration Model For Local Boutique Owner
              </p>
              <p className="text-xs text-[#625D54] mt-0.5">
                The contact numbers, opening hours, and address below are illustrative placeholders. You can test your real store details using our interactive customiser.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenDemoCustomizer}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-[#171614] hover:bg-[#B99A61] text-[#F7F3EB] hover:text-[#171614] text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Customize Store Info</span>
          </button>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B99A61] font-semibold mb-2">
            Visit Our Boutique
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight">
            Store Location & Contact
          </h2>
          <p className="mt-3 text-[#625D54] text-sm sm:text-base leading-relaxed">
            Experience our artisanal fragrances in person at our Proddatur boutique, or connect with our fragrance consultants via WhatsApp for personalised guidance.
          </p>
        </div>

        {/* Grid of Store Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Details List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Boutique Address Card */}
              <div className="p-6 bg-[#FAF8F4] border border-[#E8DFD0] space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B99A61] font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>Boutique Address</span>
                </div>
                <p className="font-serif text-lg text-[#171614] leading-snug">
                  {config.fullAddress}
                </p>
                <div className="pt-2">
                  <a
                    href={config.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B99A61] hover:text-[#171614] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="p-6 bg-[#FAF8F4] border border-[#E8DFD0] space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B99A61] font-semibold">
                  <Clock className="w-4 h-4" />
                  <span>Visiting Hours</span>
                </div>
                <p className="font-serif text-lg text-[#171614] leading-snug">
                  {config.openingHours}
                </p>
                <p className="text-xs text-[#7A746B]">
                  Open all 7 days for retail sampling & gift set consultations.
                </p>
              </div>

              {/* WhatsApp Direct */}
              <div className="p-6 bg-[#FAF8F4] border border-[#E8DFD0] space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#25D366] font-semibold">
                  <MessageCircle className="w-4 h-4" />
                  <span>Primary WhatsApp</span>
                </div>
                <p className="font-serif text-2xl text-[#171614] font-medium">
                  {config.whatsappDisplay}
                </p>
                <div className="pt-1">
                  <a
                    href={getGeneralEnquiryUrl(config.whatsappRaw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#25D366] text-[#171614] text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>

              {/* Telephone & Social */}
              <div className="p-6 bg-[#FAF8F4] border border-[#E8DFD0] space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B99A61] font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>Phone & Instagram</span>
                </div>
                <div>
                  <a
                    href={`tel:${config.phoneRaw}`}
                    className="block font-serif text-xl text-[#171614] hover:text-[#B99A61] transition-colors"
                  >
                    {config.phoneDisplay}
                  </a>
                  <a
                    href={config.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#7A746B] hover:text-[#E1306C] transition-colors mt-2"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{config.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* In-store experience callout */}
            <div className="p-6 bg-[#171614] text-[#F7F3EB] border border-[#2D2A26] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#B99A61] text-xs uppercase tracking-wider font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Complimentary Scent Sampling</span>
                </div>
                <p className="text-xs text-[#D8CEBD]">
                  Visit our counter in Proddatur for a complimentary pulse-point test of genuine aged attars.
                </p>
              </div>

              <a
                href={getGeneralEnquiryUrl(config.whatsappRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 bg-[#B99A61] hover:bg-[#CDB383] text-[#171614] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Inquire Visit Time
              </a>
            </div>
          </div>

          {/* Right Visual Store Card / Google Maps Placeholder */}
          <div className="lg:col-span-5 bg-[#FAF8F4] border border-[#E8DFD0] p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99A61] font-semibold block mb-1">
                Map & Direction
              </span>
              <h3 className="font-serif text-2xl text-[#171614] font-normal">
                Finding Us in Proddatur
              </h3>
            </div>

            {/* Stylized Map View Simulation */}
            <div className="relative aspect-[16/10] bg-[#E8DFD0] border border-[#DFD5C4] overflow-hidden flex flex-col items-center justify-center text-center p-6 group">
              {/* Background map grid effect */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#171614_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#171614] text-[#B99A61] flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <p className="font-serif text-lg font-medium text-[#171614]">
                    Clock Tower Centre, Proddatur
                  </p>
                  <p className="text-xs text-[#625D54]">
                    Heart of Proddatur’s premier commercial shopping district
                  </p>
                </div>

                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#171614] hover:text-white text-[#171614] text-xs font-semibold uppercase tracking-wider border border-[#B99A61] transition-colors shadow-sm"
                >
                  <span>Open Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="space-y-2 text-xs text-[#625D54] leading-relaxed">
              <p>
                <strong>Landmark:</strong> Easily accessible from Proddatur RTC Bus Station and Gandhi Road commercial hub.
              </p>
              <p>
                <strong>Delivery & Doorstep:</strong> We also coordinate local delivery across Proddatur and dispatch across Andhra Pradesh via WhatsApp orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
