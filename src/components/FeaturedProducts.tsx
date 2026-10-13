import React from "react";
import { MessageCircle, Eye, Sparkles } from "lucide-react";
import { Product } from "../data/products";
import { ShopConfig, getProductEnquiryUrl } from "../data/config";

interface FeaturedProductsProps {
  products: Product[];
  config: ShopConfig;
  onOpenProductModal: (product: Product) => void;
  onViewAll: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  config,
  onOpenProductModal,
  onViewAll,
}) => {
  // Take the 6 required sample featured products
  const featuredList = products.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B99A61] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Boutique Signatures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight">
              Featured Fragrance Creations
            </h2>
            <p className="mt-3 text-[#625D54] text-sm sm:text-base leading-relaxed">
              Hand-selected demonstrations of our most popular attars, oriental perfume oils, and celebration sets in Proddatur.
            </p>
          </div>

          <button
            onClick={onViewAll}
            className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#171614] hover:text-[#B99A61] pb-1 border-b border-[#171614] hover:border-[#B99A61] transition-all cursor-pointer"
          >
            <span>View Full Catalogue ({products.length} Fragrances)</span>
            <span>&rarr;</span>
          </button>
        </div>

        {/* 6 Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => {
            const whatsappUrl = getProductEnquiryUrl(
              product.name,
              product.price,
              product.defaultSize,
              config.whatsappRaw
            );

            return (
              <article
                key={product.id}
                className="group flex flex-col bg-[#F7F3EB]/40 border border-[#E8DFD0] hover:border-[#B99A61] transition-all duration-300 hover:shadow-lg"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#171614] cursor-pointer"
                     onClick={() => onOpenProductModal(product)}>
                  <img
                    src={product.image}
                    alt={`${product.name} luxury attar bottle`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#171614]/20 group-hover:bg-[#171614]/10 transition-colors" />

                  {/* Clean unboxed badge if present */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#171614]/90 backdrop-blur-sm text-[#F7F3EB] text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-[#B99A61]/40 font-medium">
                      {product.badge}
                    </div>
                  )}

                  {/* Quick View Hover Button */}
                  <div className="absolute inset-x-0 bottom-4 px-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenProductModal(product);
                      }}
                      className="w-full py-2.5 bg-[#171614]/90 backdrop-blur-md hover:bg-[#171614] text-[#F7F3EB] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 border border-[#B99A61]/50 shadow"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#B99A61]" />
                      <span>Quick View & Notes</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata: unboxed clean text with bullet separators */}
                    <div className="flex items-center gap-2 text-xs text-[#7A746B] mb-2 tracking-wide">
                      <span className="text-[#8B7347] font-medium">{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.fragranceFamily}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.defaultSize}</span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onOpenProductModal(product)}
                      className="font-serif text-2xl text-[#171614] hover:text-[#B99A61] transition-colors cursor-pointer font-normal"
                    >
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs text-[#625D54] leading-relaxed line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Olfactory Notes preview */}
                    <div className="mt-3 pt-3 border-t border-[#E8DFD0]/60 text-[11px] text-[#7A746B] flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                      <span className="text-[#171614] font-medium">Notes:</span>
                      <span>{product.notes.heart.join(", ")} & {product.notes.base[0]}</span>
                    </div>
                  </div>

                  {/* Price & Working WhatsApp CTA */}
                  <div className="mt-6 pt-4 border-t border-[#E8DFD0] flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#7A746B]">
                        Starting from
                      </span>
                      <span className="font-serif text-2xl font-semibold text-[#171614]">
                        {config.currencySymbol}{product.price}
                      </span>
                    </div>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#171614] hover:bg-[#2A2825] text-[#F7F3EB] text-xs font-medium uppercase tracking-wider border border-[#B99A61]/50 shadow-sm transition-all group/btn"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover/btn:scale-110 transition-transform" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
