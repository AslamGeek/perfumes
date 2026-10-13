import React from "react";
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, Flame } from "lucide-react";
import { ShopConfig, getGeneralEnquiryUrl } from "../data/config";

interface HeroProps {
  config: ShopConfig;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onExploreCollection }) => {
  return (
    <section className="relative bg-[#171614] text-[#F7F3EB] overflow-hidden">
      {/* Background with luxury dark tones, warm amber glow, and fragrance imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury crystal attar bottle with warm amber fragrance oil"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-75 contrast-125"
        />
        {/* Warm amber radial overlay and luxury vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#171614] via-[#171614]/85 to-[#171614]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#171614]/40 to-[#171614]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#171614] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Location & Brand kicker */}
          <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#B99A61]">
            <span className="w-8 h-[1px] bg-[#B99A61]" />
            <span className="font-medium tracking-[0.3em]">{config.locationCity}, {config.locationState}</span>
            <span className="w-8 h-[1px] bg-[#B99A61]" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F7F3EB] leading-[1.08]">
            More Than a Fragrance. <br />
            <span className="italic text-[#D8CEBD] font-serif font-light">A Signature.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#D8CEBD]/90 font-light leading-relaxed max-w-2xl">
            Explore captivating attars, rich oud fragrances, and timeless scents for every occasion.
          </p>

          {/* CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreCollection}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B99A61] hover:bg-[#CDB383] text-[#171614] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={getGeneralEnquiryUrl(config.whatsappRaw)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-transparent hover:bg-[#F7F3EB]/10 text-[#F7F3EB] hover:text-[#FFFFFF] text-xs font-medium tracking-[0.2em] uppercase border border-[#B99A61]/60 hover:border-[#B99A61] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights - Pure unboxed metadata without pill badges */}
          <div className="pt-8 sm:pt-12 border-t border-[#B99A61]/20 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#D8CEBD]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#B99A61]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-medium tracking-wider uppercase text-[11px] text-[#F7F3EB]">100% Non-Alcoholic</span>
              </div>
              <p className="text-[11px] text-[#A69E92]">Pure concentrated oils safe on skin & fabrics</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#B99A61]">
                <Flame className="w-4 h-4" />
                <span className="font-medium tracking-wider uppercase text-[11px] text-[#F7F3EB]">Enduring Sillage</span>
              </div>
              <p className="text-[11px] text-[#A69E92]">12 to 16+ hours of projection from single drop</p>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-[#B99A61]">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium tracking-wider uppercase text-[11px] text-[#F7F3EB]">Artisanal Selection</span>
              </div>
              <p className="text-[11px] text-[#A69E92]">Rare Assam Oud, Taif Rose & Kashmiri Kesar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
