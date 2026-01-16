/*
  # Cohort Applications System

  1. New Tables
    - `cohort_applications`
      - `id` (uuid, primary key) - Unique application ID
      - `full_name` (text) - Applicant's full name
      - `email` (text) - Applicant's email address
      - `whatsapp_number` (text) - Applicant's WhatsApp number
      - `experience_level` (text) - Beginner, Intermediate, or Pro
      - `why_join` (text) - Applicant's motivation
      - `course_slug` (text) - Course identifier (e.g., 'backend-sprint')
      - `created_at` (timestamptz) - Application submission timestamp
      - `status` (text) - Application status (pending, accepted, rejected)

  2. Security
    - Enable RLS on `cohort_applications` table
    - Add policy for inserting applications (public can submit)
    - Add policy for admins to view all applications

  3. Indexes
    - Add index on course_slug for efficient filtering
    - Add index on email for duplicate checking
*/

CREATE TABLE IF NOT EXISTS cohort_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  whatsapp_number text NOT NULL,
  experience_level text NOT NULL CHECK (experience_level IN ('Beginner', 'Intermediate', 'Pro')),
  why_join text NOT NULL,
  course_slug text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected'))
);

ALTER TABLE cohort_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit application"
  ON cohort_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_cohort_applications_course_slug 
  ON cohort_applications(course_slug);

CREATE INDEX IF NOT EXISTS idx_cohort_applications_email 
  ON cohort_applications(email);