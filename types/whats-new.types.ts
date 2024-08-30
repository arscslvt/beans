import { Database } from "./database.types";

export type DatabaseWhatsNew =
    & Partial<Database["public"]["Tables"]["whats-new"]["Row"]>
    & {};
