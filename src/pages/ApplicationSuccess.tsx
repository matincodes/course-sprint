import { CheckCircle, ArrowRight, Mail, MessageCircle } from 'lucide-react';

export default function ApplicationSuccess() {
  return (
    <div className="min-h-screen bg-[#0e1525] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <div className="bg-[#1a2332] border border-[#aa772d]/30 rounded-lg p-8 md:p-12 text-center">
          <div className="bg-[#10B981]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-[#10B981]" />
          </div>

          <h1 className="font-mono text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4">
            Application Received!
          </h1>

          <p className="text-[#F8FAFC]/70 text-lg mb-8 leading-relaxed">
            Thank you for applying to ThynkCity's cohort program. We've received your application
            and our team will review it within 2-3 business days.
          </p>

          <div className="bg-[#0e1525] border border-[#aa772d]/20 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-mono text-xl font-bold text-[#F8FAFC] mb-4">
              What Happens Next?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-[#aa772d] text-[#0e1525] font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <p className="text-[#F8FAFC] font-medium">Application Review</p>
                  <p className="text-[#F8FAFC]/60 text-sm">
                    Our team reviews your application and motivation
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#aa772d] text-[#0e1525] font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <p className="text-[#F8FAFC] font-medium">Acceptance Email</p>
                  <p className="text-[#F8FAFC]/60 text-sm">
                    You'll receive an acceptance email with payment instructions
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#aa772d] text-[#0e1525] font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <p className="text-[#F8FAFC] font-medium">Payment & Discord Access</p>
                  <p className="text-[#F8FAFC]/60 text-sm">
                    Complete payment via Paystack and get instant Discord access
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-[#aa772d] text-[#0e1525] font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  4
                </span>
                <div>
                  <p className="text-[#F8FAFC] font-medium">Start Learning</p>
                  <p className="text-[#F8FAFC]/60 text-sm">
                    Join the cohort on February 14, 2026 and begin your journey
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:admin@thynkcity.com"
              className="inline-flex items-center justify-center gap-2 bg-[#0e1525] border border-[#aa772d]/30 hover:border-[#aa772d] text-[#F8FAFC] font-medium px-6 py-3 rounded-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#aa772d] hover:bg-[#aa772d]/90 text-[#0e1525] font-bold px-6 py-3 rounded-lg transition-all"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-[#aa772d]/20">
            <p className="text-[#F8FAFC]/60 text-sm mb-4">
              Questions? We're here to help!
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="mailto:admin@thynkcity.com"
                className="text-[#aa772d] hover:text-[#aa772d]/80 transition-colors text-sm"
              >
                admin@thynkcity.com
              </a>
              <span className="text-[#F8FAFC]/30">|</span>
              <a
                href="https://wa.me/2348000000000"
                className="text-[#aa772d] hover:text-[#aa772d]/80 transition-colors text-sm flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
