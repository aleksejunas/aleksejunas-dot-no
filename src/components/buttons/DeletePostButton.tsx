"use client";

import { useRef } from "react";
// import { useTransition } from "react";

export default function DeletePostButton({
  postId,
  action,
}: {
  postId: string;
  action: (FormData: FormData) => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={action}
      onSubmit={(e) => {
        if (!confirm("Er du sikker på at du vil slette dette innlegget?")) {
          e.preventDefault();
        }
      }}
      className="inline"
    >
      <input type="hidden" name="postId" value={postId} />
      <button type="submit" className="text-red-500 hover:underline ml-2">
        Slett
      </button>
    </form>
  );
}
