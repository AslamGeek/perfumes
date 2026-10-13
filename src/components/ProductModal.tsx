import React, { useState, useEffect } from "react";
import { X, MessageCircle, ShieldCheck, Clock, Compass, Sparkles, Check, Send } from "lucide-react";
import { Product } from "../data/products";
import { ShopConfig, getProductEnquiryUrl } from "../data/config";

interface ProductModalProps {
  product: Product | null;
  config: ShopConfig;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  config,
  onClose,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    if (product) {
      setSelectedSize(product.defaultSize || product.bottleSizes[0]);
    }
  }, [product]);

  // Keyboard Escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getProductEnquiryUrl(
    product.name,
    product.price,
    selectedSize,
    config.whatsappRaw
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#171614]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200"
    >
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative bg-[#FFFFFF] border border-[#E8DFD0] max-w-4xl w-full shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 md:bg-[#F7F3EB] rounded-full flex items-center justify-center text-[#171614] hover:text-[#B99A61] border border-[#E8DFD0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B99A61]"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Product Image */}
        <div className="md:w-1/2 relative bg-[#171614] min-h-[280px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/70 via-transparent to-transparent md:hidden" />

          {product.badge && (
            <div className="absolute top-4 left-4 bg-[#171614]/90 backdrop-blur-sm text-[#F7F3EB] text-[10px] uppercase tracking-[0.2em] px-3 py-1 border border-[#B99A61]/50 font-medium">
              {product.badge}
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#B99A61] font-semibold">
              {product.category}
            </span>
            <h2 className="font-serif text-2xl text-white">
              {product.name}
            </h2>
          </div>
        </div>

        {/* Right Column: Details & WhatsApp Action */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between space-y-6">
          <div>
            {/* Header info */}
            <div className="hidden md:block">
              <div className="flex items-center gap-2 text-xs text-[#7A746B] mb-1.5 tracking-wide">
                <span className="text-[#8B7347] font-medium">{product.category}</span>
                <span aria-hidden="true">·</span>
                <span>{product.fragranceFamily}</span>
              </div>
              <h2 id="modal-product-title" className="font-serif text-3xl text-[#171614] font-normal">
                {product.name}
              </h2>
            </div>

            {/* Price Banner */}
            <div className="mt-3 py-3 border-y border-[#F0E9DC] flex items-baseline justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#7A746B] block">
                  Price in Proddatur
                </span>
                <span className="font-serif text-3xl font-semibold text-[#171614]">
                  {config.currencySymbol}{product.price}
                </span>
              </div>
              <span className="text-xs text-[#25D366] font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>Ready for WhatsApp enquiry</span>
              </span>
            </div>

            {/* Description */}
            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#171614] mb-1.5">
                Fragrance Profile
              </h3>
              <p className="text-xs sm:text-sm text-[#625D54] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mt-5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614] mb-2">
                Available Bottle Sizes:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.bottleSizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all border cursor-pointer ${
                        isSelected
                          ? "bg-[#171614] text-[#F7F3EB] border-[#171614] shadow-sm"
                          : "bg-[#FAF8F4] text-[#625D54] border-[#E8DFD0] hover:border-[#B99A61]"
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Olfactory Notes Pyramid */}
            <div className="mt-6 p-4 bg-[#FAF8F4] border border-[#E8DFD0] space-y-2.5">
              <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#B99A61] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Olfactory Pyramid</span>
              </div>

              <div className="text-xs space-y-1.5">
                <div>
                  <span className="text-[#171614] font-medium mr-1.5">Top Notes:</span>
                  <span className="text-[#625D54]">{product.notes.top.join(", ")}</span>
                </div>
                <div>
                  <span className="text-[#171614] font-medium mr-1.5">Heart Notes:</span>
                  <span className="text-[#625D54]">{product.notes.heart.join(", ")}</span>
                </div>
                <div>
                  <span className="text-[#171614] font-medium mr-1.5">Base Notes:</span>
                  <span className="text-[#625D54]">{product.notes.base.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Longevity & Occasion Spec Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FAF8F4] border border-[#E8DFD0]">
                <span className="text-[10px] text-[#7A746B] uppercase tracking-wider block flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#B99A61]" />
                  <span>Longevity</span>
                </span>
                <span className="font-medium text-[#171614] mt-0.5 block">
                  {product.longevity}
                </span>
              </div>

              <div className="p-3 bg-[#FAF8F4] border border-[#E8DFD0]">
                <span className="text-[10px] text-[#7A746B] uppercase tracking-wider block flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#B99A61]" />
                  <span>Formulation</span>
                </span>
                <span className="font-medium text-[#171614] mt-0.5 block truncate" title={product.concentration}>
                  {product.concentration}
                </span>
              </div>
            </div>

            {/* How to apply tip */}
            <div className="mt-4 p-3 border-l-2 border-[#B99A61] bg-[#FAF8F4] text-[11px] text-[#625D54] leading-relaxed">
              <strong className="text-[#171614]">Application Tip:</strong> Apply a single drop using the glass rod applicator to pulse points (wrists, behind ear lobes, collarbone). Gently dab without rubbing to preserve top notes.
            </div>
          </div>

          {/* Action CTA: Enquire on WhatsApp */}
          <div className="pt-4 border-t border-[#E8DFD0]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-[#171614] text-xs font-semibold uppercase tracking-[0.2em] shadow-lg hover:shadow-xl transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-[#171614] group-hover:scale-110 transition-transform" />
              <span>Enquire for {selectedSize} on WhatsApp</span>
              <Send className="w-4 h-4 opacity-75 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-2 text-[11px] text-center text-[#7A746B]">
              Direct boutique chat with prefilled message · No commitment required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
