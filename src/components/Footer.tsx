import React from "react";
import { MessageCircle, MapPin, Phone, Instagram, ArrowUp } from "lucide-react";
import { ShopConfig, getGeneralEnquiryUrl } from "../data/config";
import { CATEGORIES, CategoryType } from "../data/products";

interface FooterProps {
  config: ShopConfig;
  onNavigate: (sectionId: string, filterCategory?: string) => void;
  onSelectCategory: (category: CategoryType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  onNavigate,
  onSelectCategory,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171614] text-[#E8DFD0] border-t border-[#2A2825] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2D2A26]">
          {/* Brand Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-3xl font-semibold tracking-[0.15em] text-[#F7F3EB] uppercase block">
                {config.brandName}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A61] font-sans block mt-0.5">
                {config.tagline}
              </span>
            </div>

            <p className="text-xs text-[#D8CEBD]/80 leading-relaxed max-w-sm font-light">
              Proddatur’s premier showcase of non-alcoholic concentrated attars, aged agarwoods, artisanal Arabic perfumes, and bespoke fragrance gift sets.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getGeneralEnquiryUrl(config.whatsappRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#252320] text-[#25D366] hover:bg-[#25D366] hover:text-[#171614] flex items-center justify-center transition-colors border border-[#3A3631]"
                aria-label="WhatsApp enquiry"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${config.phoneRaw}`}
                className="w-9 h-9 rounded-full bg-[#252320] text-[#E8DFD0] hover:bg-[#B99A61] hover:text-[#171614] flex items-center justify-center transition-colors border border-[#3A3631]"
                aria-label="Call phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#252320] text-[#E8DFD0] hover:bg-[#E1306C] hover:text-[#FFFFFF] flex items-center justify-center transition-colors border border-[#3A3631]"
                aria-label="Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B99A61] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("hero")}
                  className="text-[#D8CEBD] hover:text-[#B99A61] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("catalogue")}
                  className="text-[#D8CEBD] hover:text-[#B99A61] transition-colors"
                >
                  Full Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-[#D8CEBD] hover:text-[#B99A61] transition-colors"
                >
                  About Our Scent Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-[#D8CEBD] hover:text-[#B99A61] transition-colors"
                >
                  Store Location & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B99A61] font-semibold">
              Fragrance Lines
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <button
                    onClick={() => {
                      onNavigate("catalogue");
                      onSelectCategory(cat.name);
                    }}
                    className="text-[#D8CEBD] hover:text-[#B99A61] transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B99A61] font-semibold">
              Visit Boutique
            </h4>
            <div className="space-y-2 text-xs text-[#D8CEBD]/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B99A61] shrink-0 mt-0.5" />
                <span className="leading-snug">{config.locationCity}, {config.locationState}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B99A61] shrink-0" />
                <span>{config.phoneDisplay}</span>
              </div>
              <p className="text-[11px] text-[#A69E92] pt-1">
                {config.openingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8174]">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {config.brandName}. All rights reserved.
            </p>
            <p className="text-[11px] text-[#A69E92]">
              Sales Demonstration Model · Designed for fine attar & perfume boutiques in Proddatur, Andhra Pradesh.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#D8CEBD] hover:text-[#B99A61] transition-colors py-1 px-3 border border-[#332F2A] hover:border-[#B99A61]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
