import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  startDate: string;
  maxStudents: number;
  onApplyClick: () => void;
}

export default function Hero({ title, subtitle, startDate, maxStudents, onApplyClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e1525] via-[#0e1525] to-[#1a2332] opacity-90" />

      <div className="absolute inset-0 opacity-5">
        <pre className="text-[#aa772d] text-xs md:text-sm font-mono leading-relaxed blur-sm">
{`def build_future():
    skills = ['Python', 'Flask', 'PostgreSQL']
    mindset = 'Growth'

    while True:
        learn()
        build()
        ship()

    return 'Job Ready Developer'`}
        </pre>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[#aa772d]/10 border border-[#aa772d]/30 rounded-full px-4 py-2 mb-8 animate-pulse">
          <div className="w-2 h-2 bg-[#aa772d] rounded-full animate-ping" />
          <span className="text-[#aa772d] text-sm font-medium">
            Limited to {maxStudents} spots
          </span>
        </div>

        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-[#F8FAFC] mb-6 leading-tight">
          {title}
        </h1>

        <p className="text-xl md:text-2xl text-[#F8FAFC]/80 mb-4 font-light">
          {subtitle}
        </p>

        <p className="text-lg md:text-xl text-[#aa772d] mb-12 font-medium">
          Cohort starts {startDate}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onApplyClick}
            className="group bg-[#aa772d] hover:bg-[#aa772d]/90 text-[#0e1525] font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#aa772d]/20 hover:shadow-[#aa772d]/40 hover:scale-105"
          >
            Apply for February Cohort
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-[#F8FAFC]/60 text-sm mt-8">
          Don't Just Learn Syntax. Build the Financial Infrastructure of Africa.
        </p>
      </div>
    </section>
  );
}
