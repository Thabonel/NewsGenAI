/*
  # Initial schema setup for NewsGen AI

  1. New Tables
    - `users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
    - `videos`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key)
      - `title` (text)
      - `content` (text)
      - `length` (text)
      - `reporter_id` (text)
      - `pricing_tier` (text)
      - `status` (text)
      - `video_url` (text)
      - `created_at` (timestamp)
    - `social_posts`
      - `id` (uuid, primary key)
      - `video_id` (uuid, foreign key)
      - `platform` (text)
      - `post_url` (text)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create videos table
CREATE TABLE videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) NOT NULL,
  title text,
  content text NOT NULL,
  length text NOT NULL,
  reporter_id text NOT NULL,
  pricing_tier text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  video_url text,
  created_at timestamptz DEFAULT now()
);

-- Create social posts table
CREATE TABLE social_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_id uuid REFERENCES videos(id) NOT NULL,
  platform text NOT NULL,
  post_url text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can read own videos"
  ON videos
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own videos"
  ON videos
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can read own social posts"
  ON social_posts
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM videos
    WHERE videos.id = video_id
    AND videos.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert own social posts"
  ON social_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM videos
    WHERE videos.id = video_id
    AND videos.user_id = auth.uid()
  ));