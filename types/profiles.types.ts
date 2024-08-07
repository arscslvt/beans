import { Database } from "@/types/database.types";

export type DatabaseProfile =
  & Database["public"]["Tables"]["profiles"]["Row"]
  & {};
