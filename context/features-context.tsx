import { DatabaseFeatures } from "@/types/features.types";
import { getUnreadUpdates, getUpdates } from "@/utils/updates/get";
import React from "react";

import { delay } from "lodash";
import {
  DynamicDialog,
  DynamicDialogClose,
  DynamicDialogContent,
  DynamicDialogDescription,
  DynamicDialogFooter,
  DynamicDialogHeader,
  DynamicDialogTitle,
} from "@/components/dialogs/dynamic-dialog";
import { Badge } from "@/components/ui/badge";
import { markUpdateAsRead } from "@/utils/updates/save";

interface UpdatesProviderProps {
  children: React.ReactNode;
}

interface UpdatesContextProps {
  unreadUpdate: DatabaseFeatures | null;
}

const UpdatesContext = React.createContext<UpdatesContextProps>(
  {} as UpdatesContextProps
);

export default function FeaturesProvider({ children }: UpdatesProviderProps) {
  const [lastUpdate, setLastUpdate] = React.useState<DatabaseFeatures | null>(
    null
  );

  const [unreadUpdate, setUnreadUpdate] =
    React.useState<DatabaseFeatures | null>(null);

  React.useEffect(() => {
    retrieveLastUpdate();

    delay(() => {
      retrieveUpdates();
    }, 2000);
  }, []);

  const retrieveUpdates = async () => {
    const updates = await getUnreadUpdates();
    if (!!updates.length) {
      setUnreadUpdate(updates[0] ?? null);
    }
  };

  const retrieveLastUpdate = async () => {
    const { updates } = await getUpdates({ limit: 1 });
    if (!!updates?.length) {
      setLastUpdate(updates[0] ?? null);
    }
  };

  const markAsRead = async (id: DatabaseFeatures["id"]) => {
    const update = await markUpdateAsRead(id);

    if (update) {
      setUnreadUpdate(null);
    }
  };

  return (
    <UpdatesContext.Provider value={{ unreadUpdate }}>
      {unreadUpdate && (
        <DynamicDialog
          open
          onOpenChange={(open) => !open && markAsRead(unreadUpdate.id)}
        >
          <DynamicDialogContent>
            <DynamicDialogHeader>
              <div className="flex items-center gap-1 pb-2">
                <Badge variant={"default"}>Update</Badge>
                <Badge variant={"secondary"}>{unreadUpdate.version}</Badge>
              </div>
              {unreadUpdate.display_name && (
                <DynamicDialogTitle>
                  {unreadUpdate.display_name}
                </DynamicDialogTitle>
              )}
              {unreadUpdate.description && (
                <DynamicDialogDescription>
                  {unreadUpdate.description}
                </DynamicDialogDescription>
              )}
            </DynamicDialogHeader>
            <DynamicDialogFooter>
              <DynamicDialogClose variant={"default"}>
                Great!
              </DynamicDialogClose>
            </DynamicDialogFooter>
          </DynamicDialogContent>
        </DynamicDialog>
      )}
      {children}
    </UpdatesContext.Provider>
  );
}
