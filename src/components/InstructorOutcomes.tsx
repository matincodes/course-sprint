import { CheckCircle, TrendingUp } from 'lucide-react';

interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface InstructorOutcomesProps {
  instructor: Instructor;
  outcomes: string[];
  salaryRange: {
    min: string;
    max: string;
  };
}

export default function InstructorOutcomes({ instructor, outcomes, salaryRange }: InstructorOutcomesProps) {
  return (
    <section className="py-20 px-4 bg-[#0e1525]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-48 h-48 rounded-lg object-cover mx-auto lg:mx-0 mb-6 border-2 border-[#aa772d]/30"
            />
            <h3 className="font-mono text-2xl font-bold text-[#F8FAFC] mb-2">
              {instructor.name}
            </h3>
            <p className="text-[#aa772d] mb-4">{instructor.title}</p>
            <p className="text-[#F8FAFC]/70 leading-relaxed">
              {instructor.bio}
            </p>
          </div>

          <div className="bg-[#1a2332] border border-[#aa772d]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-[#10B981]" />
              <h3 className="font-mono text-xl font-bold text-[#F8FAFC]">
                Salary Expectations
              </h3>
            </div>
            <div className="bg-[#0e1525] rounded-lg p-6 border border-[#aa772d]/10">
              <p className="text-[#F8FAFC]/60 text-sm mb-2">
                Average Junior Backend Developer Salary in Nigeria:
              </p>
              <p className="font-mono text-3xl font-bold text-[#10B981]">
                {salaryRange.min} - {salaryRange.max}
              </p>
              <p className="text-[#F8FAFC]/50 text-sm mt-2">per month</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-[#F8FAFC] text-center mb-4">
            What You Will Be Able To Do
          </h2>
          <p className="text-[#F8FAFC]/60 text-center mb-12">
            By the end of this cohort, you will have the skills to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#1a2332] border border-[#aa772d]/20 rounded-lg p-5 hover:border-[#aa772d]/40 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <span className="text-[#F8FAFC]/80">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
