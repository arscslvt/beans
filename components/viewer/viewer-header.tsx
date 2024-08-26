"use client";

import React, { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { DatabaseNote } from "@/types/note.types";

import loadash from "lodash";
import { saveNote } from "@/utils/notes/save";
import { MOBILE_MAX_WIDTH } from "@/components/screen-query";
import { useMediaQuery } from "usehooks-ts";
import { cx } from "class-variance-authority";
import Loader1 from "../icons/loader-1";

import { AnimatePresence, motion } from "framer-motion";

interface ViewerHeaderProps {
  title: string;
  description?: string;
  note: DatabaseNote;

  lastEdited?: Date;
  lastEditedBy?: string;
  isSaving?: boolean;
}

const ViewerHeader = ({
  note,
  title,
  description,
  lastEdited,
  isSaving,
}: ViewerHeaderProps) => {
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_MAX_WIDTH}px)`);

  const [_title, setTitle] = React.useState(title);

  const updateNote = async () => {
    const { data, error } = await saveNote(note.id, {
      title: _title,
    });

    if (error) {
      console.error("Error saving note: ", error);
      return toast.error("Error saving note.");
    }

    console.log("Updated note: ", data?.id, data?.title);
  };

  useEffect(() => {
    if (title.trim() === _title.trim()) return;

    const update = loadash.debounce(updateNote, 1000);

    const interval = setTimeout(() => {
      update();
    }, 800);

    return () => clearTimeout(interval);
  }, [_title]);

  return (
    <div className={cx("flex py-6 px-4 md:px-16")}>
      <div className={"flex-1"}>
        <div>
          <Textarea
            placeholder={"New Note"}
            className={
              "p-0 m-0 border-0 text-2xl font-bold resize-none shadow-none focus-visible:ring-0 rounded-none"
            }
            value={_title}
            onInput={(e) => {
              setTitle(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              // deny enter key
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
            autoSize
            defaultHeight={36}
            maxRows={2}
          />
          {description && <p className={"text-gray-500"}>description</p>}
        </div>

        <div className="flex items-center h-4">
          <AnimatePresence>
            {isSaving && (
              <motion.div
                initial={{ opacity: 0, x: -5, width: 0, paddingRight: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto", paddingRight: 6 }}
                exit={{ opacity: 0, x: -5, width: 0, paddingRight: 0 }}
                className="flex items-center justify-center text-accent w-4 h-4"
              >
                <div className="animate-spin">
                  <Loader1 width="12" height="12" strokewidth={2} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {lastEdited ? (
            <p className={"text-xs text-muted-foreground"}>
              Last edited by <span className={"font-semibold"}>you</span>
              {lastEdited
                ? ` — ${formatDistanceToNow(new Date(lastEdited), {
                    addSuffix: true,
                  })}`
                : ""}
            </p>
          ) : (
            <p className={"text-xs text-muted-foreground"}>Not saved yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewerHeader;
