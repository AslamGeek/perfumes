/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react";
import { initialConfig, ShopConfig } from "./data/config";
import { PRODUCTS, Product, CategoryType, FragranceFamily } from "./data/products";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CategorySection } from "./components/CategorySection";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BrandStory } from "./components/BrandStory";
import { Benefits } from "./components/Benefits";
import { WhatsAppCTA } from "./components/WhatsAppCTA";
import { Catalogue } from "./components/Catalogue";
import { StoreDetails } from "./components/StoreDetails";
import { Footer } from "./components/Footer";
import { ProductModal } from "./components/ProductModal";
import { DemoCustomizerModal } from "./components/DemoCustomizerModal";
import { MobileQuickBar } from "./components/MobileQuickBar";

export default function App() {
  const [config, setConfig] = useState<ShopConfig>(initialConfig);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDemoCustomizerOpen, setIsDemoCustomizerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | "All">("All");
  const [selectedFamily, setSelectedFamily] = useState<FragranceFamily | "All">("All");
  const [activeNavSection, setActiveNavSection] = useState("hero");

  // Section references for smooth scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const catalogueRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (sectionId: string, filterCategory?: string) => {
    setActiveNavSection(sectionId);
    if (filterCategory) {
      setSelectedCategory(filterCategory as CategoryType);
    }

    if (sectionId === "hero") {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "catalogue") {
      catalogueRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "about") {
      aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "contact") {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelectFromHome = (category: CategoryType) => {
    setSelectedCategory(category);
    catalogueRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFamilyFilterFromStory = (family: FragranceFamily) => {
    setSelectedFamily(family);
    catalogueRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EB] text-[#171614] selection:bg-[#B99A61]/30 selection:text-[#171614]">
      {/* Header */}
      <Header
        config={config}
        onNavigate={handleNavigate}
        activeSection={activeNavSection}
      />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <div ref={heroRef} id="hero-section">
          <Hero
            config={config}
            onExploreCollection={() => handleNavigate("catalogue")}
          />
        </div>

        {/* 4. Category Collection */}
        <CategorySection onSelectCategory={handleCategorySelectFromHome} />

        {/* 5. Featured Products (6 Required Sample Products) */}
        <FeaturedProducts
          products={PRODUCTS}
          config={config}
          onOpenProductModal={(p) => setSelectedProduct(p)}
          onViewAll={() => handleNavigate("catalogue")}
        />

        {/* 6. Brand Story */}
        <div ref={aboutRef} id="about-section">
          <BrandStory onSelectFamilyFilter={handleFamilyFilterFromStory} />
        </div>

        {/* 7. Benefits (4 Proposed Features for the Store Owner) */}
        <Benefits />

        {/* 8. WhatsApp Call to Action with Scent Picker */}
        <WhatsAppCTA config={config} />

        {/* Complete Product Catalogue with Search, Filters & Sorting */}
        <div ref={catalogueRef} id="catalogue-anchor">
          <Catalogue
            products={PRODUCTS}
            config={config}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedFamily={selectedFamily}
            onSelectFamily={setSelectedFamily}
            onOpenProductModal={(p) => setSelectedProduct(p)}
          />
        </div>

        {/* 9. Store Details & Proddatur Location */}
        <div ref={contactRef} id="contact-section">
          <StoreDetails
            config={config}
            onOpenDemoCustomizer={() => setIsDemoCustomizerOpen(true)}
          />
        </div>
      </main>

      {/* 10. Footer */}
      <Footer
        config={config}
        onNavigate={handleNavigate}
        onSelectCategory={handleCategorySelectFromHome}
      />

      {/* Sticky Mobile Quick Action Bar */}
      <MobileQuickBar
        config={config}
        onBrowseCatalogue={() => handleNavigate("catalogue")}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        config={config}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Shop Owner Demo Customizer Modal */}
      <DemoCustomizerModal
        isOpen={isDemoCustomizerOpen}
        onClose={() => setIsDemoCustomizerOpen(false)}
        config={config}
        onUpdateConfig={(newConf) => setConfig(newConf)}
      />
    </div>
  );
}
