import { useState } from 'react';
import Hero from '../components/Hero';
import WhyThisCourse from '../components/WhyThisCourse';
import CurriculumAccordion from '../components/CurriculumAccordion';
import InstructorOutcomes from '../components/InstructorOutcomes';
import PricingSection from '../components/PricingSection';
import ApplicationForm from '../components/ApplicationForm';
import StickyMobileCTA from '../components/StickyMobileCTA';
import { CourseData } from '../config/courses';

interface CourseLandingProps {
  course: CourseData;
}

export default function CourseLanding({ course }: CourseLandingProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="bg-[#0e1525] min-h-screen">
      <Hero
        title={course.title}
        subtitle={course.subtitle}
        startDate={course.startDate}
        maxStudents={course.maxStudents}
        onApplyClick={() => setIsFormOpen(true)}
      />

      <WhyThisCourse features={course.whyThisCourse} />

      <CurriculumAccordion curriculum={course.curriculum} />

      <InstructorOutcomes
        instructor={course.instructor}
        outcomes={course.outcomes}
        salaryRange={course.salaryRange}
      />

      <PricingSection
        price={course.price}
        monthlyPrice={course.monthlyPrice}
        onApplyClick={() => setIsFormOpen(true)}
      />

      <StickyMobileCTA onApplyClick={() => setIsFormOpen(true)} />

      <ApplicationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        courseSlug={course.slug}
        courseTitle={course.title}
      />
    </div>
  );
}
