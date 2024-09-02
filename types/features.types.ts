import { Database, Json } from "./database.types";

interface WhatsNew {
    title: string;
    description: string;
}

export type DatabaseFeatures =
    & Omit<
        Partial<Database["public"]["Tables"]["features"]["Row"]>,
        "whats_new"
    >
    & {
        whats_new?: WhatsNew[] | null;
    };
