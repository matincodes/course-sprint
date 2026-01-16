import { ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onApplyClick: () => void;
}

export default function StickyMobileCTA({ onApplyClick }: StickyMobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-[#0e1525] border-t-2 border-[#aa772d] p-4 shadow-lg">
        <button
          onClick={onApplyClick}
          className="w-full bg-[#aa772d] hover:bg-[#aa772d]/90 text-[#0e1525] font-bold text-lg px-6 py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          Apply for Cohort
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
