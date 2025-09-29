// Page for user authentication.

"use client";

import { createClient } from "@/lib/supabase";
import { type SupabaseClient } from "@supabase/supabase-js";

const LoginPage = () => {
  const supabase: SupabaseClient = createClient();

  const handleSignInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={handleSignInWithGoogle}
        style={{
          padding: "10px 20px",
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default LoginPage;
