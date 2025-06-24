import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://urjmjzcclfxkjxruiylk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyam1qemNjbGZ4a2p4cnVpeWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MzQxMTIsImV4cCI6MjA2NjMxMDExMn0.qLTA_QY6sXEElQYXPTlKyuOBz32jFxtqckyT6QkKng4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;