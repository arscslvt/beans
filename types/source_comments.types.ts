import { Database } from "./database.types";

export type DatabaseSourceComments =
    & Database["public"]["Tables"]["source_comments"]["Row"]
    & {};
