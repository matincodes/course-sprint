import { Briefcase, Wallet, Trophy, LucideIcon } from 'lucide-react';

interface CourseFeature {
  title: string;
  description: string;
  icon: string;
}

interface WhyThisCourseProps {
  features: CourseFeature[];
}

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  wallet: Wallet,
  trophy: Trophy,
};

export default function WhyThisCourse({ features }: WhyThisCourseProps) {
  return (
    <section className="py-20 px-4 bg-[#0e1525]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#F8FAFC] text-center mb-4">
          Why This Course?
        </h2>
        <p className="text-[#F8FAFC]/60 text-center mb-16 max-w-2xl mx-auto">
          Stop watching YouTube tutorials. Start simulating a real tech job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="bg-[#1a2332] border border-[#aa772d]/20 rounded-lg p-8 hover:border-[#aa772d]/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="bg-[#aa772d]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#aa772d]/20 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-[#aa772d]" />}
                </div>
                <h3 className="font-mono text-xl font-bold text-[#F8FAFC] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#F8FAFC]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
