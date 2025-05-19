export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      videos: {
        Row: {
          id: string
          user_id: string
          title: string | null
          content: string
          length: string
          reporter_id: string
          pricing_tier: string
          status: string
          video_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title?: string | null
          content: string
          length: string
          reporter_id: string
          pricing_tier: string
          status?: string
          video_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string | null
          content?: string
          length?: string
          reporter_id?: string
          pricing_tier?: string
          status?: string
          video_url?: string | null
          created_at?: string
        }
      }
      social_posts: {
        Row: {
          id: string
          video_id: string
          platform: string
          post_url: string | null
          status: string
          created_at: string
        }
        Insert: {
          id?: string
          video_id: string
          platform: string
          post_url?: string | null
          status?: string
          created_at?: string
        }
        Update: {
          id?: string
          video_id?: string
          platform?: string
          post_url?: string | null
          status?: string
          created_at?: string
        }
      }
    }
  }
}