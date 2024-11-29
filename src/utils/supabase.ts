import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  // process.env.EXPO_PUBLIC_SUPABASE_URL || "",
  // process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "",
  "https://ujdhnyzpkrvljmfxkwhn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZGhueXpwa3J2bGptZnhrd2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NjU0MzEsImV4cCI6MjAzNDA0MTQzMX0.oSdhcW9Rouer1o0Gujard1Sg7g8nnUwI0BL358UbEJ8",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
