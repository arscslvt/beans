import { DatabaseFeatures } from "@/types/features.types";
import { getFeatures, getUnreadUpdates, getUpdates } from "@/utils/updates/get";
import React from "react";

import { delay, uniq } from "lodash";
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

interface FeaturesContextProps {
  loading: boolean;
  features: DatabaseFeatures["feature_name"][];
  unreadUpdate: DatabaseFeatures | null;
}

export const FeaturesContext = React.createContext<FeaturesContextProps>(
  {} as FeaturesContextProps
);

export default function FeaturesProvider({ children }: UpdatesProviderProps) {
  const [features, setFeatures] = React.useState<
    DatabaseFeatures["feature_name"][]
  >([]);

  const [lastUpdate, setLastUpdate] = React.useState<DatabaseFeatures | null>(
    null
  );

  const [unreadUpdate, setUnreadUpdate] =
    React.useState<DatabaseFeatures | null>(null);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    retrieveLastUpdate();

    delay(() => {
      retrieveUpdates();
    }, 2000);
  }, []);

  React.useEffect(() => {
    retrieveFeatures();
  }, []);

  const retrieveFeatures = async () => {
    const features = await getFeatures();
    setFeatures(uniq(features));

    setLoading(false);
  };

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
    <FeaturesContext.Provider value={{ unreadUpdate, features, loading }}>
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

            {unreadUpdate?.whats_new && (
              <div className="flex flex-col overflow-y-auto overflow-clip max-h-40">
                <div className="sticky top-0 bg-gradient-to-b from-35% from-background to-transparent pb-3">
                  <h2 className="font-medium text-sm">What's new?</h2>
                </div>
                <div className="flex flex-col gap-2">
                  {unreadUpdate.whats_new.map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex flex-col flex-1">
                        <div className="flex">
                          <div className="w-1.5 h-full flex flex-col justify-center mr-1.5 mb-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                          </div>
                          <h4 className="text-sm font-medium">{item.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <DynamicDialogFooter>
              <DynamicDialogClose variant={"default"}>
                Great!
              </DynamicDialogClose>
            </DynamicDialogFooter>
          </DynamicDialogContent>
        </DynamicDialog>
      )}
      {children}
    </FeaturesContext.Provider>
  );
}
