// Page for user authentication.

"use client";

import createClient from "@/lib/supabase";
import { type SupabaseClient } from "@supabase/supabase-js";

const LoginPage = () => {
  const supabase: SupabaseClient = createClient();
  // TODO: Implement the whole Google Signin flow since Supabase demands auth to post blog posts
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
        className="bg-yellow-500 hover:bg-white hover:text-yellow-500 hover:font-bold text-white font-bold py-2 px-4 rounded"
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
