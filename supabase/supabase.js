import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jfwhcicxwmmlgjtotzln.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impmd2hjaWN4d21tbGdqdG90emxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk3MTM2NDAsImV4cCI6MTk3NTI4OTY0MH0.8vH7LngEyVa8NhTgAu1nwR7dBDz1simWeUpKglqVGNM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})