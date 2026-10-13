import React from "react";
import { MessageCircle, MapPin, Sparkles } from "lucide-react";
import { ShopConfig, getGeneralEnquiryUrl } from "../data/config";

interface AnnouncementBarProps {
  config: ShopConfig;
  onOpenDemoCustomizer?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  config,
  onOpenDemoCustomizer,
}) => {
  return (
    <aside aria-label="Store notice" className="bg-[#171614] text-[#E8DFD0] text-xs border-b border-[#2A2825]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Location & Slogan */}
        <div className="flex items-center gap-2 tracking-wide font-normal">
          <span className="flex items-center gap-1 text-[#B99A61]">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="font-medium">{config.locationCity}, {config.locationState}</span>
          </span>
          <span className="text-[#4A453F]" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-[#D8CEBD]/90">
            {config.announcementText}
          </span>
          <span className="sm:hidden text-[#D8CEBD]/90">
            Find your signature scent
          </span>
        </div>

        {/* Action side */}
        <div className="flex items-center gap-4 text-xs">
          {onOpenDemoCustomizer && (
            <button
              onClick={onOpenDemoCustomizer}
              className="flex items-center gap-1.5 text-[#B99A61] hover:text-[#CEB587] transition-colors focus:outline-none focus:ring-1 focus:ring-[#B99A61]"
              title="Preview with your boutique details"
            >
              <Sparkles className="w-3 h-3" />
              <span className="underline decoration-[#B99A61]/50 underline-offset-2 font-medium">Shop Owner Demo Mode</span>
            </button>
          )}

          <a
            href={getGeneralEnquiryUrl(config.whatsappRaw)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[#E8DFD0] hover:text-[#B99A61] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp: {config.whatsappDisplay}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
