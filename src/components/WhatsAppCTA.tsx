import React, { useState } from "react";
import { MessageCircle, Sparkles, Send } from "lucide-react";
import { ShopConfig, createWhatsAppUrl } from "../data/config";

interface WhatsAppCTAProps {
  config: ShopConfig;
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({ config }) => {
  const [selectedPreference, setSelectedPreference] = useState<string>("Woody");
  const [customNote, setCustomNote] = useState<string>("");

  const preferences = ["Woody", "Musky", "Floral", "Fresh", "Amber", "Oriental"];

  const generateDynamicWhatsAppUrl = () => {
    let msg = `Hello! I'm looking for a particular fragrance from OUD & AMBER. `;
    if (customNote.trim()) {
      msg += `I love scents with notes like "${customNote.trim()}". What would you recommend from your collection in Proddatur?`;
    } else {
      msg += `I prefer ${selectedPreference.toLowerCase()} notes. What would you recommend for me?`;
    }
    return createWhatsAppUrl(config.whatsappRaw, msg);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#171614] text-[#F7F3EB] relative overflow-hidden border-b border-[#2A2825]">
      {/* Warm amber backdrop illumination */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B99A61]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B99A61] font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Personalised Scent Finder</span>
        </div>

        {/* Required Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F7F3EB] leading-tight">
          Looking for a Particular Fragrance?
        </h2>

        {/* Required Text */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#D8CEBD] max-w-2xl mx-auto font-light leading-relaxed">
          Tell us what you love—woody, musky, floral, or fresh—and explore your next favourite scent.
        </p>

        {/* Interactive Preference Chips for Quick WhatsApp Customization */}
        <div className="mt-8 pt-6 border-t border-[#332F2A] max-w-xl mx-auto">
          <p className="text-xs uppercase tracking-wider text-[#A69E92] mb-3">
            Select your preferred scent profile:
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            {preferences.map((pref) => {
              const isSelected = selectedPreference === pref && !customNote;
              return (
                <button
                  key={pref}
                  type="button"
                  onClick={() => {
                    setSelectedPreference(pref);
                    setCustomNote("");
                  }}
                  className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-[#B99A61] text-[#171614] border-[#B99A61] font-semibold shadow-md"
                      : "bg-[#252320] text-[#D8CEBD] border-[#3D3833] hover:border-[#B99A61]/60"
                  }`}
                >
                  {pref}
                </button>
              );
            })}
          </div>

          {/* Optional specific note input */}
          <div className="relative mb-8">
            <input
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Or type specific notes (e.g. Kashmiri Saffron, Vanilla, Dark Oud, Sandalwood)..."
              className="w-full bg-[#252320] text-xs text-[#F7F3EB] placeholder-[#80776D] px-4 py-3 border border-[#3D3833] focus:border-[#B99A61] focus:outline-none transition-colors"
            />
          </div>

          {/* Main WhatsApp CTA Button */}
          <div>
            <a
              href={generateDynamicWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-[#171614] font-semibold text-xs uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-[#171614] group-hover:scale-110 transition-transform" />
              <span>Chat With Us</span>
              <Send className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-3 text-[11px] text-[#A69E92]">
              Opens WhatsApp with your prefilled scent request · Connected to {config.whatsappDisplay}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
