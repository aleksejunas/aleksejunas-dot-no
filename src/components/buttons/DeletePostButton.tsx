"use client";

import { useRef, useState, useTransition } from "react";
import ActionButton from "./ActionButton";

export default function DeletePostButton({
  postId,
  action,
  useActionButtonStyle = true,
}: {
  postId: string;
  action: (FormData: FormData) => void;
  useActionButtonStyle?: boolean;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    if (!confirm("Er du sikker på at du vil slette dette innlegget?")) {
      e.preventDefault();
      return;
    }

    setIsLoading(true);
    startTransition(() => {
      // The form will submit normally, but we'll track the loading state
      // We'll reset the loading state when the action completes
    });
  };

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await action(formData);
        setIsLoading(false);
      }}
      onSubmit={handleSubmit}
      className="inline"
    >
      <input type="hidden" name="postId" value={postId} />
      {useActionButtonStyle ? (
        <ActionButton
          as="button"
          type="submit"
          label={isLoading ? "Sletter..." : "Slett"}
          variant="danger"
          disabled={isLoading || isPending}
        />
      ) : (
        <button 
          type="submit" 
          className="text-red-500 hover:underline ml-2"
          disabled={isLoading || isPending}
        >
          {isLoading ? "Sletter..." : "Slett"}
        </button>
      )}
    </form>
  );
}
