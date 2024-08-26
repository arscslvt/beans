import React from "react";

import { useNote } from "@/hooks/useNote";
import { TiptapCollabProvider } from "@hocuspocus/provider";
import { Content, useCurrentEditor } from "@tiptap/react";
import * as Y from "yjs";

interface CollaborateProps {
  content?: Content;
  doc: Y.Doc;
}

export default function Collaborate({ content, doc }: CollaborateProps) {
  const { note } = useNote();
  const { editor } = useCurrentEditor();

  React.useEffect(() => {
    if (!note) return;
    const docname = `note-${note.id}-${note.created_by}`;
    console.log("Document name: ", docname);

    const provider = new TiptapCollabProvider({
      name: `note-${note.id}-${note.created_by}`, // Unique document identifier for syncing. This is your document name.
      appId: process.env.NEXT_PUBLIC_TIPTAP_APP_ID ?? "", // Your Cloud Dashboard AppID or `baseURL` for on-premises
      token: process.env.NEXT_PUBLIC_TIPTAP_JWT ?? "notoken", // Your JWT token
      document: doc,

      onConnect() {
        console.log("Connected to the collaboration server.");
      },
      onSynced() {
        if (!doc.getMap("config").get("initialContentLoaded") && editor) {
          doc.getMap("config").set("initialContentLoaded", true);
        }
      },
    });

    provider.on("synced", () => {
      console.log("Document synced with other peers.");
    });
  }, [note]);

  return <></>;
}
