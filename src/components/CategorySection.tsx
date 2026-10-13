import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, CategoryType } from "../data/products";

interface CategorySectionProps {
  onSelectCategory: (category: CategoryType) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3EB] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B99A61] font-semibold mb-2">
            Curated Collections
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight">
            Explore by Fragrance Artistry
          </h2>
          <p className="mt-3 text-[#625D54] text-sm sm:text-base leading-relaxed">
            From centuries-old deg-bhapka distilled pure attars to majestic Middle Eastern ouds and bespoke celebration hampers.
          </p>
        </div>

        {/* 4 Image-Led Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((category) => (
            <div
              key={category.name}
              onClick={() => onSelectCategory(category.name)}
              className="group cursor-pointer relative flex flex-col bg-[#FFFFFF] border border-[#E8DFD0] hover:border-[#B99A61] transition-all duration-300 shadow-[0_2px_12px_rgba(23,22,20,0.04)] hover:shadow-[0_12px_30px_rgba(23,22,20,0.12)] overflow-hidden"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#171614]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient shade for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Floating quick arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#171614]/70 backdrop-blur-md text-[#E8DFD0] flex items-center justify-center border border-[#B99A61]/40 group-hover:bg-[#B99A61] group-hover:text-[#171614] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Overlay Title at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B99A61] font-semibold block mb-1">
                    Boutique Category
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3EB] group-hover:text-[#FFFFFF] transition-colors leading-tight">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs text-[#625D54] leading-relaxed line-clamp-3 mb-4">
                  {category.description}
                </p>

                <div className="pt-3 border-t border-[#F0E9DC] flex items-center justify-between text-xs">
                  <span className="text-[#877E71] tracking-wider uppercase text-[11px]">
                    View Selection
                  </span>
                  <span className="text-[#B99A61] font-semibold tracking-wide flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
