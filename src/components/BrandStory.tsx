import React, { useState } from "react";
import { Compass, Sparkles, Feather, Droplets, Sun, Wind } from "lucide-react";
import { FragranceFamily } from "../data/products";

interface BrandStoryProps {
  onSelectFamilyFilter?: (family: FragranceFamily) => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onSelectFamilyFilter }) => {
  const [activeFamily, setActiveFamily] = useState<FragranceFamily>("Woody");

  const families: {
    name: FragranceFamily;
    icon: React.ElementType;
    vibe: string;
    description: string;
    examples: string;
  }[] = [
    {
      name: "Woody",
      icon: Feather,
      vibe: "Grounded · Dignified · Mysterious",
      description: "Rooted in resinous agarwood (oud), cedarwood bark, and smoky frankincense. Woody notes mature with body heat, projecting quiet confidence.",
      examples: "Royal Oud, Arabian Woods, Dehn Al Oud Cambodi",
    },
    {
      name: "Musky",
      icon: Wind,
      vibe: "Silky · Intimate · Clean",
      description: "Soft, skin-close notes that whisper rather than shout. Musks adapt to your natural body chemistry, creating a pure personal aura.",
      examples: "White Musk Attar, Velvet Rose & Musk",
    },
    {
      name: "Floral",
      icon: Droplets,
      vibe: "Romantic · Fresh · Poetic",
      description: "Hydro-distilled pure rose petals, jasmine sambac, and delicate blossoms blended into creamy sandalwood bases without harsh alcohol bite.",
      examples: "Rose Essence Attar, Pure Taif Rose",
    },
    {
      name: "Amber",
      icon: Sparkles,
      vibe: "Warm · Opulent · Enveloping",
      description: "Golden tree resins, rich vanilla beans, and sweet labdanum that surround you with comforting warmth on cool evenings.",
      examples: "Amber Nights, Shamama Tul Amber",
    },
    {
      name: "Fresh",
      icon: Sun,
      vibe: "Crisp · Uplifting · Invigorating",
      description: "Sparkling Mediterranean bergamot, aquatic accords, and zesty citrus harmonised with light woods to combat warm weather.",
      examples: "Fresh Aqua Breeze, Citrus Oud Elixir",
    },
  ];

  const currentFamilyData = families.find((f) => f.name === activeFamily) || families[0];

  return (
    <section className="py-20 sm:py-28 bg-[#171614] text-[#F7F3EB] relative overflow-hidden">
      {/* Decorative luxury radial background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B99A61]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B99A61]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#B99A61] font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Fragrance Exploration</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-normal tracking-tight text-[#F7F3EB] leading-[1.15]">
              Fragrance Is Personal. <br />
              <span className="italic text-[#D8CEBD]">Finding Yours Should Be Too.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#D8CEBD]/90 font-light leading-relaxed">
              <p>
                A scent is the invisible signature you leave in every room you enter. Unlike mass-manufactured alcohol sprays that evaporate quickly and smell identical on everyone, traditional concentrated attars and pure perfume oils interact directly with your skin’s temperature and chemistry.
              </p>
              <p>
                Whether you gravitate toward the grounding depth of aged agarwood, the comforting embrace of silky white musk, or the romance of hydro-distilled Damascena roses, your fragrance journey is about finding notes that feel instinctively like you.
              </p>
              <p>
                We guide you through diverse olfactory families, helping you discover perfumes tailored for daily wear, festive gatherings, or meaningful gifting.
              </p>
            </div>

            {/* Subtle editorial callout */}
            <div className="pt-4 border-t border-[#B99A61]/20 flex items-center gap-6 text-xs text-[#A69E92]">
              <div>
                <span className="block font-serif text-2xl text-[#B99A61]">100%</span>
                <span>Alcohol-free oil base</span>
              </div>
              <div className="w-[1px] h-8 bg-[#332F2A]" />
              <div>
                <span className="block font-serif text-2xl text-[#B99A61]">3-Tier</span>
                <span>Top, Heart & Base longevity</span>
              </div>
              <div className="w-[1px] h-8 bg-[#332F2A]" />
              <div>
                <span className="block font-serif text-2xl text-[#B99A61]">Bespoke</span>
                <span>Consultation on WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Fragrance Family Explorer */}
          <div className="lg:col-span-6">
            <div className="bg-[#1F1D1A] border border-[#332F2A] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#332F2A]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#B99A61] font-semibold block">
                    Interactive Scent Guide
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3EB]">
                    Explore Fragrance Families
                  </h3>
                </div>
                <span className="text-xs text-[#877E71] hidden sm:inline">Tap to explore</span>
              </div>

              {/* Family Selector Tabs (Functional Segmented Control) */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-6">
                {families.map((family) => {
                  const Icon = family.icon;
                  const isActive = activeFamily === family.name;
                  return (
                    <button
                      key={family.name}
                      onClick={() => setActiveFamily(family.name)}
                      className={`flex flex-col items-center justify-center p-3 text-center transition-all cursor-pointer border ${
                        isActive
                          ? "bg-[#B99A61] text-[#171614] border-[#B99A61] font-medium"
                          : "bg-[#171614] text-[#D8CEBD] border-[#332F2A] hover:border-[#B99A61]/60 hover:text-[#FFFFFF]"
                      }`}
                    >
                      <Icon className="w-4 h-4 mb-1.5" />
                      <span className="text-xs tracking-wider">{family.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Family Details Box */}
              <div className="bg-[#171614] p-5 sm:p-6 border border-[#2D2A26] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-2xl text-[#F7F3EB] font-normal">
                    {currentFamilyData.name} Accords
                  </h4>
                  <span className="text-xs text-[#B99A61] italic font-serif">
                    {currentFamilyData.vibe}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#D8CEBD] leading-relaxed">
                  {currentFamilyData.description}
                </p>

                <div className="pt-3 border-t border-[#2D2A26] text-xs">
                  <span className="text-[#877E71] block mb-1 uppercase tracking-wider text-[10px]">
                    Featured in our boutique:
                  </span>
                  <span className="text-[#F7F3EB] font-medium">
                    {currentFamilyData.examples}
                  </span>
                </div>

                {onSelectFamilyFilter && (
                  <button
                    onClick={() => onSelectFamilyFilter(currentFamilyData.name)}
                    className="w-full mt-2 py-2.5 bg-[#252320] hover:bg-[#B99A61] text-[#F7F3EB] hover:text-[#171614] text-xs uppercase tracking-wider font-medium transition-colors text-center border border-[#3D3833]"
                  >
                    Filter Catalogue by {currentFamilyData.name} &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
