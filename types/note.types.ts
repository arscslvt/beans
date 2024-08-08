import { Database } from "@/types/database.types";
import { DatabaseProfile } from "./profiles.types";

export type DatabaseNote = Database["public"]["Tables"]["notes"]["Row"] & {
  isMine?: boolean;
  sharedBy?: DatabaseProfile;
};
