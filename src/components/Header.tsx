import React, { useState } from "react";
import { MessageCircle, Menu, X, PhoneCall, ChevronRight } from "lucide-react";
import { ShopConfig, getGeneralEnquiryUrl } from "../data/config";

interface HeaderProps {
  config: ShopConfig;
  onNavigate: (sectionId: string, filterCategory?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  onNavigate,
  activeSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, filterCategory?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(sectionId, filterCategory);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F3EB]/95 backdrop-blur-md border-b border-[#E8DFD0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B99A61]"
          >
            <span className="block font-serif text-2xl sm:text-3xl tracking-[0.15em] font-semibold text-[#171614] group-hover:text-[#B99A61] transition-colors uppercase">
              {config.brandName}
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#7A746B] uppercase font-sans -mt-0.5">
              Proddatur · Artisanal Fragrances
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("hero")}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                activeSection === "hero"
                  ? "text-[#171614] font-medium"
                  : "text-[#625D54] hover:text-[#171614]"
              }`}
            >
              Home
              {activeSection === "hero" && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B99A61]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick("catalogue")}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                activeSection === "catalogue"
                  ? "text-[#171614] font-medium"
                  : "text-[#625D54] hover:text-[#171614]"
              }`}
            >
              Shop All
              {activeSection === "catalogue" && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B99A61]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick("catalogue", "Traditional Attars")}
              className="text-sm tracking-wider uppercase text-[#625D54] hover:text-[#171614] transition-colors py-1"
            >
              Attars
            </button>

            <button
              onClick={() => handleNavClick("catalogue", "Gift Sets")}
              className="text-sm tracking-wider uppercase text-[#625D54] hover:text-[#171614] transition-colors py-1"
            >
              Gift Sets
            </button>

            <button
              onClick={() => handleNavClick("about")}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                activeSection === "about"
                  ? "text-[#171614] font-medium"
                  : "text-[#625D54] hover:text-[#171614]"
              }`}
            >
              About
              {activeSection === "about" && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B99A61]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className={`text-sm tracking-wider uppercase transition-colors relative py-1 ${
                activeSection === "contact"
                  ? "text-[#171614] font-medium"
                  : "text-[#625D54] hover:text-[#171614]"
              }`}
            >
              Contact
              {activeSection === "contact" && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B99A61]" />
              )}
            </button>
          </nav>

          {/* Header Action: Prominent WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getGeneralEnquiryUrl(config.whatsappRaw)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#171614] hover:bg-[#252320] text-[#F7F3EB] hover:text-[#FFFFFF] text-xs font-medium tracking-wider uppercase transition-all duration-200 border border-[#B99A61]/40 shadow-sm hover:shadow group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getGeneralEnquiryUrl(config.whatsappRaw)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#171614] hover:text-[#B99A61] transition-colors"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#171614] hover:text-[#B99A61] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B99A61]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8DFD0] bg-[#F7F3EB] px-5 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick("hero")}
              className="w-full flex items-center justify-between py-3 text-base font-serif font-medium text-[#171614] border-b border-[#E8DFD0]/60 text-left"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-[#7A746B]" />
            </button>
            <button
              onClick={() => handleNavClick("catalogue")}
              className="w-full flex items-center justify-between py-3 text-base font-serif font-medium text-[#171614] border-b border-[#E8DFD0]/60 text-left"
            >
              <span>Complete Collection</span>
              <ChevronRight className="w-4 h-4 text-[#7A746B]" />
            </button>
            <button
              onClick={() => handleNavClick("catalogue", "Traditional Attars")}
              className="w-full flex items-center justify-between py-3 text-base font-serif font-medium text-[#171614] border-b border-[#E8DFD0]/60 text-left"
            >
              <span>Traditional Attars</span>
              <ChevronRight className="w-4 h-4 text-[#7A746B]" />
            </button>
            <button
              onClick={() => handleNavClick("catalogue", "Oud & Arabic Perfumes")}
              className="w-full flex items-center justify-between py-3 text-base font-serif font-medium text-[#171614] border-b border-[#E8DFD0]/60 text-left"
            >
              <span>Oud & Arabic Fragrances</span>
              <ChevronRight className="w-4 h-4 text-[#7A746B]" />
            </button>
            <button
              onClick={() => handleNavClick("catalogue", "Gift Sets")}
              className="w-full flex items-center justify-between py-3 text-base font-serif font-medium text-[#171614] border-b border-[#E8DFD0]/60 text-left"
            >
              <span>Fragrance Gift Sets</span>
              <ChevronRight className="w-4 h-4 text-[#7A746B]" />
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="w-full flex items-center justify-between py-3 text-base font-serif font-medium text-[#171614] border-b border-[#E8DFD0]/60 text-left"
            >
              <span>About Our Philosophy</span>
              <ChevronRight className="w-4 h-4 text-[#7A746B]" />
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="w-full flex items-center justify-between py-3 text-base font-serif font-medium text-[#171614] text-left"
            >
              <span>Store Details & Hours</span>
              <ChevronRight className="w-4 h-4 text-[#7A746B]" />
            </button>
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={getGeneralEnquiryUrl(config.whatsappRaw)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#171614] text-[#F7F3EB] text-sm font-medium tracking-wide uppercase border border-[#B99A61]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${config.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#E8DFD0]/60 text-[#171614] text-xs font-medium tracking-wider uppercase"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B99A61]" />
              <span>Call Shop: {config.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
