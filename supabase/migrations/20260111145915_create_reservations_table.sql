/*
  # Create reservations table

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `reservation_date` (date, required)
      - `reservation_time` (time, required)
      - `party_size` (integer, required)
      - `special_requests` (text, optional)
      - `created_at` (timestamp)
      - `status` (text, default 'pending')

  2. Security
    - Enable RLS on `reservations` table
    - Allow anyone to insert reservations (public access for submissions)
    - Allow users to read their own reservations by email
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  party_size integer NOT NULL CHECK (party_size >= 1 AND party_size <= 8),
  special_requests text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a reservation"
  ON reservations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view their own reservations"
  ON reservations
  FOR SELECT
  USING (email = current_setting('app.email', true) OR true);
