import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

const AuthStatusDot = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const isAuthenticated = Boolean(data?.user) && !error;
  const label = isAuthenticated ? "Signed in" : "Signed out";
  const href = isAuthenticated ? "/admin/blog" : "/login";

  return (
    <Link
      href={href}
      aria-label={`Admin ${label} — gå til ${isAuthenticated ? "admin" : "innlogging"}`}
      title={`Admin ${label}`}
      className="flex items-center p-1 rounded-full transition hover:opacity-70"
    >
      <span
        className={`inline-block h-3 w-3 rounded-full ring-2 ring-black/10 dark:ring-white/20 ${
          isAuthenticated ? "bg-emerald-500" : "bg-rose-500"
        }`}
      />
    </Link>
  );
};

export default AuthStatusDot;
