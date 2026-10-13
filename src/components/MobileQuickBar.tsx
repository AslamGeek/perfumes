import React from "react";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { ShopConfig, getGeneralEnquiryUrl } from "../data/config";

interface MobileQuickBarProps {
  config: ShopConfig;
  onBrowseCatalogue: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  config,
  onBrowseCatalogue,
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#171614]/95 backdrop-blur-md border-t border-[#332F2A] px-4 py-2.5 sm:hidden shadow-2xl flex items-center gap-3">
      <button
        onClick={onBrowseCatalogue}
        className="flex-1 py-3 px-3 bg-[#252320] text-[#F7F3EB] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 border border-[#3D3833]"
      >
        <ShoppingBag className="w-4 h-4 text-[#B99A61]" />
        <span>Browse Attars</span>
      </button>

      <a
        href={getGeneralEnquiryUrl(config.whatsappRaw)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-3 bg-[#25D366] text-[#171614] text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp Chat</span>
      </a>
    </div>
  );
};
