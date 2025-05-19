import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Video = Database['public']['Tables']['videos']['Row'];

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVideos(data || []);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const createVideo = async (videoData: Omit<Video, 'id' | 'created_at' | 'status' | 'video_url'>) => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .insert([videoData])
        .select()
        .single();

      if (error) throw error;
      setVideos(prev => [data, ...prev]);
      return { data, error: null };
    } catch (error) {
      console.error('Error creating video:', error);
      return { data: null, error };
    }
  };

  const updateVideo = async (id: string, updates: Partial<Video>) => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setVideos(prev => prev.map(video => video.id === id ? data : video));
      return { data, error: null };
    } catch (error) {
      console.error('Error updating video:', error);
      return { data: null, error };
    }
  };

  return {
    videos,
    loading,
    createVideo,
    updateVideo,
    refreshVideos: fetchVideos,
  };
}