import React from "react";
import { Clock, Layers, MessageSquareHeart, Send, Check } from "lucide-react";

export const Benefits: React.FC = () => {
  const benefitsList = [
    {
      id: "occasions",
      title: "Fragrances for Every Occasion",
      subtitle: "Tailored to daily life & grand gatherings",
      description: "From subtle daytime musks designed for the workplace to rich, commanding agarwood attars for weddings, festivals, and spiritual contemplation.",
      icon: Clock,
      highlight: "Work · Prayer · Celebrations",
    },
    {
      id: "profiles",
      title: "Diverse Scent Profiles",
      subtitle: "Unrivalled olfactory variety",
      description: "An expansive palette encompassing rare Assam oudh, traditional hydro-distilled roses, warm fossilised amber, spicy oriental blends, and modern fresh accords.",
      icon: Layers,
      highlight: "Oud · Amber · Musk · Floral · Fresh",
    },
    {
      id: "assistance",
      title: "Personalised Scent Assistance",
      subtitle: "Bespoke one-on-one recommendations",
      description: "Not sure which fragrance suits your skin or climate? We provide tailored suggestions based on your fragrance history and desired longevity.",
      icon: MessageSquareHeart,
      highlight: "Custom Notes Consultation",
    },
    {
      id: "whatsapp",
      title: "Convenient WhatsApp Enquiries",
      subtitle: "Direct boutique access with zero friction",
      description: "Inquire about prices, bottle sizes, custom gift packaging, or availability with a single tap. Friendly, local customer service directly on your phone.",
      icon: Send,
      highlight: "Instant Replies & Availability",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EB] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B99A61] font-semibold mb-2">
            The Boutique Experience
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight">
            Why Patrons Choose OUD & AMBER
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#7A746B] italic">
            * Proposed service features curated for your Proddatur boutique model
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsList.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className="bg-[#FFFFFF] p-8 border border-[#E8DFD0] hover:border-[#B99A61] transition-all duration-300 flex flex-col justify-between shadow-[0_2px_8px_rgba(23,22,20,0.03)] hover:shadow-lg group"
              >
                <div>
                  {/* Natural Editorial Numbering & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-lg text-[#B99A61] font-semibold">
                      0{idx + 1}.
                    </span>
                    <div className="w-10 h-10 bg-[#F7F3EB] flex items-center justify-center text-[#171614] group-hover:bg-[#B99A61] group-hover:text-[#171614] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-[#171614] mb-1 font-normal group-hover:text-[#B99A61] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#8A8174] font-medium mb-3">
                    {benefit.subtitle}
                  </p>
                  <p className="text-xs text-[#625D54] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E9DC] flex items-center gap-1.5 text-[11px] text-[#171614] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#B99A61]" />
                  <span>{benefit.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
