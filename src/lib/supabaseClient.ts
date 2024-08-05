import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Environment variables VITE_SUPABASE_URL and VITE_SUPABASE_API_KEY must be defined');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
