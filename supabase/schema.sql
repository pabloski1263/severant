-- Create contacts table for Severant
CREATE TABLE IF NOT EXISTS contacts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nombre TEXT NOT NULL,
  correo TEXT NOT NULL,
  empresa TEXT,
  mensaje TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index
CREATE INDEX IF NOT EXISTS idx_contacts_correo ON contacts(correo);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow inserts from anon key (for the contact form)
CREATE POLICY "Allow anon inserts" ON contacts
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only service_role can read
CREATE POLICY "Allow service_read" ON contacts
  FOR SELECT TO service_role
  USING (true);
