"use client";

import { useRef } from "react";
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
      {useActionButtonStyle ? (
        <ActionButton
          as="button"
          type="submit"
          label="Slett"
          variant="danger"
        />
      ) : (
        <button type="submit" className="text-red-500 hover:underline ml-2">
          Slett
        </button>
      )}
    </form>
  );
}
