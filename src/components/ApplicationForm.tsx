import { useState, FormEvent } from 'react';
import { X, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseSlug: string;
  courseTitle: string;
}

export default function ApplicationForm({ isOpen, onClose, courseSlug, courseTitle }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    experienceLevel: '',
    whyJoin: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('cohort_applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          whatsapp_number: formData.whatsappNumber,
          experience_level: formData.experienceLevel,
          reason: formData.whyJoin,
          course_slug: courseSlug,
          status: 'pending',
        });

      if (submitError) throw submitError;

      window.location.href = '/application-success';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit application');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1a2332] border border-[#aa772d]/30 rounded-lg max-w-2xl w-full my-8 mt-32 shadow-lg">
        <div className="flex items-center justify-between p-6 border-b border-[#aa772d]/20">
          <div>
            <h2 className="font-mono text-2xl font-bold text-[#F8FAFC]">
              Apply Now
            </h2>
            <p className="text-[#F8FAFC]/60 text-sm mt-1">
              {courseTitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#F8FAFC]/60 hover:text-[#F8FAFC] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="fullName" className="block text-[#F8FAFC] font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#0e1525] border border-[#aa772d]/20 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#aa772d] transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#F8FAFC] font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0e1525] border border-[#aa772d]/20 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#aa772d] transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="whatsappNumber" className="block text-[#F8FAFC] font-medium mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              required
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="w-full bg-[#0e1525] border border-[#aa772d]/20 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#aa772d] transition-colors"
              placeholder="+234 800 000 0000"
            />
          </div>

          <div>
            <label htmlFor="experienceLevel" className="block text-[#F8FAFC] font-medium mb-2">
              Experience Level
            </label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              required
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full bg-[#0e1525] border border-[#aa772d]/20 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#aa772d] transition-colors"
            >
              <option value="">Select your level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Pro">Pro</option>
            </select>
          </div>

          <div>
            <label htmlFor="whyJoin" className="block text-[#F8FAFC] font-medium mb-2">
              Why do you want to join this cohort?
            </label>
            <textarea
              id="whyJoin"
              name="whyJoin"
              required
              rows={4}
              value={formData.whyJoin}
              onChange={handleChange}
              className="w-full bg-[#0e1525] border border-[#aa772d]/20 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#aa772d] transition-colors resize-none"
              placeholder="Tell us about your goals and what you hope to achieve..."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#0e1525] border border-[#aa772d]/20 hover:border-[#aa772d]/40 text-[#F8FAFC] font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#aa772d] hover:bg-[#aa772d]/90 text-[#0e1525] font-bold px-6 py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
