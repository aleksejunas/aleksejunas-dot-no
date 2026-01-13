import { createClient } from "@/lib/supabase/server";

const AuthStatusDot = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  const isAuthenticated = Boolean(data?.user) && !error;
  const label = isAuthenticated ? "Signed in" : "Signed out";

  return (
    <div
      role="status"
      aria-label={`Admin ${label}`}
      title={`Admin ${label}`}
      className="flex items-center"
    >
      <span
        className={`inline-block h-3 w-3 rounded-full ring-2 ring-black/10 dark:ring-white/20 ${
          isAuthenticated ? "bg-emerald-500" : "bg-rose-500"
        }`}
      />
    </div>
  );
};

export default AuthStatusDot;
