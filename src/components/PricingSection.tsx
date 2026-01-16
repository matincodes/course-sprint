import { Check } from 'lucide-react';

interface PricingSectionProps {
  price: string;
  monthlyPrice: string;
  onApplyClick: () => void;
}

export default function PricingSection({ price, monthlyPrice, onApplyClick }: PricingSectionProps) {
  return (
    <section className="py-20 px-4 bg-[#000000]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#F8FAFC] text-center mb-4">
          Investment Options
        </h2>
        <p className="text-[#F8FAFC]/60 text-center mb-12">
          Choose the payment plan that works for you
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a2332] border border-[#aa772d]/20 rounded-lg p-8 hover:border-[#aa772d]/40 transition-colors">
            <h3 className="font-mono text-xl font-bold text-[#F8FAFC] mb-2">
              Monthly Plan
            </h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-mono text-4xl font-bold text-[#aa772d]">
                {monthlyPrice}
              </span>
              <span className="text-[#F8FAFC]/60">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-[#F8FAFC]/80">Pay over 3 months</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-[#F8FAFC]/80">Easier on your budget</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-[#F8FAFC]/80">Total: {price}</span>
              </li>
            </ul>
            <button
              onClick={onApplyClick}
              className="w-full bg-[#0e1525] border border-[#aa772d]/30 hover:border-[#aa772d] text-[#F8FAFC] font-bold px-6 py-3 rounded-lg transition-all"
            >
              Apply Now
            </button>
          </div>

          <div className="bg-[#1a2332] border-2 border-[#aa772d] rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#aa772d] text-[#0e1525] font-bold text-xs px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>
            <h3 className="font-mono text-xl font-bold text-[#F8FAFC] mb-2">
              One-Time Payment
            </h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-mono text-4xl font-bold text-[#aa772d]">
                {price}
              </span>
              <span className="text-[#F8FAFC]/60">once</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-[#F8FAFC]/80">Full access immediately</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-[#F8FAFC]/80">Secure your spot</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-[#F8FAFC]/80">Focus on learning, not payments</span>
              </li>
            </ul>
            <button
              onClick={onApplyClick}
              className="w-full bg-[#aa772d] hover:bg-[#aa772d]/90 text-[#0e1525] font-bold px-6 py-3 rounded-lg transition-all hover:scale-105"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
