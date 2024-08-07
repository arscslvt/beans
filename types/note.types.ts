import { Database } from "@/types/database.types";

export type DatabaseNote = Database["public"]["Tables"]["notes"]["Row"] & {
  isMine?: boolean;
};
