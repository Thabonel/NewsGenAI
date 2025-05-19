import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type SocialPost = Database['public']['Tables']['social_posts']['Row'];

export function useSocialPosts(videoId?: string) {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (videoId) {
      fetchPosts();
    }
  }, [videoId]);

  const fetchPosts = async () => {
    if (!videoId) return;

    try {
      const { data, error } = await supabase
        .from('social_posts')
        .select('*')
        .eq('video_id', videoId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching social posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const createSocialPost = async (postData: Omit<SocialPost, 'id' | 'created_at' | 'status' | 'post_url'>) => {
    try {
      const { data, error } = await supabase
        .from('social_posts')
        .insert([postData])
        .select()
        .single();

      if (error) throw error;
      setPosts(prev => [data, ...prev]);
      return { data, error: null };
    } catch (error) {
      console.error('Error creating social post:', error);
      return { data: null, error };
    }
  };

  const updateSocialPost = async (id: string, updates: Partial<SocialPost>) => {
    try {
      const { data, error } = await supabase
        .from('social_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setPosts(prev => prev.map(post => post.id === id ? data : post));
      return { data, error: null };
    } catch (error) {
      console.error('Error updating social post:', error);
      return { data: null, error };
    }
  };

  return {
    posts,
    loading,
    createSocialPost,
    updateSocialPost,
    refreshPosts: fetchPosts,
  };
}