import React, { useState } from "react";
import { X, Check, RotateCcw, Sparkles, MessageCircle, Store, Phone, Clock, MapPin } from "lucide-react";
import { ShopConfig, initialConfig } from "../data/config";

interface DemoCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ShopConfig;
  onUpdateConfig: (newConfig: ShopConfig) => void;
}

export const DemoCustomizerModal: React.FC<DemoCustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
}) => {
  const [formData, setFormData] = useState<ShopConfig>({ ...config });
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 700);
  };

  const handleReset = () => {
    setFormData({ ...initialConfig });
    onUpdateConfig({ ...initialConfig });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#171614]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-white border border-[#E8DFD0] max-w-xl w-full p-6 sm:p-8 shadow-2xl z-10 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E8DFD0] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#F7F3EB] text-[#B99A61] flex items-center justify-center rounded">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#171614] font-normal">
                Boutique Customiser
              </h3>
              <p className="text-xs text-[#7A746B]">
                Test your own shop details live on this demonstration website
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#7A746B] hover:text-[#171614] rounded-full hover:bg-[#F7F3EB]"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informational Callout */}
        <div className="p-3 bg-[#FAF8F4] border-l-2 border-[#B99A61] text-xs text-[#625D54]">
          <strong className="text-[#171614]">For the Shop Owner:</strong> Put in your real WhatsApp number below to test how easily customers will message your phone directly when clicking any product!
        </div>

        {/* Customization Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614] mb-1.5 flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-[#B99A61]" />
              <span>Shop / Brand Name</span>
            </label>
            <input
              type="text"
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              className="w-full bg-[#FAF8F4] text-xs text-[#171614] px-3.5 py-2.5 border border-[#E8DFD0] focus:border-[#B99A61] focus:outline-none"
              placeholder="e.g. OUD & AMBER or Your Shop Name"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614] mb-1.5 flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Number (Digits)</span>
              </label>
              <input
                type="text"
                value={formData.whatsappRaw}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    whatsappRaw: e.target.value.replace(/[^0-9]/g, ""),
                    whatsappDisplay: `+${e.target.value.replace(/[^0-9]/g, "")}`,
                  })
                }
                className="w-full bg-[#FAF8F4] text-xs text-[#171614] px-3.5 py-2.5 border border-[#E8DFD0] focus:border-[#B99A61] focus:outline-none"
                placeholder="e.g. 919876543210"
                required
              />
              <span className="text-[10px] text-[#7A746B] mt-1 block">
                Include country code (91 for India)
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614] mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#B99A61]" />
                <span>Phone Call Display</span>
              </label>
              <input
                type="text"
                value={formData.phoneDisplay}
                onChange={(e) => setFormData({ ...formData, phoneDisplay: e.target.value })}
                className="w-full bg-[#FAF8F4] text-xs text-[#171614] px-3.5 py-2.5 border border-[#E8DFD0] focus:border-[#B99A61] focus:outline-none"
                placeholder="e.g. +91 98765 43210"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614] mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B99A61]" />
              <span>Shop Address in Proddatur</span>
            </label>
            <textarea
              rows={2}
              value={formData.fullAddress}
              onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
              className="w-full bg-[#FAF8F4] text-xs text-[#171614] px-3.5 py-2 border border-[#E8DFD0] focus:border-[#B99A61] focus:outline-none resize-none"
              placeholder="Gandhi Road, Near Clock Tower, Proddatur, Andhra Pradesh"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171614] mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B99A61]" />
              <span>Opening Hours</span>
            </label>
            <input
              type="text"
              value={formData.openingHours}
              onChange={(e) => setFormData({ ...formData, openingHours: e.target.value })}
              className="w-full bg-[#FAF8F4] text-xs text-[#171614] px-3.5 py-2.5 border border-[#E8DFD0] focus:border-[#B99A61] focus:outline-none"
              placeholder="Monday to Sunday: 10:00 AM – 9:30 PM"
              required
            />
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-[#E8DFD0] flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#7A746B] hover:text-[#171614] font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Default Demo</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#625D54] hover:text-[#171614] border border-[#E8DFD0]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#171614] hover:bg-[#B99A61] text-[#F7F3EB] hover:text-[#171614] text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                {saveSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Applied!</span>
                  </>
                ) : (
                  <span>Apply to Website</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
