import React, { useState, useMemo } from "react";
import { Search, X, SlidersHorizontal, MessageCircle, Eye, RotateCcw } from "lucide-react";
import { Product, CategoryType, FragranceFamily, CATEGORIES, FRAGRANCE_FAMILIES } from "../data/products";
import { ShopConfig, getProductEnquiryUrl } from "../data/config";

interface CatalogueProps {
  products: Product[];
  config: ShopConfig;
  selectedCategory: CategoryType | "All";
  onSelectCategory: (category: CategoryType | "All") => void;
  selectedFamily: FragranceFamily | "All";
  onSelectFamily: (family: FragranceFamily | "All") => void;
  onOpenProductModal: (product: Product) => void;
}

export const Catalogue: React.FC<CatalogueProps> = ({
  products,
  config,
  selectedCategory,
  onSelectCategory,
  selectedFamily,
  onSelectFamily,
  onOpenProductModal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "name">("featured");

  // Filtering and Sorting
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== "All" && p.category !== selectedCategory) {
          return false;
        }
        // Fragrance family filter
        if (selectedFamily !== "All" && p.fragranceFamily !== selectedFamily) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchName = p.name.toLowerCase().includes(query);
          const matchDesc = p.description.toLowerCase().includes(query);
          const matchNotes = [
            ...p.notes.top,
            ...p.notes.heart,
            ...p.notes.base,
          ].some((n) => n.toLowerCase().includes(query));
          const matchFamily = p.fragranceFamily.toLowerCase().includes(query);
          const matchCat = p.category.toLowerCase().includes(query);
          return matchName || matchDesc || matchNotes || matchFamily || matchCat;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "name") return a.name.localeCompare(b.name);
        // "featured" default order (keep original with isFeatured first)
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [products, selectedCategory, selectedFamily, searchQuery, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    onSelectCategory("All");
    onSelectFamily("All");
    setSortBy("featured");
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    selectedFamily !== "All" ||
    sortBy !== "featured";

  return (
    <section id="catalogue-section" className="py-20 sm:py-28 bg-[#F7F3EB] border-b border-[#E8DFD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B99A61] font-semibold mb-2">
            The Complete Boutique Vault
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight">
            Artisanal Attars & Perfumes
          </h2>
          <p className="mt-3 text-[#625D54] text-sm sm:text-base leading-relaxed">
            Search our curated catalogue by fragrance notes, category, or olfactory family. Every item is available for instant WhatsApp enquiry.
          </p>
        </div>

        {/* Filter Bar Controls */}
        <div className="bg-white p-5 sm:p-6 border border-[#E8DFD0] shadow-sm mb-10 space-y-5">
          {/* Top row: Search input and Sorting */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8A8174] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search attars by name, notes (e.g. Amber, Rose, Musk, Cambodian Oud)..."
                className="w-full bg-[#FAF8F4] text-xs sm:text-sm text-[#171614] placeholder-[#8A8174] pl-10 pr-9 py-3 border border-[#E8DFD0] focus:border-[#B99A61] focus:bg-white focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8174] hover:text-[#171614]"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-auto min-w-[220px]">
              <label htmlFor="sort-select" className="text-xs text-[#7A746B] whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort products"
                className="w-full bg-[#FAF8F4] text-xs font-medium text-[#171614] border border-[#E8DFD0] px-3 py-3 focus:border-[#B99A61] focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs (Interactive Segmented Buttons) */}
          <div className="pt-4 border-t border-[#F0E9DC]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#8A8174] mr-2 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Category:</span>
              </span>

              <button
                onClick={() => onSelectCategory("All")}
                className={`px-3.5 py-1.5 text-xs tracking-wider transition-colors cursor-pointer border ${
                  selectedCategory === "All"
                    ? "bg-[#171614] text-[#F7F3EB] border-[#171614] font-medium"
                    : "bg-[#FAF8F4] text-[#625D54] border-[#E8DFD0] hover:border-[#B99A61] hover:text-[#171614]"
                }`}
              >
                All ({products.length})
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => onSelectCategory(cat.name)}
                  className={`px-3.5 py-1.5 text-xs tracking-wider transition-colors cursor-pointer border ${
                    selectedCategory === cat.name
                      ? "bg-[#171614] text-[#F7F3EB] border-[#171614] font-medium"
                      : "bg-[#FAF8F4] text-[#625D54] border-[#E8DFD0] hover:border-[#B99A61] hover:text-[#171614]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Fragrance Family Filter Tabs */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-xs uppercase tracking-wider text-[#8A8174] mr-2">
              Scent Family:
            </span>

            <button
              onClick={() => onSelectFamily("All")}
              className={`px-2.5 py-1 text-[11px] tracking-wide transition-colors cursor-pointer ${
                selectedFamily === "All"
                  ? "bg-[#B99A61] text-[#171614] font-semibold"
                  : "bg-transparent text-[#7A746B] hover:text-[#171614]"
              }`}
            >
              All Families
            </button>

            {FRAGRANCE_FAMILIES.map((fam) => (
              <button
                key={fam}
                onClick={() => onSelectFamily(fam)}
                className={`px-2.5 py-1 text-[11px] tracking-wide transition-colors cursor-pointer ${
                  selectedFamily === fam
                    ? "bg-[#B99A61] text-[#171614] font-semibold"
                    : "bg-transparent text-[#7A746B] hover:text-[#171614]"
                }`}
              >
                {fam}
              </button>
            ))}

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="ml-auto inline-flex items-center gap-1 text-[11px] text-[#987B43] hover:text-[#171614] underline font-medium cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-[#7A746B] mb-6 px-1">
          <span>
            Showing <strong className="text-[#171614] font-semibold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? "fragrance" : "fragrances"}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedFamily !== "All" && ` (${selectedFamily})`}
          </span>

          {searchQuery && (
            <span className="italic">
              Matching &ldquo;{searchQuery}&rdquo;
            </span>
          )}
        </div>

        {/* Products Grid or Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-[#E8DFD0] p-12 sm:p-16 text-center max-w-xl mx-auto shadow-sm">
            <div className="w-16 h-16 bg-[#F7F3EB] rounded-full mx-auto flex items-center justify-center text-[#B99A61] mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#171614] font-normal mb-2">
              No fragrances match your search
            </h3>
            <p className="text-xs sm:text-sm text-[#625D54] leading-relaxed mb-6">
              We couldn&apos;t find any attars or perfume oils matching &ldquo;{searchQuery || selectedCategory}&rdquo;. Try another term or reset your filters to see the full collection.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#171614] text-[#F7F3EB] text-xs uppercase tracking-wider font-medium hover:bg-[#B99A61] hover:text-[#171614] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Show All Fragrances</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const whatsappUrl = getProductEnquiryUrl(
                product.name,
                product.price,
                product.defaultSize,
                config.whatsappRaw
              );

              return (
                <article
                  key={product.id}
                  className="group flex flex-col bg-white border border-[#E8DFD0] hover:border-[#B99A61] transition-all duration-300 hover:shadow-lg"
                >
                  {/* Product Image Frame */}
                  <div
                    className="relative aspect-[4/4.5] overflow-hidden bg-[#171614] cursor-pointer"
                    onClick={() => onOpenProductModal(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#171614]/15 group-hover:bg-[#171614]/5 transition-colors" />

                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-[#171614]/90 backdrop-blur-sm text-[#F7F3EB] text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 border border-[#B99A61]/40 font-medium">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-x-0 bottom-4 px-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenProductModal(product);
                        }}
                        className="w-full py-2.5 bg-[#171614]/90 backdrop-blur-md hover:bg-[#171614] text-[#F7F3EB] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 border border-[#B99A61]/50 shadow cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#B99A61]" />
                        <span>View Notes & Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Clean Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#7A746B] mb-2 tracking-wide">
                        <span className="text-[#8B7347] font-medium">{product.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.fragranceFamily}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.defaultSize}</span>
                      </div>

                      <h3
                        onClick={() => onOpenProductModal(product)}
                        className="font-serif text-2xl text-[#171614] hover:text-[#B99A61] transition-colors cursor-pointer font-normal"
                      >
                        {product.name}
                      </h3>

                      <p className="mt-2 text-xs text-[#625D54] leading-relaxed line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {/* Bottle sizes available */}
                      <div className="mt-3 text-[11px] text-[#7A746B] flex items-center gap-1.5">
                        <span className="text-[#171614] font-medium">Sizes:</span>
                        <span>{product.bottleSizes.join(" / ")}</span>
                      </div>
                    </div>

                    {/* Price & Working WhatsApp Enquiry CTA */}
                    <div className="mt-6 pt-4 border-t border-[#E8DFD0] flex items-center justify-between gap-3">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-[#7A746B]">
                          Price
                        </span>
                        <span className="font-serif text-2xl font-semibold text-[#171614]">
                          {config.currencySymbol}{product.price}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onOpenProductModal(product)}
                          className="px-3 py-2 text-xs text-[#625D54] hover:text-[#171614] border border-[#E8DFD0] hover:border-[#171614] transition-colors hidden sm:inline-flex cursor-pointer"
                          title="View product details"
                        >
                          Details
                        </button>

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#171614] hover:bg-[#2A2825] text-[#F7F3EB] text-xs font-medium uppercase tracking-wider border border-[#B99A61]/50 shadow-sm transition-all group/btn cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover/btn:scale-110 transition-transform" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
