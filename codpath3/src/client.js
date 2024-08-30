import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const URL = 'https://doeepfuqfpqervgcpqsn.supabase.co';
const API_KEY = process.env.APIKEY;

const supabase = createClient(URL, API_KEY);

export const supabase = createClient(URL, API_KEY);

