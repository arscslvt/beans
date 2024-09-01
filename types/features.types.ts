import { Database } from "./database.types";

export type DatabaseFeatures =
    & Partial<Database["public"]["Tables"]["features"]["Row"]>
    & {};
