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
import { useResponsiveDialog } from "@/components/dialogs/responsive-dialog";

function ShareNoteDialog({ noteId }: { noteId: DatabaseNote["id"] }) {
  const [search, setSearch] = React.useState<string>("");
  const [profiles, setProfiles] = React.useState<DatabaseProfile[]>([]);

  const { onOpenChange } = useResponsiveDialog();

  const handleSearching = React.useCallback(async () => {
    const { profiles, errors } = await searchProfiles({ search });
    console.log("Profiles: ", profiles, errors);

    return profiles ?? [];
  }, [search]);

  const debounceDelay = 300;

  React.useEffect(() => {
    if (!search) {
      setProfiles([]);
      return;
    }

    const handler = setTimeout(() => {
      handleSearching().then((profiles) => {
        setProfiles(profiles);
      });
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

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
          "flex items-center justify-center px-6 py-6 bg-gradient-to-t from-accent-darker to-accent border border-accent-darker rounded-md shadow-lg text-accent-foreground"
        }
      >
        <div className={"flex flex-col gap-3 justify-center text-center"}>
          <h1 className={"font-bold text-2xl"}>Share Your Insights! 🍻</h1>
          <h4 className={"font-medium text-sm text-accent-foreground/70"}>
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
        <Popover open={!!profiles.length}>
          <PopoverTrigger asChild>
            <div className={"h-0 w-full"} />
          </PopoverTrigger>
          <PopoverContent className={"p-2"}>
            {profiles.map((profile) => (
              <Button
                autoFocus={false}
                key={profile.user_id}
                variant={"ghost"}
                className={"w-full justify-start text-left !h-max"}
                onClick={() => handleSelectProfile(profile)}
              >
                {/*<img src={profile.avatar} alt={profile.full_name} className={"w-8 h-8 rounded-full"} />*/}
                <div>
                  <h1 className={"font-medium"}>{profile.full_name}</h1>
                  <h2 className={"text-muted-foreground"}>{profile.handle}</h2>
                </div>
              </Button>
            ))}
          </PopoverContent>
        </Popover>
      </div>

      <div className="text-xs text-muted-foreground text-center">
        <p>
          This is a beta feature. You can share your notes with users with this
          feature enabled.
        </p>
      </div>
    </div>
  );
}

export default ShareNoteDialog;
