import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Week {
  week: number;
  title: string;
  topics: string[];
}

interface CurriculumAccordionProps {
  curriculum: Week[];
}

export default function CurriculumAccordion({ curriculum }: CurriculumAccordionProps) {
  const [expandedWeek, setExpandedWeek] = useState(1);

  return (
    <section className="py-20 px-4 bg-[#000000]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#F8FAFC] text-center mb-4">
          12-Week Curriculum
        </h2>
        <p className="text-[#F8FAFC]/60 text-center mb-12">
          From Python basics to production deployment. Every week builds on the last.
        </p>

        <div className="space-y-3">
          {curriculum.map((week) => (
            <div
              key={week.week}
              className="bg-[#1a2332] border border-[#aa772d]/20 rounded-lg overflow-hidden hover:border-[#aa772d]/40 transition-colors"
            >
              <button
                onClick={() => setExpandedWeek(expandedWeek === week.week ? 0 : week.week)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#aa772d]/10 font-mono text-[#aa772d] px-3 py-1 rounded text-sm font-bold">
                    Week {week.week}
                  </div>
                  <h3 className="font-mono text-lg md:text-xl font-semibold text-[#F8FAFC]">
                    {week.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#aa772d] transition-transform duration-300 ${
                    expandedWeek === week.week ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedWeek === week.week && (
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-[#aa772d]/20 pt-4">
                    <ul className="space-y-2">
                      {week.topics.map((topic, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[#F8FAFC]/80"
                        >
                          <span className="text-[#10B981] mt-1">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
