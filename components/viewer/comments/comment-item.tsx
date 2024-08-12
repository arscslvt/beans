import UserAvatar from "@/components/user/user_avatar";
import { DatabaseSourceComments } from "@/types/sourc_comments.types";
import React from "react";

export default function CommentItem({
  comment,
}: {
  comment: DatabaseSourceComments;
}) {
  return (
    <div className="bg-muted/40 rounded-md px-2 py-2 flex items-start gap-2 border">
      <div>
        <UserAvatar
          className="w-6 h-6"
          src="https://i.pravatar.cc/300"
          fallback={{
            display: "A",
          }}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex">
          <span className="text-xs leading-[0.8rem] text-muted-foreground">
            @anya
          </span>
        </div>
        <div className="text-sm">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
