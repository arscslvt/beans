"use client";

import React from "react";
import { DatabaseProfile } from "@/types/profiles.types";
import { Input } from "@/components/ui/input";
import { searchProfiles } from "@/utils/profiles/get";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DatabaseNote } from "@/types/note.types";
import { shareNoteWith } from "@/utils/notes/share";
import { toast } from "sonner";
import { useDynamicDialog } from "@/components/dialogs/dynamic-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import User4 from "@/components/icons/user-4";
import Loader3 from "@/components/icons/loader-3";
import MagnifierFaceWorried1 from "@/components/icons/magnifier-face-worried-1";
import { Alert } from "@/components/ui/alert";

function ShareNoteDialog({ noteId }: { noteId: DatabaseNote["id"] }) {
  const [search, setSearch] = React.useState<string>("");
  const [profiles, setProfiles] = React.useState<DatabaseProfile[]>([]);
  const [fetching, setFetching] = React.useState<"idle" | "fetching" | "404">(
    "idle"
  );

  const { onOpenChange } = useDynamicDialog();

  const handleSearching = React.useCallback(async () => {
    const { profiles, errors } = await searchProfiles({ search });
    console.log("Profiles: ", profiles, errors);

    return profiles ?? [];
  }, [search]);

  const debounceDelay = 300;

  React.useEffect(() => {
    if (!search) {
      setProfiles([]);
      setFetching("idle");
      return;
    }

    const handler = setTimeout(() => {
      setFetching("fetching");
      handleSearching().then((profiles) => {
        setProfiles(profiles);
        setFetching("idle");

        if (!profiles.length) setFetching("404");
      });
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  React.useEffect(() => {
    if (!search) {
      setFetching("idle");
    }
  }, [search, profiles]);

  const handleSelectProfile = async (profile: DatabaseProfile) => {
    console.log("Selected Profile: ", profile);

    const { error } = await shareNoteWith({
      noteId,
      userId: profile.user_id,
    });

    if (error) {
      console.error("Error sharing note: ", error);
      return toast.error("Error sharing note. Please try again later.");
    }

    toast.success(`${profile.handle} can now view this note`, {
      description:
        "You can now collaborate with your friend to reach your goals together.",
    });

    onOpenChange?.(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={
          "flex items-center justify-center px-6 py-6 bg-gradient-to-t from-accent-darker/20 to-accent/10 border border-accent-darker/20 rounded-md shadow-lg shadow-accent/20 text-accent"
        }
      >
        <div className={"flex flex-col gap-3 justify-center"}>
          <h1 className={"font-bold text-2xl"}>Ready to collab?</h1>
          <h4 className={"font-medium text-sm text-accent/70"}>
            Collaborate with friends unlocks the power of teamwork and reaching
            your goals together 💪
          </h4>
        </div>
      </div>

      <div className={"relative"}>
        <Input
          placeholder={"Search for a friend in Beans"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoFocus
        />
        <Popover open={!!search}>
          <PopoverTrigger asChild>
            <div className={"h-0 w-full"} />
          </PopoverTrigger>
          <PopoverContent
            className={"p-1 rounded-lg"}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {fetching === "404" && (
              <div className="flex justify-center text-sm text-muted-foreground py-2">
                <div className="flex gap-1 items-center">
                  <span className="text-accent">
                    <MagnifierFaceWorried1 />
                  </span>
                  <span>I'm sorry, I couldn't find your friend</span>
                </div>
              </div>
            )}
            {fetching === "fetching" && (
              <div className="flex justify-center text-sm text-muted-foreground py-2">
                <div className="flex gap-1 items-center">
                  <span className="animate-spin text-accent">
                    <Loader3 />
                  </span>
                  <span>Searching your friend</span>
                </div>
              </div>
            )}
            {profiles.map((profile) => (
              <div
                key={profile.user_id}
                role="button"
                className={
                  "flex items-center px-3 py-2 w-full rounded-md justify-between hover:bg-accent/5 hover:text-accent"
                }
                onClick={() => handleSelectProfile(profile)}
              >
                {/*<img src={profile.avatar} alt={profile.full_name} className={"w-8 h-8 rounded-full"} />*/}
                <div className="text-sm">
                  <h1 className={"font-medium"}>{profile.full_name}</h1>
                  <h2 className={"text-muted-foreground"}>@{profile.handle}</h2>
                </div>

                <div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={profile.avatar ?? ""}
                      alt={profile.full_name ?? "User Avatar"}
                    />
                    <AvatarFallback className="!bg-accent/10 text-accent border border-accent/30">
                      {profile.full_name?.charAt(0) ?? <User4 />}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>

      <Alert variant={"default"} className="text-xs text-muted-foreground">
        <h4 className="font-medium text-accent">Rolling out</h4>
        This is a beta feature. You can share your notes with users having this
        feature enabled.
      </Alert>
    </div>
  );
}

export default ShareNoteDialog;
