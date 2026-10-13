/**
 * Central configuration for OUD & AMBER
 * All store information, contact details, and demo settings are managed here.
 * Easy for a shop owner in Proddatur to customize with their actual contact info.
 */

export interface ShopConfig {
  brandName: string;
  tagline: string;
  subheading: string;
  locationCity: string;
  locationState: string;
  fullAddress: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappDisplay: string;
  whatsappRaw: string; // digits only with country code e.g. 919876543210
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  openingHours: string;
  googleMapsUrl: string;
  currencySymbol: string;
  announcementText: string;
  isDemoNoticeVisible: boolean;
}

export const initialConfig: ShopConfig = {
  brandName: "OUD & AMBER",
  tagline: "Discover Your Signature Scent",
  subheading: "Artisanal Attars, Pure Oud & Concentrated Fragrance Oils",
  locationCity: "Proddatur",
  locationState: "Andhra Pradesh",
  fullAddress: "Shop #14, Gandhi Road, Near Clock Tower Centre, Proddatur, YSR Kadapa District, Andhra Pradesh - 516360",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappDisplay: "+91 98765 43210",
  whatsappRaw: "919876543210", // Clean digits for WhatsApp API
  email: "contact@oudandamber-proddatur.com",
  instagramHandle: "@oudandamber.proddatur",
  instagramUrl: "https://instagram.com/oudandamber.proddatur",
  openingHours: "Monday to Sunday: 10:00 AM – 9:30 PM",
  googleMapsUrl: "https://maps.google.com/?q=Clock+Tower+Proddatur+Andhra+Pradesh",
  currencySymbol: "₹",
  announcementText: "Find your next signature scent · Pure concentrated perfume oils & artisanal gift boxes",
  isDemoNoticeVisible: true,
};

/**
 * Creates a valid, URL-encoded WhatsApp click-to-chat URL.
 * Does not make false claims of sending; directly launches WhatsApp with prefilled message.
 */
export function createWhatsAppUrl(
  phone: string,
  message: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate standard prefilled WhatsApp enquiry messages.
 */
export function getProductEnquiryUrl(
  productName: string,
  price: number | string,
  bottleSize?: string,
  phone: string = initialConfig.whatsappRaw
): string {
  const sizeText = bottleSize ? ` (${bottleSize})` : "";
  const msg = `Hello! I'm interested in ${productName}${sizeText} priced at ₹${price}. Could you share more details and availability?`;
  return createWhatsAppUrl(phone, msg);
}

export function getGeneralEnquiryUrl(
  phone: string = initialConfig.whatsappRaw
): string {
  const msg = "Hello! I'd like to know more about your attar and perfume collection.";
  return createWhatsAppUrl(phone, msg);
}

export function getScentPreferenceEnquiryUrl(
  preference: string,
  phone: string = initialConfig.whatsappRaw
): string {
  const msg = `Hello! I'm looking for ${preference.toLowerCase()} fragrances from OUD & AMBER. What would you recommend for me?`;
  return createWhatsAppUrl(phone, msg);
}

export function getCategoryEnquiryUrl(
  categoryName: string,
  phone: string = initialConfig.whatsappRaw
): string {
  const msg = `Hello! I would like to explore your ${categoryName} range. Please share your catalogue and recommendation.`;
  return createWhatsAppUrl(phone, msg);
}
