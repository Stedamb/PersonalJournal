import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://nvhvuframoqfnlcmjvql.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52aHZ1ZnJhbW9xZm5sY21qdnFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0MTE5NzYsImV4cCI6MjA0MTk4Nzk3Nn0._HHonNn6L2MBTFgogoPL0T27Z5VLH8lOF6_dD2TKi6Q';

export const supabase = createClient(supabaseUrl, supabaseKey);
        